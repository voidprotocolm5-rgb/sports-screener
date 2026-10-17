/* Auto-generated companion to data.json for file:// fallback.
   Slate Scout must update BOTH data.json and this file together. */
window.BET_BOARD_DATA = {
  "updatedAt": "2026-10-17T09:59:47-05:00",
  "updatedAtLabel": "Oct 17, 2026 · 9:59 AM CT",
  "nearMiss": {
    "UFC": [
      {
        "id": "sat1017-ufc-erin-blanchfield-ml",
        "example": false,
        "sport": "UFC",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Jasmine Jasudavicius @ Erin Blanchfield · 9:15 PM CT",
        "pick": "Erin Blanchfield ML",
        "line": "-320 BetOnline",
        "timeCT": "9:15 PM CT",
        "startCT": "2026-10-17T21:15-05:00",
        "gameState": "pre",
        "fairOdds": "-293",
        "bestOdds": "-320",
        "bestBook": "BetOnline",
        "booksPriced": 19,
        "evPct": -2.15,
        "edgePlus": false,
        "consensus": 4.6,
        "combined": 5.25,
        "publish": false,
        "publishReason": "5.25 combined sources < 6 required",
        "sources": {
          "youtube": 5,
          "ytRaw": 6,
          "ytEcho": 1,
          "xSendIt": 0,
          "combined": 5.25
        },
        "ytWho": "Fight HQ; Guy Boston Sports; LAS 8 ESQUINAS; Pub Sports MMA; The Die Hard MMA Podcast",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -293 (pinnacle); 19 books priced"
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
            "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "fail",
            "reason": "-320 shorter than -200 cap (UFC ml)"
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
          "favorite_cap"
        ],
        "why": "YouTube 5 independent (auto-extracted from captions; not hand-verified): Fight HQ, Guy Boston Sports, LAS 8 ESQUINAS, Pub Sports MMA, The Die Hard MMA Podcast. X send-it 0.",
        "rationale": "Soft: 5.25 combined sources (floor 6); fails favorite_cap.",
        "confidence": 46,
        "yt": 5,
        "x": 0,
        "total": 5.25,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (5.25 combined). Needs 0.75 more. Fails: favorite_cap. EV -2.1% vs fair."
      },
      {
        "id": "sat1017-ufc-kyle-daukaus-ml",
        "example": false,
        "sport": "UFC",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Kyle Daukaus @ Marc-Andre Barriault · 8:15 PM CT",
        "pick": "Kyle Daukaus ML",
        "line": "-195 Bovada",
        "timeCT": "8:15 PM CT",
        "startCT": "2026-10-17T20:15-05:00",
        "gameState": "pre",
        "fairOdds": "-179",
        "bestOdds": "-195",
        "bestBook": "Bovada",
        "booksPriced": 18,
        "evPct": -2.94,
        "edgePlus": false,
        "consensus": 5.1,
        "combined": 5.0,
        "publish": false,
        "publishReason": "5 combined sources < 6 required",
        "sources": {
          "youtube": 5,
          "ytRaw": 6,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 5.0
        },
        "ytWho": "ContraGolpe - Analisa; Guy Boston Sports; LAS 8 ESQUINAS; MMA Husky Hustler; MMA Tugg",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -179 (pinnacle); 18 books priced"
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
            "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-195 within -200 cap"
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
        "why": "YouTube 5 independent (hand-verified; engine-deduped): ContraGolpe - Analisa, Guy Boston Sports, LAS 8 ESQUINAS, MMA Husky Hustler, MMA Tugg. X send-it 0. YT hand-verified 5 of 6 auto-extracted.",
        "rationale": "Soft: 5 combined sources (floor 6); all gate rules pass.",
        "confidence": 51,
        "yt": 5,
        "x": 0,
        "total": 5.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (5 combined). Needs 1 more. EV -2.9% vs fair."
      },
      {
        "id": "sat1017-ufc-mandel-nallo-ml",
        "example": false,
        "sport": "UFC",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Nate Landwehr @ Mandel Nallo · 7:15 PM CT",
        "pick": "Mandel Nallo ML",
        "line": "-270 BetUS",
        "timeCT": "7:15 PM CT",
        "startCT": "2026-10-17T19:15-05:00",
        "gameState": "pre",
        "fairOdds": "-269",
        "bestOdds": "-270",
        "bestBook": "BetUS",
        "booksPriced": 19,
        "evPct": -0.1,
        "edgePlus": false,
        "consensus": 4.5,
        "combined": 5.0,
        "publish": false,
        "publishReason": "5 combined sources < 6 required",
        "sources": {
          "youtube": 5,
          "ytRaw": 5,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 5.0
        },
        "ytWho": "Guy Boston Sports; MMA Husky Hustler; MMA Tugg; MMAPG; The Die Hard MMA Podcast",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -269 (pinnacle); 19 books priced"
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
            "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "fail",
            "reason": "-270 shorter than -200 cap (UFC ml)"
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
          "favorite_cap"
        ],
        "why": "YouTube 5 independent (auto-extracted from captions; not hand-verified): Guy Boston Sports, MMA Husky Hustler, MMA Tugg, MMAPG, The Die Hard MMA Podcast. X send-it 0.",
        "rationale": "Soft: 5 combined sources (floor 6); fails favorite_cap.",
        "confidence": 45,
        "yt": 5,
        "x": 0,
        "total": 5.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (5 combined). Needs 1 more. Fails: favorite_cap. EV -0.1% vs fair."
      },
      {
        "id": "sat1017-ufc-steven-koslow-ml",
        "example": false,
        "sport": "UFC",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Steven Koslow @ Chad Anheliger · 5:00 PM CT",
        "pick": "Steven Koslow ML",
        "line": "-162 BetRivers",
        "timeCT": "5:00 PM CT",
        "startCT": "2026-10-17T17:00-05:00",
        "gameState": "pre",
        "fairOdds": "-157",
        "bestOdds": "-162",
        "bestBook": "BetRivers",
        "booksPriced": 13,
        "evPct": -1.2,
        "edgePlus": false,
        "consensus": 3.0,
        "combined": 3.0,
        "publish": false,
        "publishReason": "3 combined sources < 6 required",
        "sources": {
          "youtube": 3,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 3.0
        },
        "ytWho": "Chunder MMA; MMA JOEY; The Die Hard MMA Podcast",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -157 (pinnacle); 13 books priced"
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
            "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
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
        "why": "YouTube 3 independent (hand-verified; engine-deduped): Chunder MMA, MMA JOEY, The Die Hard MMA Podcast. X send-it 0.",
        "rationale": "Soft: 3 combined sources (floor 6); all gate rules pass.",
        "confidence": 30,
        "yt": 3,
        "x": 0,
        "total": 3.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (3 combined). Needs 3 more. EV -1.2% vs fair."
      },
      {
        "id": "sat1017-ufc-kyle-nelson-ml",
        "example": false,
        "sport": "UFC",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Cristian Pérez @ Kyle Nelson · 8:45 PM CT",
        "pick": "Kyle Nelson ML",
        "line": "+275 BetRivers",
        "timeCT": "8:45 PM CT",
        "startCT": "2026-10-17T20:45-05:00",
        "gameState": "pre",
        "fairOdds": "+293",
        "bestOdds": "+275",
        "bestBook": "BetRivers",
        "booksPriced": 15,
        "evPct": -4.58,
        "edgePlus": false,
        "consensus": 2.2,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Diary of a Pro Gambler; Fight Fiend Forecast",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +293 (pinnacle); 15 books priced"
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
            "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+275 within -200 cap"
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
        "why": "YouTube 2 independent (hand-verified; engine-deduped): Diary of a Pro Gambler, Fight Fiend Forecast. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 22,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -4.6% vs fair."
      },
      {
        "id": "sat1017-ufc-julien-leblanc-ml",
        "example": false,
        "sport": "UFC",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Nick Galanti @ Julien Leblanc · 6:15 PM CT",
        "pick": "Julien Leblanc ML",
        "line": "+490 DraftKings",
        "timeCT": "6:15 PM CT",
        "startCT": "2026-10-17T18:15-05:00",
        "gameState": "pre",
        "fairOdds": "+534",
        "bestOdds": "+490",
        "bestBook": "DraftKings",
        "booksPriced": 15,
        "evPct": -6.94,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Fight HQ; MMA Tugg",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +534 (pinnacle); 15 books priced"
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
            "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
          },
          {
            "rule": "longshot",
            "result": "pass",
            "reason": "+490 longshot flagged; +2% EV requirement skipped per Atlas"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+490 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Fight HQ, MMA Tugg. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 20,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -6.9% vs fair."
      },
      {
        "id": "sat1017-ufc-chelsea-chandler-ml",
        "example": false,
        "sport": "UFC",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Chelsea Chandler @ Melissa Croden · 4:45 PM CT",
        "pick": "Chelsea Chandler ML",
        "line": "+275 DraftKings",
        "timeCT": "4:45 PM CT",
        "startCT": "2026-10-17T16:45-05:00",
        "gameState": "pre",
        "fairOdds": "+297",
        "bestOdds": "+275",
        "bestBook": "DraftKings",
        "booksPriced": 14,
        "evPct": -5.54,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "MMA JOEY; Uselyis",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +297 (pinnacle); 14 books priced"
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
            "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "+275 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): MMA JOEY, Uselyis. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 20,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -5.5% vs fair."
      },
      {
        "id": "sat1017-ufc-jhonata-diniz-ml",
        "example": false,
        "sport": "UFC",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Jhonata Diniz @ Tanner Boser · 6:40 PM CT",
        "pick": "Jhonata Diniz ML",
        "line": "-200 BetOnline",
        "timeCT": "6:40 PM CT",
        "startCT": "2026-10-17T18:40-05:00",
        "gameState": "pre",
        "fairOdds": "-193",
        "bestOdds": "-200",
        "bestBook": "BetOnline",
        "booksPriced": 15,
        "evPct": -1.19,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Guy Boston Sports; MMA JOEY",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -193 (pinnacle); 15 books priced"
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
            "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-200 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Guy Boston Sports, MMA JOEY. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 20,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -1.2% vs fair."
      },
      {
        "id": "sat1017-ufc-joel-faglier-ml",
        "example": false,
        "sport": "UFC",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Javad Mahjoub @ Joel Faglier · 5:50 PM CT",
        "pick": "Joel Faglier ML",
        "line": "-130 BetUS",
        "timeCT": "5:50 PM CT",
        "startCT": "2026-10-17T17:50-05:00",
        "gameState": "pre",
        "fairOdds": "-122",
        "bestOdds": "-130",
        "bestBook": "BetUS",
        "booksPriced": 15,
        "evPct": -2.77,
        "edgePlus": false,
        "consensus": 1.3,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "Uselyis",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -122 (pinnacle); 15 books priced"
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
            "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
          },
          {
            "rule": "longshot",
            "result": "na",
            "reason": "shorter than +300"
          },
          {
            "rule": "favorite_cap",
            "result": "pass",
            "reason": "-130 within -200 cap"
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
        "why": "YouTube 1 independent (hand-verified; engine-deduped): Uselyis. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 6); all gate rules pass.",
        "confidence": 13,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. EV -2.8% vs fair."
      }
    ],
    "CFB": [
      {
        "id": "sat1017-cfb-byu-10-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Notre Dame Fighting Irish @ BYU Cougars · 6:30 PM CT",
        "pick": "BYU +10.5",
        "line": "-108 BetMGM",
        "timeCT": "6:30 PM CT",
        "startCT": "2026-10-17T18:30-05:00",
        "gameState": "pre",
        "fairOdds": null,
        "bestOdds": "-108",
        "bestBook": "BetMGM",
        "booksPriced": 8,
        "evPct": null,
        "edgePlus": false,
        "consensus": 5.0,
        "combined": 5.0,
        "publish": false,
        "publishReason": "5 combined sources < 6 required",
        "sources": {
          "youtube": 5,
          "ytRaw": 5,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 5.0
        },
        "ytWho": "104.5 ESPN; BYUtv Sports Nation; Greedo Plays; KSL Sports; Off Script with Zak Herbstreit",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "fail",
            "reason": "no fair price (no Pinnacle no-vig; books_priced=8)"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "dog holds the hook over key number"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "63% tickets on pick side (<70%)"
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
        "gateFails": [
          "fair_price"
        ],
        "why": "YouTube 5 independent (auto-extracted from captions; not hand-verified): 104.5 ESPN, BYUtv Sports Nation, Greedo Plays, KSL Sports, Off Script with Zak Herbstreit. X send-it 0. spread +10.5→+10.5 since Fri; YT hand-verified 3 of 5 auto-extracted.",
        "rationale": "Soft: 5 combined sources (floor 6); fails fair_price.",
        "confidence": 50,
        "yt": 5,
        "x": 0,
        "total": 5.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (5 combined). Needs 1 more. Fails: fair_price."
      },
      {
        "id": "sat1017-cfb-oklahoma-6-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Kentucky Wildcats @ Oklahoma Sooners · 6:30 PM CT",
        "pick": "Oklahoma -6.5",
        "line": "-110 MyBookie",
        "timeCT": "6:30 PM CT",
        "startCT": "2026-10-17T18:30-05:00",
        "gameState": "pre",
        "fairOdds": "-104",
        "bestOdds": "-110",
        "bestBook": "MyBookie",
        "booksPriced": 16,
        "evPct": -2.67,
        "edgePlus": false,
        "consensus": 5.2,
        "combined": 5.0,
        "publish": false,
        "publishReason": "5 combined sources < 6 required",
        "sources": {
          "youtube": 4,
          "ytRaw": 6,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 5.0
        },
        "ytWho": "APE; ESPN College Football; Free Picks PickDawgz; WagerTalk TV: Sports Picks and Betting Tips",
        "xWho": "ItsParlayPete",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -104 (pinnacle); 16 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "21% tickets on pick side (<70%)"
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
        "why": "YouTube 4 independent (hand-verified; engine-deduped): APE, ESPN College Football, Free Picks PickDawgz, WagerTalk TV: Sports Picks and Betting Tips. X send-it 1: ItsParlayPete. spread -6.5→-6.5 since Fri; conflict: Covers JTFOz Kentucky +6.5; YT hand-verified 4 of 6 auto-extracted.",
        "rationale": "Soft: 5 combined sources (floor 6); all gate rules pass.",
        "confidence": 52,
        "yt": 4,
        "x": 1,
        "total": 5.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (5 combined). Needs 1 more. EV -2.7% vs fair."
      },
      {
        "id": "sat1017-cfb-baylor-6",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "TCU Horned Frogs @ Baylor Bears · 6:00 PM CT",
        "pick": "Baylor -6",
        "line": "-109 BetRivers",
        "timeCT": "6:00 PM CT",
        "startCT": "2026-10-17T18:00-05:00",
        "gameState": "pre",
        "fairOdds": "+108",
        "bestOdds": "-109",
        "bestBook": "BetRivers",
        "booksPriced": 5,
        "evPct": -7.82,
        "edgePlus": false,
        "consensus": 4.1,
        "combined": 4.25,
        "publish": false,
        "publishReason": "4.25 combined sources < 6 required",
        "sources": {
          "youtube": 4,
          "ytRaw": 5,
          "ytEcho": 1,
          "xSendIt": 0,
          "combined": 4.25
        },
        "ytWho": "CBS Sports College Football; ESPN College Football; Free Picks PickDawgz; KSL Sports",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +108 (pinnacle); 5 books priced"
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
            "reason": "-109 within -200 cap"
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
        "why": "YouTube 4 independent (hand-verified; engine-deduped): CBS Sports College Football, ESPN College Football, Free Picks PickDawgz, KSL Sports. X send-it 0. spread -6→-6 since Fri.",
        "rationale": "Soft: 4.25 combined sources (floor 6); all gate rules pass.",
        "confidence": 41,
        "yt": 4,
        "x": 0,
        "total": 4.25,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (4.25 combined). Needs 1.75 more. EV -7.8% vs fair."
      },
      {
        "id": "sat1017-cfb-lsu-17-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Mississippi State Bulldogs @ LSU Tigers · 11:00 AM CT",
        "pick": "LSU -17.5",
        "line": "-106 LowVig",
        "timeCT": "11:00 AM CT",
        "startCT": "2026-10-17T11:00-05:00",
        "gameState": "pre",
        "fairOdds": "-107",
        "bestOdds": "-106",
        "bestBook": "LowVig",
        "booksPriced": 12,
        "evPct": 0.46,
        "edgePlus": true,
        "consensus": 5.7,
        "combined": 4.0,
        "publish": false,
        "publishReason": "4 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 2,
          "combined": 4.0
        },
        "ytWho": "APE; Free Picks PickDawgz",
        "xWho": "ItsParlayPete; jr_dimes (-17.5)",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -107 (pinnacle); 12 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "26% tickets on pick side (<70%)"
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
            "reason": "-106 within -200 cap"
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
        "why": "YouTube 2 independent (hand-verified; engine-deduped): APE, Free Picks PickDawgz. X send-it 2: ItsParlayPete, jr_dimes (-17.5). spread -15.5→-17.5 since Fri; Bet Labs system RT (ActionNetworkHQ) also LSU; X posters' line -16.5; YT hand-verified 3 of 4 auto-extracted.",
        "rationale": "Soft: 4 combined sources (floor 6); all gate rules pass; edge+ vs Pinnacle no-vig.",
        "confidence": 57,
        "yt": 2,
        "x": 2,
        "total": 4.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (4 combined). Needs 2 more. EV +0.5% vs fair."
      },
      {
        "id": "sat1017-cfb-texas-12-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Florida Gators @ Texas Longhorns · 11:00 AM CT",
        "pick": "Texas -12.5",
        "line": "+100 Pinnacle",
        "timeCT": "11:00 AM CT",
        "startCT": "2026-10-17T11:00-05:00",
        "gameState": "pre",
        "fairOdds": "+106",
        "bestOdds": "+100",
        "bestBook": "Pinnacle",
        "booksPriced": 5,
        "evPct": -2.91,
        "edgePlus": false,
        "consensus": 5.2,
        "combined": 4.0,
        "publish": false,
        "publishReason": "4 combined sources < 6 required",
        "sources": {
          "youtube": 4,
          "ytRaw": 6,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 4.0
        },
        "ytWho": "104.5 ESPN; APE; CBS Sports College Football; Comics on Canes",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +106 (pinnacle); 5 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "41% tickets on pick side (<70%)"
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
            "reason": "+100 within -200 cap"
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
        "why": "YouTube 4 independent (hand-verified; engine-deduped): 104.5 ESPN, APE, CBS Sports College Football, Comics on Canes. X send-it 0. spread -11→-12.5 since Fri; YT hand-verified 5 of 6 auto-extracted.",
        "rationale": "Soft: 4 combined sources (floor 6); all gate rules pass.",
        "confidence": 52,
        "yt": 4,
        "x": 0,
        "total": 4.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (4 combined). Needs 2 more. EV -2.9% vs fair."
      },
      {
        "id": "sat1017-cfb-tennessee-7-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Alabama Crimson Tide @ Tennessee Volunteers · 2:30 PM CT",
        "pick": "Tennessee +7.5",
        "line": "-101 LowVig",
        "timeCT": "2:30 PM CT",
        "startCT": "2026-10-17T14:30-05:00",
        "gameState": "pre",
        "fairOdds": "+103",
        "bestOdds": "-101",
        "bestBook": "LowVig",
        "booksPriced": 17,
        "evPct": -1.97,
        "edgePlus": false,
        "consensus": 4.3,
        "combined": 4.0,
        "publish": false,
        "publishReason": "4 combined sources < 6 required",
        "sources": {
          "youtube": 3,
          "ytRaw": 6,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 4.0
        },
        "ytWho": "104.5 ESPN; Free Picks PickDawgz; The Bettor Mark",
        "xWho": "ActionNetworkHQ",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +103 (pinnacle); 17 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "dog holds the hook over key number"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "28% tickets on pick side (<70%)"
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
            "reason": "-101 within -200 cap"
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
        "why": "YouTube 3 independent (hand-verified; engine-deduped): 104.5 ESPN, Free Picks PickDawgz, The Bettor Mark. X send-it 1: ActionNetworkHQ. spread +7.5→+7.5 since Fri; home dog; YT hand-verified 2 of 6 auto-extracted.",
        "rationale": "Soft: 4 combined sources (floor 6); all gate rules pass.",
        "confidence": 43,
        "yt": 3,
        "x": 1,
        "total": 4.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (4 combined). Needs 2 more. EV -2.0% vs fair."
      },
      {
        "id": "sat1017-cfb-duke-3",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "North Carolina Tar Heels @ Duke Blue Devils · 2:30 PM CT",
        "pick": "Duke -3",
        "line": "-106 LowVig",
        "timeCT": "2:30 PM CT",
        "startCT": "2026-10-17T14:30-05:00",
        "gameState": "pre",
        "fairOdds": "+101",
        "bestOdds": "-106",
        "bestBook": "LowVig",
        "booksPriced": 17,
        "evPct": -3.31,
        "edgePlus": false,
        "consensus": 4.1,
        "combined": 4.0,
        "publish": false,
        "publishReason": "4 combined sources < 6 required",
        "sources": {
          "youtube": 3,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 4.0
        },
        "ytWho": "CBS Sports College Football; Silverback Bets; WagerTalk TV: Sports Picks and Betting Tips",
        "xWho": "G5Jake",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +101 (pinnacle); 17 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "line sits on key number (check push value)"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "27% tickets on pick side (<70%)"
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
            "reason": "-106 within -200 cap"
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
        "why": "YouTube 3 independent (hand-verified; engine-deduped): CBS Sports College Football, Silverback Bets, WagerTalk TV: Sports Picks and Betting Tips. X send-it 1: G5Jake. spread -3→-3 since Fri; key number 3.",
        "rationale": "Soft: 4 combined sources (floor 6); all gate rules pass.",
        "confidence": 41,
        "yt": 3,
        "x": 1,
        "total": 4.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (4 combined). Needs 2 more. EV -3.3% vs fair."
      },
      {
        "id": "sat1017-cfb-georgia-20",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Auburn Tigers @ Georgia Bulldogs · 2:30 PM CT",
        "pick": "Georgia -20",
        "line": "-110 BetRivers",
        "timeCT": "2:30 PM CT",
        "startCT": "2026-10-17T14:30-05:00",
        "gameState": "pre",
        "fairOdds": "+106",
        "bestOdds": "-110",
        "bestBook": "BetRivers",
        "booksPriced": 5,
        "evPct": -7.33,
        "edgePlus": false,
        "consensus": 4.1,
        "combined": 4.0,
        "publish": false,
        "publishReason": "4 combined sources < 6 required",
        "sources": {
          "youtube": 3,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 4.0
        },
        "ytWho": "104.5 ESPN; APE; CBS Sports College Football",
        "xWho": "Covers (JTFOz)",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +106 (pinnacle); 5 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "63% tickets on pick side (<70%)"
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
        "why": "YouTube 3 independent (hand-verified; engine-deduped): 104.5 ESPN, APE, CBS Sports College Football. X send-it 1: Covers (JTFOz). spread -19.5→-20 since Fri; X posters' line -19.5.",
        "rationale": "Soft: 4 combined sources (floor 6); all gate rules pass.",
        "confidence": 41,
        "yt": 3,
        "x": 1,
        "total": 4.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (4 combined). Needs 2 more. EV -7.3% vs fair."
      },
      {
        "id": "sat1017-cfb-missouri-5-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Missouri Tigers @ Ole Miss Rebels · 2:30 PM CT",
        "pick": "Missouri +5.5",
        "line": "-113 BetRivers",
        "timeCT": "2:30 PM CT",
        "startCT": "2026-10-17T14:30-05:00",
        "gameState": "pre",
        "fairOdds": "-108",
        "bestOdds": "-113",
        "bestBook": "BetRivers",
        "booksPriced": 6,
        "evPct": -2.13,
        "edgePlus": false,
        "consensus": 4.0,
        "combined": 4.0,
        "publish": false,
        "publishReason": "4 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 2,
          "combined": 4.0
        },
        "ytWho": "CBS Sports College Football; Silverback Bets",
        "xWho": "ItsParlayPete; jr_dimes (+5.5)",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -108 (pinnacle); 6 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "54% tickets on pick side (<70%)"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): CBS Sports College Football, Silverback Bets. X send-it 2: ItsParlayPete, jr_dimes (+5.5). spread +5.5→+5.5 since Fri; X posters' line +6.5.",
        "rationale": "Soft: 4 combined sources (floor 6); all gate rules pass.",
        "confidence": 40,
        "yt": 2,
        "x": 2,
        "total": 4.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (4 combined). Needs 2 more. EV -2.1% vs fair."
      },
      {
        "id": "sat1017-cfb-houston-4-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Oklahoma State Cowboys @ Houston Cougars · 6:30 PM CT",
        "pick": "Houston -4.5",
        "line": "-106 LowVig",
        "timeCT": "6:30 PM CT",
        "startCT": "2026-10-17T18:30-05:00",
        "gameState": "pre",
        "fairOdds": "-102",
        "bestOdds": "-106",
        "bestBook": "LowVig",
        "booksPriced": 15,
        "evPct": -1.87,
        "edgePlus": false,
        "consensus": 4.0,
        "combined": 4.0,
        "publish": false,
        "publishReason": "4 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 2,
          "combined": 4.0
        },
        "ytWho": "Silverback Bets; The Bettor Mark",
        "xWho": "G5Jake; BigDattySports",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -102 (pinnacle); 15 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "22% tickets on pick side (<70%)"
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
            "reason": "-106 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Silverback Bets, The Bettor Mark. X send-it 2: G5Jake, BigDattySports. spread -4.5→-4.5 since Fri.",
        "rationale": "Soft: 4 combined sources (floor 6); all gate rules pass.",
        "confidence": 40,
        "yt": 2,
        "x": 2,
        "total": 4.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (4 combined). Needs 2 more. EV -1.9% vs fair."
      },
      {
        "id": "sat1017-cfb-oregon-7",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Nebraska Cornhuskers @ Oregon Ducks · 10:00 PM CT",
        "pick": "Oregon -7",
        "line": "+101 LowVig",
        "timeCT": "10:00 PM CT",
        "startCT": "2026-10-17T22:00-05:00",
        "gameState": "pre",
        "fairOdds": "+107",
        "bestOdds": "+101",
        "bestBook": "LowVig",
        "booksPriced": 14,
        "evPct": -2.9,
        "edgePlus": false,
        "consensus": 3.2,
        "combined": 3.0,
        "publish": false,
        "publishReason": "3 combined sources < 6 required",
        "sources": {
          "youtube": 3,
          "ytRaw": 5,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 3.0
        },
        "ytWho": "Free Picks PickDawgz; StumpTheSpread - Free Sports Picks Predictions; WagerTalk TV: Sports Picks and Betting Tips",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +107 (pinnacle); 14 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "line sits on key number (check push value)"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "26% tickets on pick side (<70%)"
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
            "reason": "+101 within -200 cap"
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
        "why": "YouTube 3 independent (hand-verified; engine-deduped): Free Picks PickDawgz, StumpTheSpread - Free Sports Picks Predictions, WagerTalk TV: Sports Picks and Betting Tips. X send-it 0. spread -7→-7 since Fri.",
        "rationale": "Soft: 3 combined sources (floor 6); all gate rules pass.",
        "confidence": 32,
        "yt": 3,
        "x": 0,
        "total": 3.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (3 combined). Needs 3 more. EV -2.9% vs fair."
      },
      {
        "id": "sat1017-cfb-utah-14-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Utah Utes @ Colorado Buffaloes · 9:15 PM CT",
        "pick": "Utah -14.5",
        "line": "-108 BetMGM",
        "timeCT": "9:15 PM CT",
        "startCT": "2026-10-17T21:15-05:00",
        "gameState": "pre",
        "fairOdds": "-102",
        "bestOdds": "-108",
        "bestBook": "BetMGM",
        "booksPriced": 14,
        "evPct": -2.75,
        "edgePlus": false,
        "consensus": 2.5,
        "combined": 3.0,
        "publish": false,
        "publishReason": "3 combined sources < 6 required",
        "sources": {
          "youtube": 3,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 3.0
        },
        "ytWho": "APE; CBS Sports College Football; Silverback Bets",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -102 (pinnacle); 14 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "78% of tickets on pick side (public side, -0.5)"
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
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 3 independent (hand-verified; engine-deduped): APE, CBS Sports College Football, Silverback Bets. X send-it 0. spread -14.5→-14.5 since Fri.",
        "rationale": "Soft: 3 combined sources (floor 6); fails public_bias.",
        "confidence": 25,
        "yt": 3,
        "x": 0,
        "total": 3.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (3 combined). Needs 3 more. Fails: public_bias. EV -2.8% vs fair."
      },
      {
        "id": "sat1017-cfb-kansas-3-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Kansas Jayhawks @ Kansas State Wildcats · 11:00 AM CT",
        "pick": "Kansas +3.5",
        "line": "-110 MyBookie",
        "timeCT": "11:00 AM CT",
        "startCT": "2026-10-17T11:00-05:00",
        "gameState": "pre",
        "fairOdds": "-107",
        "bestOdds": "-110",
        "bestBook": "MyBookie",
        "booksPriced": 21,
        "evPct": -1.32,
        "edgePlus": false,
        "consensus": 3.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "KSL Sports; Silverback Bets",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -107 (pinnacle); 21 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "dog holds the hook over key number"
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
            "reason": "-110 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): KSL Sports, Silverback Bets. X send-it 0. spread +4.5→+3.5 since Fri.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 30,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -1.3% vs fair."
      },
      {
        "id": "sat1017-cfb-penn-state-6",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Penn State Nittany Lions @ Michigan Wolverines · 2:30 PM CT",
        "pick": "Penn State +6",
        "line": "-104 LowVig",
        "timeCT": "2:30 PM CT",
        "startCT": "2026-10-17T14:30-05:00",
        "gameState": "pre",
        "fairOdds": "-104",
        "bestOdds": "-104",
        "bestBook": "LowVig",
        "booksPriced": 13,
        "evPct": -0.0,
        "edgePlus": false,
        "consensus": 2.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "CBS Sports College Football; Free Picks PickDawgz",
        "xWho": "",
        "ytVerified": false,
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
            "result": "fail",
            "reason": "72% of tickets on pick side (public side, -0.5)"
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
            "reason": "-104 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): CBS Sports College Football, Free Picks PickDawgz. X send-it 0. spread +7→+6 since Fri.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 25,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -0.0% vs fair."
      },
      {
        "id": "sat1017-cfb-ucla-2-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Wisconsin Badgers @ UCLA Bruins · 6:30 PM CT",
        "pick": "UCLA -2.5",
        "line": "-106 LowVig",
        "timeCT": "6:30 PM CT",
        "startCT": "2026-10-17T18:30-05:00",
        "gameState": "pre",
        "fairOdds": "-101",
        "bestOdds": "-106",
        "bestBook": "LowVig",
        "booksPriced": 19,
        "evPct": -2.35,
        "edgePlus": false,
        "consensus": 2.2,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "BettingPros; Free Picks PickDawgz",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -101 (pinnacle); 19 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "63% tickets on pick side (<70%)"
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
            "reason": "-106 within -200 cap"
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
        "why": "YouTube 2 independent (hand-verified; engine-deduped): BettingPros, Free Picks PickDawgz. X send-it 0. spread -2.5→-2.5 since Fri.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 22,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -2.4% vs fair."
      },
      {
        "id": "sat1017-cfb-wake-forest-10",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Wake Forest Demon Deacons @ California Golden Bears · 9:30 PM CT",
        "pick": "Wake Forest -10",
        "line": "-106 LowVig",
        "timeCT": "9:30 PM CT",
        "startCT": "2026-10-17T21:30-05:00",
        "gameState": "pre",
        "fairOdds": "-102",
        "bestOdds": "-106",
        "bestBook": "LowVig",
        "booksPriced": 14,
        "evPct": -1.87,
        "edgePlus": false,
        "consensus": 2.1,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Free Picks PickDawgz; Silverback Bets",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -102 (pinnacle); 14 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "line sits on key number (check push value)"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "59% tickets on pick side (<70%)"
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
            "reason": "-106 within -200 cap"
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
        "why": "YouTube 2 independent (hand-verified; engine-deduped): Free Picks PickDawgz, Silverback Bets. X send-it 0. spread -10→-10 since Fri.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 21,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -1.9% vs fair."
      },
      {
        "id": "sat1017-cfb-virginia-10",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Virginia Cavaliers @ SMU Mustangs · 11:00 AM CT",
        "pick": "Virginia +10",
        "line": "-110 MyBookie",
        "timeCT": "11:00 AM CT",
        "startCT": "2026-10-17T11:00-05:00",
        "gameState": "pre",
        "fairOdds": "-105",
        "bestOdds": "-110",
        "bestBook": "MyBookie",
        "booksPriced": 12,
        "evPct": -2.22,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Free Picks PickDawgz; Greedo Plays",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -105 (pinnacle); 12 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "line sits on key number (check push value)"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "53% tickets on pick side (<70%)"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Free Picks PickDawgz, Greedo Plays. X send-it 0. spread +9.5→+10 since Fri.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 20,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -2.2% vs fair."
      },
      {
        "id": "sat1017-cfb-arizona-state-16",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Arizona State Sun Devils @ Texas Tech Red Raiders · 2:30 PM CT",
        "pick": "Arizona State +16",
        "line": "-110 BetUS",
        "timeCT": "2:30 PM CT",
        "startCT": "2026-10-17T14:30-05:00",
        "gameState": "pre",
        "fairOdds": "-103",
        "bestOdds": "-110",
        "bestBook": "BetUS",
        "booksPriced": 5,
        "evPct": -3.13,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Free Picks PickDawgz; Silverback Bets",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -103 (pinnacle); 5 books priced"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Free Picks PickDawgz, Silverback Bets. X send-it 0. spread +15.5→+16 since Fri.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 20,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -3.1% vs fair."
      },
      {
        "id": "sat1017-cfb-west-virginia-1-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Cincinnati Bearcats @ West Virginia Mountaineers · 11:00 AM CT",
        "pick": "West Virginia -1.5",
        "line": "-108 DraftKings",
        "timeCT": "11:00 AM CT",
        "startCT": "2026-10-17T11:00-05:00",
        "gameState": "pre",
        "fairOdds": "+102",
        "bestOdds": "-108",
        "bestBook": "DraftKings",
        "booksPriced": 17,
        "evPct": -4.66,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Free Picks PickDawgz; Greedo Plays",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +102 (pinnacle); 17 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "55% tickets on pick side (<70%)"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Free Picks PickDawgz, Greedo Plays. X send-it 0. spread -1.5→-1.5 since Fri.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 20,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -4.7% vs fair."
      },
      {
        "id": "sat1017-cfb-utsa-6-5",
        "example": false,
        "sport": "CFB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Navy Midshipmen @ UTSA Roadrunners · 7:00 PM CT",
        "pick": "UTSA -6.5",
        "line": "-115 DraftKings",
        "timeCT": "7:00 PM CT",
        "startCT": "2026-10-17T19:00-05:00",
        "gameState": "pre",
        "fairOdds": "-109",
        "bestOdds": "-115",
        "bestBook": "DraftKings",
        "booksPriced": 9,
        "evPct": -2.5,
        "edgePlus": false,
        "consensus": 1.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Greedo Plays; StumpTheSpread - Free Sports Picks Predictions",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -109 (pinnacle); 9 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "pass",
            "reason": "no key-number conflict"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "72% of tickets on pick side (public side, -0.5)"
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
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Greedo Plays, StumpTheSpread - Free Sports Picks Predictions. X send-it 0. spread -6.5→-6.5 since Fri.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 15,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -2.5% vs fair."
      }
    ],
    "Soccer": [
      {
        "id": "sat1017-soccer-bayern-munich-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "RB Leipzig @ Bayern Munich · 11:30 AM CT",
        "pick": "Bayern Munich ML",
        "line": "-425 BetMGM",
        "timeCT": "11:30 AM CT",
        "startCT": "2026-10-17T11:30-05:00",
        "gameState": "pre",
        "fairOdds": "-393",
        "bestOdds": "-425",
        "bestBook": "BetMGM",
        "booksPriced": 30,
        "evPct": -1.53,
        "edgePlus": false,
        "consensus": 3.0,
        "combined": 4.0,
        "publish": false,
        "publishReason": "4 combined sources < 6 required",
        "sources": {
          "youtube": 4,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 4.0
        },
        "ytWho": "Hoodtrends Analysis; SirRayAnalysis; Thony TIPS; จอร์จหวานเจี๊ยบ VIP",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -393 (pinnacle); 30 books priced"
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
            "reason": "-425 shorter than -200 cap (Soccer ml)"
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
        "why": "YouTube 4 independent (auto-extracted from captions; not hand-verified): Hoodtrends Analysis, SirRayAnalysis, Thony TIPS, จอร์จหวานเจี๊ยบ VIP. X send-it 0. 3-way ML.",
        "rationale": "Soft: 4 combined sources (floor 6); fails public_bias, favorite_cap.",
        "confidence": 30,
        "yt": 4,
        "x": 0,
        "total": 4.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (4 combined). Needs 2 more. Fails: public_bias, favorite_cap. EV -1.5% vs fair."
      },
      {
        "id": "sat1017-soccer-barcelona-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Barcelona @ Real Betis · 11:30 AM CT",
        "pick": "Barcelona ML",
        "line": "-210 BetMGM",
        "timeCT": "11:30 AM CT",
        "startCT": "2026-10-17T11:30-05:00",
        "gameState": "pre",
        "fairOdds": "-196",
        "bestOdds": "-210",
        "bestBook": "BetMGM",
        "booksPriced": 27,
        "evPct": -2.25,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 3.0,
        "publish": false,
        "publishReason": "3 combined sources < 6 required",
        "sources": {
          "youtube": 3,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 3.0
        },
        "ytWho": "EC PREDICTS; Etap Sports Xtra; SirRayAnalysis",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -196 (pinnacle); 27 books priced"
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
            "reason": "-210 shorter than -200 cap (Soccer ml)"
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
        "why": "YouTube 3 independent (auto-extracted from captions; not hand-verified): EC PREDICTS, Etap Sports Xtra, SirRayAnalysis. X send-it 0. 3-way ML.",
        "rationale": "Soft: 3 combined sources (floor 6); fails public_bias, favorite_cap.",
        "confidence": 20,
        "yt": 3,
        "x": 0,
        "total": 3.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (3 combined). Needs 3 more. Fails: public_bias, favorite_cap. EV -2.2% vs fair."
      },
      {
        "id": "sat1017-soccer-aston-villa-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Aston Villa @ Newcastle United · 11:30 AM CT",
        "pick": "Aston Villa ML",
        "line": "+191 LowVig",
        "timeCT": "11:30 AM CT",
        "startCT": "2026-10-17T11:30-05:00",
        "gameState": "pre",
        "fairOdds": "+199",
        "bestOdds": "+191",
        "bestBook": "LowVig",
        "booksPriced": 31,
        "evPct": -2.68,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "EC PREDICTS; Masked Bettor Betting Tips",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +199 (pinnacle); 31 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "41% tickets on pick side (<70%)"
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
            "reason": "+191 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): EC PREDICTS, Masked Bettor Betting Tips. X send-it 0. 3-way ML.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 20,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -2.7% vs fair."
      },
      {
        "id": "sat1017-soccer-paris-saint-germain-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Paris Saint Germain @ Strasbourg · 10:15 AM CT",
        "pick": "Paris Saint Germain ML",
        "line": "-213 Bovada",
        "timeCT": "10:15 AM CT",
        "startCT": "2026-10-17T10:15-05:00",
        "gameState": "pre",
        "fairOdds": "-208",
        "bestOdds": "-213",
        "bestBook": "Bovada",
        "booksPriced": 27,
        "evPct": -0.76,
        "edgePlus": false,
        "consensus": 1.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Etap Sports Xtra; MELTIPS",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -208 (pinnacle); 27 books priced"
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
            "result": "fail",
            "reason": "-213 shorter than -200 cap (Soccer ml)"
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
          "favorite_cap"
        ],
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Etap Sports Xtra, MELTIPS. X send-it 0. 3-way ML.",
        "rationale": "Soft: 2 combined sources (floor 6); fails favorite_cap.",
        "confidence": 15,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: favorite_cap. EV -0.8% vs fair."
      },
      {
        "id": "sat1017-soccer-inter-milan-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Inter Milan @ Bologna · 11:00 AM CT",
        "pick": "Inter Milan ML",
        "line": "-168 Bovada",
        "timeCT": "11:00 AM CT",
        "startCT": "2026-10-17T11:00-05:00",
        "gameState": "pre",
        "fairOdds": "-158",
        "bestOdds": "-168",
        "bestBook": "Bovada",
        "booksPriced": 31,
        "evPct": -2.31,
        "edgePlus": false,
        "consensus": 1.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 1,
          "combined": 2.0
        },
        "ytWho": "JB PREDICTZ",
        "xWho": "CasaCalcioPicks",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -158 (pinnacle); 31 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "98% of tickets on pick side (public side, -0.5)"
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
            "reason": "-168 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): JB PREDICTZ. X send-it 1: CasaCalcioPicks. 3-way h2h; 3-way ML.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 15,
        "yt": 1,
        "x": 1,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -2.3% vs fair."
      },
      {
        "id": "sat1017-soccer-atlanta-united-fc-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Inter Miami CF @ Atlanta United FC · 6:30 PM CT",
        "pick": "Atlanta United FC ML",
        "line": "+240 FanDuel",
        "timeCT": "6:30 PM CT",
        "startCT": "2026-10-17T18:30-05:00",
        "gameState": "pre",
        "fairOdds": "+252",
        "bestOdds": "+240",
        "bestBook": "FanDuel",
        "booksPriced": 30,
        "evPct": -3.41,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "JB PREDICTZ",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +252 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "1% tickets on pick side (<70%)"
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
            "reason": "+240 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): JB PREDICTZ. X send-it 0. 3-way ML.",
        "rationale": "Soft: 1 combined sources (floor 6); all gate rules pass.",
        "confidence": 10,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. EV -3.4% vs fair."
      },
      {
        "id": "sat1017-soccer-valencia-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Athletic Bilbao @ Valencia · 2:00 PM CT",
        "pick": "Valencia ML",
        "line": "+237 BetOnline",
        "timeCT": "2:00 PM CT",
        "startCT": "2026-10-17T14:00-05:00",
        "gameState": "pre",
        "fairOdds": "+247",
        "bestOdds": "+237",
        "bestBook": "BetOnline",
        "booksPriced": 27,
        "evPct": -2.88,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "Pronofy | Pronósticos y Predicciones de Fútbol",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +247 (pinnacle); 27 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "13% tickets on pick side (<70%)"
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
            "reason": "+237 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): Pronofy | Pronósticos y Predicciones de Fútbol. X send-it 0. 3-way ML.",
        "rationale": "Soft: 1 combined sources (floor 6); all gate rules pass.",
        "confidence": 10,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. EV -2.9% vs fair."
      },
      {
        "id": "sat1017-soccer-st-louis-city-sc-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "St. Louis City SC @ Minnesota United FC · 3:30 PM CT",
        "pick": "St. Louis City SC ML",
        "line": "+163 LowVig",
        "timeCT": "3:30 PM CT",
        "startCT": "2026-10-17T15:30-05:00",
        "gameState": "pre",
        "fairOdds": "+171",
        "bestOdds": "+163",
        "bestBook": "LowVig",
        "booksPriced": 30,
        "evPct": -2.95,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NerdySoccer",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +171 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "67% tickets on pick side (<70%)"
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
            "reason": "+163 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): NerdySoccer. X send-it 0. 3-way ML.",
        "rationale": "Soft: 1 combined sources (floor 6); all gate rules pass.",
        "confidence": 10,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. EV -3.0% vs fair."
      },
      {
        "id": "sat1017-soccer-chicago-fire-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Chicago Fire @ New England Revolution · 6:30 PM CT",
        "pick": "Chicago Fire ML",
        "line": "+180 BetRivers",
        "timeCT": "6:30 PM CT",
        "startCT": "2026-10-17T18:30-05:00",
        "gameState": "pre",
        "fairOdds": "+184",
        "bestOdds": "+180",
        "bestBook": "BetRivers",
        "booksPriced": 30,
        "evPct": -1.41,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NerdySoccer",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +184 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "61% tickets on pick side (<70%)"
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
            "reason": "+180 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): NerdySoccer. X send-it 0. 3-way ML.",
        "rationale": "Soft: 1 combined sources (floor 6); all gate rules pass.",
        "confidence": 10,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. EV -1.4% vs fair."
      },
      {
        "id": "sat1017-soccer-san-jose-earthquakes-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Nashville SC @ San Jose Earthquakes · 9:30 PM CT",
        "pick": "San Jose Earthquakes ML",
        "line": "+270 BetUS",
        "timeCT": "9:30 PM CT",
        "startCT": "2026-10-17T21:30-05:00",
        "gameState": "pre",
        "fairOdds": "+279",
        "bestOdds": "+270",
        "bestBook": "BetUS",
        "booksPriced": 30,
        "evPct": -2.37,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NerdySoccer",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +279 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "1% tickets on pick side (<70%)"
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
            "reason": "+270 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): NerdySoccer. X send-it 0. 3-way ML.",
        "rationale": "Soft: 1 combined sources (floor 6); all gate rules pass.",
        "confidence": 10,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. EV -2.4% vs fair."
      },
      {
        "id": "sat1017-soccer-new-york-city-fc-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Los Angeles FC @ New York City FC · 6:30 PM CT",
        "pick": "New York City FC ML",
        "line": "+177 LowVig",
        "timeCT": "6:30 PM CT",
        "startCT": "2026-10-17T18:30-05:00",
        "gameState": "pre",
        "fairOdds": "+185",
        "bestOdds": "+177",
        "bestBook": "LowVig",
        "booksPriced": 30,
        "evPct": -2.81,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NerdySoccer",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +185 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "24% tickets on pick side (<70%)"
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
            "reason": "+177 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): NerdySoccer. X send-it 0. 3-way ML.",
        "rationale": "Soft: 1 combined sources (floor 6); all gate rules pass.",
        "confidence": 10,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. EV -2.8% vs fair."
      },
      {
        "id": "sat1017-soccer-portland-timbers-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Colorado Rapids @ Portland Timbers · 9:30 PM CT",
        "pick": "Portland Timbers ML",
        "line": "-102 BetMGM",
        "timeCT": "9:30 PM CT",
        "startCT": "2026-10-17T21:30-05:00",
        "gameState": "pre",
        "fairOdds": "+101",
        "bestOdds": "-102",
        "bestBook": "BetMGM",
        "booksPriced": 30,
        "evPct": -1.47,
        "edgePlus": false,
        "consensus": 0.5,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NerdySoccer",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +101 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "91% of tickets on pick side (public side, -0.5)"
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
            "reason": "-102 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): NerdySoccer. X send-it 0. 3-way ML.",
        "rationale": "Soft: 1 combined sources (floor 6); fails public_bias.",
        "confidence": 5,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. Fails: public_bias. EV -1.5% vs fair."
      },
      {
        "id": "sat1017-soccer-houston-dynamo-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "FC Dallas @ Houston Dynamo · 7:30 PM CT",
        "pick": "Houston Dynamo ML",
        "line": "+133 BetOnline",
        "timeCT": "7:30 PM CT",
        "startCT": "2026-10-17T19:30-05:00",
        "gameState": "pre",
        "fairOdds": "+142",
        "bestOdds": "+133",
        "bestBook": "BetOnline",
        "booksPriced": 30,
        "evPct": -3.72,
        "edgePlus": false,
        "consensus": 0.5,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NerdySoccer",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +142 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
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
            "reason": "+133 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): NerdySoccer. X send-it 0. 3-way ML.",
        "rationale": "Soft: 1 combined sources (floor 6); fails public_bias.",
        "confidence": 5,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. Fails: public_bias. EV -3.7% vs fair."
      },
      {
        "id": "sat1017-soccer-la-galaxy-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "San Diego FC @ LA Galaxy · 9:30 PM CT",
        "pick": "LA Galaxy ML",
        "line": "+130 BetUS",
        "timeCT": "9:30 PM CT",
        "startCT": "2026-10-17T21:30-05:00",
        "gameState": "pre",
        "fairOdds": "+138",
        "bestOdds": "+130",
        "bestBook": "BetUS",
        "booksPriced": 30,
        "evPct": -3.36,
        "edgePlus": false,
        "consensus": 0.5,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NerdySoccer",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +138 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "82% of tickets on pick side (public side, -0.5)"
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
            "reason": "+130 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): NerdySoccer. X send-it 0. 3-way ML.",
        "rationale": "Soft: 1 combined sources (floor 6); fails public_bias.",
        "confidence": 5,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. Fails: public_bias. EV -3.4% vs fair."
      },
      {
        "id": "sat1017-soccer-over-3-25",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Vancouver Whitecaps FC @ Austin FC · 7:30 PM CT",
        "pick": "Over 3.25",
        "line": "+102 Bovada",
        "timeCT": "7:30 PM CT",
        "startCT": "2026-10-17T19:30-05:00",
        "gameState": "pre",
        "fairOdds": "+112",
        "bestOdds": "+102",
        "bestBook": "Bovada",
        "booksPriced": 2,
        "evPct": -4.72,
        "edgePlus": false,
        "consensus": 0.5,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NerdySoccer",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +112 (pinnacle); 2 books priced"
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
            "reason": "+102 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): NerdySoccer. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 6); fails public_bias.",
        "confidence": 5,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. Fails: public_bias. EV -4.7% vs fair."
      },
      {
        "id": "sat1017-soccer-over-3-75",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "D.C. United @ Orlando City SC · 6:30 PM CT",
        "pick": "Over 3.75",
        "line": "-105 Bovada",
        "timeCT": "6:30 PM CT",
        "startCT": "2026-10-17T18:30-05:00",
        "gameState": "pre",
        "fairOdds": "+106",
        "bestOdds": "-105",
        "bestBook": "Bovada",
        "booksPriced": 2,
        "evPct": -5.22,
        "edgePlus": false,
        "consensus": 0.5,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NerdySoccer",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +106 (pinnacle); 2 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "85% of tickets on pick side (public side, -0.5)"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): NerdySoccer. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 6); fails public_bias.",
        "confidence": 5,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. Fails: public_bias. EV -5.2% vs fair."
      },
      {
        "id": "sat1017-soccer-over-3-75",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Charlotte FC @ Philadelphia Union · 1:30 PM CT",
        "pick": "Over 3.75",
        "line": "-118 Bovada",
        "timeCT": "1:30 PM CT",
        "startCT": "2026-10-17T13:30-05:00",
        "gameState": "pre",
        "fairOdds": "-107",
        "bestOdds": "-118",
        "bestBook": "Bovada",
        "booksPriced": 2,
        "evPct": -4.5,
        "edgePlus": false,
        "consensus": 0.5,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "NerdySoccer",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -107 (pinnacle); 2 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "85% of tickets on pick side (public side, -0.5)"
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
            "reason": "-118 within -200 cap"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): NerdySoccer. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 6); fails public_bias.",
        "confidence": 5,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. Fails: public_bias. EV -4.5% vs fair."
      },
      {
        "id": "sat1017-soccer-as-roma-ml",
        "example": false,
        "sport": "Soccer",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Genoa @ AS Roma · 1:45 PM CT",
        "pick": "AS Roma ML",
        "line": "-168 Bovada",
        "timeCT": "1:45 PM CT",
        "startCT": "2026-10-17T13:45-05:00",
        "gameState": "pre",
        "fairOdds": "-153",
        "bestOdds": "-168",
        "bestBook": "Bovada",
        "booksPriced": 31,
        "evPct": -3.53,
        "edgePlus": false,
        "consensus": 0.4,
        "combined": 0.0,
        "publish": false,
        "publishReason": "0 combined sources < 6 required",
        "sources": {
          "youtube": 0,
          "ytRaw": 4,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 0.0
        },
        "ytWho": "",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -153 (pinnacle); 31 books priced"
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
            "reason": "-168 within -200 cap"
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
        "why": "YouTube 0 independent (hand-verified; engine-deduped). X send-it 0. 3-way ML.",
        "rationale": "Soft: 0 combined sources (floor 6); all gate rules pass.",
        "confidence": 4,
        "yt": 0,
        "x": 0,
        "total": 0.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (0 combined). Needs 6 more. EV -3.5% vs fair."
      }
    ],
    "NHL": [
      {
        "id": "sat1017-nhl-tampa-bay-lightning-ml",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Vancouver Canucks @ Tampa Bay Lightning · 3:10 PM CT",
        "pick": "Tampa Bay Lightning ML",
        "line": "-350 LowVig",
        "timeCT": "3:10 PM CT",
        "startCT": "2026-10-17T15:10-05:00",
        "gameState": "pre",
        "fairOdds": "-354",
        "bestOdds": "-350",
        "bestBook": "LowVig",
        "booksPriced": 30,
        "evPct": 0.25,
        "edgePlus": true,
        "consensus": 2.5,
        "combined": 3.0,
        "publish": false,
        "publishReason": "3 combined sources < 6 required",
        "sources": {
          "youtube": 3,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 3.0
        },
        "ytWho": "Dominic Pronosticos; Pub Sports Radio; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -354 (pinnacle); 30 books priced"
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
            "reason": "-350 shorter than -200 cap (NHL ml)"
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
        "why": "YouTube 3 independent (auto-extracted from captions; not hand-verified): Dominic Pronosticos, Pub Sports Radio, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 3 combined sources (floor 6); fails public_bias, favorite_cap; edge+ vs Pinnacle no-vig.",
        "confidence": 25,
        "yt": 3,
        "x": 0,
        "total": 3.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (3 combined). Needs 3 more. Fails: public_bias, favorite_cap. EV +0.2% vs fair."
      },
      {
        "id": "sat1017-nhl-new-york-rangers-ml",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "New York Rangers @ Columbus Blue Jackets · 6:10 PM CT",
        "pick": "New York Rangers ML",
        "line": "+115 Bovada",
        "timeCT": "6:10 PM CT",
        "startCT": "2026-10-17T18:10-05:00",
        "gameState": "pre",
        "fairOdds": "+123",
        "bestOdds": "+115",
        "bestBook": "Bovada",
        "booksPriced": 30,
        "evPct": -3.59,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Doc's Sports Picks, Best Bets, Predictions & Odds; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +123 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "28% tickets on pick side (<70%)"
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
            "reason": "+115 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Doc's Sports Picks, Best Bets, Predictions & Odds, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 20,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -3.6% vs fair."
      },
      {
        "id": "sat1017-nhl-new-jersey-devils-ml",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "New Jersey Devils @ Washington Capitals · 12:10 PM CT",
        "pick": "New Jersey Devils ML",
        "line": "+105 DraftKings",
        "timeCT": "12:10 PM CT",
        "startCT": "2026-10-17T12:10-05:00",
        "gameState": "pre",
        "fairOdds": "+111",
        "bestOdds": "+105",
        "bestBook": "DraftKings",
        "booksPriced": 30,
        "evPct": -2.84,
        "edgePlus": false,
        "consensus": 2.0,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Pub Sports Radio; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +111 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "21% tickets on pick side (<70%)"
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
            "reason": "+105 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Pub Sports Radio, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); all gate rules pass.",
        "confidence": 20,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. EV -2.8% vs fair."
      },
      {
        "id": "sat1017-nhl-ottawa-senators-ml",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Ottawa Senators @ Philadelphia Flyers · 6:10 PM CT",
        "pick": "Ottawa Senators ML",
        "line": "-150 Caesars",
        "timeCT": "6:10 PM CT",
        "startCT": "2026-10-17T18:10-05:00",
        "gameState": "pre",
        "fairOdds": "-138",
        "bestOdds": "-150",
        "bestBook": "Caesars",
        "booksPriced": 30,
        "evPct": -3.36,
        "edgePlus": false,
        "consensus": 1.9,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 6,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Pinpi9 Pronóstico; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -138 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "86% of tickets on pick side (public side, -0.5)"
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
            "reason": "-150 within -200 cap"
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
        "why": "YouTube 2 independent (hand-verified; engine-deduped): Pinpi9 Pronóstico, Sports Parlay Picks. X send-it 0. YT hand-verified 5 of 6 auto-extracted.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 19,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -3.4% vs fair."
      },
      {
        "id": "sat1017-nhl-carolina-hurricanes-ml",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Carolina Hurricanes @ Winnipeg Jets · 2:40 PM CT",
        "pick": "Carolina Hurricanes ML",
        "line": "-195 BetRivers",
        "timeCT": "2:40 PM CT",
        "startCT": "2026-10-17T14:40-05:00",
        "gameState": "pre",
        "fairOdds": "-193",
        "bestOdds": "-195",
        "bestBook": "BetRivers",
        "booksPriced": 30,
        "evPct": -0.35,
        "edgePlus": false,
        "consensus": 1.8,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 5,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Doc's Sports Picks, Best Bets, Predictions & Odds; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -193 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "92% of tickets on pick side (public side, -0.5)"
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
            "reason": "-195 within -200 cap"
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
        "why": "YouTube 2 independent (hand-verified; engine-deduped): Doc's Sports Picks, Best Bets, Predictions & Odds, Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 18,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -0.3% vs fair."
      },
      {
        "id": "sat1017-nhl-over-6",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Seattle Kraken @ Florida Panthers · 5:10 PM CT",
        "pick": "Over 6",
        "line": "-113 LowVig",
        "timeCT": "5:10 PM CT",
        "startCT": "2026-10-17T17:10-05:00",
        "gameState": "pre",
        "fairOdds": "-107",
        "bestOdds": "-113",
        "bestBook": "LowVig",
        "booksPriced": 10,
        "evPct": -2.57,
        "edgePlus": false,
        "consensus": 1.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Doc's Sports Picks, Best Bets, Predictions & Odds; La Jugada",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -107 (pinnacle); 10 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "92% of tickets on pick side (public side, -0.5)"
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
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Doc's Sports Picks, Best Bets, Predictions & Odds, La Jugada. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 15,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -2.6% vs fair."
      },
      {
        "id": "sat1017-nhl-over-6",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "New York Islanders @ Toronto Maple Leafs · 6:10 PM CT",
        "pick": "Over 6",
        "line": "-120 LowVig",
        "timeCT": "6:10 PM CT",
        "startCT": "2026-10-17T18:10-05:00",
        "gameState": "pre",
        "fairOdds": "-108",
        "bestOdds": "-120",
        "bestBook": "LowVig",
        "booksPriced": 9,
        "evPct": -4.81,
        "edgePlus": false,
        "consensus": 1.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Doc's Sports Picks, Best Bets, Predictions & Odds; La Jugada",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -108 (pinnacle); 9 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "91% of tickets on pick side (public side, -0.5)"
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
            "reason": "-120 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Doc's Sports Picks, Best Bets, Predictions & Odds, La Jugada. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 15,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -4.8% vs fair."
      },
      {
        "id": "sat1017-nhl-over-6",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Boston Bruins @ Los Angeles Kings · 8:10 PM CT",
        "pick": "Over 6",
        "line": "+102 Bovada",
        "timeCT": "8:10 PM CT",
        "startCT": "2026-10-17T20:10-05:00",
        "gameState": "pre",
        "fairOdds": "+110",
        "bestOdds": "+102",
        "bestBook": "Bovada",
        "booksPriced": 4,
        "evPct": -3.81,
        "edgePlus": false,
        "consensus": 1.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Doc's Sports Picks, Best Bets, Predictions & Odds; La Jugada",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +110 (pinnacle); 4 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "89% of tickets on pick side (public side, -0.5)"
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
            "reason": "+102 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Doc's Sports Picks, Best Bets, Predictions & Odds, La Jugada. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 15,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -3.8% vs fair."
      },
      {
        "id": "sat1017-nhl-over-6-5",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Pittsburgh Penguins @ Vegas Golden Knights · 9:10 PM CT",
        "pick": "Over 6.5",
        "line": "-115 FanDuel",
        "timeCT": "9:10 PM CT",
        "startCT": "2026-10-17T21:10-05:00",
        "gameState": "pre",
        "fairOdds": "-112",
        "bestOdds": "-115",
        "bestBook": "FanDuel",
        "booksPriced": 21,
        "evPct": -1.23,
        "edgePlus": false,
        "consensus": 1.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Doc's Sports Picks, Best Bets, Predictions & Odds; La Jugada",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -112 (pinnacle); 21 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "81% of tickets on pick side (public side, -0.5)"
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
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Doc's Sports Picks, Best Bets, Predictions & Odds, La Jugada. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 15,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -1.2% vs fair."
      },
      {
        "id": "sat1017-nhl-over-6",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "St Louis Blues @ Nashville Predators · 7:10 PM CT",
        "pick": "Over 6",
        "line": "-108 LowVig",
        "timeCT": "7:10 PM CT",
        "startCT": "2026-10-17T19:10-05:00",
        "gameState": "pre",
        "fairOdds": "+101",
        "bestOdds": "-108",
        "bestBook": "LowVig",
        "booksPriced": 10,
        "evPct": -4.18,
        "edgePlus": false,
        "consensus": 1.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Beating The Odds; Doc's Sports Picks, Best Bets, Predictions & Odds",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +101 (pinnacle); 10 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "fail",
            "reason": "93% of tickets on pick side (public side, -0.5)"
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
        "gateFails": [
          "public_bias"
        ],
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Beating The Odds, Doc's Sports Picks, Best Bets, Predictions & Odds. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 15,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -4.2% vs fair."
      },
      {
        "id": "sat1017-nhl-over-6-5",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Edmonton Oilers @ Utah Mammoth · 9:10 PM CT",
        "pick": "Over 6.5",
        "line": "-120 LowVig",
        "timeCT": "9:10 PM CT",
        "startCT": "2026-10-17T21:10-05:00",
        "gameState": "pre",
        "fairOdds": "-110",
        "bestOdds": "-120",
        "bestBook": "LowVig",
        "booksPriced": 21,
        "evPct": -3.97,
        "edgePlus": false,
        "consensus": 1.5,
        "combined": 2.0,
        "publish": false,
        "publishReason": "2 combined sources < 6 required",
        "sources": {
          "youtube": 2,
          "ytRaw": 2,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 2.0
        },
        "ytWho": "Beating The Odds; Doc's Sports Picks, Best Bets, Predictions & Odds",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -110 (pinnacle); 21 books priced"
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
            "result": "pass",
            "reason": "-120 within -200 cap"
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
        "why": "YouTube 2 independent (auto-extracted from captions; not hand-verified): Beating The Odds, Doc's Sports Picks, Best Bets, Predictions & Odds. X send-it 0.",
        "rationale": "Soft: 2 combined sources (floor 6); fails public_bias.",
        "confidence": 15,
        "yt": 2,
        "x": 0,
        "total": 2.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (2 combined). Needs 4 more. Fails: public_bias. EV -4.0% vs fair."
      },
      {
        "id": "sat1017-nhl-san-jose-sharks-ml",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "San Jose Sharks @ Detroit Red Wings · 6:10 PM CT",
        "pick": "San Jose Sharks ML",
        "line": "+135 BetMGM",
        "timeCT": "6:10 PM CT",
        "startCT": "2026-10-17T18:10-05:00",
        "gameState": "pre",
        "fairOdds": "+125",
        "bestOdds": "+135",
        "bestBook": "BetMGM",
        "booksPriced": 30,
        "evPct": 4.44,
        "edgePlus": true,
        "consensus": 1.7,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "Pinpi9 Pronóstico",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair +125 (pinnacle); 30 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
          },
          {
            "rule": "public_bias",
            "result": "pass",
            "reason": "34% tickets on pick side (<70%)"
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
            "reason": "+135 within -200 cap"
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
        "why": "YouTube 1 independent (hand-verified; engine-deduped): Pinpi9 Pronóstico. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 6); all gate rules pass; edge+ vs Pinnacle no-vig.",
        "confidence": 17,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. EV +4.4% vs fair."
      },
      {
        "id": "sat1017-nhl-dallas-stars-ml",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Dallas Stars @ Chicago Blackhawks · 6:10 PM CT",
        "pick": "Dallas Stars ML",
        "line": "-200 Caesars",
        "timeCT": "6:10 PM CT",
        "startCT": "2026-10-17T18:10-05:00",
        "gameState": "pre",
        "fairOdds": "-202",
        "bestOdds": "-200",
        "bestBook": "Caesars",
        "booksPriced": 30,
        "evPct": 0.33,
        "edgePlus": true,
        "consensus": 1.2,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 3,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -202 (pinnacle); 30 books priced"
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
            "reason": "-200 within -200 cap"
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
        "why": "YouTube 1 independent (hand-verified; engine-deduped): Sports Parlay Picks. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 6); fails public_bias; edge+ vs Pinnacle no-vig.",
        "confidence": 12,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. Fails: public_bias. EV +0.3% vs fair."
      },
      {
        "id": "sat1017-nhl-over-6-5",
        "example": false,
        "sport": "NHL",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "spread",
        "game": "Buffalo Sabres @ Montréal Canadiens · 6:10 PM CT",
        "pick": "Over 6.5",
        "line": "-108 LowVig",
        "timeCT": "6:10 PM CT",
        "startCT": "2026-10-17T18:10-05:00",
        "gameState": "pre",
        "fairOdds": "-100",
        "bestOdds": "-108",
        "bestBook": "LowVig",
        "booksPriced": 21,
        "evPct": -3.7,
        "edgePlus": false,
        "consensus": 1.0,
        "combined": 1.0,
        "publish": false,
        "publishReason": "1 combined sources < 6 required",
        "sources": {
          "youtube": 1,
          "ytRaw": 1,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 1.0
        },
        "ytWho": "La Jugada",
        "xWho": "",
        "ytVerified": false,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -100 (pinnacle); 21 books priced"
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
        "why": "YouTube 1 independent (auto-extracted from captions; not hand-verified): La Jugada. X send-it 0.",
        "rationale": "Soft: 1 combined sources (floor 6); all gate rules pass.",
        "confidence": 10,
        "yt": 1,
        "x": 0,
        "total": 1.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (1 combined). Needs 5 more. EV -3.7% vs fair."
      }
    ],
    "MLB": [
      {
        "id": "sat1017-mlb-tampa-bay-rays-ml",
        "example": false,
        "sport": "MLB",
        "engineTier": "Soft",
        "tier": "gauge",
        "marketType": "moneyline",
        "game": "Tampa Bay Rays @ Cleveland Guardians · 7:00 PM CT",
        "pick": "Tampa Bay Rays ML",
        "line": "-108 BetOnline",
        "timeCT": "7:00 PM CT",
        "startCT": "2026-10-17T19:00-05:00",
        "gameState": "pre",
        "fairOdds": "-101",
        "bestOdds": "-108",
        "bestBook": "BetOnline",
        "booksPriced": 28,
        "evPct": -3.22,
        "edgePlus": false,
        "consensus": 3.3,
        "combined": 3.0,
        "publish": false,
        "publishReason": "3 combined sources < 6 required",
        "sources": {
          "youtube": 3,
          "ytRaw": 6,
          "ytEcho": 0,
          "xSendIt": 0,
          "combined": 3.0
        },
        "ytWho": "Doc's Sports Picks, Best Bets, Predictions & Odds; Guy Boston Sports; Sports Parlay Picks",
        "xWho": "",
        "ytVerified": true,
        "rules": [
          {
            "rule": "fair_price",
            "result": "pass",
            "reason": "fair -101 (pinnacle); 28 books priced"
          },
          {
            "rule": "key_numbers",
            "result": "na",
            "reason": "football spreads only"
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
        "why": "YouTube 3 independent (hand-verified; engine-deduped): Doc's Sports Picks, Best Bets, Predictions & Odds, Guy Boston Sports, Sports Parlay Picks. X send-it 0. YT hand-verified 5 of 6 auto-extracted.",
        "rationale": "Soft: 3 combined sources (floor 6); all gate rules pass.",
        "confidence": 33,
        "yt": 3,
        "x": 0,
        "total": 3.0,
        "booksAlign": null,
        "gap": "Soft · under the 6-source board floor (3 combined). Needs 3 more. EV -3.2% vs fair."
      }
    ]
  },
  "slate": "Sat Oct 17 2026 — CFB Week 7, NHL, ALCS G4, Soccer, UFC Edmonton · Clear/Soft/Watch (engine v1.0.3)",
  "sport": "multi",
  "defaultSport": "CFB",
  "status": "live",
  "summary": "3 on the board (6+ combined sources) · Clear 2 · Soft 83 · Watch 0 rated by tier_engine v1.0.3. Pass hidden. Research only.",
  "clearedCount": 2,
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
    "MLB": {
      "lastSlate": "Sat Oct 17 2026",
      "note": "ALCS Game 4 moved to tonight 7:00 PM CT after Friday's postponement."
    },
    "NFL": {
      "lastSlate": "Sat Oct 17 2026",
      "note": "No NFL games on Saturday's slate."
    },
    "NBA": {
      "lastSlate": "Sat Oct 17 2026",
      "note": "No NBA games on ESPN's Oct 17 scoreboard."
    },
    "WNBA": {
      "lastSlate": "Sat Oct 17 2026",
      "note": "Offseason."
    },
    "TENNIS": {
      "lastSlate": "Sat Oct 17 2026",
      "note": "Not researched this pass. ESPN's tennis feed listed no active Oct 17 events."
    }
  },
  "researchOnly": true,
  "noBetsPlaced": true,
  "skippedNote": "Hidden: Pass rows and one-side-per-game losers (engine 'dropped'). Splits/public % not pulled this pass. In-house models were not run this pass, so model_agreement is n/a on every row. Oct 15 cards removed; they're graded in the track record.",
  "bets": [
    {
      "id": "sat1017-ufc-joaquin-buckley-ml",
      "example": false,
      "sport": "UFC",
      "engineTier": "Clear",
      "tier": "cleared",
      "marketType": "moneyline",
      "game": "Mike Malott @ Joaquin Buckley · 9:45 PM CT",
      "pick": "Joaquin Buckley ML",
      "line": "+116 FanDuel",
      "timeCT": "9:45 PM CT",
      "startCT": "2026-10-17T21:45-05:00",
      "gameState": "pre",
      "fairOdds": "+121",
      "bestOdds": "+116",
      "bestBook": "FanDuel",
      "booksPriced": 19,
      "evPct": -2.26,
      "edgePlus": false,
      "consensus": 10.2,
      "combined": 10.25,
      "publish": true,
      "publishReason": "10.25 combined sources",
      "sources": {
        "youtube": 10,
        "ytRaw": 12,
        "ytEcho": 1,
        "xSendIt": 0,
        "combined": 10.25
      },
      "ytWho": "ContraGolpe - Analisa; Fight Fiend Forecast; Fortune KOokie; Guy Boston Sports; MMA Tugg; MMAPG; RustDown; SportsMoneyNetwork; The Die Hard MMA Podcast; Uselyis",
      "xWho": "",
      "ytVerified": true,
      "rules": [
        {
          "rule": "fair_price",
          "result": "pass",
          "reason": "fair +121 (pinnacle); 19 books priced"
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
          "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
        },
        {
          "rule": "longshot",
          "result": "na",
          "reason": "shorter than +300"
        },
        {
          "rule": "favorite_cap",
          "result": "pass",
          "reason": "+116 within -200 cap"
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
      "why": "YouTube 10 independent (hand-verified; engine-deduped): ContraGolpe - Analisa, Fight Fiend Forecast, Fortune KOokie, Guy Boston Sports, MMA Tugg, MMAPG, RustDown, SportsMoneyNetwork. X send-it 0. YT hand-verified 8 of 12 auto-extracted.",
      "rationale": "Clear: 10.25 combined sources (floor 6); all gate rules pass.",
      "confidence": 100,
      "rank": 1
    },
    {
      "id": "sat1017-ufc-louis-jourdain-ml",
      "example": false,
      "sport": "UFC",
      "engineTier": "Clear",
      "tier": "cleared",
      "marketType": "moneyline",
      "game": "Timothy Cuamba @ Louis Jourdain · 7:45 PM CT",
      "pick": "Louis Jourdain ML",
      "line": "-166 FanDuel",
      "timeCT": "7:45 PM CT",
      "startCT": "2026-10-17T19:45-05:00",
      "gameState": "pre",
      "fairOdds": "-155",
      "bestOdds": "-166",
      "bestBook": "FanDuel",
      "booksPriced": 19,
      "evPct": -2.6,
      "edgePlus": false,
      "consensus": 7.0,
      "combined": 7.0,
      "publish": true,
      "publishReason": "7 combined sources",
      "sources": {
        "youtube": 7,
        "ytRaw": 7,
        "ytEcho": 0,
        "xSendIt": 0,
        "combined": 7.0
      },
      "ytWho": "ContraGolpe - Analisa; Guy Boston Sports; MMA Husky Hustler; MMA JOEY; MMA Tugg; MMAPG; The Die Hard MMA Podcast",
      "xWho": "",
      "ytVerified": true,
      "rules": [
        {
          "rule": "fair_price",
          "result": "pass",
          "reason": "fair -155 (pinnacle); 19 books priced"
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
          "reason": "no home side (UFC/MMA/boxing/tennis or neutral_site): n/a"
        },
        {
          "rule": "longshot",
          "result": "na",
          "reason": "shorter than +300"
        },
        {
          "rule": "favorite_cap",
          "result": "pass",
          "reason": "-166 within -200 cap"
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
      "why": "YouTube 7 independent (hand-verified; engine-deduped): ContraGolpe - Analisa, Guy Boston Sports, MMA Husky Hustler, MMA JOEY, MMA Tugg, MMAPG, The Die Hard MMA Podcast. X send-it 0. YT hand-verified 7 of 7 auto-extracted.",
      "rationale": "Clear: 7 combined sources (floor 6); all gate rules pass.",
      "confidence": 70,
      "rank": 2
    },
    {
      "id": "sat1017-cfb-indiana-2-5",
      "example": false,
      "sport": "CFB",
      "engineTier": "Soft",
      "tier": "gauge",
      "marketType": "spread",
      "game": "Ohio State Buckeyes @ Indiana Hoosiers · 11:00 AM CT",
      "pick": "Indiana +2.5",
      "line": "+100 Bovada",
      "timeCT": "11:00 AM CT",
      "startCT": "2026-10-17T11:00-05:00",
      "gameState": "pre",
      "fairOdds": "+107",
      "bestOdds": "+100",
      "bestBook": "Bovada",
      "booksPriced": 8,
      "evPct": -3.38,
      "edgePlus": false,
      "consensus": 6.8,
      "combined": 6.0,
      "publish": true,
      "publishReason": "6 combined sources",
      "sources": {
        "youtube": 5,
        "ytRaw": 8,
        "ytEcho": 0,
        "xSendIt": 1,
        "combined": 6.0
      },
      "ytWho": "BettingPros; ESPN College Football; Free Picks PickDawgz; Greedo Plays; WagerTalk TV: Sports Picks and Betting Tips",
      "xWho": "jr_dimes",
      "ytVerified": true,
      "rules": [
        {
          "rule": "fair_price",
          "result": "pass",
          "reason": "fair +107 (pinnacle); 8 books priced"
        },
        {
          "rule": "key_numbers",
          "result": "fail",
          "reason": "taking +2.5, half-point short of key number 3"
        },
        {
          "rule": "public_bias",
          "result": "pass",
          "reason": "30% tickets on pick side (<70%)"
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
          "reason": "+100 within -200 cap"
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
        "key_numbers"
      ],
      "why": "YouTube 5 independent (hand-verified; engine-deduped): BettingPros, ESPN College Football, Free Picks PickDawgz, Greedo Plays, WagerTalk TV: Sports Picks and Betting Tips. X send-it 1: jr_dimes. spread +3.5→+2.5 since Fri; home dog; money 47% vs tickets ~30%; X posters' line +3; YT hand-verified 5 of 8 auto-extracted.",
      "rationale": "Soft: 6 combined sources (floor 6); fails key_numbers.",
      "confidence": 68,
      "rank": 3
    }
  ],
  "resultsTally": {
    "cleared": "2-2-0",
    "gauge": "19-15-0",
    "nearMiss": "121-87-3",
    "checkedAt": "9:59 AM CT",
    "checkedAtIso": "2026-10-17T09:59:47-05:00",
    "label": "Graded record (ESPN finals, regraded Oct 17): CLEARED 2-2-0 · GAUGE 19-15-0 · Near misses 121-87-3 (separate) · n=38"
  },
  "todaysGauge": {
    "title": "Today's top",
    "label": "Engine tiers · start times CT",
    "items": [
      {
        "rank": 1,
        "tier": "CLEAR",
        "pick": "Joaquin Buckley ML",
        "line": "+116 FanDuel",
        "sport": "UFC",
        "game": "Mike Malott @ Joaquin Buckley",
        "timeCT": "9:45 PM CT",
        "yt": 10,
        "x": 0,
        "edge": null,
        "rationale": "Clear: 10.25 combined sources (floor 6); all gate rules pass.",
        "onBoard": true
      },
      {
        "rank": 2,
        "tier": "CLEAR",
        "pick": "Louis Jourdain ML",
        "line": "-166 FanDuel",
        "sport": "UFC",
        "game": "Timothy Cuamba @ Louis Jourdain",
        "timeCT": "7:45 PM CT",
        "yt": 7,
        "x": 0,
        "edge": null,
        "rationale": "Clear: 7 combined sources (floor 6); all gate rules pass.",
        "onBoard": true
      },
      {
        "rank": 3,
        "tier": "SOFT",
        "pick": "Indiana +2.5",
        "line": "+100 Bovada",
        "sport": "CFB",
        "game": "Ohio State Buckeyes @ Indiana Hoosiers",
        "timeCT": "11:00 AM CT",
        "yt": 5,
        "x": 1,
        "edge": null,
        "rationale": "Soft: 6 combined sources (floor 6); fails key_numbers.",
        "onBoard": true
      },
      {
        "rank": 4,
        "tier": "SOFT",
        "pick": "Erin Blanchfield ML",
        "line": "-320 BetOnline",
        "sport": "UFC",
        "game": "Jasmine Jasudavicius @ Erin Blanchfield",
        "timeCT": "9:15 PM CT",
        "yt": 5,
        "x": 0,
        "edge": null,
        "rationale": "Soft: 5.25 combined sources (floor 6); fails favorite_cap.",
        "onBoard": false
      },
      {
        "rank": 5,
        "tier": "SOFT",
        "pick": "Kyle Daukaus ML",
        "line": "-195 Bovada",
        "sport": "UFC",
        "game": "Kyle Daukaus @ Marc-Andre Barriault",
        "timeCT": "8:15 PM CT",
        "yt": 5,
        "x": 0,
        "edge": null,
        "rationale": "Soft: 5 combined sources (floor 6); all gate rules pass.",
        "onBoard": false
      },
      {
        "rank": 6,
        "tier": "SOFT",
        "pick": "Oklahoma -6.5",
        "line": "-110 MyBookie",
        "sport": "CFB",
        "game": "Kentucky Wildcats @ Oklahoma Sooners",
        "timeCT": "6:30 PM CT",
        "yt": 4,
        "x": 1,
        "edge": null,
        "rationale": "Soft: 5 combined sources (floor 6); all gate rules pass.",
        "onBoard": false
      },
      {
        "rank": 7,
        "tier": "SOFT",
        "pick": "Mandel Nallo ML",
        "line": "-270 BetUS",
        "sport": "UFC",
        "game": "Nate Landwehr @ Mandel Nallo",
        "timeCT": "7:15 PM CT",
        "yt": 5,
        "x": 0,
        "edge": null,
        "rationale": "Soft: 5 combined sources (floor 6); fails favorite_cap.",
        "onBoard": false
      },
      {
        "rank": 8,
        "tier": "SOFT",
        "pick": "BYU +10.5",
        "line": "-108 BetMGM",
        "sport": "CFB",
        "game": "Notre Dame Fighting Irish @ BYU Cougars",
        "timeCT": "6:30 PM CT",
        "yt": 5,
        "x": 0,
        "edge": null,
        "rationale": "Soft: 5 combined sources (floor 6); fails fair_price.",
        "onBoard": false
      }
    ],
    "emptyText": "Nothing qualified today. No unstarted pick has 6+ combined sources (independent YouTube + 0.25×echo + X posters). The best near misses are on each sport's watch list with the reasons they fell short.",
    "note": "On the board = 6+ combined sources (independent YT + 0.25×echo + X posters). Rows under 6 stay on each sport's watch list."
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
  "xNote": "Send-it list 1867962331566612965 via free X search: 219 posts 12:00–9:30 AM CT read by Betting Consensus Screener; unique posters, current-day unstarted only. Never posted.",
  "oddsApiNote": "The Odds API (us+eu) snapshot 9:30 AM CT, 10 sports; closing capture run once this pass. Fair = Pinnacle no-vig. Line moves are Fri→Sat snapshot moves, not confirmed sharp action.",
  "youtubeNote": "YouTube: TubeAlfred had 0 credits, so all searches ran through free yt-dlp (25 query variants per sport, 'uploaded today' filter) with captions pulled via yt-dlp. Videos scanned (captions read) / counted (pre-game, today): CFB 70/45, NHL 45/26, MLB 33/20, Soccer 60/48, UFC 45/33. Picks are auto-extracted from captions. On-board picks and every engine-Clear candidate were hand-checked (9:55 AM CT) and their counts corrected. Same-day = uploaded the previous calendar day (CT) or game day, before the game. Rows marked 'YT auto · unverified' were not hand-checked.",
  "provisional": {
    "show": false,
    "title": "PROVISIONAL TIERS",
    "text": "Atlas hasn't decided Clear's definition yet. Option A: 2+ X send-it posters with a 2.5-point model edge. Option B: 3+ independent YouTube with every rule passing. Today's tiers use Option B (engine v1.0.0) and may be re-tiered."
  },
  "tierSpec": "v3-engine",
  "tierCounts": {
    "CFB": {
      "Clear": 0,
      "Soft": 41,
      "Watch": 0,
      "onBoard": 1
    },
    "NHL": {
      "Clear": 0,
      "Soft": 14,
      "Watch": 0,
      "onBoard": 0
    },
    "MLB": {
      "Clear": 0,
      "Soft": 1,
      "Watch": 0,
      "onBoard": 0
    },
    "Soccer": {
      "Clear": 0,
      "Soft": 18,
      "Watch": 0,
      "onBoard": 0
    },
    "UFC": {
      "Clear": 2,
      "Soft": 9,
      "Watch": 0,
      "onBoard": 2
    }
  }
};
