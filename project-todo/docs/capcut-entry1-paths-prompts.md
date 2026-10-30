# Entry #1 Dracula — paths & prompts (CapCut / Seedance)

**Story:** Fight → **eagle + CCW ticket** → truce → **Kalu dragon** → Dracula **drops you at CCW**.  
**Join done** → build in **CapCut Video Studio** · 9:16 · **35–45s**.

---

## Folder layout (create on your Mac)

```
~/Movies/capcut-ccw-oct26/01-dracula/
  source/          ← generated + DH clips you edit
  refs/            ← CCW official plates (copy from Context asset pack)
  audio/           ← optional SFX exports
  exports/         ← final MP4
```

**CapCut project name:** `CCW-01-Dracula-Eagle-Dragon`

---

## Source file paths

### Your Dracula / MVP footage (Mac)

| Use | Path |
|-----|------|
| **Primary hero (long)** | `~/Desktop/invideo-mvp1/MVP-1-source-full.mp4` |
| **Short hero (6s)** | `~/aiagents/ethglobal2026/portfolio/11s-ads/samples/MVP-1-hero.mp4` |
| **Alt copy** | `~/aiagents/ethglobal2026/invideo/assets/MVP-1-hero.mp4` |

### Cloud VM (if you pull from agent workspace)

| Use | Path |
|-----|------|
| Hero sample | `/workspace/aiagents/ethglobal2026/portfolio/11s-ads/samples/MVP-1-hero.mp4` |
| SMM B-roll trim | `/workspace/aiagents/smm/july2026/reels/day7-reel.mp4` (crowd/light slices only) |

### Official CCW plates — copy into `refs/`

From Project **Context** → `media/capcut-world/` (or download from URLs below):

| File | Copy to `refs/` | Source URL |
|------|-----------------|------------|
| Stage photo | `capella-8.webp` | `https://capcutworld.com/recap/singapore/assets/img/wall5/capella-8.webp` |
| Crowd recap | `recap.mp4` | `https://capcutworld.com/recap/singapore/assets/video/recap.mp4` |
| Logo | `capcut-world.svg` | `https://capcutworld.com/assets/logo/capcut-world.svg` |
| LA lockup | `arc-losangeles.png` | `https://capcutworld.com/assets/city/arc-losangeles.png` |
| Hero loop (trim) | `open-1280.mp4` | `https://capcutworld.com/assets/video/open-1280.mp4` |

Full pack index: [capcut-world-asset-pack.md](/cursor/stores/self/docs/capcut-world-asset-pack.md)

---

## Scene bible (paste at top of every gen)

```text
CHARACTER LOCK — Dracula Hunters protagonist:
Male vampire hunter, late 20s, pale skin, dark messy hair, long black coat with high collar,
silver buckle, gothic but modern. Same face in every shot. Cinematic realism, not cartoon.

DRACULA: Tall silhouette, black cape, pale face glimpses, no gore.

KALU DRAGON: Large serpentine Eastern dragon, teal-black scales, gold underbelly, glowing amber eyes,
smoke from nostrils. Same design every shot.

EAGLE: Golden eagle, wingspan wide, talons holding parchment ticket.

TICKET: Aged parchment, wax seal, readable text "CapCut World LA" and "Oct 24 2026".

PALETTE: Gothic amber and charcoal before arrival; CapCut teal #12D9F9 accent on CCW scenes.

FORMAT: Vertical 9:16, 1080x1920, 24fps cinematic, shallow depth of field, film grain subtle.
```

---

## Video prompts (Seedance or CapCut AI Video)

Generate **one clip per row**; save into `source/` with filename. Pick **one hero take** per beat (alternates OK).

### Shot 01 — `source/01-wake.mp4` (3s)

```text
[SCENE BIBLE]
Extreme close-up vampire hunter eyes opening in candlelit gothic crypt, smoke in air,
slow push-in, hunter confused, black coat collar visible, 9:16 vertical cinematic.
```

### Shot 02 — `source/02-fight-a.mp4` (4s)

```text
[SCENE BIBLE]
Stylized sword duel vampire hunter vs Dracula in gothic hall, cape swirl, sparks not blood,
dynamic side angle, both silhouettes readable, no gore, 9:16 action cinematic.
```

### Shot 03 — `source/02-fight-b.mp4` (4s)

```text
[SCENE BIBLE]
Continue same duel, hunter blocks, Dracula grins, chandelier shakes, same costumes and faces,
match previous lighting, 9:16.
```

### Shot 04 — `source/03-eagle-ticket.mp4` (4s)

```text
[SCENE BIBLE]
Mid-fight freeze moment: golden eagle swoops through hall carrying parchment CCW ticket in talons,
ticket flutters, hunter and Dracula look up surprised, dramatic rim light, 9:16.
```

### Shot 05 — `source/04-truce.mp4` (2s)

```text
[SCENE BIBLE]
Hunter and Dracula lower weapons, awkward pause, eagle perched on stone pillar,
parchment ticket on floor between them showing CapCut World LA, 9:16 medium shot.
```

### Shot 06 — `source/05-mount-dragon.mp4` (5s)

```text
[SCENE BIBLE]
Hunter climbs onto Kalu dragon back in moonlit courtyard, Dracula points upward impatiently,
dragon wings spread, teal-black scales shimmer, 9:16 wide cinematic.
```

### Shot 07 — `source/06-flight.mp4` (6s)

```text
[SCENE BIBLE]
Aerial follow Kalu dragon flying through clouds toward city lights, hunter riding,
wind in coat, not airplane style — fantasy dragon flight, 9:16 epic.
```

### Shot 08 — `source/07-landing.mp4` (5s)

```text
[SCENE BIBLE]
Kalu dragon lands at modern creator event stage entrance, crowd bokeh, CapCut teal lights,
hunter dismounts, Dracula waves from dragon back comically, 9:16 arrival shot.
```

**Extend tip:** If Seedance supports **extend**, extend Shot 06→07 or 07→08 with:  
`CONTINUITY: same hunter, same Kalu dragon, same coat — next beat: [describe next shot].`

---

## CapCut Video Studio — in-app steps

| Step | Where | Action |
|------|--------|--------|
| 1 | New project | **9:16** · 1080p · 30fps |
| 2 | Import | All `source/*.mp4` + `refs/*` |
| 3 | Timeline | Order: 01 → 02a/b → 03 → 04 → 05 → 06 → 07 (+ trim MVP-1 if better for 01) |
| 4 | Skills | **Skills → WELCOME TO CCW** · import landing/crowd · insert **4–6s** at end |
| 5 | Text | 0:02 *Wrong century. Right stage.* · end `#1000WaysToCCW` `#CapCutWorld` `#CapCutWorldLA` |
| 6 | Adjust | One color grade all clips · teal push on landing |
| 7 | Audio | Music bed + eagle wing SFX + crowd cheer on land |
| 8 | Export | `exports/capcut-world-la-dh-eagle-dragon.mp4` |
| 9 | Share | **Copy project link** (cloud) for Contra |

### Optional CapCut AI (1–2 gens max — log prompts)

**Ticket shimmer on Shot 04:**

```text
Parchment ticket in talons glows faintly, CapCut World LA text legible, magical particles, 2 seconds, 9:16
```

**Dragon eye glow:**

```text
Kalu dragon amber eyes pulse once, smoke wisp, cinematic close-up, 9:16
```

---

## Contra workflow paste (after export)

```text
Entry #1: Dracula Hunters — Eagle Ticket · Kalu Drop-Off
Concept: Mid-fight eagle delivers CapCut World LA invite; hunter and Dracula stop fighting; hunter rides Kalu dragon; Dracula drops hunter at CCW stage.
Tools: CapCut Video Studio (web/desktop), Skills: WELCOME TO CCW, AI video gens [Seedance/CapCut — list shots], imported MVP-1-source-full.mp4 [if used], CCW refs from capcutworld.com (capella, recap).
Prompts: Scene bible + shots 01–07 as documented in capcut-entry1-paths-prompts.md.
Edit: 9:16 1080p, ~40s, unified grade, layered SFX.
Project link: [paste]
Social: [paste IG/X/TikTok URL with #CapCutWorld #CapCutWorldLA @capcutapp or @CapCut]
```

---

## Social caption starter

```text
Even Dracula had directions. 🦇🐉 #1000WaysToCCW
Eagle delivered our CapCut World LA ticket mid-fight — then Kalu dropped us at the stage.
Built in @CapCut #CapCutWorld #CapCutWorldLA
```

---

## Entries #2–#6

Same folder pattern: `~/Movies/capcut-ccw-oct26/02-anime/` etc.  
Stories only (prompts next pass): [canonical six briefs](/cursor/stores/self/docs/capcut-six-canonical-briefs.md).
