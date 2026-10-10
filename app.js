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

  var SUB_SPORTS = { NBA: true, NHL: true, UFC: true };
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
    return { sport: normalizeSport(raw), sub: null };
  }

  function hashSport() {
    return parseHash().sport;
  }

  function setHash(sportId, sub) {
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
        '<div class="confidence">' +
          '<div class="confidence-head"><span>Confidence</span><span class="confidence-val">' + conf + "</span></div>" +
          '<div class="bar" role="progressbar" aria-valuenow="' + conf + '" aria-valuemin="0" aria-valuemax="100">' +
            '<div class="bar-fill ' + confidenceBarClass(conf) + '" style="width:' + conf + '%"></div>' +
          "</div>" +
        "</div>" +
        '<div class="why-block">' +
          '<span class="why-label">Why sources like it</span>' +
          '<p class="why">' + escapeHtml(bet.why || "No consensus note for this pick yet.") + "</p>" +
        "</div>" +
        renderClvBlock(ledger.clv) +
        '<div class="sources">' +
          '<span class="source-chip">YT ' + escapeHtml(yt) + "</span>" +
          '<span class="source-chip">Send-it ' + escapeHtml(send) + "</span>" +
          '<span class="source-chip ' + (alignKnown ? (align ? "align-yes" : "align-no") : "") + '">' +
            "Books " + (alignKnown ? (align ? "align" : "mixed") : "—") +
          "</span>" +
          renderMinEdgeChip(ledger) +
        "</div>" +
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
        "</li>"
      );
    }).join("");
    return (
      '<section class="near-miss" aria-label="Near misses">' +
        '<h3 class="nm-head">Near misses (under 6 sources), not on the main board</h3>' +
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
      subLabel = " (" + (isRealNba ? "Basketball" : (normalizeSport(sportId) === "UFC" ? "UFC" : "Hockey")) + " · " + (normalizeSport(sportId) === "UFC" ? "Props" : "Player props") + ")";
    } else if (isNba && activeSub === "lines") {
      label = normalizeSport(sportId) === "UFC" ? "UFC fights" : (isRealNba ? "NBA" : "NHL") + " game lines";
      subLabel = normalizeSport(sportId) === "UFC" ? " (UFC · Fights)" : " (" + (isRealNba ? "Basketball" : "Hockey") + " · Game lines)";
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
    var g = data && data.tonightsGauge;
    var el = document.getElementById("tonight-gauge");
    var nav = $("sport-nav");
    if (!g || !g.items || !g.items.length) { if (el) el.remove(); return; }
    if (!el && nav && nav.parentNode) {
      el = document.createElement("section");
      el.id = "tonight-gauge";
      el.className = "tonight-gauge";
      el.setAttribute("aria-label", "Tonight's Gauge");
      nav.parentNode.insertBefore(el, nav);
    }
    if (!el) return;
    var rows = g.items.map(function (it) {
      var tier = String(it.tier || "").toUpperCase();
      var tcls = tier === "CLEARED" ? "tg-cleared" : (tier === "GAUGE" ? "tg-gauge" : "tg-near");
      var edge = (it.edge === null || it.edge === undefined || it.edge === "") ? "no cited model" : it.edge;
      return (
        '<li class="tg-item">' +
          '<span class="tg-rank">' + escapeHtml(String(it.rank)) + "</span>" +
          '<div class="tg-body">' +
            '<div class="tg-top"><span class="tg-tier ' + tcls + '">' + escapeHtml(tier === "NEAR MISS" ? "NEAR MISS (<6)" : tier) + "</span>" +
              '<strong class="tg-pick">' + escapeHtml(it.pick || "") + "</strong>" +
              (it.line ? ' <span class="tg-line">' + escapeHtml(it.line) + "</span>" : "") + "</div>" +
            '<div class="tg-meta">' + escapeHtml((it.sport ? it.sport + " · " : "") + (it.game || "") + (it.timeCT ? " · " + it.timeCT : "")) + "</div>" +
            '<div class="tg-meta">YT ' + escapeHtml(String(it.yt)) + " · X " + escapeHtml(String(it.x)) +
              " · booksAlign " + (it.booksAlign ? "✓" : "✗") + " · " + escapeHtml(String(edge)) + "</div>" +
            (it.rationale ? '<div class="tg-why">' + escapeHtml(it.rationale) + "</div>" : "") +
          "</div>" +
        "</li>"
      );
    }).join("");
    el.innerHTML =
      '<div class="tg-head"><h2 class="tg-title">Tonight\u2019s Gauge</h2>' +
      '<span class="tg-sub">' + escapeHtml(g.label || "") + "</span></div>" +
      '<ol class="tg-list">' + rows + "</ol>" +
      (g.note ? '<p class="tg-note">' + escapeHtml(g.note) + "</p>" : "");
  }

  function render(data) {
    lastPayload = data;
    renderTonightGauge(data);
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
    var nav = $("sport-nav");
    if (nav) nav.addEventListener("click", onNavClick);
    var subNav = $("sub-nav");
    if (subNav) subNav.addEventListener("click", onSubNavClick);
    window.addEventListener("hashchange", function () {
      if (!lastPayload) return;
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
