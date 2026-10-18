/* Auto-generated companion to data.json for file:// fallback.
   Slate Scout must update BOTH data.json and this file together. */
window.BET_BOARD_DATA = {
  "updatedAt": "2026-10-18T09:51:26-05:00",
  "updatedAtLabel": "Oct 18, 2026 · 9:51 AM CT",
  "nearMiss": {
    "NFL": [
      {
        "id": "sun1018-nfl-new-england-patriots-ml",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "New York Jets @ New England Patriots · 12:00 PM CT",
        "pick": "New England Patriots ML",
        "line": "-350 BetUS",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-304",
        "bestOdds": "-350",
        "bestBook": "BetUS",
        "booksPriced": 27,
        "evPct": -3.25,
        "edgePlus": false,
        "consensus": 2.1,
        "combined": 3.25,
        "publish": false,
        "publishReason": "3.25 combined sources < 4 required",
        "sources": {
          "youtube": 3,
          "ytRaw": 4,
          "ytEcho": 1,
          "xSendIt": 0,
          "combined": 3.25
        },
        "ytWho": "Degenerate Anonymous-Pod; NothinButGTakes; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 3,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -304 (pinnacle); 27 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "96% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "1 echo picks counted at 0.25"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "fail",
            "reason": "-350 shorter than -200 cap (NFL ml)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias",
          "favorite_cap"
        ],
        "why": "YouTube 3 independent (accepted videos only; engine-deduped): Degenerate Anonymous-Pod, NothinButGTakes, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 3.25 combined sources (floor 4); fails public_bias, favorite_cap.",
        "confidence": 21,
        "yt": 3,
        "x": 0,
        "total": 3.25,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (3.25 combined). Needs 0.75 more. Fails: public_bias, favorite_cap. EV -3.2% vs fair."
      },
      {
        "id": "sun1018-nfl-pittsburgh-steelers-2-5",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Pittsburgh Steelers @ Tampa Bay Buccaneers · 12:00 PM CT",
        "pick": "Pittsburgh Steelers -2.5",
        "line": "-104 FanDuel",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+104",
        "bestOdds": "-104",
        "bestBook": "FanDuel",
        "booksPriced": 21,
        "evPct": -3.85,
        "edgePlus": false,
        "consensus": 2.5,
        "combined": 2.25,
        "publish": false,
        "publishReason": "2.25 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 7,
          "ytEcho": 1,
          "xSendIt": 0,
          "combined": 2.25
        },
        "ytWho": "Degenerate Anonymous-Pod; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +104 (pinnacle); 21 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "67% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "1 echo picks counted at 0.25"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-104 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): Degenerate Anonymous-Pod, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2.25 combined sources (floor 4); all gate rules pass.",
        "confidence": 25,
        "yt": 2,
        "x": 0,
        "total": 2.25,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2.25 combined). Needs 1.75 more. EV -3.9% vs fair."
      },
      {
        "id": "sun1018-nfl-carolina-panthers-3",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Carolina Panthers @ Philadelphia Eagles · 12:00 PM CT",
        "pick": "Carolina Panthers -3",
        "line": "-107 LowVig",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-100",
        "bestOdds": "-107",
        "bestBook": "LowVig",
        "booksPriced": 18,
        "evPct": -3.27,
        "edgePlus": false,
        "consensus": 2.9,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 11,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Sports Parlay Picks; StratIQAI",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -100 (pinnacle); 18 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "line sits on key number (check push value)"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "60% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-107 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): Sports Parlay Picks, StratIQAI. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 4); all gate rules pass.",
        "confidence": 29,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. EV -3.3% vs fair."
      },
      {
        "id": "sun1018-nfl-new-york-jets-7-5",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "New York Jets @ New England Patriots · 12:00 PM CT",
        "pick": "New York Jets +7.5",
        "line": "-112 DraftKings",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-111",
        "bestOdds": "-112",
        "bestBook": "DraftKings",
        "booksPriced": 16,
        "evPct": -0.42,
        "edgePlus": false,
        "consensus": 2.2,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 2.0
        },
        "ytWho": "AI Sports Predictor",
        "xWho": "ActionNetworkHQ",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -111 (pinnacle); 16 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "dog holds the hook over key number"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "25% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-112 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): AI Sports Predictor. X send-it 1: ActionNetworkHQ.",
        "rationale": "Soft: 2 combined sources (floor 4); all gate rules pass.",
        "confidence": 22,
        "yt": 1,
        "x": 1,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. EV -0.4% vs fair."
      },
      {
        "id": "sun1018-nfl-carolina-panthers-ml",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Carolina Panthers @ Philadelphia Eagles · 12:00 PM CT",
        "pick": "Carolina Panthers ML",
        "line": "-162 DraftKings",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-151",
        "bestOdds": "-162",
        "bestBook": "DraftKings",
        "booksPriced": 27,
        "evPct": -2.71,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "NothinButGTakes; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -151 (pinnacle); 27 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "68% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-162 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): NothinButGTakes, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 4); all gate rules pass.",
        "confidence": 20,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. EV -2.7% vs fair."
      },
      {
        "id": "sun1018-nfl-los-angeles-rams-13-5",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Arizona Cardinals @ Los Angeles Rams · 3:05 PM CT",
        "pick": "Los Angeles Rams -13.5",
        "line": "+104 Pinnacle",
        "timeCT": "3:05 PM CT",
        "startCT": "2026-10-18T15:05-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+109",
        "bestOdds": "+104",
        "bestBook": "Pinnacle",
        "booksPriced": 1,
        "evPct": -2.39,
        "edgePlus": false,
        "consensus": 2.7,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Dappz Sports; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +109 (pinnacle); 1 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "75% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+104 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "pass",
            "reason": "sharp_for: +1.0"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): Dappz Sports, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 4); fails public_bias.",
        "confidence": 27,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. Fails: public_bias. EV -2.4% vs fair."
      },
      {
        "id": "sun1018-nfl-indianapolis-colts-6-5",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Tennessee Titans @ Indianapolis Colts · 12:00 PM CT",
        "pick": "Indianapolis Colts -6.5",
        "line": "-105 Bovada",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+103",
        "bestOdds": "-105",
        "bestBook": "Bovada",
        "booksPriced": 23,
        "evPct": -3.82,
        "edgePlus": false,
        "consensus": 1.6,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "ParlaySafari; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +103 (pinnacle); 23 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "77% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-105 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): ParlaySafari, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 4); fails public_bias.",
        "confidence": 16,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. Fails: public_bias. EV -3.8% vs fair."
      },
      {
        "id": "sun1018-nfl-pittsburgh-steelers-ml",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Pittsburgh Steelers @ Tampa Bay Buccaneers · 12:00 PM CT",
        "pick": "Pittsburgh Steelers ML",
        "line": "-134 FanDuel",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-122",
        "bestOdds": "-134",
        "bestBook": "FanDuel",
        "booksPriced": 27,
        "evPct": -4.03,
        "edgePlus": false,
        "consensus": 1.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "NothinButGTakes; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -122 (pinnacle); 27 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "84% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-134 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): NothinButGTakes, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 4); fails public_bias.",
        "confidence": 15,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. Fails: public_bias. EV -4.0% vs fair."
      },
      {
        "id": "sun1018-nfl-indianapolis-colts-ml",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Tennessee Titans @ Indianapolis Colts · 12:00 PM CT",
        "pick": "Indianapolis Colts ML",
        "line": "-290 BetUS",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-271",
        "bestOdds": "-290",
        "bestBook": "BetUS",
        "booksPriced": 27,
        "evPct": -1.77,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "NothinButGTakes; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -271 (pinnacle); 27 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "95% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "fail",
            "reason": "-290 shorter than -200 cap (NFL ml)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias",
          "favorite_cap"
        ],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): NothinButGTakes, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 4); fails public_bias, favorite_cap.",
        "confidence": 10,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. Fails: public_bias, favorite_cap. EV -1.8% vs fair."
      },
      {
        "id": "sun1018-nfl-los-angeles-rams-ml",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Arizona Cardinals @ Los Angeles Rams · 3:05 PM CT",
        "pick": "Los Angeles Rams ML",
        "line": "-800 DraftKings",
        "timeCT": "3:05 PM CT",
        "startCT": "2026-10-18T15:05-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-648",
        "bestOdds": "-800",
        "bestBook": "DraftKings",
        "booksPriced": 27,
        "evPct": -2.54,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Dappz Sports; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -648 (pinnacle); 27 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "97% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "fail",
            "reason": "-800 shorter than -200 cap (NFL ml)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias",
          "favorite_cap"
        ],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): Dappz Sports, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 4); fails public_bias, favorite_cap.",
        "confidence": 10,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. Fails: public_bias, favorite_cap. EV -2.5% vs fair."
      },
      {
        "id": "sun1018-nfl-buffalo-bills-ml",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Buffalo Bills @ Las Vegas Raiders · 3:25 PM CT",
        "pick": "Buffalo Bills ML",
        "line": "-225 Caesars",
        "timeCT": "3:25 PM CT",
        "startCT": "2026-10-18T15:25-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-210",
        "bestOdds": "-225",
        "bestBook": "Caesars",
        "booksPriced": 27,
        "evPct": -2.15,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "NothinButGTakes; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -210 (pinnacle); 27 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "94% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "fail",
            "reason": "-225 shorter than -200 cap (NFL ml)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias",
          "favorite_cap"
        ],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): NothinButGTakes, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 4); fails public_bias, favorite_cap.",
        "confidence": 10,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. Fails: public_bias, favorite_cap. EV -2.1% vs fair."
      },
      {
        "id": "sun1018-nfl-atlanta-falcons-ml",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Chicago Bears @ Atlanta Falcons · 12:00 PM CT",
        "pick": "Atlanta Falcons ML",
        "line": "+100 DraftKings",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+106",
        "bestOdds": "+100",
        "bestBook": "DraftKings",
        "booksPriced": 24,
        "evPct": -2.91,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "ActionNetworkHQ",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +106 (pinnacle); 24 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "44% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "pass",
            "reason": "home underdog (lean noted, no score bonus)"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+100 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: ActionNetworkHQ.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -2.9% vs fair."
      },
      {
        "id": "sun1018-nfl-buffalo-bills-4-5",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Buffalo Bills @ Las Vegas Raiders · 3:25 PM CT",
        "pick": "Buffalo Bills -4.5",
        "line": "-107 LowVig",
        "timeCT": "3:25 PM CT",
        "startCT": "2026-10-18T15:25-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-106",
        "bestOdds": "-107",
        "bestBook": "LowVig",
        "booksPriced": 13,
        "evPct": -0.45,
        "edgePlus": false,
        "consensus": 1.3,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -106 (pinnacle); 13 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "66% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-107 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 13,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -0.5% vs fair."
      },
      {
        "id": "sun1018-nfl-cleveland-browns-ml",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Baltimore Ravens @ Cleveland Browns · 12:00 PM CT",
        "pick": "Cleveland Browns ML",
        "line": "+150 FanDuel",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+159",
        "bestOdds": "+150",
        "bestBook": "FanDuel",
        "booksPriced": 27,
        "evPct": -3.47,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NothinButGTakes",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +159 (pinnacle); 27 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "11% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "pass",
            "reason": "home underdog (lean noted, no score bonus)"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+150 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): NothinButGTakes. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 10,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -3.5% vs fair."
      },
      {
        "id": "sun1018-nfl-los-angeles-chargers-8",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Los Angeles Chargers @ Kansas City Chiefs · 3:25 PM CT",
        "pick": "Los Angeles Chargers +8",
        "line": "-115 BetUS",
        "timeCT": "3:25 PM CT",
        "startCT": "2026-10-18T15:25-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-116",
        "bestOdds": "-115",
        "bestBook": "BetUS",
        "booksPriced": 2,
        "evPct": 0.4,
        "edgePlus": true,
        "consensus": 0.8,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": false,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -116 (pinnacle); 2 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "32% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-115 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 0.",
        "rationale": "Soft: 0 combined sources (floor 4); all gate rules pass; edge+ vs Pinnacle no-vig.",
        "confidence": 8,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (0 combined). Needs 4 more. EV +0.4% vs fair."
      },
      {
        "id": "sun1018-nfl-new-orleans-saints-1",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "New Orleans Saints @ New York Giants · 12:00 PM CT",
        "pick": "New Orleans Saints -1",
        "line": "-105 BetMGM",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+104",
        "bestOdds": "-105",
        "bestBook": "BetMGM",
        "booksPriced": 5,
        "evPct": -4.3,
        "edgePlus": false,
        "consensus": 1.1,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": false,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +104 (pinnacle); 5 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "46% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-105 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "pass",
            "reason": "sharp_for: +1.0"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 0.",
        "rationale": "Soft: 0 combined sources (floor 4); all gate rules pass.",
        "confidence": 11,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (0 combined). Needs 4 more. EV -4.3% vs fair."
      },
      {
        "id": "sun1018-nfl-cleveland-browns-3",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Baltimore Ravens @ Cleveland Browns · 12:00 PM CT",
        "pick": "Cleveland Browns +3",
        "line": "+102 LowVig",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+108",
        "bestOdds": "+102",
        "bestBook": "LowVig",
        "booksPriced": 12,
        "evPct": -2.88,
        "edgePlus": false,
        "consensus": 1.1,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": false,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +108 (pinnacle); 12 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "line sits on key number (check push value)"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "44% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "pass",
            "reason": "home underdog (lean noted, no score bonus)"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+102 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "pass",
            "reason": "sharp_for: +1.0"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 0.",
        "rationale": "Soft: 0 combined sources (floor 4); all gate rules pass.",
        "confidence": 11,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (0 combined). Needs 4 more. EV -2.9% vs fair."
      },
      {
        "id": "sun1018-nfl-dallas-cowboys-1",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Dallas Cowboys @ Green Bay Packers · 7:20 PM CT",
        "pick": "Dallas Cowboys +1",
        "line": "-108 BetRivers",
        "timeCT": "7:20 PM CT",
        "startCT": "2026-10-18T19:20-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-104",
        "bestOdds": "-108",
        "bestBook": "BetRivers",
        "booksPriced": 13,
        "evPct": -1.82,
        "edgePlus": false,
        "consensus": 0.3,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 0,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -104 (pinnacle); 13 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "62% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-108 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 0.",
        "rationale": "Soft: 0 combined sources (floor 4); all gate rules pass.",
        "confidence": 3,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (0 combined). Needs 4 more. EV -1.8% vs fair."
      }
    ],
    "NHL": [
      {
        "id": "sun1018-nhl-carolina-hurricanes-ml",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Carolina Hurricanes @ Calgary Flames · 7:10 PM CT",
        "pick": "Carolina Hurricanes ML",
        "line": "-215 BetOnline",
        "timeCT": "7:10 PM CT",
        "startCT": "2026-10-18T19:10-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-200",
        "bestOdds": "-215",
        "bestBook": "BetOnline",
        "booksPriced": 29,
        "evPct": -2.33,
        "edgePlus": false,
        "consensus": 1.2,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 13,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -200 (pinnacle); 29 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "88% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "fail",
            "reason": "-215 shorter than -200 cap (NHL ml)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias",
          "favorite_cap"
        ],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 4); fails public_bias, favorite_cap.",
        "confidence": 12,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. Fails: public_bias, favorite_cap. EV -2.3% vs fair."
      },
      {
        "id": "sun1018-nhl-minnesota-wild-ml",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Columbus Blue Jackets @ Minnesota Wild · 5:10 PM CT",
        "pick": "Minnesota Wild ML",
        "line": "-180 LowVig",
        "timeCT": "5:10 PM CT",
        "startCT": "2026-10-18T17:10-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-168",
        "bestOdds": "-180",
        "bestBook": "LowVig",
        "booksPriced": 29,
        "evPct": -2.49,
        "edgePlus": false,
        "consensus": 0.8,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -168 (pinnacle); 29 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "87% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-180 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 4); fails public_bias.",
        "confidence": 8,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. Fails: public_bias. EV -2.5% vs fair."
      }
    ],
    "Soccer": [
      {
        "id": "sun1018-soccer-under-2-5",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Arsenal @ Nottingham Forest · 10:30 AM CT",
        "pick": "Under 2.5",
        "line": "+100 Bovada",
        "timeCT": "10:30 AM CT",
        "startCT": "2026-10-18T10:30-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+105",
        "bestOdds": "+100",
        "bestBook": "Bovada",
        "booksPriced": 23,
        "evPct": -2.44,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "ItsParlayPete",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +105 (pinnacle); 23 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "9% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+100 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: ItsParlayPete.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -2.4% vs fair."
      },
      {
        "id": "sun1018-soccer-fortuna-sittard-0-75",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Fortuna Sittard @ NEC Nijmegen · 1:00 PM CT",
        "pick": "Fortuna Sittard +0.75",
        "line": "-108 Bovada",
        "timeCT": "1:00 PM CT",
        "startCT": "2026-10-18T13:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+101",
        "bestOdds": "-108",
        "bestBook": "Bovada",
        "booksPriced": 3,
        "evPct": -4.18,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "ItsParlayPete",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +101 (pinnacle); 3 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "soccer away dog caution (HZ ch.21 p.455: -27.2% at best price) - info"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-108 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: ItsParlayPete.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -4.2% vs fair."
      },
      {
        "id": "sun1018-soccer-as-monaco-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "AS Monaco @ Lorient · 10:15 AM CT",
        "pick": "AS Monaco ML",
        "line": "+113 BetOnline",
        "timeCT": "10:15 AM CT",
        "startCT": "2026-10-18T10:15-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+118",
        "bestOdds": "+113",
        "bestBook": "BetOnline",
        "booksPriced": 28,
        "evPct": -2.29,
        "edgePlus": false,
        "consensus": 0.2,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": false,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +118 (pinnacle); 28 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "soccer away dog caution (HZ ch.21 p.455: -27.2% at best price) - info"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+113 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 0.",
        "rationale": "Soft: 0 combined sources (floor 4); all gate rules pass.",
        "confidence": 2,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (0 combined). Needs 4 more. EV -2.3% vs fair."
      },
      {
        "id": "sun1018-soccer-lazio-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Lazio @ Juventus · 1:45 PM CT",
        "pick": "Lazio ML",
        "line": "+532 BetOnline",
        "timeCT": "1:45 PM CT",
        "startCT": "2026-10-18T13:45-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+547",
        "bestOdds": "+532",
        "bestBook": "BetOnline",
        "booksPriced": 30,
        "evPct": -2.32,
        "edgePlus": false,
        "consensus": 0.2,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": false,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +547 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "5% tickets on pick side (<70%)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "soccer away dog caution (HZ ch.21 p.455: -27.2% at best price) - info"
          },
          {
            "rule": "longshot",
            "result": "pass",
            "reason": "+532 longshot flagged; +2% EV requirement skipped per Atlas"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+532 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 0.",
        "rationale": "Soft: 0 combined sources (floor 4); all gate rules pass.",
        "confidence": 2,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (0 combined). Needs 4 more. EV -2.3% vs fair."
      },
      {
        "id": "sun1018-soccer-ajax-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Ajax @ Groningen · 9:45 AM CT",
        "pick": "Ajax ML",
        "line": "-105 DraftKings",
        "timeCT": "9:45 AM CT",
        "startCT": "2026-10-18T09:45-05:00",
        "gameState": "live",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+104",
        "bestOdds": "-105",
        "bestBook": "DraftKings",
        "booksPriced": 29,
        "evPct": -4.3,
        "edgePlus": false,
        "consensus": 0.1,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": false,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +104 (pinnacle); 29 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-105 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 0.",
        "rationale": "Soft: 0 combined sources (floor 4); all gate rules pass.",
        "confidence": 1,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (0 combined). Needs 4 more. EV -4.3% vs fair."
      },
      {
        "id": "sun1018-soccer-m-laga-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Real Sociedad @ Málaga · 11:30 AM CT",
        "pick": "Málaga ML",
        "line": "+216 LowVig",
        "timeCT": "11:30 AM CT",
        "startCT": "2026-10-18T11:30-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+231",
        "bestOdds": "+216",
        "bestBook": "LowVig",
        "booksPriced": 27,
        "evPct": -4.53,
        "edgePlus": false,
        "consensus": 0.1,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": false,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +231 (pinnacle); 27 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "soccer: no home-dog lean (HZ ch.21 p.455)"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+216 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 0.",
        "rationale": "Soft: 0 combined sources (floor 4); all gate rules pass.",
        "confidence": 1,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (0 combined). Needs 4 more. EV -4.5% vs fair."
      },
      {
        "id": "sun1018-soccer-ac-milan-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Atalanta BC @ AC Milan · 11:00 AM CT",
        "pick": "AC Milan ML",
        "line": "-139 Bovada",
        "timeCT": "11:00 AM CT",
        "startCT": "2026-10-18T11:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-132",
        "bestOdds": "-139",
        "bestBook": "Bovada",
        "booksPriced": 30,
        "evPct": -2.17,
        "edgePlus": false,
        "consensus": -0.3,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": false,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -132 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "90% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-139 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 0.",
        "rationale": "Soft: 0 combined sources (floor 4); fails public_bias.",
        "confidence": -3,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (0 combined). Needs 4 more. Fails: public_bias. EV -2.2% vs fair."
      },
      {
        "id": "sun1018-soccer-fc-cincinnati-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Columbus Crew SC @ FC Cincinnati · 4:00 PM CT",
        "pick": "FC Cincinnati ML",
        "line": "+137 BetOnline",
        "timeCT": "4:00 PM CT",
        "startCT": "2026-10-18T16:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+143",
        "bestOdds": "+137",
        "bestBook": "BetOnline",
        "booksPriced": 30,
        "evPct": -2.47,
        "edgePlus": false,
        "consensus": -0.4,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": false,
        "ytWithUnverified": 0,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +143 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "77% of tickets on pick side (public side, -0.5)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "soccer: no home-dog lean (HZ ch.21 p.455)"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+137 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 0.",
        "rationale": "Soft: 0 combined sources (floor 4); fails public_bias.",
        "confidence": -4,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (0 combined). Needs 4 more. Fails: public_bias. EV -2.5% vs fair."
      }
    ],
    "NFL-PROPS": [
      {
        "id": "sun1018-nflprop-javonte-williams-anytime-td",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Dallas Cowboys @ Green Bay Packers · Javonte Williams Anytime TD · 7:20 PM CT",
        "pick": "Javonte Williams Anytime TD",
        "line": "-185 BetMGM",
        "timeCT": "7:20 PM CT",
        "startCT": "2026-10-18T19:20-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-170",
        "bestOdds": "-185",
        "bestBook": "BetMGM",
        "booksPriced": 7,
        "evPct": -3.0,
        "edgePlus": false,
        "consensus": 3.0,
        "combined": 3.0,
        "publish": false,
        "publishReason": "3 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 2,
          "combined": 3.0
        },
        "ytWho": "HighLimitSlips",
        "xWho": "FantasyGenius4U; __LordPenguin",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -170 (pinnacle); 7 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-185 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): HighLimitSlips. X send-it 2: FantasyGenius4U, __LordPenguin. hand-checked Oct 18 ~9:58 AM CT.",
        "rationale": "Soft: 3 combined sources (floor 4); all gate rules pass.",
        "confidence": 30,
        "yt": 1,
        "x": 2,
        "total": 3.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (3 combined). Needs 1 more. EV -3.0% vs fair."
      },
      {
        "id": "sun1018-nflprop-brock-bowers-anytime-td",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Buffalo Bills @ Las Vegas Raiders · Brock Bowers Anytime TD · 3:25 PM CT",
        "pick": "Brock Bowers Anytime TD",
        "line": "-111 BetMGM",
        "timeCT": "3:25 PM CT",
        "startCT": "2026-10-18T15:25-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+103",
        "bestOdds": "-111",
        "bestBook": "BetMGM",
        "booksPriced": 7,
        "evPct": -6.36,
        "edgePlus": false,
        "consensus": 2.1,
        "combined": 2.25,
        "publish": false,
        "publishReason": "2.25 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 3,
          "ytEcho": 1,
          "xSendIt": 0,
          "combined": 2.25
        },
        "ytWho": "Degenerate Anonymous-Pod; HighLimitSlips",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +103 (pinnacle); 7 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "1 echo picks counted at 0.25"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-111 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): Degenerate Anonymous-Pod, HighLimitSlips. X send-it 0. hand-checked Oct 18 ~9:58 AM CT.",
        "rationale": "Soft: 2.25 combined sources (floor 4); all gate rules pass.",
        "confidence": 21,
        "yt": 2,
        "x": 0,
        "total": 2.25,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2.25 combined). Needs 1.75 more. EV -6.4% vs fair."
      },
      {
        "id": "sun1018-nflprop-josh-allen-anytime-td",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Buffalo Bills @ Las Vegas Raiders · Josh Allen Anytime TD · 3:25 PM CT",
        "pick": "Josh Allen Anytime TD",
        "line": "-140 BetMGM",
        "timeCT": "3:25 PM CT",
        "startCT": "2026-10-18T15:25-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-136",
        "bestOdds": "-140",
        "bestBook": "BetMGM",
        "booksPriced": 7,
        "evPct": -1.21,
        "edgePlus": false,
        "consensus": 2.1,
        "combined": 2.25,
        "publish": false,
        "publishReason": "2.25 combined sources < 4 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 3,
          "ytEcho": 1,
          "xSendIt": 0,
          "combined": 2.25
        },
        "ytWho": "Degenerate Anonymous-Pod; Top Sports Debate",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 2,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -136 (pinnacle); 7 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "1 echo picks counted at 0.25"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-140 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 2 independent (accepted videos only; engine-deduped): Degenerate Anonymous-Pod, Top Sports Debate. X send-it 0. hand-checked Oct 18 ~9:58 AM CT.",
        "rationale": "Soft: 2.25 combined sources (floor 4); all gate rules pass.",
        "confidence": 21,
        "yt": 2,
        "x": 0,
        "total": 2.25,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2.25 combined). Needs 1.75 more. EV -1.2% vs fair."
      },
      {
        "id": "sun1018-nflprop-brock-bowers-over-79-5-rec-yds",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Buffalo Bills @ Las Vegas Raiders · Brock Bowers Rec Yds · 3:25 PM CT",
        "pick": "Brock Bowers Over 79.5 Rec Yds",
        "line": "-113 FanDuel",
        "timeCT": "3:25 PM CT",
        "startCT": "2026-10-18T15:25-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-115",
        "bestOdds": "-113",
        "bestBook": "FanDuel",
        "booksPriced": 3,
        "evPct": 0.82,
        "edgePlus": true,
        "consensus": 2.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 2.0
        },
        "ytWho": "In The Green DFS",
        "xWho": "tonyspicks",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -115 (pinnacle); 3 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-113 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): In The Green DFS. X send-it 1: tonyspicks. hand-checked Oct 18 ~9:58 AM CT.",
        "rationale": "Soft: 2 combined sources (floor 4); all gate rules pass; edge+ vs Pinnacle no-vig.",
        "confidence": 25,
        "yt": 1,
        "x": 1,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. EV +0.8% vs fair."
      },
      {
        "id": "sun1018-nflprop-christian-watson-anytime-td",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Dallas Cowboys @ Green Bay Packers · Christian Watson Anytime TD · 7:20 PM CT",
        "pick": "Christian Watson Anytime TD",
        "line": "+125 FanDuel",
        "timeCT": "7:20 PM CT",
        "startCT": "2026-10-18T19:20-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+124",
        "bestOdds": "+125",
        "bestBook": "FanDuel",
        "booksPriced": 7,
        "evPct": 0.45,
        "edgePlus": true,
        "consensus": 2.6,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 2,
          "combined": 2.0
        },
        "ytWho": "",
        "xWho": "CJ_Everydayy; __LordPenguin",
        "ytVerified": true,
        "ytWithUnverified": 0,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +124 (pinnacle); 7 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+125 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 2: CJ_Everydayy, __LordPenguin. hand-checked Oct 18 ~9:58 AM CT.",
        "rationale": "Soft: 2 combined sources (floor 4); all gate rules pass; edge+ vs Pinnacle no-vig.",
        "confidence": 26,
        "yt": 0,
        "x": 2,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (2 combined). Needs 2 more. EV +0.5% vs fair."
      },
      {
        "id": "sun1018-nflprop-drake-london-over-89-5-rec-yds",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Chicago Bears @ Atlanta Falcons · Drake London Rec Yds · 12:00 PM CT",
        "pick": "Drake London Over 89.5 Rec Yds",
        "line": "-110 DraftKings",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-100",
        "bestOdds": "-110",
        "bestBook": "DraftKings",
        "booksPriced": 3,
        "evPct": -4.55,
        "edgePlus": false,
        "consensus": 1.2,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "GhostLocks",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -100 (pinnacle); 3 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-110 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): GhostLocks. X send-it 0. hand-checked Oct 18 ~9:58 AM CT.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 12,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -4.5% vs fair."
      },
      {
        "id": "sun1018-nflprop-derrick-henry-anytime-td",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Baltimore Ravens @ Cleveland Browns · Derrick Henry Anytime TD · 12:00 PM CT",
        "pick": "Derrick Henry Anytime TD",
        "line": "-160 BetMGM",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-138",
        "bestOdds": "-160",
        "bestBook": "BetMGM",
        "booksPriced": 7,
        "evPct": -5.78,
        "edgePlus": false,
        "consensus": 1.1,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "HighLimitSlips",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -138 (pinnacle); 7 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-160 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): HighLimitSlips. X send-it 0. hand-checked Oct 18 ~9:58 AM CT.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 11,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -5.8% vs fair."
      },
      {
        "id": "sun1018-nflprop-kyren-williams-anytime-td",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Arizona Cardinals @ Los Angeles Rams · Kyren Williams Anytime TD · 3:05 PM CT",
        "pick": "Kyren Williams Anytime TD",
        "line": "-180 DraftKings",
        "timeCT": "3:05 PM CT",
        "startCT": "2026-10-18T15:05-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-172",
        "bestOdds": "-180",
        "bestBook": "DraftKings",
        "booksPriced": 7,
        "evPct": -1.63,
        "edgePlus": false,
        "consensus": 1.1,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "HighLimitSlips",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -172 (pinnacle); 7 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-180 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): HighLimitSlips. X send-it 0. hand-checked Oct 18 ~9:58 AM CT.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 11,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -1.6% vs fair."
      },
      {
        "id": "sun1018-nflprop-jaylen-warren-over-28-5-rec-yds",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Pittsburgh Steelers @ Tampa Bay Buccaneers · Jaylen Warren Rec Yds · 12:00 PM CT",
        "pick": "Jaylen Warren Over 28.5 Rec Yds",
        "line": "-110 Bovada",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-105",
        "bestOdds": "-110",
        "bestBook": "Bovada",
        "booksPriced": 5,
        "evPct": -2.22,
        "edgePlus": false,
        "consensus": 1.1,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "In The Green DFS",
        "xWho": "",
        "ytVerified": true,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -105 (pinnacle); 5 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-110 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 1 independent (accepted videos only; engine-deduped): In The Green DFS. X send-it 0. hand-checked Oct 18 ~9:58 AM CT.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 11,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -2.2% vs fair."
      },
      {
        "id": "sun1018-nflprop-kenneth-walker-iii-anytime-td",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Los Angeles Chargers @ Kansas City Chiefs · Kenneth Walker III Anytime TD · 3:25 PM CT",
        "pick": "Kenneth Walker III Anytime TD",
        "line": "-165 DraftKings",
        "timeCT": "3:25 PM CT",
        "startCT": "2026-10-18T15:25-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-146",
        "bestOdds": "-165",
        "bestBook": "DraftKings",
        "booksPriced": 7,
        "evPct": -4.68,
        "edgePlus": false,
        "consensus": 1.1,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "__LordPenguin",
        "ytVerified": false,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -146 (pinnacle); 7 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-165 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: __LordPenguin. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 11,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -4.7% vs fair."
      },
      {
        "id": "sun1018-nflprop-rhamondre-stevenson-anytime-td",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "New York Jets @ New England Patriots · Rhamondre Stevenson Anytime TD · 12:00 PM CT",
        "pick": "Rhamondre Stevenson Anytime TD",
        "line": "-115 DraftKings",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-100",
        "bestOdds": "-115",
        "bestBook": "DraftKings",
        "booksPriced": 7,
        "evPct": -6.52,
        "edgePlus": false,
        "consensus": 1.1,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "__LordPenguin",
        "ytVerified": false,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -100 (pinnacle); 7 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-115 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: __LordPenguin. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 11,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -6.5% vs fair."
      },
      {
        "id": "sun1018-nflprop-matthew-golden-anytime-td",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Dallas Cowboys @ Green Bay Packers · Matthew Golden Anytime TD · 7:20 PM CT",
        "pick": "Matthew Golden Anytime TD",
        "line": "+170 DraftKings",
        "timeCT": "7:20 PM CT",
        "startCT": "2026-10-18T19:20-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "+180",
        "bestOdds": "+170",
        "bestBook": "DraftKings",
        "booksPriced": 7,
        "evPct": -3.57,
        "edgePlus": false,
        "consensus": 1.1,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "Jokeeee_",
        "ytVerified": false,
        "ytWithUnverified": 1,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +180 (pinnacle); 7 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "pass",
            "reason": "no echo picks"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+170 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: Jokeeee_. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 11,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -3.6% vs fair."
      },
      {
        "id": "sun1018-nflprop-noah-fant-over-1-5-receptions",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "New Orleans Saints @ New York Giants · Noah Fant Receptions · 12:00 PM CT",
        "pick": "Noah Fant Over 1.5 Receptions",
        "line": "None",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": null,
        "bestOdds": null,
        "bestBook": null,
        "booksPriced": 0,
        "evPct": null,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "BretonPicks",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "fail",
            "reason": "no fair price (no Pinnacle no-vig; books_priced=0)"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "na",
            "reason": "no price: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "fair_price"
        ],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: BretonPicks. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); fails fair_price.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. Fails: fair_price."
      },
      {
        "id": "sun1018-nflprop-bucky-irving-over-10-5-rec-yds",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Pittsburgh Steelers @ Tampa Bay Buccaneers · Bucky Irving Rec Yds · 12:00 PM CT",
        "pick": "Bucky Irving Over 10.5 Rec Yds",
        "line": "-113 FanDuel",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": "-100",
        "bestOdds": "-113",
        "bestBook": "FanDuel",
        "booksPriced": 3,
        "evPct": -5.75,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "BretonPicks",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -100 (pinnacle); 3 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-113 within -200 cap"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: BretonPicks. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); all gate rules pass.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. EV -5.8% vs fair."
      },
      {
        "id": "sun1018-nflprop-darnell-mooney-under-21-5-rec-yds",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "New Orleans Saints @ New York Giants · Darnell Mooney Rec Yds · 12:00 PM CT",
        "pick": "Darnell Mooney Under 21.5 Rec Yds",
        "line": "None",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": null,
        "bestOdds": null,
        "bestBook": null,
        "booksPriced": 0,
        "evPct": null,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "BretonPicks",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "fail",
            "reason": "no fair price (no Pinnacle no-vig; books_priced=0)"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "na",
            "reason": "no price: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "fair_price"
        ],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: BretonPicks. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); fails fair_price.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. Fails: fair_price."
      },
      {
        "id": "sun1018-nflprop-denzel-boston-under-50-5-rec-yds",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Baltimore Ravens @ Cleveland Browns · Denzel Boston Rec Yds · 12:00 PM CT",
        "pick": "Denzel Boston Under 50.5 Rec Yds",
        "line": "None",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": null,
        "bestOdds": null,
        "bestBook": null,
        "booksPriced": 0,
        "evPct": null,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "BretonPicks",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "fail",
            "reason": "no fair price (no Pinnacle no-vig; books_priced=0)"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "na",
            "reason": "no price: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "fair_price"
        ],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: BretonPicks. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); fails fair_price.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. Fails: fair_price."
      },
      {
        "id": "sun1018-nflprop-ceedee-lamb-over-80-5-rec-yds",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Dallas Cowboys @ Green Bay Packers · CeeDee Lamb Rec Yds · 7:20 PM CT",
        "pick": "CeeDee Lamb Over 80.5 Rec Yds",
        "line": "None",
        "timeCT": "7:20 PM CT",
        "startCT": "2026-10-18T19:20-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": null,
        "bestOdds": null,
        "bestBook": null,
        "booksPriced": 0,
        "evPct": null,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "tonyspicks",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "fail",
            "reason": "no fair price (no Pinnacle no-vig; books_priced=0)"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "na",
            "reason": "no price: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "fair_price"
        ],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: tonyspicks. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); fails fair_price.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. Fails: fair_price."
      },
      {
        "id": "sun1018-nflprop-travis-kelce-over-52-5-rec-yds",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Los Angeles Chargers @ Kansas City Chiefs · Travis Kelce Rec Yds · 3:25 PM CT",
        "pick": "Travis Kelce Over 52.5 Rec Yds",
        "line": "None",
        "timeCT": "3:25 PM CT",
        "startCT": "2026-10-18T15:25-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": null,
        "bestOdds": null,
        "bestBook": null,
        "booksPriced": 0,
        "evPct": null,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "tonyspicks",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "fail",
            "reason": "no fair price (no Pinnacle no-vig; books_priced=0)"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "na",
            "reason": "no price: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "fair_price"
        ],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: tonyspicks. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); fails fair_price.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. Fails: fair_price."
      },
      {
        "id": "sun1018-nflprop-matthew-stafford-over-279-5-pass-yds",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Arizona Cardinals @ Los Angeles Rams · Matthew Stafford Pass Yds · 3:05 PM CT",
        "pick": "Matthew Stafford Over 279.5 Pass Yds",
        "line": "None",
        "timeCT": "3:05 PM CT",
        "startCT": "2026-10-18T15:05-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": null,
        "bestOdds": null,
        "bestBook": null,
        "booksPriced": 0,
        "evPct": null,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "tonyspicks",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "fail",
            "reason": "no fair price (no Pinnacle no-vig; books_priced=0)"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "na",
            "reason": "no price: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "fair_price"
        ],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: tonyspicks. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); fails fair_price.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. Fails: fair_price."
      },
      {
        "id": "sun1018-nflprop-bucky-irving-over-15-5-rush-att",
        "example": false,
        "sport": "NFL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "prop",
        "game": "Pittsburgh Steelers @ Tampa Bay Buccaneers · Bucky Irving Rush Att · 12:00 PM CT",
        "pick": "Bucky Irving Over 15.5 Rush Att",
        "line": "None",
        "timeCT": "12:00 PM CT",
        "startCT": "2026-10-18T12:00-05:00",
        "gameState": "pre",
        "live": false,
        "final": false,
        "status": "PRE",
        "fairOdds": null,
        "bestOdds": null,
        "bestBook": null,
        "booksPriced": 0,
        "evPct": null,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 4 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 0,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 1.0
        },
        "ytWho": "",
        "xWho": "tonyspicks",
        "ytVerified": false,
        "ytWithUnverified": null,
        "rules": [
          {
            "rule": "fair_price",
            "result": "fail",
            "reason": "no fair price (no Pinnacle no-vig; books_priced=0)"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "na",
            "reason": "no splits pulled: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "echo_discount",
            "result": "na",
            "reason": "no YouTube sources"
          },
          {
            "rule": "model_agreement",
            "result": "na",
            "reason": "no model probability"
          },
          {
            "rule": "home_dog_lean",
            "result": "na",
            "reason": "not a home dog"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "na",
            "reason": "no price: n/a, non-blocking (not counted as a pass)"
          },
          {
            "rule": "sharp_move",
            "result": "na",
            "reason": "no documented sharp/RLM move"
          },
          {
            "rule": "no_hot_hand",
            "result": "pass",
            "reason": "streak/record fields ignored; no hot-hand credit"
          }
        ],
        "gateFails": [
          "fair_price"
        ],
        "why": "YouTube 0 independent (accepted videos only; engine-deduped). X send-it 1: tonyspicks. auto-extracted; not hand-checked.",
        "rationale": "Soft: 1 combined sources (floor 4); fails fair_price.",
        "confidence": 10,
        "yt": 0,
        "x": 1,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 4-source board floor (1 combined). Needs 3 more. Fails: fair_price."
      }
    ]
  },
  "slate": "Sun Oct 18 2026 — NFL Week 7, ALCS G5, NHL, Soccer · Clear/Soft/Watch (engine v1.0.5)",
  "sport": "multi",
  "defaultSport": "MLB",
  "status": "live",
  "summary": "2 on the board (4+ combined sources) · Clear 1 · Soft 22 · Watch 0 rated by tier_engine v1.0.5. Pass hidden. NFL props/ML: 0 cleared (watch lists updated). Research only.",
  "clearedCount": 1,
  "gaugeCount": 1,
  "sports": [
    {
      "id": "CFB",
      "label": "College Football",
      "nav": "CFB",
      "short": "CFB"
    },
    {
      "id": "NBA",
      "label": "Basketball (NBA)",
      "nav": "Basketball",
      "short": "NBA"
    },
    {
      "id": "Soccer",
      "label": "Soccer",
      "nav": "Soccer",
      "short": "Soccer"
    },
    {
      "id": "NHL",
      "label": "Hockey (NHL)",
      "nav": "NHL",
      "short": "NHL"
    },
    {
      "id": "WNBA",
      "label": "Basketball (WNBA)",
      "nav": "WNBA",
      "short": "WNBA"
    },
    {
      "id": "TENNIS",
      "label": "Tennis",
      "nav": "Tennis",
      "short": "Tennis"
    },
    {
      "id": "MLB",
      "label": "Baseball",
      "nav": "Baseball",
      "short": "MLB"
    },
    {
      "id": "NFL",
      "label": "Football (NFL)",
      "nav": "NFL",
      "short": "NFL"
    },
    {
      "id": "UFC",
      "label": "UFC",
      "nav": "UFC",
      "short": "UFC"
    }
  ],
  "archives": {
    "CFB": {
      "lastSlate": "Sat Oct 17 2026",
      "note": "No college football on Sunday's slate."
    },
    "UFC": {
      "lastSlate": "Sat Oct 17 2026",
      "note": "No UFC card on Sunday."
    },
    "NBA": {
      "lastSlate": "Sun Oct 18 2026",
      "note": "No NBA games on Oct 18 (season starts this week)."
    },
    "WNBA": {
      "lastSlate": "Sun Oct 18 2026",
      "note": "Offseason."
    },
    "TENNIS": {
      "lastSlate": "Sun Oct 18 2026",
      "note": "Not researched this pass."
    }
  },
  "researchOnly": true,
  "noBetsPlaced": true,
  "skippedNote": "Hidden: Pass rows and one-side-per-game losers (engine 'dropped'). Public splits from Action Network's free page. No free models were available this pass, so model_agreement is n/a on every row. Oct 17 cards removed; grading is owned by the Betting Consensus Screener.",
  "bets": [
    {
      "id": "sun1018-mlb-tampa-bay-rays-ml",
      "example": false,
      "sport": "MLB",
      "engineTier": "Clear",
      "tier": "cleared",
      "marketType": "moneyline",
      "game": "Tampa Bay Rays @ Cleveland Guardians · 4:10 PM CT",
      "pick": "Tampa Bay Rays ML",
      "line": "-127 BetOnline",
      "timeCT": "4:10 PM CT",
      "startCT": "2026-10-18T16:10-05:00",
      "gameState": "pre",
      "live": false,
      "final": false,
      "status": "PRE",
      "fairOdds": "-117",
      "bestOdds": "-127",
      "bestBook": "BetOnline",
      "booksPriced": 27,
      "evPct": -3.63,
      "edgePlus": false,
      "consensus": 6.1,
      "combined": 5.0,
      "publish": true,
      "publishReason": "5 combined sources",
      "sources": {
        "youtube": 5,
        "ytRaw": 16,
        "ytEcho": 0,
        "xSendIt": 0,
        "combined": 5.0
      },
      "ytWho": "2eZ Sports Betting; Free Picks PickDawgz; GameDayCalls; Sports Parlay Picks; SteadyPicks",
      "xWho": "",
      "ytVerified": true,
      "ytWithUnverified": 5,
      "rules": [
        {
          "rule": "fair_price",
          "result": "pass",
          "reason": "fair -117 (exchange); 27 books priced"
        },
        {
          "rule": "key_numbers",
          "result": "na",
          "reason": "football spreads only"
        },
        {
          "rule": "public_bias",
          "result": "pass",
          "reason": "65% tickets on pick side (<70%)"
        },
        {
          "rule": "echo_discount",
          "result": "pass",
          "reason": "no echo picks"
        },
        {
          "rule": "model_agreement",
          "result": "na",
          "reason": "no model probability"
        },
        {
          "rule": "home_dog_lean",
          "result": "na",
          "reason": "not a home dog"
        },
        {
          "rule": "longshot",
          "result": "na",
          "reason": "shorter than +300"
        },
        {
          "rule": "favorite_cap",
          "result": "pass",
          "reason": "-127 within -200 cap"
        },
        {
          "rule": "sharp_move",
          "result": "na",
          "reason": "no documented sharp/RLM move"
        },
        {
          "rule": "no_hot_hand",
          "result": "pass",
          "reason": "streak/record fields ignored; no hot-hand credit"
        }
      ],
      "gateFails": [],
      "why": "YouTube 5 independent (accepted videos only; engine-deduped): 2eZ Sports Betting, Free Picks PickDawgz, GameDayCalls, Sports Parlay Picks, SteadyPicks. X send-it 0.",
      "rationale": "Clear: 5 combined sources (floor 4); all gate rules pass.",
      "confidence": 61,
      "rank": 1
    },
    {
      "id": "sun1018-soccer-real-madrid-ml",
      "example": false,
      "sport": "Soccer",
      "engineTier": "Soft",
      "tier": "gauge",
      "marketType": "moneyline",
      "game": "Sevilla @ Real Madrid · 2:00 PM CT",
      "pick": "Real Madrid ML",
      "line": "-400 Caesars",
      "timeCT": "2:00 PM CT",
      "startCT": "2026-10-18T14:00-05:00",
      "gameState": "pre",
      "live": false,
      "final": false,
      "status": "PRE",
      "fairOdds": "-355",
      "bestOdds": "-400",
      "bestBook": "Caesars",
      "booksPriced": 27,
      "evPct": -2.47,
      "edgePlus": false,
      "consensus": 3.4,
      "combined": 4.0,
      "publish": true,
      "publishReason": "4 combined sources",
      "sources": {
        "youtube": 4,
        "ytRaw": 8,
        "ytEcho": 0,
        "xSendIt": 0,
        "combined": 4.0
      },
      "ytWho": "Hoodtrends Analysis; Odogwu football; RueDesJoueurs; Titus Predict",
      "xWho": "",
      "ytVerified": true,
      "ytWithUnverified": 4,
      "rules": [
        {
          "rule": "fair_price",
          "result": "pass",
          "reason": "fair -355 (pinnacle); 27 books priced"
        },
        {
          "rule": "key_numbers",
          "result": "na",
          "reason": "football spreads only"
        },
        {
          "rule": "public_bias",
          "result": "fail",
          "reason": "99% of tickets on pick side (public side, -0.5)"
        },
        {
          "rule": "echo_discount",
          "result": "pass",
          "reason": "no echo picks"
        },
        {
          "rule": "model_agreement",
          "result": "na",
          "reason": "no model probability"
        },
        {
          "rule": "home_dog_lean",
          "result": "na",
          "reason": "not a home dog"
        },
        {
          "rule": "longshot",
          "result": "na",
          "reason": "shorter than +300"
        },
        {
          "rule": "favorite_cap",
          "result": "fail",
          "reason": "-400 shorter than -200 cap (Soccer ml)"
        },
        {
          "rule": "sharp_move",
          "result": "na",
          "reason": "no documented sharp/RLM move"
        },
        {
          "rule": "no_hot_hand",
          "result": "pass",
          "reason": "streak/record fields ignored; no hot-hand credit"
        }
      ],
      "gateFails": [
        "public_bias",
        "favorite_cap"
      ],
      "why": "YouTube 4 independent (accepted videos only; engine-deduped): Hoodtrends Analysis, Odogwu football, RueDesJoueurs, Titus Predict. X send-it 0.",
      "rationale": "Soft: 4 combined sources (floor 4); fails public_bias, favorite_cap.",
      "confidence": 34,
      "rank": 2
    }
  ],
  "resultsTally": {
    "cleared": "2-2-0",
    "gauge": "19-15-0",
    "nearMiss": "121-87-3",
    "checkedAt": "9:51 AM CT",
    "checkedAtIso": "2026-10-18T09:51:26-05:00",
    "label": "Graded record (ESPN finals, regraded Oct 17): CLEARED 2-2-0 · GAUGE 19-15-0 · Near misses 121-87-3 (separate) · n=38"
  },
  "todaysGauge": {
    "title": "Today's top",
    "label": "Engine tiers · start times CT",
    "items": [
      {
        "rank": 1,
        "tier": "CLEAR",
        "pick": "Tampa Bay Rays ML",
        "line": "-127 BetOnline",
        "sport": "MLB",
        "game": "Tampa Bay Rays @ Cleveland Guardians",
        "timeCT": "4:10 PM CT",
        "yt": 5,
        "x": 0,
        "edge": null,
        "rationale": "Clear: 5 combined sources (floor 4); all gate rules pass.",
        "startCT": "2026-10-18T16:10-05:00",
        "final": false,
        "live": false,
        "onBoard": true
      },
      {
        "rank": 2,
        "tier": "SOFT",
        "pick": "Real Madrid ML",
        "line": "-400 Caesars",
        "sport": "Soccer",
        "game": "Sevilla @ Real Madrid",
        "timeCT": "2:00 PM CT",
        "yt": 4,
        "x": 0,
        "edge": null,
        "rationale": "Soft: 4 combined sources (floor 4); fails public_bias, favorite_cap.",
        "startCT": "2026-10-18T14:00-05:00",
        "final": false,
        "live": false,
        "onBoard": true
      },
      {
        "rank": 3,
        "tier": "SOFT",
        "pick": "Pittsburgh Steelers -2.5",
        "line": "-104 FanDuel",
        "sport": "NFL",
        "game": "Pittsburgh Steelers @ Tampa Bay Buccaneers",
        "timeCT": "12:00 PM CT",
        "yt": 2,
        "x": 0,
        "edge": null,
        "rationale": "Soft: 2.25 combined sources (floor 4); all gate rules pass.",
        "startCT": "2026-10-18T12:00-05:00",
        "final": false,
        "live": false,
        "onBoard": false
      },
      {
        "rank": 4,
        "tier": "SOFT",
        "pick": "Carolina Panthers -3",
        "line": "-107 LowVig",
        "sport": "NFL",
        "game": "Carolina Panthers @ Philadelphia Eagles",
        "timeCT": "12:00 PM CT",
        "yt": 2,
        "x": 0,
        "edge": null,
        "rationale": "Soft: 2 combined sources (floor 4); all gate rules pass.",
        "startCT": "2026-10-18T12:00-05:00",
        "final": false,
        "live": false,
        "onBoard": false
      },
      {
        "rank": 5,
        "tier": "SOFT",
        "pick": "New York Jets +7.5",
        "line": "-112 DraftKings",
        "sport": "NFL",
        "game": "New York Jets @ New England Patriots",
        "timeCT": "12:00 PM CT",
        "yt": 1,
        "x": 1,
        "edge": null,
        "rationale": "Soft: 2 combined sources (floor 4); all gate rules pass.",
        "startCT": "2026-10-18T12:00-05:00",
        "final": false,
        "live": false,
        "onBoard": false
      },
      {
        "rank": 6,
        "tier": "SOFT",
        "pick": "Los Angeles Rams -13.5",
        "line": "+104 Pinnacle",
        "sport": "NFL",
        "game": "Arizona Cardinals @ Los Angeles Rams",
        "timeCT": "3:05 PM CT",
        "yt": 2,
        "x": 0,
        "edge": null,
        "rationale": "Soft: 2 combined sources (floor 4); fails public_bias.",
        "startCT": "2026-10-18T15:05-05:00",
        "final": false,
        "live": false,
        "onBoard": false
      },
      {
        "rank": 7,
        "tier": "SOFT",
        "pick": "Indianapolis Colts -6.5",
        "line": "-105 Bovada",
        "sport": "NFL",
        "game": "Tennessee Titans @ Indianapolis Colts",
        "timeCT": "12:00 PM CT",
        "yt": 2,
        "x": 0,
        "edge": null,
        "rationale": "Soft: 2 combined sources (floor 4); fails public_bias.",
        "startCT": "2026-10-18T12:00-05:00",
        "final": false,
        "live": false,
        "onBoard": false
      }
    ],
    "emptyText": "Nothing qualified today. No unstarted pick has 4+ combined sources (independent YouTube + 0.25×echo + X posters). The best near misses are on each sport's watch list with the reasons they fell short.",
    "note": "On the board = 4+ combined sources (independent YT + 0.25×echo + X posters). Rows under 4 stay on each sport's watch list."
  },
  "performance": {
    "tally": {
      "byTier": {
        "cleared": {
          "record": "2-2-0",
          "w": 2,
          "l": 2,
          "p": 0,
          "n": 4,
          "hitRate": 50.0,
          "units": -0.53,
          "roiPct": -13.2,
          "pricedN": 4,
          "clvN": 3,
          "clvScored": 3,
          "clvBeat": 2,
          "avgClvPp": 0.84
        },
        "gauge": {
          "record": "19-15-0",
          "w": 19,
          "l": 15,
          "p": 0,
          "n": 34,
          "hitRate": 55.9,
          "units": -1.08,
          "roiPct": -3.4,
          "pricedN": 32,
          "clvN": 11,
          "clvScored": 16,
          "clvBeat": 8,
          "avgClvPp": 0.08
        }
      },
      "bySport": {
        "CFB": {
          "record": "3-5-0",
          "w": 3,
          "l": 5,
          "p": 0,
          "n": 8,
          "hitRate": 37.5,
          "units": -3.2,
          "roiPct": -45.7,
          "pricedN": 7,
          "clvN": 5,
          "clvScored": 7,
          "clvBeat": 4,
          "avgClvPp": -0.08
        },
        "MLB": {
          "record": "2-0-0",
          "w": 2,
          "l": 0,
          "p": 0,
          "n": 2,
          "hitRate": 100.0,
          "units": 1.66,
          "roiPct": 83.0,
          "pricedN": 2,
          "clvN": 2,
          "clvScored": 2,
          "clvBeat": 1,
          "avgClvPp": 0.55
        },
        "NFL": {
          "record": "3-8-0",
          "w": 3,
          "l": 8,
          "p": 0,
          "n": 11,
          "hitRate": 27.3,
          "units": -4.36,
          "roiPct": -43.6,
          "pricedN": 10,
          "clvN": 4,
          "clvScored": 7,
          "clvBeat": 3,
          "avgClvPp": 0.17
        },
        "NHL": {
          "record": "2-1-0",
          "w": 2,
          "l": 1,
          "p": 0,
          "n": 3,
          "hitRate": 66.7,
          "units": 0.68,
          "roiPct": 22.7,
          "pricedN": 3,
          "clvN": 3,
          "clvScored": 3,
          "clvBeat": 2,
          "avgClvPp": 0.68
        },
        "SOCCER": {
          "record": "6-0-0",
          "w": 6,
          "l": 0,
          "p": 0,
          "n": 6,
          "hitRate": 100.0,
          "units": 3.0,
          "roiPct": 50.0,
          "pricedN": 6,
          "clvN": 0,
          "clvScored": 0,
          "clvBeat": 0,
          "avgClvPp": null
        },
        "UFC": {
          "record": "5-3-0",
          "w": 5,
          "l": 3,
          "p": 0,
          "n": 8,
          "hitRate": 62.5,
          "units": 0.61,
          "roiPct": 7.6,
          "pricedN": 8,
          "clvN": 0,
          "clvScored": 0,
          "clvBeat": 0,
          "avgClvPp": null
        }
      },
      "nearMiss": {
        "record": "121-87-3",
        "w": 121,
        "l": 87,
        "p": 3,
        "n": 211,
        "hitRate": 58.2,
        "units": 16.36,
        "roiPct": 11.3,
        "pricedN": 145,
        "clvN": 86,
        "clvScored": 109,
        "clvBeat": 51,
        "avgClvPp": 0.29
      },
      "all": {
        "record": "21-17-0",
        "w": 21,
        "l": 17,
        "p": 0,
        "n": 38,
        "hitRate": 55.3,
        "units": -1.61,
        "roiPct": -4.5,
        "pricedN": 36,
        "clvN": 14,
        "clvScored": 19,
        "clvBeat": 10,
        "avgClvPp": 0.25,
        "clvPtsN": 5,
        "avgClvPts": 0.1
      },
      "clvTags": {
        "beat": 10,
        "lose": 7,
        "match": 2,
        "unobserved": 19
      },
      "clvTagsNearMiss": {
        "beat": 51,
        "lose": 33,
        "match": 25,
        "unobserved": 102
      },
      "pending": 8,
      "ungraded": 55
    },
    "recent": [
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Maple Leafs ML",
        "game": "Sabres @ Maple Leafs · 6:00 PM CT",
        "publishedAmerican": null,
        "result": "loss",
        "units": null,
        "gradeNote": "4-5",
        "final": "TOR 4 - BUF 5",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Matthew Tkachuk goal / 1+ point",
        "game": "Canucks @ Panthers · 6:00 PM CT",
        "publishedAmerican": 150,
        "result": "loss",
        "units": -1.0,
        "gradeNote": "box score: M. Tkachuk 0 G (graded as primary ATG leg) [manual box-score grade 2026-10-17, Betting Consensus Screener]",
        "final": "FLA 3 - VAN 2",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Darren Raddysh anytime goal",
        "game": "Sabres @ Maple Leafs · 6:00 PM CT",
        "publishedAmerican": 554,
        "result": "loss",
        "units": -1.0,
        "gradeNote": "box score: Raddysh 0 G [manual box-score grade 2026-10-17, Betting Consensus Screener]",
        "final": "TOR 4 - BUF 5",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Flyers ML",
        "game": "Flyers @ Red Wings · 6:30 PM CT",
        "publishedAmerican": 120,
        "result": "loss",
        "units": -1.0,
        "gradeNote": "1-2",
        "final": "DET 2 - PHI 1",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Senators ML",
        "game": "Islanders @ Senators · 6:00 PM CT",
        "publishedAmerican": -157,
        "result": "win",
        "units": 0.637,
        "gradeNote": "2-1",
        "final": "OTT 2 - NYI 1",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Rangers ML / +1.5",
        "game": "Rangers @ Devils · 6:00 PM CT",
        "publishedAmerican": 120,
        "result": "loss",
        "units": -1.0,
        "gradeNote": "1-7",
        "final": "NJ 7 - NYR 1",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Wild ML",
        "game": "Blues @ Wild · 7:00 PM CT",
        "publishedAmerican": -138,
        "result": "win",
        "units": 0.725,
        "gradeNote": "5-4",
        "final": "MIN 5 - STL 4",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Jack Hughes goal / 1+ point (+Bratt 1+)",
        "game": "Rangers @ Devils · 6:00 PM CT",
        "publishedAmerican": null,
        "result": "loss",
        "units": null,
        "gradeNote": "box score: Jack Hughes 0 G (graded as primary ATG leg) [manual box-score grade 2026-10-17, Betting Consensus Screener]",
        "final": "NJ 7 - NYR 1",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Panthers ML / −1.5",
        "game": "Canucks @ Panthers · 6:00 PM CT",
        "publishedAmerican": -280,
        "result": "win",
        "units": 0.357,
        "gradeNote": "3-2",
        "final": "FLA 3 - VAN 2",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Alex DeBrincat goal / 1+ point",
        "game": "Flyers @ Red Wings · 6:30 PM CT",
        "publishedAmerican": 171,
        "result": "loss",
        "units": -1.0,
        "gradeNote": "box score: DeBrincat 0 G (graded as primary ATG leg) [manual box-score grade 2026-10-17, Betting Consensus Screener]",
        "final": "DET 2 - PHI 1",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NHL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Sabres–Maple Leafs Over 6.5",
        "game": "Sabres @ Maple Leafs · 6:00 PM CT",
        "publishedAmerican": -122,
        "result": "win",
        "units": 0.82,
        "gradeNote": "total 9 vs 6.5",
        "final": "TOR 4 - BUF 5",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NFL",
        "tier": "gauge",
        "class": "main",
        "pick": "Emanuel Wilson rushing OVER",
        "game": "Seahawks @ Broncos · 7:15 PM CT",
        "publishedAmerican": null,
        "result": "loss",
        "units": null,
        "gradeNote": "box score: Wilson 14-52 rush yds vs o66.5 primary (alt 50+ would win; o78.5 rush+rec 52 also loss) [manual box-score grade 2026-10-17, Betting Consensus Screener]",
        "final": "DEN 17 - SEA 14",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NFL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Under 40.5",
        "game": "Seahawks @ Broncos · 7:15 PM CT",
        "publishedAmerican": -105,
        "result": "win",
        "units": 0.952,
        "gradeNote": "total 31 vs 40.5",
        "final": "DEN 17 - SEA 14",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NFL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Courtland Sutton receiving OVER (alt 20–25+)",
        "game": "Seahawks @ Broncos · 7:15 PM CT",
        "publishedAmerican": null,
        "result": "loss",
        "units": null,
        "gradeNote": "box score: Sutton 2-19 rec yds vs alt 20+ (lowest rung) [manual box-score grade 2026-10-17, Betting Consensus Screener]",
        "final": "DEN 17 - SEA 14",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NFL",
        "tier": "gauge",
        "class": "main",
        "pick": "Seahawks −2.5",
        "game": "Seahawks @ Broncos · 7:15 PM CT",
        "publishedAmerican": -106,
        "result": "loss",
        "units": -1.0,
        "gradeNote": "margin -3 vs -2.5",
        "final": "DEN 17 - SEA 14",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NFL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Over 40.5",
        "game": "Seahawks @ Broncos · 7:15 PM CT",
        "publishedAmerican": null,
        "result": "loss",
        "units": null,
        "gradeNote": "total 31 vs 40.5",
        "final": "DEN 17 - SEA 14",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NFL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Jaxon Smith-Njigba receiving OVER (alt 50+/80+)",
        "game": "Seahawks @ Broncos · 7:15 PM CT",
        "publishedAmerican": null,
        "result": "win",
        "units": null,
        "gradeNote": "box score: JSN 12-134 rec yds clears alt 50+ and 80+ [manual box-score grade 2026-10-17, Betting Consensus Screener]",
        "final": "DEN 17 - SEA 14",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NFL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Jaxon Smith-Njigba anytime TD",
        "game": "Seahawks @ Broncos · 7:15 PM CT",
        "publishedAmerican": null,
        "result": "loss",
        "units": null,
        "gradeNote": "box score",
        "final": "DEN 17 - SEA 14",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NFL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Broncos +2.5",
        "game": "Seahawks @ Broncos · 7:15 PM CT",
        "publishedAmerican": null,
        "result": "win",
        "units": null,
        "gradeNote": "margin 3 vs +2.5",
        "final": "DEN 17 - SEA 14",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NFL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "AJ Barner receiving OVER (alt 20–30+)",
        "game": "Seahawks @ Broncos · 7:15 PM CT",
        "publishedAmerican": null,
        "result": "loss",
        "units": null,
        "gradeNote": "box score: Barner 3-16 rec yds vs alt 20+ (lowest rung) [manual box-score grade 2026-10-17, Betting Consensus Screener]",
        "final": "DEN 17 - SEA 14",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "NFL",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "1H Under 20.5",
        "game": "Seahawks @ Broncos · 7:15 PM CT",
        "publishedAmerican": null,
        "result": "loss",
        "units": null,
        "gradeNote": "total 31 vs 20.5",
        "final": "DEN 17 - SEA 14",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "MLB",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Shohei Ohtani HR",
        "game": "Brewers @ Dodgers · 7:00 PM CT",
        "publishedAmerican": 590,
        "result": "win",
        "units": 5.9,
        "gradeNote": "box score: Ohtani 1 HR [manual box-score grade 2026-10-17, Betting Consensus Screener]",
        "final": "LAD 4 - MIL 6",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "MLB",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Brewers ML",
        "game": "Brewers @ Dodgers · NLCS · 7:00 PM CT",
        "publishedAmerican": 138,
        "result": "win",
        "units": 1.38,
        "gradeNote": "6-4",
        "final": "LAD 4 - MIL 6",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "MLB",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Brewers–Dodgers Over 7.5",
        "game": "Brewers @ Dodgers · NLCS · 7:00 PM CT",
        "publishedAmerican": -109,
        "result": "win",
        "units": 0.917,
        "gradeNote": "total 10 vs 7.5",
        "final": "LAD 4 - MIL 6",
        "clvPp": null
      },
      {
        "date": "2026-10-15",
        "sport": "MLB",
        "tier": "near miss",
        "class": "nearMiss",
        "pick": "Jackson Chourio HR",
        "game": "Brewers @ Dodgers · 7:00 PM CT",
        "publishedAmerican": null,
        "result": "loss",
        "units": null,
        "gradeNote": "box score: Chourio 0 HR [manual box-score grade 2026-10-17, Betting Consensus Screener]",
        "final": "LAD 4 - MIL 6",
        "clvPp": null
      }
    ],
    "note": "Flat 1u per card at the published price. Graded by Betting Consensus Screener from ESPN finals (regraded Oct 17). Track record uses the old CLEARED/GAUGE labels; new Clear/Soft/Watch cards start grading from Oct 17. Near misses tracked separately."
  },
  "xNote": "Send-it list 1867962331566612965 via free X search: ~217 posts 12:27–9:33 AM CT, slip images OCR'd; unique posters, today's unstarted side/total picks only (mostly player props, which don't count). Never posted.",
  "oddsApiNote": "The Odds API (us+eu) snapshot 9:10 AM CT Oct 18 (NFL, NHL, MLB, 7 soccer leagues); closing capture run once. Fair = Pinnacle no-vig (no Pinnacle price for ALCS G5 this pass). Line moves: NFL Thu Oct 15 → Sun, Forest–Arsenal Sat → Sun; other games had no prior snapshot. Not confirmed sharp action.",
  "youtubeNote": "YouTube: TubeAlfred had 0 credits, so all searches ran through free yt-dlp (NFL 55 searches incl. a second today-only wave; MLB/NHL/Soccer 25 each; this-week filter, then kept only Oct 17-18 CT uploads) with captions pulled via yt-dlp. Videos scanned (captions read) / counted (pre-game, today): NFL 341/113, MLB 120/48, NHL 121/43, Soccer 353/119. Picks are auto-extracted from captions. On-board picks and every engine-Clear candidate were hand-checked (9:35 AM CT Oct 18; Oct 17 uploads about Saturday's games were rejected) and their counts corrected. Same-day = uploaded the previous calendar day (CT) or game day, before the game. The engine counts only hand-accepted videos and excludes AI/scripted channels; a 'with unverified: N' chip shows what the count would be if unchecked videos were included.",
  "provisional": {
    "show": false,
    "title": "PROVISIONAL TIERS",
    "text": "Atlas hasn't decided Clear's definition yet. Option A: 2+ X send-it posters with a 2.5-point model edge. Option B: 3+ independent YouTube with every rule passing. Today's tiers use Option B (engine v1.0.0) and may be re-tiered."
  },
  "tierSpec": "v3-engine",
  "tierCounts": {
    "NFL": {
      "Clear": 0,
      "Soft": 11,
      "Watch": 0,
      "onBoard": 0
    },
    "MLB": {
      "Clear": 1,
      "Soft": 0,
      "Watch": 0,
      "onBoard": 1
    },
    "NHL": {
      "Clear": 0,
      "Soft": 2,
      "Watch": 0,
      "onBoard": 0
    },
    "Soccer": {
      "Clear": 0,
      "Soft": 9,
      "Watch": 0,
      "onBoard": 1
    }
  },
  "propsNote": "NFL props + moneylines pass (Oct 18 ~10:00 AM CT, engine v1.0.5): 84 prop rows, 9 ML rows. Clear 0 · Soft 88 · Pass 4; none reached the 4-source board floor. Prop lines from The Odds API event props (us+eu) for the 9 games with 2+ sources; fair = Pinnacle no-vig, else exchange/consensus no-vig. Research only."
};
