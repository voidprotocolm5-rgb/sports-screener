/**
 * Bearish Bulls Picks — multi-sport research dashboard.
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
    { id: "NBA", label: "Basketball (NBA)", nav: "NBA", short: "NBA" },
    { id: "NHL", label: "Hockey (NHL)", nav: "NHL", short: "NHL" },
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
    if (t === "NBA" || t === "BASKETBALL" || t === "BASKETBALL (NBA)") return "NBA";
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
    if (s === "gauge") return "NEAR MISS";
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
  function subTabsFor(data, sp) { var t = data && data.subTabs && data.subTabs[String(sp || "").toUpperCase()]; return Array.isArray(t) && t.length ? t : ["lines", "props"]; }
  function onlySubFor(data, sp) { var t = subTabsFor(data, sp); return t.length === 1 ? t[0] : null; }
  function defaultSubFor(data, sp) { return (data && data.defaultSub && data.defaultSub[String(sp || "").toUpperCase()]) || subTabsFor(data, sp)[0] || "lines"; }

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
      activeSub = hasSub(parsed.sport) ? (onlySubFor(lastPayload, parsed.sport) || parsed.sub || "lines") : null;
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
      activeSub = hasSub(def) ? defaultSubFor(data, def) : null;
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
    if (!activeSub) activeSub = defaultSubFor(data, activeSport);
    var allow = subTabsFor(data, activeSport);
    var chips = [
      { id: "lines", label: activeSport === "UFC" ? "Fights" : "Game lines", count: linesN },
      { id: "props", label: "Player props", count: propsN }
    ].filter(function (c) { return allow.indexOf(c.id) !== -1; });
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
      '<p class="dr-muted">Separate class — not counted toward the 5+ combined-source rule.</p></div>';
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
  function renderMonteCarlo(data) {
    var el = $("mc-strip"); if (!el) return;
    var m = data && data.monteCarlo; var lr = data && data.lastResults;
    if (DEMO || (!m && !lr)) { el.hidden = true; el.innerHTML = ""; return; }
    var h = "";
    if (lr && lr.items && lr.items.length) {
      h += '<div class="perf-head"><h2>' + escapeHtml(lr.title || "Last night\u2019s results") + '</h2><span class="perf-sub">' + escapeHtml(lr.sub || "") + "</span></div>" +
        '<div class="perf-grid">' + lr.items.map(function (r) {
          var u = r.units; var cls = u == null ? "" : (u >= 0 ? "up" : "down");
          return '<div class="perf-cell"><span class="perf-label">' + escapeHtml(r.label || "") + '</span><span class="perf-big">' + escapeHtml(String(r.result || "").toUpperCase()) + ' <span class="' + cls + '">' + (u == null ? "" : (u > 0 ? "+" : "") + escapeHtml(String(u)) + "u") + "</span></span>" +
            '<span class="perf-meta">' + escapeHtml(r.meta || "") + "</span></div>";
        }).join("") + "</div>" + (lr.note ? '<p class="perf-note">' + escapeHtml(lr.note) + "</p>" : "");
    }
    if (m) {
      var cell = function (c) { return '<div class="perf-cell"><span class="perf-label">' + escapeHtml(c.label) + '</span><span class="perf-big">' + escapeHtml(c.value) + '</span><span class="perf-meta">' + escapeHtml(c.meta || "") + "</span></div>"; };
      h += '<div class="perf-head mc-head"><h2>' + escapeHtml(m.title || "Monte Carlo backtest") + '</h2><span class="perf-sub">' + escapeHtml(m.sub || "") + "</span></div>";
      (m.blocks || []).forEach(function (b) {
        h += '<h3 class="mc-block-title">' + escapeHtml(b.title || "") + "</h3>" + '<div class="perf-grid mc-grid">' + (b.cells || []).map(cell).join("") + "</div>" +
          (b.note ? '<p class="perf-note">' + escapeHtml(b.note) + "</p>" : "");
      });
      if (m.note) h += '<p class="perf-note">' + escapeHtml(m.note) + "</p>";
    }
    el.hidden = false; el.innerHTML = h;
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
    var m = (location.hash || "").match(/^#\/(methodology|performance|disclaimer|props)/);
    if (!m) return null;
    if (m[1] === "props") return propsEnabled(lastPayload) ? "props" : null;
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
    return '<p class="page-kicker">How it works</p><h1>Methodology.</h1><p class="page-lede">A normalized research view. Older payloads still render through the legacy reader without changing their source, price or gate outcomes.</p>'+
      '<h2>Three display lanes</h2><ul><li><b>CLEARED:</b> verified independent YouTube ≥3, unique X ≥2, combined sources ≥5, booksAlign, all applicable gates pass, valid sharp fair, and EV &gt; 0. The 25-transcript YouTube funnel applies per sport.</li><li><b>Highest likelihood:</b> ordered parlay research when requested, for sourced rows with sharp fair and an observed price; hit % first, EV as tiebreaker. Not a publish approval.</li><li><b>Near miss:</b> all other sourced in-scope research, including source gaps, nonpositive EV, split markets, R16, no sharp fair or no price. Four-lane/excluded diagnostics are not included in tab totals.</li></ul>'+
      '<p><b>Publish rule remains 5+ combined sources and the required price edge; CLEARED maintains the additional 3 YouTube + 2 X + booksAlign requirement.</b> Filters and sorting never delimit or promote a pick.</p>'+
      '<h2>Fair prices and availability</h2><p>Prefer Pinnacle no-vig, then an exchange, then a validated three-book de-vig consensus. A rough estimate cannot enter Highest likelihood and is labeled indicative-only. Unknown quote times and opening lines stay unknown; the UI does not infer them.</p>'+
      '<h2>Live and historical records</h2><p>Started rows retain their pre-publication lane. Live/final status does not rewrite why a row failed. Earlier performance labels, including GAUGE, are historical ledger fields and not a fourth active lane.</p>'+
      '<h2>Research only</h2><p>No sportsbook links, betting instructions or bets placed. Details on fair de-vig, sources and blocked gates are shown per row. Model skepticism and independent source verification stay unchanged.</p>';
  }

  function pageDisclaimer() {
    return '<p class="page-kicker">Please read</p><h1>Disclaimer.</h1>' +
      '<div class="callout warn"><b>21+ only.</b> Gambling problem? Call <a href="tel:18004262537">1-800-GAMBLER</a> (1-800-426-2537) or visit <a href="https://www.ncpgambling.org" rel="noopener">ncpgambling.org</a>.</div>' +
      "<ul><li>Bearish Bulls Picks is a <b>research and education</b> tool. It is not betting, financial or investment advice.</li>" +
      "<li>We <b>do not place bets</b>, take wagers, or handle money, and we are not a sportsbook or a paid pick service.</li>" +
      "<li>Odds, lines, injuries and model outputs change and can be wrong or stale. Always confirm prices with a licensed sportsbook.</li>" +
      "<li>Past results do not predict future results. The track record is small and is shown with its sample size.</li>" +
      "<li>Sports betting is legal only in some jurisdictions. You are responsible for following the laws where you live.</li>" +
      "<li>Third-party names (YouTube channels, X accounts, models, sites) are cited for attribution only and do not endorse this site.</li></ul>" +
      '<p>Set limits, never chase losses, and take breaks. Self-exclusion programs are available in every legal state.</p>';
  }
  // ---- Player Props page (#/props) — staged Oct 20 2026; enabled only when data.playerProps.enabled === true ----
  function propsEnabled(data) { return !!(data && data.playerProps && data.playerProps.enabled === true); }
  function propCard(c) {
    var started = c.gameState === "live" || (c.startCT && new Date(c.startCT) <= new Date());
    var tierCls = String(c.tier || "").toLowerCase();
    var rules = (c.rules || []).map(function (r) {
      return '<li class="pp-rule pp-' + escapeHtml(r.result) + '"><b>' + escapeHtml(r.result === "pass" ? "✓" : r.result === "fail" ? "✗" : "–") + "</b> " + escapeHtml(r.rule) + (r.reason ? ' <span class="muted">' + escapeHtml(r.reason) + "</span>" : "") + "</li>";
    }).join("");
    var yt = (c.ytWho || []).map(escapeHtml).join(", ") || "—";
    var xl = (c.xList || []).map(function (u) { return "@" + escapeHtml(u); }).join(", ");
    var xo = (c.xOutside || []).map(function (u) { return "@" + escapeHtml(u); }).join(", ");
    return '<li class="pp-card pp-tier-' + tierCls + '">' +
      '<div class="pp-head"><span class="pp-rank">#' + escapeHtml(c.rank) + '</span><span class="pp-tier tier-' + tierCls + '">' + escapeHtml(c.tier) + "</span>" +
      (started ? '<span class="pp-live">LIVE</span>' : "") + '<span class="pp-time">' + escapeHtml(c.timeCT || "") + "</span></div>" +
      '<div class="pp-player">' + escapeHtml(c.player) + "</div>" +
      (c.edgeLabel ? '<div class="pp-edge"><span class="tier-tag ' + (c.edgeStatus === "edge" ? "etier-edge" : (c.edgeStatus === "close" ? "etier-close" : "")) + '">' + escapeHtml(String(c.edgeLabel).toUpperCase()) + "</span> <span class=\"muted\">" + escapeHtml(String(c.combined != null ? c.combined : "")) + " combined sources \u00b7 under the 5+ floor</span></div>" : "") +
      '<div class="pp-prop">' + escapeHtml(c.prop) + "</div>" +
      '<div class="pp-price"><b>' + escapeHtml(c.odds || "—") + "</b> " + escapeHtml(c.book || "") + ' <span class="muted">· ' + escapeHtml(c.fairLabel || "fair") + " " + escapeHtml(c.fair || "n/a") + (c.evPct != null ? " · EV " + (c.evPct > 0 ? "+" : "") + escapeHtml(c.evPct) + "%" : "") + "</span></div>" +
      '<div class="pp-game muted">' + escapeHtml(c.game) + "</div>" +
      '<div class="pp-src"><span>YouTube ' + escapeHtml(c.yt) + ":</span> " + yt + "</div>" +
      '<div class="pp-src"><span>X send-it list ' + escapeHtml((c.xList || []).length) + ":</span> " + (xl || "—") + "</div>" +
      '<div class="pp-src"><span>X outside list ' + escapeHtml((c.xOutside || []).length) + ":</span> " + (xo || "—") + "</div>" +
      '<details class="pp-rules"><summary>Rules: ' + escapeHtml(c.passCount) + " passed · " + escapeHtml(c.failCount) + " failed</summary><ul>" + rules + "</ul></details>" +
      "</li>";
  }
  function pageProps(data) {
    var P = (data && data.playerProps) || {};
    var order = P.order || ["NBA", "NHL", "Soccer"];
    var groups = P.groups || {};
    var body = order.map(function (sp) {
      var list = groups[sp] || [];
      var label = { NBA: "NBA player props", MLB: "MLB (World Series) player props", CFB: "College football player props", Soccer: "Soccer player props" }[sp] || sp;
      return '<section class="pp-group" id="pp-' + escapeHtml(sp) + '"><h2>' + escapeHtml(label) + ' <span class="tab-count">' + list.length + "</span></h2>" +
        (list.length ? '<ol class="pp-list">' + list.map(propCard).join("") + "</ol>" : '<p class="muted">' + escapeHtml((P.emptyText || {})[sp] || "No " + sp + " props reached the board today.") + "</p>") + "</section>";
    }).join("");
    return "<p class='page-kicker'>" + escapeHtml(siteName(data)) + "</p><h1>Player Props.</h1><p class='muted'>" + escapeHtml(P.note || "Research only. Ranked by engine tier, then combined sources. Start times CT.") + "</p>" +
      "<p class='muted'>Updated " + escapeHtml(P.updatedAtLabel || "") + "</p>" + renderAttd(null, data) + renderOvers("NBA", data) + renderOvers("NFL", data) + body;
  }
  var SITE_NAME = "Bearish Bulls Picks";
  function siteName(data) { return (data && data.siteName) || SITE_NAME; }
  function applySiteName(data, r) {
    var n = siteName(data);
    var names = { props: "Player Props", performance: "Performance", methodology: "Methodology", disclaimer: "Disclaimer" };
    document.title = r && names[r] ? names[r] + " · " + n : n;
    var wm = document.querySelector(".wordmark");
    if (wm && wm.lastChild && wm.lastChild.nodeType === 3 && wm.lastChild.nodeValue !== n) { wm.lastChild.nodeValue = n; wm.setAttribute("aria-label", n + " home"); }
  }
  // SCHEMA v3.0.0 normalized board — UI consumes Screener outcomes; no gate recomputation.
  var N3_LANES = [
    {id:"cleared", label:"CLEARED"},
    {id:"likely", label:"Highest likelihood"},
    {id:"near_miss", label:"Near miss"}
  ];
  var n3State = {sport:null,game:"",market:"",lane:"",minSources:0,evPositive:false,sharp:false,time:"",hideLive:false,sort:"hit",direction:"desc",view:"table"};
  var n3Bound = false;

  function n3Rows(data) {
    var out=[];
    if (Array.isArray(data.normalized_rows)) out = data.normalized_rows;
    else if (Array.isArray(data.normalizedRows)) out = data.normalizedRows;
    else if (String(data.schema_version||"").split(".")[0]==="3" && Array.isArray(data.rows)) out=data.rows;
    else if (Array.isArray(data.normalized_passes)) {
      data.normalized_passes.forEach(function(p){ if(p&&Array.isArray(p.rows)) out=out.concat(p.rows); });
    }
    // Public serialization never carries private evidence/provenance/ref paths.
    return out.map(function(r){ return r; });
  }
  function n3Visible(data) { return n3Rows(data).filter(function(r){ return r.lane!=="excluded"; }); }
  function n3Lane(id) { return N3_LANES.filter(function(l){return l.id===id;})[0] || N3_LANES[2]; }
  function n3Time(r) {
    if (!r.start_time) return "Start unavailable";
    return new Date(r.start_time).toLocaleString("en-US",{timeZone:"America/Chicago",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})+" CT";
  }
  function n3Market(m) { return String(m||"").replace(/_/g," ").replace(/\b\w/g,function(c){return c.toUpperCase();}); }
  function n3Num(v) { return v==null || Number.isNaN(Number(v)) ? null : Number(v); }
  function n3Pct(v) { var n=n3Num(v); return n==null ? "—" : n.toFixed(1)+"%"; }
  function n3Ev(v) { var n=n3Num(v); return n==null ? "—" : (n>0?"+":"")+n.toFixed(2)+"%"; }
  function n3Fair(r) { return r.price && r.price.fair_source && r.price.fair_source!=="none"; }
  function n3Blockers(r) {
    return (r.blockers||[]).map(function(b){return '<span class="n3-blocker" title="'+escapeHtml(b.gate||"")+(b.rule_id?" · "+escapeHtml(b.rule_id):"")+'">'+escapeHtml(b.human||b.code)+"</span>";}).join("") || '<span class="n3-blocker n3-pass">All CLEARED gates passed</span>';
  }
  function n3FilterControls(data, rows) {
    var games=Array.from(new Set(rows.map(function(r){return r.game||r.game_id;}))).sort();
    var markets=Array.from(new Set(rows.map(function(r){return r.market;}))).sort();
    var times=Array.from(new Set(rows.map(function(r){return r.start_time;}).filter(Boolean))).sort();
    var timeOpts='<option value="">All start times</option>';
    if(times.length>1) {
      var mid=times[Math.floor(times.length/2)];
      timeOpts+='<option value="early">Before '+n3Time({start_time:mid})+'</option><option value="late">At/after '+n3Time({start_time:mid})+'</option>';
    }
    n3State.timeCutoff=times.length>1?times[Math.floor(times.length/2)]:null;
    return '<section class="n3-controls" aria-label="Board filters">'+
      '<div class="n3-controls-top"><div><p class="page-kicker">Normalized research board</p><h2>Every prop, one sortable view.</h2></div><div class="n3-view-switch" aria-label="Display mode"><button type="button" data-n3-view="table">Table</button><button type="button" data-n3-view="cards">Cards</button></div></div>'+
      '<div class="n3-filter-grid">'+
      '<label>Sport<select id="n3-sport"><option value="all">All sports</option>'+sportsList(data).map(function(s){return '<option value="'+escapeHtml(normalizeSport(s.id))+'">'+escapeHtml(s.nav||s.id)+'</option>';}).join("")+'</select></label>'+
      '<label>Game<select id="n3-game"><option value="">All games</option>'+games.map(function(g){return '<option>'+escapeHtml(g)+'</option>';}).join("")+'</select></label>'+
      '<label>Market<select id="n3-market"><option value="">All markets</option>'+markets.map(function(m){return '<option>'+escapeHtml(m)+'</option>';}).join("")+'</select></label>'+
      '<label>Lane<select id="n3-lane"><option value="">All three lanes</option>'+N3_LANES.map(function(l){return '<option value="'+l.id+'">'+l.label+'</option>';}).join("")+'</select></label>'+
      '<label>Minimum sources<input id="n3-min" type="number" min="0" step="1" value="0" inputmode="numeric"></label>'+
      '<label>Start time<select id="n3-time">'+timeOpts+'</select></label>'+
      '</div><div class="n3-checks"><label><input id="n3-ev" type="checkbox"> EV &gt; 0 only</label><label><input id="n3-sharp" type="checkbox"> Has sharp fair</label><label><input id="n3-live" type="checkbox"> Hide LIVE</label><button type="button" id="n3-reset">Reset filters</button></div>'+
      '</section>';
  }
  function n3Apply(rows) {
    
    n3State.sport=$("n3-sport").value;
    n3State.game=$("n3-game").value; n3State.market=$("n3-market").value; n3State.lane=$("n3-lane").value;
    n3State.minSources=Math.max(0,Number($("n3-min").value)||0); n3State.evPositive=$("n3-ev").checked;
    n3State.sharp=$("n3-sharp").checked; n3State.time=$("n3-time").value; n3State.hideLive=$("n3-live").checked;
    return rows.filter(function(r){
      var price=r.price||{}, counts=(r.evidence||{}).counts||{};
      if(n3State.sport!=="all" && normalizeSport(r.sport)!==normalizeSport(n3State.sport))return false;
      if(n3State.game && (r.game||r.game_id)!==n3State.game)return false;
      if(n3State.market && r.market!==n3State.market)return false;
      if(n3State.lane && r.lane!==n3State.lane)return false;
      var combined=n3Num(counts.combined_raw);if(combined===null || combined<n3State.minSources)return false;
      if(n3State.evPositive && !(n3Num(price.ev_pct)>0))return false;
      if(n3State.sharp && !n3Fair(r))return false;
      if(n3State.hideLive && r.status==="live")return false;
      if(n3State.time && n3State.timeCutoff) {
        if(n3State.time==="early" && r.start_time>=n3State.timeCutoff)return false;
        if(n3State.time==="late" && r.start_time<n3State.timeCutoff)return false;
      }
      return true;
    });
  }
  function n3SortRows(rows) {
    var keyMap={hit:"hit_pct",ev:"ev_pct",sources:"combined_sources",start:"start_time"};
    var key=keyMap[n3State.sort]||"hit_pct", dir=n3State.direction==="asc"?1:-1;
    return rows.slice().sort(function(a,b){
      if(n3State.sort==="hit"||n3State.sort==="ev") {
        var pg={sharp:0,no_sharp_fair:1,unpriced:2};
        var pd=(pg[a.price.price_group]||0)-(pg[b.price.price_group]||0);
        if(pd)return pd;
      }
      var av=(a.sort||{})[key], bv=(b.sort||{})[key];
      if(key==="start_time") {av=Date.parse(a.start_time);bv=Date.parse(b.start_time);}
      av=n3Num(av);bv=n3Num(bv);
      if(av===null&&bv!==null)return 1;if(bv===null&&av!==null)return -1;
      if(av!==null&&bv!==null&&av!==bv)return (av-bv)*dir;
      var an=(a.evidence.counts||{}).combined_raw||0,bn=(b.evidence.counts||{}).combined_raw||0;
      return bn-an || String(a.row_id).localeCompare(String(b.row_id));
    });
  }
  function n3RowHtml(r) {
    var price=r.price||{},counts=(r.evidence||{}).counts||{}, sharp=n3Fair(r), live=r.status==="live", example=r.example===true;
    var hit=sharp?price.fair_hit_pct:price.indicative_hit_pct, ev=sharp?price.ev_pct:null;
    var odd=price.best_price&&price.best_price.american!=null?(price.best_price.american>0?"+":"")+price.best_price.american:"—";
    var flags=(r.flags||[]).concat(r.migration_warnings||[]);
    var context='<div class="n3-subline">'+escapeHtml(r.market_type||"")+'</div>';
    return '<tr data-row-id="'+escapeHtml(r.row_id)+'"'+(example?' class="n3-demo-row"':'')+'>'+
      '<td data-label="Pick"><strong>'+escapeHtml(r.selection)+'</strong>'+(example?'<span class="n3-demo">DEMO</span>':'')+context+'</td>'+
      '<td data-label="Game / start">'+escapeHtml(r.game||r.game_id)+'<div class="n3-subline">'+escapeHtml(n3Time(r))+(live?' · <span class="nm-live">LIVE</span>':'')+'</div></td>'+
      '<td data-label="Market">'+escapeHtml(n3Market(r.market))+'</td>'+
      '<td data-label="Lane / why"><span class="n3-lane n3-'+r.lane+'">'+n3Lane(r.lane).label+'</span><div class="n3-blockers">'+n3Blockers(r)+'</div></td>'+
      '<td data-label="Hit %" class="n3-numeric">'+n3Pct(hit)+(sharp?'<div class="n3-subline">sharp fair</div>':'<div class="n3-subline n3-indicative">indicative only</div>')+'</td>'+
      '<td data-label="EV %" class="n3-numeric '+(n3Num(ev)>0?"ev-pos":n3Num(ev)<0?"ev-neg":"")+'">'+n3Ev(ev)+'</td>'+
      '<td data-label="Sources" class="n3-numeric"><strong>'+escapeHtml(counts.combined_raw)+'</strong><div class="n3-subline">YT '+escapeHtml(counts.yt)+' · X '+escapeHtml(counts.x)+'</div></td>'+
      '<td data-label="Best price"><strong>'+escapeHtml(odd)+'</strong><div class="n3-subline">'+escapeHtml(price.best_book||"unpriced")+(price.best_is_sharp_only?' · sharp only':'')+'</div>'+(flags.length?'<details class="n3-notes"><summary>Research notes</summary>'+flags.map(function(f){return '<p>'+escapeHtml(f)+'</p>';}).join("")+'</details>':'')+'</td></tr>';
  }
  function n3Table(rows) {
    var h='<div class="n3-table-scroll"><table class="n3-table"><caption class="sr-only">Normalized rows with source and price blockers</caption><thead><tr>';
    [["Pick",null],["Game / start","start"],["Market",null],["Lane / why",null],["Hit %","hit"],["EV %","ev"],["Sources","sources"],["Best price",null]].forEach(function(c){
      h+='<th scope="col">'+(c[1]?'<button type="button" data-n3-sort="'+c[1]+'">'+c[0]+'<span aria-hidden="true"> '+(n3State.sort===c[1]?(n3State.direction==="asc"?"↑":"↓"):"↕")+'</span></button>':c[0])+'</th>';
    });
    h+='</tr></thead><tbody>';
    N3_LANES.forEach(function(l){
      var laneRows=rows.filter(function(r){return r.lane===l.id;});
      h+='<tr class="n3-lane-heading" data-lane="'+l.id+'"><th colspan="8"><div><span>'+l.label+'</span><b>'+laneRows.length+'</b></div>';
      if(l.id==='cleared') h+='<p>3+ verified YouTube · 2+ X · 5+ combined · booksAlign · all gates pass · sharp fair · EV &gt; 0.</p>';
      else if(l.id==='likely') h+='<p>Parlay-research ordering by sharp fair hit %, then EV. Every blocker stays visible; this does not mean publishable.</p>';
      else h+='<p>Sourced research missing a lane requirement, rough/unpriced markets, or other blockers. Sharp-fair rows rank before indicative-only rows.</p>';
      h+='</th></tr>';
      if(laneRows.length) h+=laneRows.map(n3RowHtml).join("");
      else h+='<tr class="n3-empty-lane"><td colspan="8">'+(l.id==='cleared'?'No rows cleared: every candidate missed at least one required source, booksAlign, sharp-fair, gate or EV &gt; 0 condition. Read its blocker chips below.':'No rows match this lane and the current filters.')+'</td></tr>';
    });
    return h+'</tbody></table></div>';
  }
  function n3Legacy(data,sport) {
    var L=data.oversNearMiss&&data.oversNearMiss[sport];
    if(!L)return "";
    return '<details class="n3-legacy"><summary>Original research notes · '+escapeHtml(L.title||sport)+'</summary>'+
      '<p>'+escapeHtml(L.lead||"")+'</p><p>'+escapeHtml(L.updated||"")+'</p><p>'+escapeHtml(L.label||"")+'</p><p>'+escapeHtml(L.note||"")+'</p><p>'+escapeHtml(L.caveat||"")+'</p>'+
      '<p class="n3-subline">This retains the signed-off narrative. The normalized table above is sourced from Screener’s structured audit, not from parsing these notes. Historical tier prose is replaced by the three-lane legend.</p></details>';
  }
  function n3Legend() {
    return '<section class="n3-legend" aria-label="Lane definitions"><h2>One legend. Three research lanes.</h2><div class="n3-legend-grid">'+
      '<div><span class="n3-lane n3-cleared">CLEARED</span><p>All source, book, gate, sharp-fair and positive-EV requirements passed. No row is upgraded by the UI.</p></div>'+
      '<div><span class="n3-lane n3-likely">Highest likelihood</span><p>Sharp-fair parlay research ordered by hit %. It is not the publish floor and can still have source or EV blockers.</p></div>'+
      '<div><span class="n3-lane n3-near_miss">Near miss</span><p>Other sourced in-scope research. Chips explain failed floors, price limits, splits or unvalidated fair prices.</p></div>'+
      '</div></section>';
  }
  function renderNormalized(data) {
    lastPayload=data; renderProvisional(data); renderPerformance(data); renderMonteCarlo(data);
    $("hero-gauge").innerHTML='<div class="hg-empty"><p class="hg-empty-title">Read the blockers, not just the hit rate.</p><p>All existing Nov 5 NBA and TNF props are preserved below. No new picks, prices or gates were created by this layout change.</p></div>';
    activeSport=resolveActiveSport(data); activeSub=hasSub(activeSport)?(onlySubFor(data,activeSport)||defaultSubFor(data,activeSport)):null; setHash(activeSport,activeSub);
    $("slate-name").textContent=data.slate||"Normalized research slate";
    var parsed=parseUpdatedAt(data.updatedAt);$("updated-at").textContent=data.updatedAtLabel||(parsed?parsed.toLocaleString():"—");$("age").textContent=formatAge(lastFetchAt||parsed);
    $("summary").textContent="SCHEMA v3.0.0 · legacy research preserved · original publish and CLEARED floors unchanged.";
    $("status-pill").textContent="RESEARCH";$("status-pill").className="status-pill status-live";
    $("gauge-banner").hidden=true;$("example-banner").hidden=!hasExampleContent(data);
    n3State.sport=activeSport;
    var sportRows=n3Visible(data), rows=sportRows.filter(function(r){return normalizeSport(r.sport)===normalizeSport(activeSport);});
    $("sport-empty").hidden=true;$("board-content").hidden=true;var slot=$("near-miss-slot");if(slot)slot.innerHTML="";
    var old=$("normalized-board");if(old)old.remove();
    renderSportNavNormalized(data,sportRows);
    var host=document.createElement("div");host.id="normalized-board";
    host.innerHTML=n3FilterControls(data,rows)+n3Legend()+'<section class="n3-board"><div id="n3-results" aria-live="polite"></div><div id="n3-table-host"></div></section>'+n3Legacy(data,activeSport);
    var main=document.querySelector(".main");main.insertBefore(host,$("live-slot"));
    renderSportNavNormalized(data,sportRows);
    var subNav=$("sub-nav");if(subNav){subNav.hidden=true;subNav.innerHTML="";}
    $("n3-sport").value=n3State.sport&&Array.from($("n3-sport").options).some(function(o){return o.value===n3State.sport;})?n3State.sport:activeSport;
    ["game","market","lane","time"].forEach(function(k){$("n3-"+k).value=n3State[k]||"";});
    $("n3-min").value=n3State.minSources;$("n3-ev").checked=n3State.evPositive;$("n3-sharp").checked=n3State.sharp;$("n3-live").checked=n3State.hideLive;
    host.addEventListener("input",n3Update);host.addEventListener("change",n3Update);host.addEventListener("click",n3Click);
    n3Bound=true;
    n3Update();
  }
  function n3Click(e) {
    var s=e.target.closest("[data-n3-sort]");
    if(s) {var k=s.getAttribute("data-n3-sort"); if(n3State.sort===k)n3State.direction=n3State.direction==="asc"?"desc":"asc";else{n3State.sort=k;n3State.direction=k==="start"?"asc":"desc";} n3Update();}
    var v=e.target.closest("[data-n3-view]");
    if(v){n3State.view=v.getAttribute("data-n3-view");n3Update();}
    if(e.target.closest("#n3-reset")) {
      n3State.game=n3State.market=n3State.lane=n3State.time="";n3State.minSources=0;n3State.evPositive=n3State.sharp=n3State.hideLive=false;
      ["game","market","lane","time"].forEach(function(k){$("n3-"+k).value="";});$("n3-min").value=0;$("n3-ev").checked=false;$("n3-sharp").checked=false;$("n3-live").checked=false;n3Update();
    }
  }
  function n3Update() {
    if(!$("normalized-board"))return;
    n3State.sport=$("n3-sport").value;
    var scoped=n3Visible(lastPayload).filter(function(r){return n3State.sport==="all"||normalizeSport(r.sport)===normalizeSport(n3State.sport);});
    function options(id,values,label,formatter) {
      var el=$(id),old=el.value;
      el.innerHTML='<option value="">'+label+'</option>'+values.map(function(v){return '<option>'+escapeHtml(v)+'</option>';}).join("");
      el.value=values.indexOf(old)!==-1?old:"";
    }
    options("n3-game",Array.from(new Set(scoped.map(function(r){return r.game||r.game_id;}))).sort(),"All games");
    options("n3-market",Array.from(new Set(scoped.map(function(r){return r.market;}))).sort(),"All markets");
    var filtered=n3SortRows(n3Apply(n3Visible(lastPayload)));
    var table=$("n3-table-host");table.innerHTML=n3Table(filtered);table.className=n3State.view==="cards"?"n3-view-cards":"n3-view-table";
    $("n3-results").innerHTML='<p><strong>'+filtered.length+'</strong> of '+scoped.length+' in-scope rows shown · sort: '+n3State.sort+' '+n3State.direction+'</p>'+(!filtered.length?'<div class="n3-no-results"><h3>No rows match these filters.</h3><p>Nothing was hidden by a source or publish gate. Reset filters to restore the preserved slate.</p><button type="button" id="n3-empty-reset">Reset filters</button></div>':"");
    var er=$("n3-empty-reset");if(er)er.addEventListener("click",function(){$("n3-reset").click();});
    document.querySelectorAll("[data-n3-view]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-n3-view")===n3State.view?"true":"false");});
  }
  function renderSportNavNormalized(data, rows) {
    $("sport-nav").innerHTML=sportsList(data).map(function(sp){var id=normalizeSport(sp.id),n=rows.filter(function(r){return normalizeSport(r.sport)===id;}).length;return '<span class="sport-tab-static"><span>'+escapeHtml(sp.nav||id)+'</span><span class="tab-count">'+n+' rows</span></span>';}).join("");
  }

  function pageMethodology() {
    return '<p class="page-kicker">How it works</p><h1>Methodology.</h1><p class="page-lede">A normalized view of Screener-signed research. The UI never re-derives a source floor, fair price, CLEARED result, or parlay outcome.</p>'+
      '<h2>Schema and lanes</h2><p>Payload contract: <b>SCHEMA v3.0.0</b>, engine v1.2.0. Three presentation lanes are CLEARED, Highest likelihood and Near miss. Historical performance retains the old tier labels only as historical ledger records.</p>'+
      '<ul><li><b>CLEARED:</b> raw verified independent YT ≥3, unique X ≥2, combined raw ≥5, booksAlign v2, all applicable gates pass, valid sharp fair, EV &gt; 0 at best eligible same-line price, and the per-sport 25-transcript funnel passes.</li><li><b>Highest likelihood:</b> a parlay-research view for non-excluded rows with counted sources, a sharp fair probability, an observed same-line price and no R16 failure. This is not permission to publish and does not relax gates.</li><li><b>Near miss:</b> all remaining sourced in-scope rows, including rough no-sharp estimates. Splits and zero-source/removed rows are excluded from the three lanes.</li></ul>'+
      '<h2>Sources and prices</h2><p>Previous CT day plus game-day YouTube uploads, verified and deduplicated by person/network; X send-it posters remain separate. Leans, parlay legs, demos and excluded sources do not become counted sources. Fair priority is Pinnacle no-vig → exchange no-vig → validated three-book consensus. Aggregate text is not enough to claim sharp fair; those rows remain indicative-only.</p>'+
      '<p>EV uses signed-off percent values. No GUI sorting or filtering changes the original price, probability, source count, lane, blocker or price group. Unknown exact quote timestamps remain unknown.</p>'+
      '<h2>Availability and grading</h2><p>LIVE/FINAL does not change a pregame lane at publication. Grading is separate, cited, and does not rewrite which gates failed. The frozen lane-at-publish is what future Performance/CLV reporting partitions on.</p>'+
      '<h2>Research, not betting</h2><p>No sportsbook links or bets are placed. The source ledger, correlation-aware builder and Performance overhaul are later approved milestones, not silently inferred here.</p>';
  }

  function renderPage(data) {
    var r = pageRoute(), pv = $("page-view"), bv = $("board-view");
    applySiteName(data, r);
    var ppl = document.querySelector('a.navlink[href="#/props"]'); if (ppl) ppl.hidden = !propsEnabled(data);
    if (!pv || !bv) return false;
    document.querySelectorAll(".navlink").forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("href") === "#/" + r ? "page" : "false"); });
    if (!r) { pv.hidden = true; bv.hidden = false; return false; }
    pv.innerHTML = '<article class="page">' + (r === "props" ? pageProps(data) : r === "performance" ? pagePerformance(data) : r === "methodology" ? pageMethodology() : pageDisclaimer()) +
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
          why: "EXAMPLE: no cited model clears break-even, so it is a near miss.", sources: { youtube: 4, xSendIt: 2, booksAlign: false },
          splits: { publicBetsPct: 72, moneyPct: 70, side: "Over", source: "Example splits feed" }, rlm: { flag: false },
          ledger: { booksAlign: false, booksAlignWhy: "EXAMPLE: best o6.5 −110 → BE 52.4%; no cited model." } }),
        ex({ id: "demo-3", sport: "NHL", tier: "gauge", marketType: "prop", pick: "Example Player o2.5 SOG", line: "−130", game: "Example C @ Example D · 8:00 PM CT", consensusPct: 100, ev: "n/a",
          why: "EXAMPLE prop card.", sources: { youtube: 5, xSendIt: 1, booksAlign: false }, ledger: {} })
      ],
      nearMiss: { NHL: [{ pick: "Example Team E ML", game: "Example E @ Example F · 9:00 PM CT", yt: 3, x: 1, total: 4, booksAlign: true, booksAlignWhy: "EXAMPLE: model +3.1pp", gap: "EXAMPLE: needs 2 more sources.",
        consensus: [{ site: "Example Consensus Site", pick: "Team E ML" }], splits: { publicBetsPct: 45, moneyPct: 52, side: "Team E", source: "Example splits feed" } }] },
      todaysGauge: { title: "Today's research", label: "EXAMPLE DATA", items: [
        { rank: 1, tier: "CLEARED", pick: "Example Team A ML", line: "−125", sport: "NHL", game: "Example A @ Example B", timeCT: "7:00 PM CT", yt: 5, x: 3, booksAlign: true, edge: "+5.4pp", rationale: "EXAMPLE rationale." },
        { rank: 2, tier: "NEAR MISS", pick: "Over 6.5", line: "−110", sport: "NHL", game: "Example C @ Example D", timeCT: "8:00 PM CT", yt: 4, x: 2, booksAlign: false, rationale: "EXAMPLE rationale." }] },
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


  // Legacy engine tier reader; active v3 rows use the three display lanes above.
  function isFinalRow(o) { return !!o && (o.final === true || String(o.status || "").toUpperCase() === "FINAL"); }
  function isLiveRow(o) {
    if (!o || isFinalRow(o)) return false;
    if (o.live === true || String(o.gameState || "") === "live") return true;
    var t = Date.parse(o.startCT || o.start_ct || "");
    return !isNaN(t) && t <= Date.now();
  }
  function liveBadge(o) { return isLiveRow(o) ? '<span class="nm-live" title="Started: pre-game tier and sources shown">LIVE</span> ' : ""; }
  function engineBadge(t) {
    var k = String(t || "").toLowerCase();
    if (!k) return "";
    return '<span class="tier-tag etier etier-' + escapeHtml(k) + '">' + escapeHtml(String(t).toUpperCase()) + "</span>";
  }
  function rulesHtml(rules, open) {
    if (!rules || !rules.length) return "";
    var icon = { pass: "\u2713", fail: "\u2717", na: "\u2013" };
    var nPass = rules.filter(function (r) { return r.result === "pass"; }).length;
    var nFail = rules.filter(function (r) { return r.result === "fail"; }).length;
    var items = rules.map(function (r) {
      return '<li class="rule rule-' + escapeHtml(r.result) + '"><span class="rule-ic">' + (icon[r.result] || "?") + '</span><span class="rule-id">' +
        escapeHtml(String(r.rule).replace(/_/g, " ")) + '</span><span class="rule-why">' + escapeHtml(r.reason || "") + "</span></li>";
    }).join("");
    return '<details class="rules"' + (open ? " open" : "") + '><summary>Rules: ' + nPass + " passed \u00b7 " + nFail + " failed \u00b7 " + (rules.length - nPass - nFail) + " n/a</summary><ul>" + items + "</ul></details>";
  }
  function engineChips(o) {
    var s = o.sources || {};
    var c = '<span class="source-chip">YT ' + escapeHtml(String(s.youtube != null ? s.youtube : o.yt)) + (s.ytRaw && s.ytRaw !== s.youtube ? " (" + escapeHtml(String(s.ytRaw)) + " raw)" : "") + "</span>" +
      '<span class="source-chip">X ' + escapeHtml(String(s.xSendIt != null ? s.xSendIt : o.x)) + "</span>" +
      '<span class="source-chip">Combined ' + escapeHtml(String(o.combined)) + "</span>";
    if (o.edgePlus) c += '<span class="source-chip chip-edge">edge+' + (o.evPct != null ? " " + escapeHtml(String(o.evPct)) + "% EV" : "") + "</span>";
    if (o.ytWithUnverified != null && o.ytWithUnverified > (s.youtube || 0)) c += '<span class="source-chip chip-warn">with unverified: ' + o.ytWithUnverified + '</span>';
    return '<div class="sources">' + c + "</div>";
  }
  function renderEngineCard(bet) {
    var cls = "card is-engine etier-card-" + String(bet.engineTier || "").toLowerCase();
    if (isFinalRow(bet)) return "";
    var badges = liveBadge(bet) + engineBadge(bet.engineTier) + (bet.edgeLabel ? '<span class="tier-tag ' + (bet.edgeStatus === "edge" ? "etier-edge" : "etier-close") + '">' + escapeHtml(String(bet.edgeLabel).toUpperCase()) + "</span>" : (bet.edgePlus ? '<span class="tier-tag etier-edge">EDGE+</span>' : "")) + (bet.rank != null ? '<span class="rank-badge">#' + escapeHtml(bet.rank) + "</span>" : "") + renderResultBadge(bet.result);
    return '<article class="' + cls + '" data-id="' + escapeHtml(bet.id) + '">' +
      '<div class="card-top"><div class="pick-block"><p class="pick">' + escapeHtml(bet.pick) + '</p><span class="line">' + escapeHtml(bet.line) + "</span></div>" +
      '<div class="badges">' + badges + "</div></div>" +
      '<p class="game">' + escapeHtml(bet.game) + "</p>" + renderResultLine(bet.result) +
      '<div class="stats">' +
        '<div class="stat"><span class="stat-label">Starts</span><span class="stat-value">' + escapeHtml(bet.timeCT || "\u2014") + "</span></div>" +
        '<div class="stat"><span class="stat-label">Best price</span><span class="stat-value">' + escapeHtml(String(bet.bestOdds || "\u2014") + (bet.bestBook ? " " + bet.bestBook : "")) + "</span></div>" +
        '<div class="stat"><span class="stat-label">Sharp fair</span><span class="stat-value">' + escapeHtml(String(bet.fairOdds || "n/a")) + "</span></div>" +
        (bet.evPct != null ? '<div class="stat"><span class="stat-label">EV</span><span class="stat-value ' + (bet.evPct > 0 ? "ev-pos" : "ev-neg") + '">' + (bet.evPct > 0 ? "+" : "") + escapeHtml(String(bet.evPct)) + "%</span></div>" : "") +
      "</div>" +
      (bet.booksComparedText || bet.floorText ? '<p class="game">' + escapeHtml([bet.booksComparedText ? "Books compared: " + bet.booksComparedText : "", bet.floorText || ""].filter(Boolean).join(" \u00b7 ")) + "</p>" : "") +
      '<div class="why-block"><span class="why-label">Why it\u2019s here</span><p class="why">' + escapeHtml(bet.rationale || "") + '</p><p class="why">' + escapeHtml(bet.why || "") + "</p></div>" +
      engineChips(bet) + rulesHtml(bet.rules, true) +
      "</article>";
  }
  function renderEngineNm(n) {
    if (isFinalRow(n)) return "";
    return '<li class="nm-item is-engine">' +
      '<div class="nm-pick">' + liveBadge(n) + engineBadge(n.engineTier) + (n.edgePlus ? ' <span class="tier-tag etier-edge">EDGE+</span>' : "") + " " + escapeHtml(n.pick || "") + ' <span class="nm-price">' + escapeHtml(n.line || "") + "</span></div>" +
      '<div class="nm-game">' + escapeHtml(n.game || "") + "</div>" +
      engineChips(n) +
      '<div class="nm-gap">' + escapeHtml(n.gap || "") + "</div>" +
      (n.why ? '<div class="nm-line">' + escapeHtml(n.why) + "</div>" : "") +
      rulesHtml(n.rules, false) + "</li>";
  }
  function renderProvisional(data) {
    var pv = data && data.provisional; var el = $("provisional-banner");
    if (!el) { var hg = $("hero-gauge"); if (!hg || !hg.parentNode) return; el = document.createElement("div"); el.id = "provisional-banner"; el.className = "provisional-banner"; el.setAttribute("role", "note"); hg.parentNode.insertBefore(el, hg); }
    if (!pv || !pv.show) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = "<b>" + escapeHtml(pv.title || "PROVISIONAL") + "</b> \u2014 " + escapeHtml(pv.text || "");
  }
  function renderCard(bet) {
    if (bet.engineTier) return renderEngineCard(bet);
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
    else if (isGauge || tier === "gauge") badges += '<span class="tier-tag tier-gauge">NEAR MISS</span>';
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
      if (n.engineTier) return renderEngineNm(n);
      var live = n.result ? renderResultBadge(n.result) + " " : liveBadge(n);
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
        (list.some(function (n) { return n.engineTier; }) ? '<h3 class="nm-head"><span class="nm-pill">NEAR MISS</span> Rated by the engine, but under the board’s source floor, so not on the main board</h3>' : '<h3 class="nm-head"><span class="nm-pill">NEAR MISS</span> Near misses (under the 5-source floor), not in the CLEARED lane</h3>') +
        '<p class="nm-note">Research only. Not counted in gauge/cleared totals or board status.</p>' +
        '<ul class="nm-list">' + rows + "</ul>" +
      "</section>"
    );
  }

  // ---- Spotlight box (e.g. El Clasico), Oct 25 2026: data.spotlight[sport] = {title, sub, label, tables:[{title, cols, rows}], note} ----
  function renderSpotlight(sportId, data) {
    var sp = data && data.spotlight && (data.spotlight[sportId] || data.spotlight[normalizeSport(sportId)]);
    if (!sp) return "";
    var h = '<section class="near-miss spotlight" aria-label="' + escapeHtml(sp.title || "Spotlight") + '">' +
      '<h3 class="nm-head"><span class="nm-pill">SPOTLIGHT</span> ' + escapeHtml(sp.title || "") + "</h3>" +
      (sp.sub ? '<p class="nm-note">' + escapeHtml(sp.sub) + "</p>" : "") +
      (sp.label ? '<p class="tg-noedge"><b>Nothing clears.</b> ' + escapeHtml(sp.label) + "</p>" : "");
    (sp.tables || []).forEach(function (t) {
      h += '<h4 class="mc-block-title">' + escapeHtml(t.title || "") + "</h4>" +
        '<div style="overflow-x:auto"><table class="spot-table" style="width:100%;border-collapse:collapse;font-size:0.9em"><thead><tr>' +
        (t.cols || []).map(function (c) { return '<th style="text-align:left;padding:4px 6px;border-bottom:1px solid rgba(128,128,128,.4)">' + escapeHtml(c) + "</th>"; }).join("") +
        "</tr></thead><tbody>" + (t.rows || []).map(function (r) {
          return "<tr>" + r.map(function (v) { return '<td style="padding:4px 6px;border-bottom:1px solid rgba(128,128,128,.15)">' + escapeHtml(v == null ? "" : String(v)) + "</td>"; }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>";
    });
    if (sp.note) h += '<p class="nm-note">' + escapeHtml(sp.note) + "</p>";
    return h + "</section>";
  }
  function ovTable(t) {
    return '<div style="overflow-x:auto"><table class="spot-table" style="width:100%;min-width:' + (t.cols && t.cols.length > 8 ? "1250px" : "0") + ';border-collapse:collapse;font-size:0.85em"><thead><tr>' +
      (t.cols || []).map(function (c) { return '<th style="text-align:left;padding:4px 6px;border-bottom:1px solid rgba(128,128,128,.4);white-space:nowrap">' + escapeHtml(c) + "</th>"; }).join("") +
      "</tr></thead><tbody>" + (t.rows || []).map(function (r) {
        return "<tr>" + r.map(function (v, i) { var w = r.length > 8 ? ({3: "170px", 8: "240px", 10: "230px"}[i] || "") : ""; return '<td style="padding:4px 6px;border-bottom:1px solid rgba(128,128,128,.15);vertical-align:top' + (w ? ";min-width:" + w : "") + '">' + escapeHtml(v == null ? "" : String(v)) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
  }
  function renderOvers(sp, data) {
    var o = data && data.oversNearMiss; if (!o || !o[sp]) return "";
    var L = o[sp];
    return '<section class="near-miss overs-nm" id="overs-' + escapeHtml(sp) + '" aria-label="' + escapeHtml(L.title || o.title) + '">' +
      '<h3 class="nm-head"><span class="nm-pill">' + escapeHtml(L.pill || "NEAR MISS") + '</span> ' + escapeHtml(L.title || o.title) + " · " + escapeHtml(sp) + "</h3>" +
      '<p class="tg-noedge"><b>' + escapeHtml(L.lead || "No edge today.") + '</b> ' + escapeHtml(L.label || o.label || "") + "</p>" +
      ((L.updated || o.updated) ? '<p class="nm-note">' + escapeHtml(L.updated || o.updated) + "</p>" : "") +
      (L.note ? '<p class="nm-note">' + escapeHtml(L.note) + "</p>" : "") +
      ovTable(L) +
      (o.mc && !L.noMc ? '<h4 class="mc-block-title">' + escapeHtml(o.mc.title || "") + "</h4>" + ovTable(o.mc) + (o.mc.note ? '<p class="nm-note">' + escapeHtml(o.mc.note) + "</p>" : "") : "") +
      (L.caveat ? '<p class="nm-note"><b>' + escapeHtml(L.caveat) + "</b></p>" : "") +
      (o.caveat && !L.noMc ? '<p class="nm-note"><b>' + escapeHtml(o.caveat) + "</b></p>" : "") +
      "</section>";
  }
  function renderAttd(sportId, data) {
    // NFL Anytime TD near-miss section (Oct 25 2026, engine v1.2.0 + 10,000-sim MC): data.attdNfl = {title, pill, noEdgeNote, label, updated, note, cards[], mc{title, cols, rows, note}, extra[], caveat}
    var o = data && data.attdNfl; if (!o || !o.cards) return "";
    if (sportId && normalizeSport(sportId) !== "NFL") return "";
    var cards = o.cards.map(function (c) {
      return '<li class="nm-item attd-card" data-rank="' + escapeHtml(String(c.rank)) + '">' +
        '<div class="nm-pick">#' + escapeHtml(String(c.rank)) + " · " + escapeHtml(c.player || "") + (c.team ? " (" + escapeHtml(c.team) + ")" : "") + " · Anytime TD" +
          ' <span class="nm-tag">' + escapeHtml(c.label || "") + "</span>" + (c.status ? ' <span class="nm-tag">' + escapeHtml(c.status) + "</span>" : "") + "</div>" +
        '<div class="nm-game">' + escapeHtml(c.game || "") + " · " + escapeHtml(c.start || "") + "</div>" +
        '<div class="nm-line">Best ' + escapeHtml(c.price || "") + " · fair " + escapeHtml(c.fair || "") + " · EV " + escapeHtml(c.ev || "") + (c.evPower ? " (power de-vig " + escapeHtml(c.evPower) + ")" : "") + "</div>" +
        '<div class="nm-line">' + escapeHtml(c.sources || "") + "</div>" +
        '<div class="nm-line">Sim win ' + escapeHtml(c.simWin || "") + " · sim EV " + escapeHtml(c.simEv || "") + " (10,000 sims)</div>" +
        '<div class="nm-gap">Blocker: ' + escapeHtml(c.blocker || "") + "</div>" +
      "</li>";
    }).join("");
    return '<section class="near-miss attd-nm" id="attd-NFL" aria-label="' + escapeHtml(o.title || "NFL Anytime TD") + '">' +
      '<h3 class="nm-head"><span class="nm-pill">' + escapeHtml(o.pill || "NEAR MISS") + '</span> ' + escapeHtml(o.title || "NFL Anytime TD") + "</h3>" +
      (o.noEdgeNote ? '<p class="tg-noedge"><b>' + escapeHtml(o.noEdgeNote) + "</b></p>" : "") +
      (o.label ? '<p class="nm-note">' + escapeHtml(o.label) + "</p>" : "") +
      (o.updated ? '<p class="nm-note">' + escapeHtml(o.updated) + "</p>" : "") +
      (o.note ? '<p class="nm-note">' + escapeHtml(o.note) + "</p>" : "") +
      '<ul class="nm-list attd-list">' + cards + "</ul>" +
      (o.mc ? '<h4 class="mc-block-title">' + escapeHtml(o.mc.title || "") + "</h4>" + (o.mc.summary ? '<p class="nm-note"><b>' + escapeHtml(o.mc.summary) + "</b></p>" : "") + (o.mc.cols ? ovTable(o.mc) : "") + (o.mc.note ? '<p class="nm-note">' + escapeHtml(o.mc.note) + "</p>" : "") : "") +
      (o.extra || []).map(function (x) { return '<p class="nm-note">' + escapeHtml(x) + "</p>"; }).join("") +
      (o.caveat ? '<p class="nm-note"><b>' + escapeHtml(o.caveat) + "</b></p>" : "") +
      "</section>";
  }
  function renderSportEmpty(sportId, data) {
    var archives = (data && data.archives) || {};
    var arch = archives[sportId] || archives[normalizeSport(sportId)] || null;
    var labelMap = { MLB: "Baseball", NFL: "Football (NFL)", CFB: "NCAA Football", Soccer: "Soccer", NBA: "Basketball (NBA)", NHL: "Hockey (NHL)", TENNIS: "Tennis", UFC: "UFC" };
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
    var nmAll = (data && data.nearMiss) || {};
    var nmKey = (isNba && activeSub === "props") ? normalizeSport(sportId) + "-PROPS" : normalizeSport(sportId);
    if ((nmAll[nmKey] || []).some(function (n) { return n.engineTier; })) {
      body = "Nothing for " + escapeHtml(label) + " reached the 5+ combined-source board floor this pass (CLEARED needs 3+ YouTube, 2+ X send-it and booksAlign). The engine-rated watch list is below, with the rules each pick passed and failed.";
    } else if (isRealNba) {
      body =
        (activeSub === "props"
          ? "No NBA props meet the rules yet tonight"
          : "No NBA game lines meet the rules yet tonight") +
        ". Empty on purpose — not fake zero badges.";
    }

    return (
      '<div class="sport-empty-icon" aria-hidden="true">○</div>' +
      '<p class="sport-empty-title">' + (((data && data.nearMiss) || {})[(isNba && activeSub === "props") ? normalizeSport(sportId) + "-PROPS" : normalizeSport(sportId)] ? "Nothing on the board yet" : "No live research this slate") + escapeHtml(subLabel) + "</p>" +
      '<p class="sport-empty-body">' + body + "</p>" +
      archiveHtml +
      renderSpotlight(sportId, data) +
      renderAttd(sportId, data) +
      (isNba && activeSub === "props" ? renderOvers(normalizeSport(sportId), data) : "") +
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
      if (el && el.id === "hero-gauge") { el.innerHTML = '<div class="hg-empty"><p class="hg-empty-title">Nothing qualifies right now.</p><p>' + escapeHtml((g && g.emptyText) || "No unstarted play meets all CLEARED requirements. Near misses and likelihood research remain visible below with their blockers.") + '</p></div>'; return; }
      if (el) el.remove(); return;
    }
    if (!el && nav && nav.parentNode) {
      el = document.createElement("section");
      el.id = "tonight-gauge";
      el.className = "tonight-gauge";
      el.setAttribute("aria-label", (g.title || "Today's research"));
      nav.parentNode.insertBefore(el, nav);
    }
    if (!el) return;
    var rows = g.items.filter(function (it) { return !isFinalRow(it); }).map(function (it) {
      var tier = String(it.tier || "").toUpperCase();
      var tcls = (tier === "CLEARED" || tier === "CLEAR") ? "tg-cleared" : ((tier === "GAUGE" || tier === "SOFT") ? "tg-gauge" : "tg-near");
      var edge = (it.edge === null || it.edge === undefined || it.edge === "") ? "no cited model" : it.edge;
      var sc = meterScore(it.yt, it.x, edgePpOf(it), it.booksAlign);
      return (
        '<li class="tg-item ' + tcls + '-item">' +
          '<span class="tg-rank">' + escapeHtml(String(it.rank)) + "</span>" + liveBadge(it) +
          '<div class="tg-body">' +
            '<div class="tg-top"><span class="tg-tier ' + tcls + '">' + escapeHtml(tier) + "</span>" + (it.edgeLabel ? ' <span class="tier-tag ' + (it.edgeStatus === "edge" ? "etier-edge" : (it.edgeStatus === "close" ? "etier-close" : "")) + '">' + escapeHtml(String(it.edgeLabel).toUpperCase()) + (it.evPct != null ? " \u00b7 EV " + (it.evPct > 0 ? "+" : "") + escapeHtml(String(it.evPct)) + "%" : "") + "</span> " : "") +
              '<strong class="tg-pick">' + escapeHtml(it.pick || "") + "</strong>" +
              (it.line ? ' <span class="tg-line">' + escapeHtml(it.line) + "</span>" : "") + "</div>" +
            '<div class="tg-meta">' + escapeHtml((it.sport ? it.sport + " · " : "") + (it.game || "") + (it.timeCT ? " · " + it.timeCT : "")) + "</div>" +
            (it.onBoard !== undefined ? '<div class="tg-meta">YT ' + escapeHtml(String(it.yt)) + " · X " + escapeHtml(String(it.x)) + (it.edge ? " · edge+" : "") + " · " + (it.onBoard ? "on the board" : "near miss") + "</div>" :
            '<div class="tg-meta">YT ' + escapeHtml(String(it.yt)) + " · X " + escapeHtml(String(it.x)) +
              " · booksAlign " + (it.booksAlign ? "✓" : "✗") + " · " + escapeHtml(String(edge)) + "</div>") +
            (it.blockedBy ? '<div class="tg-why tg-blocked"><b>Blocked by:</b> ' + escapeHtml(it.blockedBy) + "</div>" : "") +
            (it.rationale ? '<div class="tg-why">' + escapeHtml(it.rationale) + "</div>" : "") +
            (it.xNote ? '<div class="tg-why tg-xnote">X: ' + escapeHtml(it.xNote) + "</div>" : "") +
            meterHtml(sc, "Confidence") +
          "</div>" +
        "</li>"
      );
    }).join("");
    el.innerHTML =
      '<div class="tg-head"><h2 class="tg-title">' + escapeHtml(g.title || "Today\u2019s research") + '</h2>' +
      '<span class="tg-sub">' + escapeHtml(g.label || "") + "</span></div>" +
      (g.noEdgeNote ? '<p class="tg-noedge"><b>No edge today.</b> ' + escapeHtml(g.noEdgeNote) + "</p>" : "") +
      '<ol class="tg-list">' + rows + "</ol>" +
      (g.note ? '<p class="tg-note">' + escapeHtml(g.note) + "</p>" : "");
  }

  function render(data) {
    if (DEMO) { data = demoData(); }
    lastPayload = data;
    lastFetchAt = lastFetchAt || new Date();
    var db = $("demo-banner"); if (db) db.hidden = !DEMO;
    if (renderPage(data)) return;
    if (n3Rows(data).length) { renderNormalized(data); return; }
    renderProvisional(data);
    renderTonightGauge(data);
    renderPerformance(data);
    renderMonteCarlo(data);
    activeSport = resolveActiveSport(data);
    if (hasSub(activeSport) && !activeSub) activeSub = defaultSubFor(data, activeSport);
    if (hasSub(activeSport) && onlySubFor(data, activeSport)) activeSub = onlySubFor(data, activeSport);
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
      tallyEl.textContent = rt ? (rt.label || ("CLEARED " + rt.cleared + " · published research " + rt.gauge + " · Near misses " + rt.nearMiss)) : "";
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
        gaugeEl.textContent = "RESEARCH BOARD — " +
          cleared + " cleared floors · " +
          gaugeN +
          " sourced non-CLEARED rows. Not full-floor consensus.";
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
    if (nmSlot) nmSlot.innerHTML = hasBets ? renderAttd(activeSport, data) + renderNearMiss(activeSport, data) : "";
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
    activeSub = hasSub(activeSport) ? (onlySubFor(lastPayload,activeSport) || "lines") : null;
    if (n3Rows(lastPayload).length && $("normalized-board")) {
      setHash(activeSport,activeSub);
      n3State.sport=activeSport;
      n3State.game=n3State.market=n3State.lane=n3State.time="";
      n3Update();
      return;
    }
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
        console.info("Bearish Bulls Picks: using embedded data.js fallback.", err && err.message ? err.message : err);
        return loadFromEmbedded();
      })
      .then(function (data) {
        lastFetchAt = new Date();
        render(data);
      })
      .catch(function (err) {
        console.error("Bearish Bulls Picks load failed:", err);
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
      if (n3Rows(lastPayload).length && $("normalized-board")) { render(lastPayload); return; }
      if (parsed.sport) {
        activeSport = parsed.sport;
        activeSub = hasSub(parsed.sport) ? (onlySubFor(lastPayload, parsed.sport) || parsed.sub || "lines") : null;
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
