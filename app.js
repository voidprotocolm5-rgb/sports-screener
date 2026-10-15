/**
 * Bet Board — multi-sport research dashboard.
 * Loads data.json (or window.BET_BOARD_DATA), filters by sport category,
 * renders cards by market, auto-refreshes every 60s.
 */
(function () {
  "use strict";

  var REFRESH_MS = 60000;
  var DATA_URL = "data.json";
  var MARKETS = [
    { key: "moneyline", id: "cards-moneyline", label: "moneyline" },
    { key: "spread", id: "cards-spread", label: "spread / total" },
    { key: "prop", id: "cards-prop", label: "prop" }
  ];
  var DEFAULT_SPORTS = [
    { id: "MLB", label: "Baseball", nav: "Baseball", short: "MLB" },
    { id: "NFL", label: "Football (NFL)", nav: "Football", short: "NFL" },
    { id: "CFB", label: "NCAA Football", nav: "NCAA Football", short: "CFB" },
    { id: "Soccer", label: "Soccer", nav: "Soccer", short: "Soccer" },
    { id: "NHL", label: "Hockey (NHL)", nav: "NHL", short: "NHL" },
    { id: "WNBA", label: "Basketball (WNBA)", nav: "WNBA", short: "WNBA" },
    { id: "TENNIS", label: "Tennis", nav: "Tennis", short: "Tennis" }
  ];
  // Category tabs always render from sports[] / DEFAULT_SPORTS — empty counts OK.

  var lastPayload = null;
  var lastFetchAt = null;
  var activeSport = null;
  var activeSub = null; // null | "lines" | "props" (Basketball only)

  function $(id) { return document.getElementById(id); }

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeMarket(type) {
    var t = String(type || "").toLowerCase().trim();
    if (t === "ml" || t === "moneyline") return "moneyline";
    if (t === "spreads" || t === "spread" || t === "total" || t === "totals") return "spread";
    if (t === "props" || t === "prop") return "prop";
    return t;
  }

  function normalizeSport(s) {
    var t = String(s || "").toUpperCase().trim();
    if (t === "BASEBALL" || t === "MLB") return "MLB";
    if (t === "FOOTBALL" || t === "NFL") return "NFL";
    if (t === "NCAA" || t === "NCAAF" || t === "CFB" || t === "COLLEGE FOOTBALL") return "CFB";
    if (t === "SOCCER" || t === "FOOTBALL (SOCCER)" || t === "MLS" || t === "EPL") return "Soccer";
    if (t === "HOCKEY" || t === "NHL") return "NHL";
    if (t === "WNBA" || t === "BASKETBALL (WNBA)") return "WNBA";
    if (t === "TENNIS" || t === "ATP" || t === "WTA") return "TENNIS";
    if (t === "UFC" || t === "MMA") return "UFC";
    return t || "MLB";
  }

  function parseUpdatedAt(iso) {
    if (!iso) return null;
    var d = new Date(iso);
    return isNaN(d.getTime()) ? null : d;
  }

  function formatAge(fromDate) {
    if (!fromDate) return "unknown";
    var sec = Math.max(0, Math.floor((Date.now() - fromDate.getTime()) / 1000));
    if (sec < 5) return "Updated just now";
    if (sec < 60) return "Updated " + sec + "s ago";
    var min = Math.floor(sec / 60);
    if (min < 60) return "Updated " + min + "m ago";
    var hr = Math.floor(min / 60);
    return "Updated " + hr + "h " + (min % 60) + "m ago";
  }

  function statusClass(status) {
    var s = String(status || "").toLowerCase();
    if (s === "live") return "status-live";
    if (s === "refreshing") return "status-refreshing";
    if (s === "gauge") return "status-gauge";
    if (s === "example") return "status-example";
    return "status-stale";
  }

  function statusLabel(status) {
    var s = String(status || "stale").toLowerCase();
    if (s === "example") return "EXAMPLE";
    if (s === "gauge") return "GAUGE";
    return s.toUpperCase();
  }

  function confidenceBarClass(n) {
    if (n >= 70) return "";
    if (n >= 50) return "mid";
    return "low";
  }

  function evClass(ev) {
    var s = String(ev || "").trim();
    if (s.indexOf("-") === 0) return "ev-neg";
    if (s.indexOf("+") !== -1 || /^\d/.test(s)) return "ev-pos";
    return "";
  }

  function sortBets(list) {
    return list.slice().sort(function (a, b) {
      var ra = Number(a.rank), rb = Number(b.rank);
      if (!isNaN(ra) && !isNaN(rb) && ra !== rb) return ra - rb;
      return (Number(b.confidence) || 0) - (Number(a.confidence) || 0);
    });
  }

  function hasExampleContent(data) {
    if (!data) return false;
    if (String(data.status || "").toLowerCase() === "example") return true;
    return (data.bets || []).some(function (b) { return b.example === true; });
  }

  function sourcesBooksFail(bet) {
    var s = bet.sources || {};
    return typeof s.booksAlign === "boolean" && s.booksAlign === false;
  }


  function fmtOdds(obs, nullLabel) {
    if (obs == null) return nullLabel || "pending";
    if (typeof obs !== "object") {
      var s = String(obs).trim();
      return s || (nullLabel || "pending");
    }
    if (obs.line != null && String(obs.line).trim() !== "") return String(obs.line);
    if (obs.american != null && obs.american !== "" && !isNaN(Number(obs.american))) {
      var a = Number(obs.american);
      return a > 0 ? "+" + a : String(a);
    }
    return nullLabel || "unobserved";
  }

  function clvTagClass(tag) {
    var t = String(tag || "").toLowerCase();
    if (t === "beat") return "clv-tag-beat";
    if (t === "match") return "clv-tag-match";
    if (t === "lose") return "clv-tag-lose";
    if (t === "pending") return "clv-tag-pending";
    if (t === "unobserved") return "clv-tag-unobserved";
    return "clv-tag-muted";
  }

  function truncateText(str, max) {
    var s = String(str == null ? "" : str).trim();
    if (!s) return "";
    if (s.length <= max) return s;
    return s.slice(0, Math.max(0, max - 1)).trim() + "…";
  }

  function renderClvBlock(clv) {
    if (!clv || typeof clv !== "object") return "";
    var tag = String(clv.tag || "pending").toLowerCase();
    var closeFallback = tag === "unobserved" ? "unobserved" : "pending";
    var openStr = fmtOdds(clv.open, "unobserved");
    var pubStr = fmtOdds(clv.atPublish, "unobserved");
    var closeStr = fmtOdds(clv.close, closeFallback);
    var centsHtml = "";
    if (typeof clv.clvCents === "number" && !isNaN(clv.clvCents)) {
      var c = clv.clvCents;
      var centsLabel = (c > 0 ? "+" : "") + String(c) + "¢";
      centsHtml = '<span class="clv-cents">' + escapeHtml(centsLabel) + "</span>";
    }
    return (
      '<div class="clv-block">' +
        '<span class="clv-label">CLV</span>' +
        '<span class="clv-path">' +
          '<span class="clv-leg" title="open">' + escapeHtml(openStr) + "</span>" +
          '<span class="clv-arrow" aria-hidden="true">→</span>' +
          '<span class="clv-leg" title="at publish">' + escapeHtml(pubStr) + "</span>" +
          '<span class="clv-arrow" aria-hidden="true">→</span>' +
          '<span class="clv-leg" title="close">' + escapeHtml(closeStr) + "</span>" +
        "</span>" +
        '<span class="clv-tag ' + clvTagClass(tag) + '">' + escapeHtml(tag) + "</span>" +
        centsHtml +
      "</div>"
    );
  }

  function renderMinEdgeChip(ledger) {
    if (!ledger || typeof ledger !== "object") return "";
    var me = ledger.minEdge;
    if (!me || typeof me !== "object") {
      if (typeof ledger.booksAlign === "boolean") {
        return (
          '<span class="source-chip minedge-chip ' +
          (ledger.booksAlign ? "minedge-pass" : "minedge-fail") + '">' +
          "MinEdge " + (ledger.booksAlign ? "align" : "no model") +
          "</span>"
        );
      }
      return "";
    }
    var path = String(me.path || "").toLowerCase();
    var align = ledger.booksAlign === true;
    var pass = path === "pass" || align;
    var detail = "";
    if (pass && typeof me.edgeVsBePct === "number" && !isNaN(me.edgeVsBePct)) {
      var e = me.edgeVsBePct;
      detail = (e > 0 ? "+" : "") + (Math.round(e * 100) / 100) + "pp";
    } else if (me.missReason) {
      detail = truncateText(me.missReason, 52);
    } else if (path === "fail") {
      detail = "fail";
    } else {
      detail = "unobserved";
    }
    var label = pass ? "MinEdge pass" : "MinEdge miss";
    return (
      '<span class="source-chip minedge-chip ' +
      (pass ? "minedge-pass" : "minedge-fail") +
      '" title="' + escapeHtml(me.missReason || detail) + '">' +
      escapeHtml(label) +
      (detail ? " · " + escapeHtml(detail) : "") +
      "</span>"
    );
  }

  function renderProcessBar(data) {
    var el = $("process-bar");
    if (!el) return;
    // CLV/MinEdge process bar disabled per Atlas 10/13 8:52 PM CT; set true to restore.
    var CLV_BAR_ENABLED = true; // re-enabled per Atlas 10/15 12:53 PM CT
    if (!CLV_BAR_ENABLED) { el.hidden = true; el.innerHTML = ""; return; }
    var perfT = data && data.performance && data.performance.tally;
    if (perfT && perfT.all) {
      var tg = perfT.clvTags || {}; var A = perfT.all;
      var scored = (tg.beat || 0) + (tg.match || 0) + (tg.lose || 0);
      var mep = data.minEdgeProcess;
      el.hidden = false; el.className = "process-bar";
      el.innerHTML = '<div class="process-section process-clv"><span class="process-title">CLV · graded main cards</span>' +
        '<span class="process-stat clv-tag-beat">beat <b>' + (tg.beat || 0) + "</b></span>" +
        '<span class="process-stat">match <b>' + (tg.match || 0) + "</b></span>" +
        '<span class="process-stat clv-tag-lose">lose <b>' + (tg.lose || 0) + "</b></span>" +
        '<span class="process-stat">no close <b>' + (tg.unobserved || 0) + "</b></span>" +
        '<span class="process-stat">beat rate <b>' + (scored ? Math.round(100 * (tg.beat || 0) / scored) + "% (" + (tg.beat || 0) + "/" + scored + ")" : "n/a") + "</b></span>" +
        (A.avgClvPp != null ? '<span class="process-stat">avg <b>' + (A.avgClvPp > 0 ? "+" : "") + A.avgClvPp + "pp</b> (n=" + A.clvN + ")</span>" : "") +
        (A.avgClvPts != null ? '<span class="process-stat">avg <b>' + (A.avgClvPts > 0 ? "+" : "") + A.avgClvPts + " pts</b> (n=" + A.clvPtsN + ")</span>" : "") +
        "</div>" +
        (mep ? '<div class="process-section process-minedge"><span class="process-title">MinEdge (this slate)</span><span class="process-stat minedge-pass">passed <b>' + escapeHtml(mep.passed) + '</b></span><span class="process-stat minedge-fail">failed <b>' + escapeHtml(mep.failed) + "</b></span></div>" : "");
      return;
    }
    var clv = data && data.clvProcess;
    var me = data && data.minEdgeProcess;
    var hasClv = clv && typeof clv === "object";
    var hasMe = me && typeof me === "object";
    if (!hasClv && !hasMe) {
      el.hidden = false;
      el.innerHTML = '<p class="process-empty">no process data</p>';
      el.className = "process-bar is-empty";
      return;
    }
    el.hidden = false;
    el.className = "process-bar";
    var parts = [];
    if (hasClv) {
      parts.push(
        '<div class="process-section process-clv">' +
          '<span class="process-title">CLV</span>' +
          '<span class="process-stat">scored <b>' + escapeHtml(clv.scored) + "</b></span>" +
          '<span class="process-stat clv-tag-beat">beat <b>' + escapeHtml(clv.beat) + "</b></span>" +
          '<span class="process-stat clv-tag-match">match <b>' + escapeHtml(clv.match) + "</b></span>" +
          '<span class="process-stat clv-tag-lose">lose <b>' + escapeHtml(clv.lose) + "</b></span>" +
          '<span class="process-stat clv-tag-pending">pending <b>' + escapeHtml(clv.pending) + "</b></span>" +
          '<span class="process-stat clv-tag-unobserved">unobserved <b>' + escapeHtml(clv.unobserved) + "</b></span>" +
          '<span class="process-stat">beatRate <b>' + escapeHtml(clv.beatRate != null ? clv.beatRate : "n/a") + "</b></span>" +
        "</div>"
      );
    } else {
      parts.push('<div class="process-section process-muted">CLV · no process data</div>');
    }
    if (hasMe) {
      parts.push(
        '<div class="process-section process-minedge">' +
          '<span class="process-title">MinEdge</span>' +
          '<span class="process-stat minedge-pass">passed <b>' + escapeHtml(me.passed) + "</b></span>" +
          '<span class="process-stat minedge-fail">failed <b>' + escapeHtml(me.failed) + "</b></span>" +
          '<span class="process-stat clv-tag-unobserved">unobservedModel <b>' + escapeHtml(me.unobservedModel) + "</b></span>" +
        "</div>"
      );
    } else {
      parts.push('<div class="process-section process-muted">MinEdge · no process data</div>');
    }
    el.innerHTML = parts.join("");
  }


  function sportsList(data) {
    if (data && Array.isArray(data.sports) && data.sports.length) return data.sports;
    return DEFAULT_SPORTS;
  }

  function betsForSport(bets, sportId) {
    var want = normalizeSport(sportId);
    return (bets || []).filter(function (b) {
      var s = b.sport != null ? normalizeSport(b.sport) : normalizeSport((lastPayload && lastPayload.sport) || "MLB");
      // Legacy single-sport payloads without per-bet sport
      if (b.sport == null && lastPayload && String(lastPayload.sport || "").toLowerCase() === "multi") {
        return false;
      }
      return s === want;
    });
  }

  function countBySport(bets, sportId) {
    return betsForSport(bets, sportId).length;
  }

  var SUB_SPORTS = { NBA: true, NHL: true, UFC: true, NFL: true };
  function hasSub(sp) { return !!SUB_SPORTS[String(sp || "").toUpperCase()]; }

  function parseHash() {
    var h = (location.hash || "").replace(/^#/, "").trim();
    if (!h) return { sport: null, sub: null };
    var raw = decodeURIComponent(h).trim();
    var u = raw.toUpperCase().replace(/_/g, "-");
    if (u === "NBA-PROPS" || u === "NBAPROPS") {
      return { sport: "NBA", sub: "props" };
    }
    if (u === "NBA-LINES" || u === "NBALINES" || u === "NBA-GAMELINES") {
      return { sport: "NBA", sub: "lines" };
    }
    if (u === "NBA") {
      return { sport: "NBA", sub: "lines" };
    }
    if (u === "NHL-PROPS" || u === "NHLPROPS") return { sport: "NHL", sub: "props" };
    if (u === "UFC-PROPS" || u === "UFCPROPS") return { sport: "UFC", sub: "props" };
    if (u === "UFC-FIGHTS" || u === "UFC") return { sport: "UFC", sub: "lines" };
    if (u === "NHL-LINES" || u === "NHL") return { sport: "NHL", sub: "lines" };
    if (u === "NFL-PROPS" || u === "NFLPROPS") return { sport: "NFL", sub: "props" };
    if (u === "NFL-LINES" || u === "NFL") return { sport: "NFL", sub: "lines" };
    return { sport: normalizeSport(raw), sub: null };
  }

  function hashSport() {
    return parseHash().sport;
  }

  function setHash(sportId, sub) {
    if (pageRoute()) return;
    var token = sportId;
    var nsp = normalizeSport(sportId);
    if (hasSub(nsp)) {
      token = sub === "props" ? nsp + "-PROPS" : nsp;
    }
    var next = "#" + encodeURIComponent(token);
    if (location.hash !== next) {
      try {
        history.replaceState(null, "", next);
      } catch (e) {
        location.hash = token;
      }
    }
  }

  function isPropBet(b) {
    var m = normalizeMarket(b && b.marketType);
    if (m === "prop") return true;
    if (b && (b.subcategory === "playerProp" || b.playerProp === true)) return true;
    return false;
  }

  function isGameLineBet(b) {
    return !isPropBet(b);
  }

  function filterBySub(bets, sportId, sub) {
    var list = betsForSport(bets, sportId);
    if (!hasSub(normalizeSport(sportId)) || !sub) return list;
    if (sub === "props") return list.filter(isPropBet);
    if (sub === "lines") return list.filter(isGameLineBet);
    return list;
  }

  function resolveActiveSport(data) {
    var sports = sportsList(data);
    var ids = sports.map(function (s) { return normalizeSport(s.id); });
    var parsed = parseHash();
    if (parsed.sport && ids.indexOf(parsed.sport) !== -1) {
      activeSub = hasSub(parsed.sport) ? (parsed.sub || "lines") : null;
      return parsed.sport;
    }
    if (activeSport && ids.indexOf(normalizeSport(activeSport)) !== -1) {
      var s = normalizeSport(activeSport);
      if (hasSub(s) && !activeSub) activeSub = "lines";
      if (!hasSub(s)) activeSub = null;
      return s;
    }
    var def = data && data.defaultSport ? normalizeSport(data.defaultSport) : null;
    if (def && ids.indexOf(def) !== -1) {
      activeSub = hasSub(def) ? "lines" : null;
      return def;
    }
    var bets = data && data.bets ? data.bets : [];
    for (var i = 0; i < ids.length; i++) {
      if (countBySport(bets, ids[i]) > 0) {
        activeSub = hasSub(ids[i]) ? "lines" : null;
        return ids[i];
      }
    }
    activeSub = null;
    return ids[0] || "MLB";
  }

  function renderSportNav(data) {
    var nav = $("sport-nav");
    if (!nav) return;
    var sports = sportsList(data);
    var bets = data.bets || [];
    // Always render all category tabs (even at count 0) with full labels.
    var html = sports.map(function (s) {
      var id = normalizeSport(s.id);
      var selected = id === activeSport;
      var count = countBySport(bets, id);
      // Prefer human nav labels: Baseball / Football / NCAA Football / Soccer
      var name = escapeHtml(s.nav || s.label || s.short || id);
      return (
        '<button type="button" class="sport-tab" role="tab" data-sport="' + escapeHtml(id) + '"' +
        ' aria-selected="' + (selected ? "true" : "false") + '"' +
        ' aria-controls="board-content"' +
        ' id="tab-' + escapeHtml(id) + '" title="' + name + ' (' + count + ')">' +
        '<span class="tab-name">' + name + "</span>" +
        '<span class="tab-count">' + count + "</span>" +
        "</button>"
      );
    }).join("");
    nav.innerHTML = html;
  }

  function renderSubNav(data) {
    var sub = $("sub-nav");
    if (!sub) return;
    var show = hasSub(activeSport);
    if (!show) {
      sub.hidden = true;
      sub.innerHTML = "";
      return;
    }
    var bets = data.bets || [];
    var allNba = betsForSport(bets, activeSport);
    var linesN = allNba.filter(isGameLineBet).length;
    var propsN = allNba.filter(isPropBet).length;
    if (!activeSub) activeSub = "lines";
    var chips = [
      { id: "lines", label: activeSport === "UFC" ? "Fights" : "Game lines", count: linesN },
      { id: "props", label: "Player props", count: propsN }
    ];
    sub.hidden = false;
    sub.innerHTML = chips.map(function (c) {
      var selected = activeSub === c.id;
      return (
        '<button type="button" class="sub-chip" role="tab" data-sub="' + c.id + '"' +
        ' aria-selected="' + (selected ? "true" : "false") + '"' +
        ' title="' + escapeHtml(c.label) + ' (' + c.count + ')">' +
        '<span class="sub-name">' + escapeHtml(c.label) + "</span>" +
        '<span class="sub-count">' + c.count + "</span>" +
        "</button>"
      );
    }).join("");
  }

  function renderResultBadge(r) {
    if (!r || !r.status) return "";
    var st = String(r.status);
    var cls = st === "WIN" ? "res-win" : st === "LOSS" ? "res-loss" : st === "PUSH" ? "res-push" : st === "LIVE" ? "res-live" : "res-pending";
    var txt = st === "pending" ? "RESULT PENDING" : st === "ungraded" ? "UNGRADED" : st;
    return '<span class="res-badge ' + cls + '">' + escapeHtml(txt) + "</span>";
  }
  function renderResultLine(r) {
    if (!r || !r.status) return "";
    var bits = [];
    if (r.status === "LIVE") bits.push("LIVE " + (r.score || "") + (r.detail ? " · " + r.detail : ""));
    else if (r.final) bits.push(r.final);
    else if (r.score) bits.push(r.score);
    if (r.how) bits.push(r.how);
    if (r.note) bits.push(r.note);
    if (r.checkedAt) bits.push("checked " + r.checkedAt);
    return '<p class="result-line">' + escapeHtml(bits.join(" · ")) + "</p>";
  }

  // ---- v2 helpers: confidence meter, source ledger drawer, performance strip, live strip, theme ----
  function edgePpOf(obj) {
    var me = ((obj && obj.ledger) || {}).minEdge || {};
    if (typeof me.edgeVsBePct === "number") return me.edgeVsBePct;
    var txt = String((obj && (obj.edge || obj.ev || obj.booksAlignWhy)) || "");
    var m = txt.match(/([+\-\u2212]?\d+(?:\.\d+)?)\s*pp/);
    return m ? parseFloat(m[1].replace("\u2212", "-")) : null;
  }
  function meterScore(yt, x, edgePp, align) {
    var n = (Number(yt) || 0) + (Number(x) || 0);
    var src = Math.min(n / 10, 1) * 55;              // sources: 10+ = full
    var mix = (Number(yt) >= 3 && Number(x) >= 2) ? 10 : 0; // both source classes present
    var edge = edgePp == null ? 0 : Math.max(0, Math.min(edgePp / 10, 1)) * 25;
    var al = align ? 10 : 0;
    return Math.round(src + mix + edge + al);
  }
  function meterHtml(score, caption) {
    var cls = score >= 70 ? "m-high" : score >= 45 ? "m-mid" : "m-low";
    return '<div class="meter ' + cls + '" title="Confidence = sources (55) + YT/X mix (10) + model edge (25) + books align (10)">' +
      '<div class="meter-head"><span>' + escapeHtml(caption || "Confidence") + '</span><span class="meter-val">' + score + '</span></div>' +
      '<div class="meter-track" role="progressbar" aria-valuenow="' + score + '" aria-valuemin="0" aria-valuemax="100"><div class="meter-fill" style="width:' + score + '%"></div></div></div>';
  }
  function listHtml(arr) {
    if (!arr || !arr.length) return '<p class="dr-none">None recorded.</p>';
    return "<ul>" + arr.map(function (t) { return "<li>" + escapeHtml(t) + "</li>"; }).join("") + "</ul>";
  }
  function splitWho(s) { return s ? String(s).split(/;\s*/).filter(Boolean) : []; }
  function consensusList(o) {
    var lg = o.ledger || {};
    var c = lg.consensus || o.consensus || [];
    return Array.isArray(c) ? c : [];
  }
  function consensusCol(o) {
    var c = consensusList(o);
    var items = c.map(function (r) { return typeof r === "string" ? r : (r.site || "") + (r.pick ? ": " + r.pick : "") + (r.author ? " (" + r.author + ")" : ""); });
    return '<div class="dr-col"><h4>Consensus sites (' + c.length + ')</h4>' + listHtml(items) +
      '<p class="dr-muted">Separate class — not counted toward the 6+ YouTube + send-it rule.</p></div>';
  }
  function splitsOf(o) { return o.splits || (o.ledger || {}).splits || null; }
  function rlmOf(o) { return o.rlm || (o.ledger || {}).rlm || null; }
  function splitsCol(o) {
    var sp = splitsOf(o), r = rlmOf(o);
    if (!sp && !r) return '<div class="dr-col"><h4>Betting splits</h4><p class="dr-none">Not pulled for this pick.</p></div>';
    var h = '<div class="dr-col"><h4>Betting splits</h4>';
    if (sp) {
      h += '<div class="split-row"><span>Bets</span><div class="split-track"><div class="split-fill" style="width:' + (Number(sp.publicBetsPct) || 0) + '%"></div></div><b>' + escapeHtml(sp.publicBetsPct) + '%</b></div>' +
        '<div class="split-row"><span>Money</span><div class="split-track"><div class="split-fill money" style="width:' + (Number(sp.moneyPct) || 0) + '%"></div></div><b>' + escapeHtml(sp.moneyPct) + "%</b></div>" +
        '<p class="dr-muted">' + escapeHtml((sp.side ? "On " + sp.side + " · " : "") + (sp.source || "source n/a") + (sp.observedAt ? " · " + sp.observedAt : "")) + "</p>";
    }
    if (r) h += '<p class="' + (r.flag ? "rlm-yes" : "dr-muted") + '">' + (r.flag ? "⚑ Reverse line move" : "No reverse line move") + (r.note ? " — " + escapeHtml(r.note) : "") + "</p>";
    return h + "</div>";
  }
  // ---- Source weights (Atlas 10/15): YT 1.0, unique X 1.0, named consensus site 0.75, splits/RLM 0.5 (max 1) ----
  var SOURCE_WEIGHTS = { youtube: 1.0, xSendIt: 1.0, consensus: 0.75, splits: 0.5 };
  var PUBLISH_WEIGHT = 6.0;
  function weightedSources(o) {
    var s = o.sources || {}, sp = splitsOf(o), r = rlmOf(o);
    var yt = +(s.youtube || o.youtube || 0) || 0, x = +(s.xSendIt || o.xSendIt || 0) || 0;
    var c = consensusList(o).filter(function (e) { return e && e.site; }).length;
    var spl = ((sp && sp.publicBetsPct != null && sp.moneyPct != null && (sp.moneyPct - sp.publicBetsPct) >= 10) || (r && r.flag && r.note)) ? 1 : 0;
    var total = yt * SOURCE_WEIGHTS.youtube + x * SOURCE_WEIGHTS.xSendIt + c * SOURCE_WEIGHTS.consensus + spl * SOURCE_WEIGHTS.splits;
    var classes = (yt ? 1 : 0) + (x ? 1 : 0) + (c ? 1 : 0) + (spl ? 1 : 0);
    return { yt: yt, x: x, consensus: c, splits: spl, total: Math.round(total * 100) / 100, classes: classes, publishable: total >= PUBLISH_WEIGHT && classes >= 2 };
  }
  function weightLine(o) {
    var w = weightedSources(o);
    return '<p class="dr-muted"><b>Weighted sources: ' + w.total.toFixed(2) + '</b> = ' + w.yt + ' YT × 1.0 + ' + w.x + ' X × 1.0 + ' + w.consensus + ' consensus × 0.75 + ' + w.splits + ' splits/RLM × 0.5 · ' + w.classes + ' source classes · publish bar 6.0 with ≥2 classes ' + (w.publishable ? '✓' : '✗') + '</p>';
  }
  function extraChips(o) {
    var c = consensusList(o).length, sp = splitsOf(o), r = rlmOf(o), h = "";
    if (c) h += '<span class="source-chip chip-consensus" title="Counted at 0.75 each toward the 6.0 weighted bar">Consensus ' + c + "</span>";
    if (sp && sp.publicBetsPct != null) h += '<span class="source-chip">Bets ' + escapeHtml(sp.publicBetsPct) + "% / $ " + escapeHtml(sp.moneyPct) + "%</span>";
    if (r && r.flag) h += '<span class="source-chip chip-rlm">RLM</span>';
    return h;
  }
  function drawerHtml(o) {
    var lg = o.ledger || {}; var me = lg.minEdge || {};
    var yt = (lg.yt && lg.yt.channels) || splitWho(o.ytWho);
    var xs = (lg.sendIt && lg.sendIt.whoOdds) || splitWho(o.xWho);
    var math = "";
    if (me.breakEvenPct != null) {
      math = "Best " + (me.bestLine || "") + (me.bestSource ? " (" + me.bestSource + ")" : "") + " → break-even " + me.breakEvenPct + "%. " +
        (me.modelWinPct != null ? (me.modelSource || "Model") + " " + me.modelWinPct + "% → " + (me.edgeVsBePct >= 0 ? "+" : "") + me.edgeVsBePct + "pp vs 2.5pp bar. " : "No cited model. ") +
        (me.missReason ? me.missReason : "");
    }
    var why = lg.booksAlignWhy || o.booksAlignWhy || "";
    return '<details class="drawer"><summary>Source ledger</summary><div class="dr-body">' +
      '<div class="dr-col"><h4>YouTube (' + yt.length + ')</h4>' + listHtml(yt) + "</div>" +
      '<div class="dr-col"><h4>Send-it list (' + xs.length + ')</h4>' + listHtml(xs) + "</div>" +
      consensusCol(o) + splitsCol(o) +
      '<div class="dr-col dr-wide"><h4>Weighting</h4>' + weightLine(o) + '</div>' +
      '<div class="dr-col dr-wide"><h4>Books check</h4><p>' + escapeHtml(math || why || "No books math recorded.") + "</p>" +
        (math && why ? '<p class="dr-muted">' + escapeHtml(why) + "</p>" : "") +
        (lg.notes ? '<p class="dr-muted">' + escapeHtml(lg.notes) + "</p>" : "") + "</div>" +
      "</div></details>";
  }
  function fmtRec(t) { return t ? t.record : "0-0-0"; }
  function renderPerformance(data) {
    var el = $("perf-strip"); if (!el) return;
    var p = data && data.performance; var T = p && p.tally;
    if (!T || !PERF_STRIP_ENABLED) { el.hidden = true; return; }
    function cell(label, t, extra) {
      t = t || {};
      var roi = t.roiPct == null ? "—" : (t.roiPct > 0 ? "+" : "") + t.roiPct + "%";
      var hr = t.hitRate == null ? "—" : t.hitRate + "%";
      var cls = t.roiPct == null ? "" : (t.roiPct >= 0 ? "up" : "down");
      return '<div class="perf-cell"><span class="perf-label">' + escapeHtml(label) + '</span><span class="perf-big">' + escapeHtml(fmtRec(t)) + "</span>" +
        '<span class="perf-meta"><span class="' + cls + '">' + roi + " ROI</span> · " + hr + " hit · n=" + (t.n || 0) + (extra || "") + "</span></div>";
    }
    var a = T.all || {};
    var clv = a.clvScored ? " · CLV beat " + a.clvBeat + "/" + a.clvScored : "";
    el.hidden = false;
    el.innerHTML = '<div class="perf-head"><h2>Track record</h2><span class="perf-sub">' + (DEMO ? "EXAMPLE DATA — invented for layout" : "Graded from ESPN finals · flat 1u at published price · since Oct 10, 2026") + '</span></div>' +
      '<div class="perf-grid">' + cell("All main cards", a, clv) + cell("CLEARED", (T.byTier || {}).cleared) + cell("GAUGE", (T.byTier || {}).gauge) +
      cell("Near misses (separate)", T.nearMiss) + "</div>" +
      '<p class="perf-note">' + escapeHtml(p.note || "") + (a.n < 100 ? " Current sample n=" + (a.n || 0) + " main cards." : "") + "</p>";
  }
  function renderLive(sportId, data) {
    var el = $("live-slot"); if (!el) return;
    var lg = (data && data.liveGames) || {};
    var rows = Object.keys(lg).map(function (k) { return lg[k]; }).filter(function (g) { return normalizeSport(g.sport) === normalizeSport(sportId); });
    if (!rows.length) { el.innerHTML = ""; return; }
    el.innerHTML = '<section class="live-strip" aria-label="Live games"><h3 class="live-head"><span class="live-dot"></span>Live — info only, not counted</h3>' +
      rows.map(function (g) {
        return '<div class="live-item"><div class="live-game">' + escapeHtml(g.game || "") + (g.state ? ' <span class="live-state">' + escapeHtml(g.state) + "</span>" : "") + "</div>" +
          (g.lean ? '<p class="live-lean">' + escapeHtml(g.lean) + "</p>" : "") +
          (g.liveOdds ? '<p class="live-meta">' + escapeHtml(g.liveOdds) + "</p>" : "") +
          (g.winProb ? '<p class="live-meta">' + escapeHtml(g.winProb) + "</p>" : "") +
          (g.picks && g.picks.length ? '<p class="live-meta">Pregame rows moved here: ' + escapeHtml(g.picks.join("; ")) + "</p>" : "") +
          (g.sources ? '<p class="live-meta">Sources: ' + escapeHtml(g.sources) + "</p>" : "") + "</div>";
      }).join("") + "</section>";
  }
  // ---- Phase 3: hash pages (#/methodology, #/performance, #/disclaimer) + demo mode (?demo=1) ----
  // Demo mode + performance strip disabled per Atlas 10/13 8:23 PM CT; set true to restore.
  var DEMO_ENABLED = false, PERF_STRIP_ENABLED = true; // re-enabled per Atlas 10/15 12:53 PM CT
  var DEMO = DEMO_ENABLED && /(?:^|[?&])demo=1(?:&|$)/.test(location.search);
  // Private pages (Performance, Disclaimer) disabled per Atlas 10/13 8:16 PM CT; set true to restore.
  var PRIVATE_PAGES_ENABLED = false; // Disclaimer stays private
  var PERFORMANCE_PAGE_ENABLED = true; // public Performance approved by Atlas 10/15 12:53 PM CT
  function pageRoute() {
    var m = (location.hash || "").match(/^#\/(methodology|performance|disclaimer)/);
    if (!m) return null;
    if (m[1] === "performance" && PERFORMANCE_PAGE_ENABLED) return m[1];
    if (m[1] !== "methodology" && !PRIVATE_PAGES_ENABLED) return null;
    return m[1];
  }
  function hidePrivateLinks() {
    if (PRIVATE_PAGES_ENABLED) return;
    document.querySelectorAll((PERFORMANCE_PAGE_ENABLED ? '' : 'a[href="#/performance"],') + 'a[href="#/disclaimer"]' + (DEMO_ENABLED ? "" : ',a[href="?demo=1"]')).forEach(function (a) {
      var p = a.previousSibling, n = a.nextSibling;
      if (n && n.nodeType === 3 && /^\s*·\s*$/.test(n.nodeValue)) n.remove();
      else if (p && p.nodeType === 3 && /^\s*·\s*$/.test(p.nodeValue)) p.remove();
      a.remove();
    });
  }
  function pct(v) { return v == null ? "—" : v + "%"; }
  function signed(v, suf) { return v == null ? "—" : (v > 0 ? "+" : "") + v + (suf || ""); }
  function perfRow(label, t) {
    t = t || {};
    return "<tr><th>" + escapeHtml(label) + "</th><td>" + escapeHtml(t.record || "0-0-0") + "</td><td>" + (t.n || 0) + "</td><td>" + pct(t.hitRate) +
      '</td><td class="' + (t.units >= 0 ? "up" : "down") + '">' + signed(t.units, "u") + "</td><td>" + signed(t.roiPct, "%") + "</td><td>" +
      (t.clvScored ? (t.clvBeat || 0) + "/" + t.clvScored : "—") + "</td></tr>";
  }
  function pagePerformance(data) {
    var p = data.performance || {}, T = p.tally;
    if (!T) return "<h1>Performance</h1><p>No graded results yet.</p>";
    var sports = Object.keys(T.bySport || {}).map(function (k) { return perfRow(k, T.bySport[k]); }).join("");
    var recent = (p.recent || []).filter(function (r) { return r["class"] === "main"; }).map(function (r) {
      var cls = r.result === "win" ? "res-win" : r.result === "loss" ? "res-loss" : "res-push";
      return "<tr><td>" + escapeHtml(r.date) + "</td><td>" + escapeHtml(r.sport) + "</td><td>" + escapeHtml(String(r.tier).toUpperCase()) + "</td><td>" + escapeHtml(r.pick) +
        "</td><td>" + escapeHtml(r.publishedAmerican == null ? "—" : r.publishedAmerican) + '</td><td><span class="res-badge ' + cls + '">' + escapeHtml(String(r.result).toUpperCase()) +
        "</span></td><td>" + escapeHtml(r.final || "") + "</td><td>" + signed(r.clvPp, "pp") + "</td></tr>";
    }).join("");
    var head = "<tr><th></th><th>W-L-P</th><th>n</th><th>Hit</th><th>Units</th><th>ROI</th><th>CLV beat</th></tr>";
    return '<p class="page-kicker">Track record</p><h1>Performance.</h1>' +
      '<p class="page-lede">Every published card is graded automatically from ESPN finals against the exact line and price we published. Flat 1 unit per card. Nothing is hand-entered or guessed.</p>' +
      '<div class="callout">Honest sample size: <b>n=' + ((T.all || {}).n || 0) + "</b> main cards since Oct 10, 2026. That is far too few to judge skill — treat these numbers as a ledger, not a promise.</div>" +
      '<h2>By tier</h2><div class="table-wrap"><table class="ptable">' + head + perfRow("All main cards", T.all) + perfRow("CLEARED", (T.byTier || {}).cleared) + perfRow("GAUGE", (T.byTier || {}).gauge) + "</table></div>" +
      '<h2>By sport (main cards)</h2><div class="table-wrap"><table class="ptable">' + head + sports + "</table></div>" +
      '<h2>Near misses — tracked separately</h2><div class="table-wrap"><table class="ptable">' + head + perfRow("Near misses", T.nearMiss) + "</table></div>" +
      '<div class="callout warn"><b>Inflation caveat:</b> the near-miss tally counts every near miss that appeared on any published version of the board during a day, including rows later removed, and some rows sit on opposite sides of the same game (e.g. both Over and Under, or the other side of a main card). It is not a playable record and is excluded from all totals.</div>' +
      '<h2>Closing-line value</h2><p>CLV compares our published price with the closing price (ESPN / DraftKings feed; for finished games, the last line ESPN held is treated as the close). Beat ' + ((T.clvTags || {}).beat || 0) + ", match " + ((T.clvTags || {}).match || 0) + ", lose " + ((T.clvTags || {}).lose || 0) + ", no close available " + ((T.clvTags || {}).unobserved || 0) + ". Props, UFC and 3-way soccer have no close feed and are left unobserved.</p>" +
      '<h2>Recent graded cards</h2><div class="table-wrap"><table class="ptable small"><tr><th>Date</th><th>Sport</th><th>Tier</th><th>Pick</th><th>Price</th><th>Result</th><th>Final</th><th>CLV</th></tr>' + recent + "</table></div>" +
      '<p class="dr-muted">Ungraded: ' + (T.ungraded || 0) + " (mostly player props without an auto-grader) · pending: " + (T.pending || 0) + " · updated " + escapeHtml(T.updatedAt || "") + "</p>";
  }
  function pageMethodology() {
    return '<p class="page-kicker">How it works</p><h1>Methodology.</h1>' +
      '<p class="page-lede">A pick reaches the board only when independent people put their name on it — and the price still makes sense.</p>' +
      "<h2>1. Sources</h2><ul>" +
      "<li><b>YouTube:</b> firm, spoken picks from 10–15+ best-bets videos per sport. Leans, score predictions, AI-pick channels and relayed duplicates are excluded.</li>" +
      "<li><b>Send-it list (X):</b> current-day slips for unstarted games from a curated list. Unique posters only; settled or “cashed” posts are ignored; collab accounts are flagged.</li>" +
      "<li><b>Consensus sites:</b> vetted tipster / consensus sites with named, firm picks. Named sites only (Covers, Action Network, Pickswise, OddsShark, Dimers and similar vetted outlets). Each firm pick counts <b>0.75</b>.</li>" +
      "<li><b>Betting splits:</b> a sharp-vs-public signal (money % at least 10 points above bets % on the pick) or a documented reverse line move counts <b>0.5</b>, at most one per card.</li>" +
      "<li><b>Market context:</b> injuries, goalies and pitchers, weather, line movement, betting splits (public bets % vs money %), and reverse-line-move flags.</li></ul>" +
      "<h2>Source weights</h2><div class='table-wrap'><table class='ptable'><tr><th>Source class</th><th>Weight</th><th>Limit</th></tr><tr><th>YouTube firm pick</th><td>1.0</td><td>per unique channel</td></tr><tr><th>X send-it poster</th><td>1.0</td><td>per unique poster</td></tr><tr><th>Vetted consensus / tipster site</th><td>0.75</td><td>per named site</td></tr><tr><th>Betting splits / RLM</th><td>0.5</td><td>max 1 per card</td></tr></table></div><p><b>Weighted total</b> = YT×1.0 + X×1.0 + sites×0.75 + splits×0.5. Publish needs ≥ 6.0 and ≥ 2 classes. The weighted total never replaces the CLEARED floors (≥3 YouTube + ≥2 send-it + books align).</p>" +
      "<h2>2. Books align (MinEdge)</h2><p>We convert the best observed price to break-even probability and require a <b>cited</b> model (e.g. GameLens, ESPN FPI, AccuScore, Tennis Abstract Elo) to clear it by at least <b>2.5 percentage points</b>. Conflicting cited models fail the check. Spread probabilities only apply at the same or a better number. We never invent a model.</p>" +
      "<h2>3. Tiers</h2><ul><li><b>CLEARED:</b> ≥3 YouTube + ≥2 send-it + books align.</li><li><b>GAUGE:</b> every other main card, ranked with a one-line rationale.</li><li><b>Main board floor:</b> weighted source total ≥ <b>6.0</b> from at least <b>2 distinct source classes</b>.</li><li><b>NEAR MISS:</b> under the weighted bar, including MinEdge passes short on sources — shown in labeled sections, never counted in totals.</li><li><b>LIVE:</b> started games are info-only.</li></ul>" +
      "<h2>4. Confidence meter</h2><p>0–100: sources (up to 55, full at 10), both source classes present (10), cited model edge (up to 25, full at +10pp), books align (10). It summarizes evidence; it is not a win probability.</p>" +
      "<h2>5. Grading and CLV</h2><p>Scripts grade finals from ESPN against the published line and price, capture closing lines, and prune started games. Results accumulate in a permanent ledger.</p>" +
      "<h2>7. Own models &amp; calibration</h2><p>Phase 4: in-house, documented models built on free/public data only. Scripts live under <code>models/</code>; each is backtested out of sample before any use.</p><div class='table-wrap'><table class='ptable'><tr><th>Model</th><th>Method</th><th>Holdout n</th><th>Brier</th><th>Log loss</th><th>Hit rate</th><th>Baseline</th></tr><tr><th>NHL Elo v0.1</th><td>Elo with margin, home ice and back-to-back rest adjustment; moneyline incl. OT/SO</td><td>2,731</td><td>0.242</td><td>0.677</td><td>56.1%</td><td>Home-rate: Brier 0.248, LL 0.690</td></tr><tr><th>Soccer DC v0.1</th><td>Dixon–Coles Poisson, walk-forward 14-day refits, 9 domestic leagues (EPL, Championship, League One, Scottish Prem &amp; Champ, La Liga, Bundesliga, Serie A, Ligue 1)</td><td>7,042</td><td>0.611*</td><td>1.045</td><td>50.0%</td><td>Closing market: Brier 0.591*, LL 0.991, 51.8%</td></tr></table></div><p class='muted'>*Soccer Brier is 3-way (home/draw/away) and not comparable to the 2-way NHL figure.</p><h3>Caveats</h3><ul><li><b>NHL:</b> beats a home-win baseline but has not yet shown it beats closing lines (no free closing-line history). Slightly overconfident on favorites. Goalie adjustment tuned to 0 in v0.1; xG planned for v0.2.</li><li><b>Soccer:</b> trails the de-vigged closing market in every league tested. Domestic leagues only — no UCL/Europa.</li></ul><h3>Policy</h3><p>These models <b>do not set books align</b> yet. NHL Elo is used as GAUGE context and as a fallback when GameLens shows its capped 65%. Soccer DC is context only. A model replaces a cited model only after it beats it (and the market) in backtest. The weighted 6.0 floor and CLEARED floors are unchanged.</p><h3>Reliability charts</h3><div class='model-charts'><figure><img src='assets/models/nhl-reliability.png?v=202610151353' alt='NHL Elo v0.1 reliability chart' loading='lazy'><figcaption>NHL Elo v0.1: predicted vs actual win rate (holdout)</figcaption></figure><figure><img src='assets/models/soccer-reliability.png?v=202610151353' alt='Soccer DC v0.1 reliability chart' loading='lazy'><figcaption>Soccer DC v0.1: predicted vs actual outcome rate (holdout)</figcaption></figure></div>" +
      "<h2>6. Reading list</h2><p>Approach informed by <i>The Logic of Sports Betting</i>, <i>Sharp Sports Betting</i>, quantitative-trading practice, and Hausch &amp; Ziemba on market efficiency: consensus alone is not edge; price and closing-line value matter.</p>";
  }
  function pageDisclaimer() {
    return '<p class="page-kicker">Please read</p><h1>Disclaimer.</h1>' +
      '<div class="callout warn"><b>21+ only.</b> Gambling problem? Call <a href="tel:18004262537">1-800-GAMBLER</a> (1-800-426-2537) or visit <a href="https://www.ncpgambling.org" rel="noopener">ncpgambling.org</a>.</div>' +
      "<ul><li>Sports screener is a <b>research and education</b> tool. It is not betting, financial or investment advice.</li>" +
      "<li>We <b>do not place bets</b>, take wagers, or handle money, and we are not a sportsbook or a paid pick service.</li>" +
      "<li>Odds, lines, injuries and model outputs change and can be wrong or stale. Always confirm prices with a licensed sportsbook.</li>" +
      "<li>Past results do not predict future results. The track record is small and is shown with its sample size.</li>" +
      "<li>Sports betting is legal only in some jurisdictions. You are responsible for following the laws where you live.</li>" +
      "<li>Third-party names (YouTube channels, X accounts, models, sites) are cited for attribution only and do not endorse this site.</li></ul>" +
      '<p>Set limits, never chase losses, and take breaks. Self-exclusion programs are available in every legal state.</p>';
  }
  function renderPage(data) {
    var r = pageRoute(), pv = $("page-view"), bv = $("board-view");
    if (!pv || !bv) return false;
    document.querySelectorAll(".navlink").forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("href") === "#/" + r ? "page" : "false"); });
    if (!r) { pv.hidden = true; bv.hidden = false; return false; }
    pv.innerHTML = '<article class="page">' + (r === "performance" ? pagePerformance(data) : r === "methodology" ? pageMethodology() : pageDisclaimer()) +
      '<p><a class="back-link" href="#">← Back to the board</a></p></article>';
    pv.hidden = false; bv.hidden = true; window.scrollTo(0, 0);
    return true;
  }
  function demoData() {
    var ex = function (o) { return Object.assign({ example: true, gameState: "pre" }, o); };
    return {
      updatedAt: new Date().toISOString(), updatedAtLabel: "EXAMPLE DATA · demo mode", slate: "Demo slate — EXAMPLE DATA", status: "example",
      summary: "EXAMPLE DATA. Every pick, source, split and result below is invented to show the layout. Nothing here is a real recommendation.",
      sports: [{ id: "NHL", label: "Hockey (NHL)", nav: "NHL" }, { id: "NFL", label: "Football (NFL)", nav: "NFL" }, { id: "Soccer", label: "Soccer", nav: "Soccer" }],
      bets: [
        ex({ id: "demo-1", sport: "NHL", tier: "cleared", marketType: "moneyline", pick: "Example Team A ML", line: "−125", game: "Example A @ Example B · 7:00 PM CT", consensusPct: 75, simWinPct: 61, ev: "+5.4pp vs BE",
          why: "EXAMPLE: 5 YouTube + 3 send-it picks on the same side; cited model clears break-even by 5.4pp.", sources: { youtube: 5, xSendIt: 3, booksAlign: true },
          splits: { publicBetsPct: 38, moneyPct: 61, side: "Team A", source: "Example splits feed", observedAt: "6:15 PM CT" }, rlm: { flag: true, note: "EXAMPLE: line moved toward Team A with only 38% of bets." },
          ledger: { booksAlign: true, consensus: [{ site: "Example Consensus Site", pick: "Team A ML", author: "Analyst X" }, { site: "Example Picks Hub", pick: "Team A ML" }],
            yt: { channels: ["Example Channel 1: Team A", "Example Channel 2: Team A", "Example Channel 3: Team A", "Example Channel 4: Team A", "Example Channel 5: Team A"] },
            sendIt: { whoOdds: ["@example1: Team A −125", "@example2: Team A ML", "@example3: Team A −120"] },
            minEdge: { bestLine: "A −125", bestSource: "Example Book", breakEvenPct: 55.6, modelWinPct: 61.0, modelSource: "Example Model", edgeVsBePct: 5.4 } } }),
        ex({ id: "demo-2", sport: "NHL", tier: "gauge", marketType: "spread", pick: "Over 6.5", line: "o6.5 −110", game: "Example C @ Example D · 8:00 PM CT", consensusPct: 67, simWinPct: "n/a", ev: "n/a",
          why: "EXAMPLE: 6 sources, but no cited model clears break-even, so it is GAUGE.", sources: { youtube: 4, xSendIt: 2, booksAlign: false },
          splits: { publicBetsPct: 72, moneyPct: 70, side: "Over", source: "Example splits feed" }, rlm: { flag: false },
          ledger: { booksAlign: false, booksAlignWhy: "EXAMPLE: best o6.5 −110 → BE 52.4%; no cited model." } }),
        ex({ id: "demo-3", sport: "NHL", tier: "gauge", marketType: "prop", pick: "Example Player o2.5 SOG", line: "−130", game: "Example C @ Example D · 8:00 PM CT", consensusPct: 100, ev: "n/a",
          why: "EXAMPLE prop card.", sources: { youtube: 5, xSendIt: 1, booksAlign: false }, ledger: {} })
      ],
      nearMiss: { NHL: [{ pick: "Example Team E ML", game: "Example E @ Example F · 9:00 PM CT", yt: 3, x: 1, total: 4, booksAlign: true, booksAlignWhy: "EXAMPLE: model +3.1pp", gap: "EXAMPLE: needs 2 more sources.",
        consensus: [{ site: "Example Consensus Site", pick: "Team E ML" }], splits: { publicBetsPct: 45, moneyPct: 52, side: "Team E", source: "Example splits feed" } }] },
      todaysGauge: { title: "Today's Gauge", label: "EXAMPLE DATA", items: [
        { rank: 1, tier: "CLEARED", pick: "Example Team A ML", line: "−125", sport: "NHL", game: "Example A @ Example B", timeCT: "7:00 PM CT", yt: 5, x: 3, booksAlign: true, edge: "+5.4pp", rationale: "EXAMPLE rationale." },
        { rank: 2, tier: "GAUGE", pick: "Over 6.5", line: "−110", sport: "NHL", game: "Example C @ Example D", timeCT: "8:00 PM CT", yt: 4, x: 2, booksAlign: false, rationale: "EXAMPLE rationale." }] },
      performance: { note: "EXAMPLE DATA — invented track record for layout only.", tally: {
        all: { record: "12-8-1", n: 21, hitRate: 60, units: 2.4, roiPct: 11.4, clvScored: 15, clvBeat: 9, clvN: 15, avgClvPp: 1.2 },
        byTier: { cleared: { record: "5-2-0", n: 7, hitRate: 71.4, units: 2.6, roiPct: 37.1 }, gauge: { record: "7-6-1", n: 14, hitRate: 53.8, units: -0.2, roiPct: -1.4 } },
        bySport: { NHL: { record: "12-8-1", n: 21, hitRate: 60, units: 2.4, roiPct: 11.4 } }, nearMiss: { record: "10-9-0", n: 19, hitRate: 52.6, units: -0.5, roiPct: -2.6 },
        clvTags: { beat: 9, match: 2, lose: 4, unobserved: 6 }, pending: 0, ungraded: 0, updatedAt: "EXAMPLE" }, recent: [] }
    };
  }

  function setupTheme() {
    var btn = $("theme-toggle"); if (!btn) return;
    btn.addEventListener("click", function () {
      var root = document.documentElement;
      var cur = root.getAttribute("data-theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("ss-theme", next); } catch (e) {}
    });
  }

  function renderCard(bet) {
    var isEx = bet.example === true;
    var tier = String(bet.tier || "").toLowerCase();
    var isGauge = !isEx && (tier === "gauge" || (tier !== "cleared" && sourcesBooksFail(bet)));
    var conf = Math.max(0, Math.min(100, Number(bet.confidence) || 0));
    var sources = bet.sources || {};
    var ledger = bet.ledger || {};
    var yt = sources.youtube != null ? sources.youtube : "—";
    var send = sources.xSendIt != null ? sources.xSendIt : "—";
    var alignRaw = typeof sources.booksAlign === "boolean"
      ? sources.booksAlign
      : ledger.booksAlign;
    var alignKnown = typeof alignRaw === "boolean";
    var align = alignRaw === true;

    var badges = "";
    if (isEx) badges += '<span class="example-tag">EXAMPLE</span>';
    if (tier === "cleared") badges += '<span class="tier-tag tier-cleared">CLEARED</span>';
    else if (isGauge || tier === "gauge") badges += '<span class="tier-tag tier-gauge">GAUGE</span>';
    if (bet.rank != null) badges += '<span class="rank-badge">#' + escapeHtml(bet.rank) + "</span>";
    badges += renderResultBadge(bet.result);

    var cardClass = "card";
    if (isEx) cardClass += " is-example";
    if (isGauge || tier === "gauge") cardClass += " is-gauge";
    if (tier === "cleared") cardClass += " is-cleared";

    var sim = bet.simWinPct;
    var simDisplay = (sim == null || String(sim).toLowerCase() === "n/a")
      ? "n/a"
      : escapeHtml(sim) + (String(sim).indexOf("%") >= 0 ? "" : "%");

    return (
      '<article class="' + cardClass + '" data-id="' + escapeHtml(bet.id) + '">' +
        '<div class="card-top">' +
          '<div class="pick-block">' +
            '<p class="pick">' + escapeHtml(bet.pick) + "</p>" +
            '<span class="line">' + escapeHtml(bet.line) + "</span>" +
          "</div>" +
          '<div class="badges">' + badges + "</div>" +
        "</div>" +
        '<p class="game">' + escapeHtml(bet.game) + "</p>" +
        renderResultLine(bet.result) +
        '<div class="stats">' +
          '<div class="stat"><span class="stat-label">Consensus</span><span class="stat-value">' + escapeHtml(bet.consensusPct) + "%</span></div>" +
          '<div class="stat"><span class="stat-label">Sim win</span><span class="stat-value">' + simDisplay + "</span></div>" +
          '<div class="stat"><span class="stat-label">EV</span><span class="stat-value ' + evClass(bet.ev) + '">' + escapeHtml(bet.ev) + "</span></div>" +
        "</div>" +
        meterHtml(meterScore(sources.youtube, sources.xSendIt, edgePpOf(bet), align), "Confidence · sources + edge") +
        '<div class="why-block">' +
          '<span class="why-label">Why sources like it</span>' +
          '<p class="why">' + escapeHtml(bet.why || "No consensus note for this pick yet.") + "</p>" +
          (bet.xNote ? '<p class="why x-note"><strong>Send-it list:</strong> ' + escapeHtml(bet.xNote) + "</p>" : "") +
        "</div>" +
        renderClvBlock(ledger.clv) +
        '<div class="sources">' +
          '<span class="source-chip">YT ' + escapeHtml(yt) + "</span>" +
          '<span class="source-chip">Send-it ' + escapeHtml(send) + "</span>" +
          '<span class="source-chip ' + (alignKnown ? (align ? "align-yes" : "align-no") : "") + '">' +
            "Books " + (alignKnown ? (align ? "align" : "mixed") : "—") +
          "</span>" +
          renderMinEdgeChip(ledger) + extraChips(bet) +
        "</div>" +
        drawerHtml(bet) +
      "</article>"
    );
  }

  function renderEmpty(label) {
    return '<div class="empty">No ' + escapeHtml(label) + " picks on this slate.</div>";
  }

  function renderNearMiss(sportId, data) {
    var nm = (data && data.nearMiss) || {};
    if (hasSub(normalizeSport(sportId)) && activeSub === "props") sportId = normalizeSport(sportId) + "-PROPS";
    var list = nm[sportId] || nm[normalizeSport(sportId)] || [];
    if (!list.length) return "";
    var rows = list.map(function (n) {
      var live = n.result ? renderResultBadge(n.result) + " " : (String(n.gameState || "") === "live" ? '<span class="nm-live">LIVE</span> ' : "");
      return (
        '<li class="nm-item">' +
          '<div class="nm-pick">' + live + escapeHtml(n.pick || "") + (n.modelOnly ? ' <span class="nm-tag">model-only, 0 sources</span>' : "") + "</div>" +
          '<div class="nm-game">' + escapeHtml(n.game || "") + "</div>" +
          renderResultLine(n.result) +
          '<div class="nm-line">YT ' + escapeHtml(String(n.yt)) + (n.ytWho ? " (" + escapeHtml(n.ytWho) + ")" : "") +
            " · X " + escapeHtml(String(n.x)) + (n.xWho ? " (" + escapeHtml(n.xWho) + ")" : "") +
            " · total " + escapeHtml(String(n.total)) + "</div>" +
          '<div class="nm-line">booksAlign ' + (n.booksAlign ? "true" : "false") + " — " + escapeHtml(n.booksAlignWhy || "") + "</div>" +
          '<div class="nm-gap">' + escapeHtml(n.gap || "") + "</div>" +
          (extraChips(n) ? '<div class="sources">' + extraChips(n) + "</div>" : "") +
          meterHtml(meterScore(n.yt, n.x, edgePpOf(n), n.booksAlign), "Confidence · sources + edge") +
          drawerHtml(n) +
        "</li>"
      );
    }).join("");
    return (
      '<section class="near-miss" aria-label="Near misses">' +
        '<h3 class="nm-head"><span class="nm-pill">NEAR MISS</span> Near misses (under 6 sources), not on the main board</h3>' +
        '<p class="nm-note">Research only. Not counted in gauge/cleared totals or board status.</p>' +
        '<ul class="nm-list">' + rows + "</ul>" +
      "</section>"
    );
  }

  function renderSportEmpty(sportId, data) {
    var archives = (data && data.archives) || {};
    var arch = archives[sportId] || archives[normalizeSport(sportId)] || null;
    var labelMap = { MLB: "Baseball", NFL: "Football (NFL)", CFB: "NCAA Football", Soccer: "Soccer", NBA: "Basketball", NHL: "Hockey (NHL)", WNBA: "Basketball (WNBA)", TENNIS: "Tennis", UFC: "UFC" };
    var label = labelMap[sportId] || sportId;
    var isNba = hasSub(normalizeSport(sportId));
    var isRealNba = normalizeSport(sportId) === "NBA";
    if (isNba && activeSub === "props" && archives[normalizeSport(sportId) + "-PROPS"]) arch = archives[normalizeSport(sportId) + "-PROPS"];
    var subLabel = "";
    if (isNba && activeSub === "props") {
      label = "Player props";
      subLabel = " (" + (isRealNba ? "Basketball" : (normalizeSport(sportId) === "UFC" ? "UFC" : (normalizeSport(sportId) === "NFL" ? "Football" : "Hockey"))) + " · " + (normalizeSport(sportId) === "UFC" ? "Props" : "Player props") + ")";
    } else if (isNba && activeSub === "lines") {
      label = normalizeSport(sportId) === "UFC" ? "UFC fights" : (isRealNba ? "NBA" : (normalizeSport(sportId) === "NFL" ? "NFL" : "NHL")) + " game lines";
      subLabel = normalizeSport(sportId) === "UFC" ? " (UFC · Fights)" : " (" + (isRealNba ? "Basketball" : (normalizeSport(sportId) === "NFL" ? "Football" : "Hockey")) + " · Game lines)";
    }

    var archiveHtml = "";
    if (arch) {
      var bits = [];
      if (arch.lastSlate) bits.push('<div class="sport-empty-slate">' + escapeHtml(arch.lastSlate) + "</div>");
      if (arch.lastUpdatedAtLabel) bits.push('<div class="sport-empty-when">' + escapeHtml(arch.lastUpdatedAtLabel) + "</div>");
      if (arch.note) bits.push('<p class="sport-empty-note">' + escapeHtml(arch.note) + "</p>");
      if (bits.length) {
        archiveHtml =
          '<div class="sport-empty-archive">' +
            "<strong>Research note</strong>" +
            bits.join("") +
          "</div>";
      }
    }

    var body =
      "No countable YouTube or send-it sources for " + escapeHtml(label) +
      " on this slate — hollow YT0/X0 cards are not shown. Check back after the next pre-slate run.";
    if (isRealNba) {
      body =
        "Exhaustive YouTube + X send-it pass found no countable spoken picks or pregame slips for tonight's NBA preseason" +
        (activeSub === "props" ? " player props" : " game lines") +
        ". Empty on purpose — not fake zero badges.";
    }

    return (
      '<div class="sport-empty-icon" aria-hidden="true">○</div>' +
      '<p class="sport-empty-title">No live research this slate' + escapeHtml(subLabel) + "</p>" +
      '<p class="sport-empty-body">' + body + "</p>" +
      archiveHtml +
      renderNearMiss(sportId, data)
    );
  }

  function sportLabel(data, sportId) {
    var sports = sportsList(data);
    for (var i = 0; i < sports.length; i++) {
      if (normalizeSport(sports[i].id) === sportId) {
        return sports[i].label || sports[i].nav || sportId;
      }
    }
    return sportId;
  }

  function renderTonightGauge(data) {
    var g = data && (data.todaysGauge || data.tonightsGauge);
    var el = $("hero-gauge") || document.getElementById("tonight-gauge");
    var nav = $("sport-nav");
    if (!g || !g.items || !g.items.length) {
      if (el && el.id === "hero-gauge") { el.innerHTML = '<div class="hg-empty"><p class="hg-empty-title">Nothing qualifies right now.</p><p>No unstarted play currently has six or more sources. We would rather show nothing than a hollow pick.</p></div>'; return; }
      if (el) el.remove(); return;
    }
    if (!el && nav && nav.parentNode) {
      el = document.createElement("section");
      el.id = "tonight-gauge";
      el.className = "tonight-gauge";
      el.setAttribute("aria-label", (g.title || "Today's Gauge"));
      nav.parentNode.insertBefore(el, nav);
    }
    if (!el) return;
    var rows = g.items.map(function (it) {
      var tier = String(it.tier || "").toUpperCase();
      var tcls = tier === "CLEARED" ? "tg-cleared" : (tier === "GAUGE" ? "tg-gauge" : "tg-near");
      var edge = (it.edge === null || it.edge === undefined || it.edge === "") ? "no cited model" : it.edge;
      var sc = meterScore(it.yt, it.x, edgePpOf(it), it.booksAlign);
      return (
        '<li class="tg-item ' + tcls + '-item">' +
          '<span class="tg-rank">' + escapeHtml(String(it.rank)) + "</span>" +
          '<div class="tg-body">' +
            '<div class="tg-top"><span class="tg-tier ' + tcls + '">' + escapeHtml(tier === "NEAR MISS" ? "NEAR MISS (<6)" : tier) + "</span>" +
              '<strong class="tg-pick">' + escapeHtml(it.pick || "") + "</strong>" +
              (it.line ? ' <span class="tg-line">' + escapeHtml(it.line) + "</span>" : "") + "</div>" +
            '<div class="tg-meta">' + escapeHtml((it.sport ? it.sport + " · " : "") + (it.game || "") + (it.timeCT ? " · " + it.timeCT : "")) + "</div>" +
            '<div class="tg-meta">YT ' + escapeHtml(String(it.yt)) + " · X " + escapeHtml(String(it.x)) +
              " · booksAlign " + (it.booksAlign ? "✓" : "✗") + " · " + escapeHtml(String(edge)) + "</div>" +
            (it.rationale ? '<div class="tg-why">' + escapeHtml(it.rationale) + "</div>" : "") +
            (it.xNote ? '<div class="tg-why tg-xnote">X: ' + escapeHtml(it.xNote) + "</div>" : "") +
            meterHtml(sc, "Confidence") +
          "</div>" +
        "</li>"
      );
    }).join("");
    el.innerHTML =
      '<div class="tg-head"><h2 class="tg-title">' + escapeHtml(g.title || "Today\u2019s Gauge") + '</h2>' +
      '<span class="tg-sub">' + escapeHtml(g.label || "") + "</span></div>" +
      '<ol class="tg-list">' + rows + "</ol>" +
      (g.note ? '<p class="tg-note">' + escapeHtml(g.note) + "</p>" : "");
  }

  function render(data) {
    if (DEMO) { data = demoData(); }
    lastPayload = data;
    var db = $("demo-banner"); if (db) db.hidden = !DEMO;
    if (renderPage(data)) return;
    renderTonightGauge(data);
    renderPerformance(data);
    activeSport = resolveActiveSport(data);
    if (hasSub(activeSport) && !activeSub) activeSub = "lines";
    if (!hasSub(activeSport)) activeSub = null;
    setHash(activeSport, activeSub);
    renderSportNav(data);
    renderSubNav(data);

    var status = data.status || "stale";
    var pill = $("status-pill");
    pill.textContent = statusLabel(status);
    pill.className = "status-pill " + statusClass(status);

    var sportBets = filterBySub(data.bets || [], activeSport, hasSub(activeSport) ? activeSub : null);
    var hasBets = sportBets.length > 0;

    // Header meta: prefer sport-scoped slate when filtering empty, keep global summary
    var slateText = data.slate || "Untitled slate";
    if (!hasBets) {
      slateText = sportLabel(data, activeSport) + " · no live cards";
    } else if (String(data.sport || "").toLowerCase() === "multi" || sportsList(data).length > 1) {
      // Keep global slate; optionally prefix active sport
      slateText = data.slate || sportLabel(data, activeSport);
    }
    $("slate-name").textContent = slateText;
    $("summary").textContent = hasBets ? (data.summary || "") : "";
    var sumEl = $("summary");
    var tallyEl = document.getElementById("results-tally");
    if (!tallyEl && sumEl && sumEl.parentNode) {
      tallyEl = document.createElement("p");
      tallyEl.id = "results-tally";
      tallyEl.className = "results-tally";
      sumEl.parentNode.insertBefore(tallyEl, sumEl.nextSibling);
    }
    if (tallyEl) {
      var rt = data.resultsTally;
      tallyEl.hidden = !rt;
      tallyEl.textContent = rt ? (rt.label || ("CLEARED " + rt.cleared + " · GAUGE " + rt.gauge + " · Near misses " + rt.nearMiss)) : "";
    }
    renderProcessBar(data);
    renderLive(activeSport, data);

    var label = data.updatedAtLabel;
    var parsed = parseUpdatedAt(data.updatedAt);
    $("updated-at").textContent = label || (parsed ? parsed.toLocaleString() : "—");
    $("age").textContent = formatAge(lastFetchAt || parsed);

    var showExample = hasExampleContent(data) && hasBets;
    var showGauge = hasBets && (
      String(data.status || "").toLowerCase() === "gauge" ||
      sportBets.some(function (b) { return String(b.tier || "").toLowerCase() === "gauge"; })
    );
    $("example-banner").hidden = !showExample;
    var gaugeEl = $("gauge-banner");
    if (gaugeEl) {
      gaugeEl.hidden = !showGauge || showExample;
      if (showGauge) {
        var cleared = sportBets.filter(function (b) {
          return String(b.tier || "").toLowerCase() === "cleared";
        }).length;
        var gaugeN = sportBets.filter(function (b) {
          return String(b.tier || "").toLowerCase() === "gauge";
        }).length;
        if (cleared === 0 && gaugeN === 0) {
          cleared = data.clearedCount != null ? data.clearedCount : 0;
          gaugeN = data.gaugeCount != null ? data.gaugeCount : sportBets.length;
        }
        gaugeEl.textContent = "GAUGE BOARD — " +
          cleared + " cleared floors · " +
          gaugeN +
          " best-available for sizing. Not full-floor consensus.";
      }
    }

    var emptyEl = $("sport-empty");
    var boardEl = $("board-content");
    var nmSlot = document.getElementById("near-miss-slot");
    if (!nmSlot && boardEl && boardEl.parentNode) {
      nmSlot = document.createElement("div");
      nmSlot.id = "near-miss-slot";
      boardEl.parentNode.insertBefore(nmSlot, boardEl.nextSibling);
    }
    if (nmSlot) nmSlot.innerHTML = hasBets ? renderNearMiss(activeSport, data) : "";
    if (!hasBets) {
      emptyEl.hidden = false;
      emptyEl.innerHTML = renderSportEmpty(activeSport, data);
      boardEl.hidden = true;
    } else {
      emptyEl.hidden = true;
      emptyEl.innerHTML = "";
      boardEl.hidden = false;

      MARKETS.forEach(function (market) {
        var container = $(market.id);
        var section = container && container.closest
          ? container.closest(".market-section")
          : document.querySelector('.market-section[data-market="' + market.key + '"]');
        var countEl = document.querySelector('[data-count="' + market.key + '"]');
        var filtered = sortBets(sportBets.filter(function (b) {
          return normalizeMarket(b.marketType) === market.key;
        }));
        // Basketball sub-filter: hide irrelevant market sections
        var hideSection = false;
        if (hasSub(activeSport) && activeSub === "props") {
          hideSection = market.key !== "prop";
        } else if (hasSub(activeSport) && activeSub === "lines") {
          hideSection = market.key === "prop";
        }
        if (section) section.hidden = hideSection;
        if (countEl) countEl.textContent = String(filtered.length);
        if (!container) return;
        if (hideSection) {
          container.innerHTML = "";
          return;
        }
        container.innerHTML = filtered.length
          ? filtered.map(renderCard).join("")
          : renderEmpty(market.label);
      });

      var skipped = $("skipped-note");
      if (data.skippedNote && hasBets) {
        skipped.hidden = false;
        skipped.innerHTML = "<strong>Also on radar:</strong> " + escapeHtml(data.skippedNote);
      } else {
        skipped.hidden = true;
        skipped.textContent = "";
      }
    }
  }

  function onNavClick(e) {
    var btn = e.target.closest && e.target.closest(".sport-tab");
    if (!btn || !lastPayload) return;
    var sport = btn.getAttribute("data-sport");
    if (!sport) return;
    activeSport = normalizeSport(sport);
    activeSub = hasSub(activeSport) ? "lines" : null;
    setHash(activeSport, activeSub);
    render(lastPayload);
  }

  function onSubNavClick(e) {
    var btn = e.target.closest && e.target.closest(".sub-chip");
    if (!btn || !lastPayload) return;
    var sub = btn.getAttribute("data-sub");
    if (!sub) return;
    if (!hasSub(activeSport)) activeSport = "NBA";
    activeSub = sub === "props" ? "props" : "lines";
    setHash(activeSport, activeSub);
    render(lastPayload);
  }

  function tickAge() {
    var parsed = lastPayload ? parseUpdatedAt(lastPayload.updatedAt) : null;
    $("age").textContent = formatAge(lastFetchAt || parsed);
  }

  function loadFromEmbedded() {
    if (window.BET_BOARD_DATA && typeof window.BET_BOARD_DATA === "object") {
      return window.BET_BOARD_DATA;
    }
    throw new Error("No embedded BET_BOARD_DATA");
  }

  function refresh() {
    return fetch(DATA_URL, { cache: "no-store" })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .catch(function (err) {
        console.info("Bet Board: using embedded data.js fallback.", err && err.message ? err.message : err);
        return loadFromEmbedded();
      })
      .then(function (data) {
        lastFetchAt = new Date();
        render(data);
      })
      .catch(function (err) {
        console.error("Bet Board load failed:", err);
        if (!lastPayload) {
          $("slate-name").textContent = "Unable to load board";
          $("summary").innerHTML = '<div class="load-error">Could not load data.json or data.js. Serve this folder over HTTP or ensure data.js is present.</div>';
          $("status-pill").textContent = "ERROR";
          $("status-pill").className = "status-pill status-stale";
        }
      });
  }

  function start() {
    hidePrivateLinks();
    if (/^#\/(performance|disclaimer)/.test(location.hash) && !PRIVATE_PAGES_ENABLED && !(PERFORMANCE_PAGE_ENABLED && /^#\/performance/.test(location.hash))) { try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} }
    setupTheme();
    var nav = $("sport-nav");
    if (nav) nav.addEventListener("click", onNavClick);
    var subNav = $("sub-nav");
    if (subNav) subNav.addEventListener("click", onSubNavClick);
    window.addEventListener("hashchange", function () {
      if (!lastPayload) return;
      if (pageRoute() || $("board-view").hidden) { render(lastPayload); if (pageRoute()) return; }
      var parsed = parseHash();
      if (parsed.sport) {
        activeSport = parsed.sport;
        activeSub = hasSub(parsed.sport) ? (parsed.sub || "lines") : null;
        render(lastPayload);
      }
    });
    refresh();
    setInterval(refresh, REFRESH_MS);
    setInterval(tickAge, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
