# CapCut World LA — official asset pack (local)

**Harvested:** 2026-10-22 · **Files:** 138 · **Total size:** 185.4 MB  
**Storage:** `/cursor/stores/self/media/capcut-world/` (agent store only — **not** committed to `/workspace` git)

## Sources crawled

| Source | What we pulled |
|--------|----------------|
| [capcutworld.com](https://capcutworld.com/) | LA homepage HTML + `js/kv.js`, `main.js`, `city6.js`, `orb78.js`, `css/site.css` |
| [capcutworld.com/manifesto.html](https://capcutworld.com/manifesto.html) | Brand typography / logo paths (no extra raster) |
| [capcutworld.com/recap/singapore/](https://capcutworld.com/recap/singapore/) | `js/data.js` + `js/main.js` — recap film, hero loop, wall5 moments, speakers |
| [Contra guidelines](https://contra.com/community/topic/capcutworldlachallenge/guidelines) | OG hero image (`media.contra.com`) |

**Techniques:** `curl` homepage + JS bundles, CSS `url()` scan, sitemap (homepage only), path probes under `/assets/`, Singapore recap data-driven image list.

## Challenge rules (submission note)

Per [Contra CapCut World LA guidelines](https://contra.com/community/topic/capcutworldlachallenge/guidelines) and [checklist](/cursor/stores/self/docs/capcut-world-la-checklist.md):

- **Original work** created **Oct 16–26, 2026**, finished in **CapCut Video Studio** (15–60s).
- **Official CapCut / CapCut World branding** is on-brief for arrival beats (stage, stadium, `#CapCutWorld` / `#CapCutWorldLA`).
- Use these downloads as **reference, texture, and compositing plates** — composite and polish **in CapCut**; document prompts/workflow on Contra.
- Speaker photos and event footage remain **CapCut copyrighted**; store locally for edit reference, not redistribution.

## SKU quick map (from [multi-submission plan](/cursor/stores/self/docs/capcut-multi-submission-plan.md))

| SKU | Concept | Best assets in this pack |
|-----|---------|---------------------------|
| **1** | Dracula Hunters → portal → **CCW stage** | `video/open-*.mp4`, `la/gal-atlas.webp`, `singapore-recap/video/recap.mp4`, `wall5/capella-*.webp`, `logos/capcut-world.svg`, `la/sched-*.png` |
| **2** | Anime → panel tear → CCW | `city/arc-losangeles.png`, `balls-hd/ball-*.webp`, `la/la-ball-ripple.webp` |
| **3** | CapCut robots → stadium | `balls-hd/*`, `logos/*`, `la/globe-white.webp`, `la/plane-*.svg` (travel gag plate) |
| **4** | Ramayan stylized → lotus portal | `city/bub-losangeles.jpg`, `singapore-recap/img/moments/main-stage.webp` (crowd silhouette ref) |
| **5** | **Stadium Olympics** → CCW opening | `singapore-recap/video/*`, `wall5/capella-*`, `wall5/mbs-*`, `sections/s5-mbs.png`, `video/open-2560.mp4` |
| **6** | CCW Atelier runway | `balls-hd/ball-04.webp` (fashion sphere), `wall5/gala-*`, `la/join-bg.jpg`, `la/how-img.jpg` |

## Top 5 for **Dracula (SKU 1)** + **Stadium (SKU 5)**

1. **`video/open-1280.mp4`** — Official ultrawide CCW loop (site §④); instant brand color + motion for portal exit.
2. **`singapore-recap/video/recap.mp4`** (~37 MB) — Full Singapore recap; main-stage and crowd beats for stadium finale.
3. **`la/gal-atlas.webp`** — LA ring gallery atlas (orb78); strong **arrival** texture behind portal VFX.
4. **`singapore-recap/img/wall5/capella-8.webp`** (any capella wide) — Real CCW main-stage photography for layout reference.
5. **`logos/capcut-world.svg`** + **`city/arc-losangeles.png`** — Clean end-card logo + LA city lockup.

## Full inventory

| File | Size (KB) | Source URL | Suggested use (SKUs) |
|------|-----------|------------|----------------------|
| `contra-challenge-og-1200.webp` | 58.3 | https://media.contra.com/image/upload/w_1200/u2mqiaaypugxvgni9r39.webp | **meta:** Contra challenge cover art for posts |
| `ball/glyph.svg` | 0.6 | https://capcutworld.com/assets/ball/glyph.svg | General reference / mood |
| `ball/matcap.png` | 253.7 | https://capcutworld.com/assets/ball/matcap.png | General reference / mood |
| `ball/shellgen.png` | 1210.6 | https://capcutworld.com/assets/ball/shellgen.png | General reference / mood |
| `balls-hd/ball-02.webp` | 55.1 | https://capcutworld.com/assets/balls-hd/ball-02.webp | **2,3,6:** Creator-in-glass-ball motif (site hero); robot crowd or runway extras |
| `balls-hd/ball-04.webp` | 52.7 | https://capcutworld.com/assets/balls-hd/ball-04.webp | **2,3,6:** Creator-in-glass-ball motif (site hero); robot crowd or runway extras |
| `balls-hd/ball-05.webp` | 67.3 | https://capcutworld.com/assets/balls-hd/ball-05.webp | **2,3,6:** Creator-in-glass-ball motif (site hero); robot crowd or runway extras |
| `balls-hd/ball-06.webp` | 57.4 | https://capcutworld.com/assets/balls-hd/ball-06.webp | **2,3,6:** Creator-in-glass-ball motif (site hero); robot crowd or runway extras |
| `balls-hd/ball-07.webp` | 53.4 | https://capcutworld.com/assets/balls-hd/ball-07.webp | **2,3,6:** Creator-in-glass-ball motif (site hero); robot crowd or runway extras |
| `balls-hd/ball-08.webp` | 39.0 | https://capcutworld.com/assets/balls-hd/ball-08.webp | **2,3,6:** Creator-in-glass-ball motif (site hero); robot crowd or runway extras |
| `balls-hd/ball-09.webp` | 30.6 | https://capcutworld.com/assets/balls-hd/ball-09.webp | **2,3,6:** Creator-in-glass-ball motif (site hero); robot crowd or runway extras |
| `balls-hd/ball-10.webp` | 56.9 | https://capcutworld.com/assets/balls-hd/ball-10.webp | **2,3,6:** Creator-in-glass-ball motif (site hero); robot crowd or runway extras |
| `balls-hd/ball-13.webp` | 23.2 | https://capcutworld.com/assets/balls-hd/ball-13.webp | **2,3,6:** Creator-in-glass-ball motif (site hero); robot crowd or runway extras |
| `balls-hd/logoball.webp` | 42.4 | https://capcutworld.com/assets/balls-hd/logoball.webp | **2,3,6:** Creator-in-glass-ball motif (site hero); robot crowd or runway extras |
| `city/arc-london-b.png` | 38.3 | https://capcutworld.com/assets/city/arc-london-b.png | General reference / mood |
| `city/arc-losangeles.png` | 40.2 | https://capcutworld.com/assets/city/arc-losangeles.png | **1–6:** LA arrival lock — city poster / bubble hero |
| `city/arc-singapore.png` | 50.1 | https://capcutworld.com/assets/city/arc-singapore.png | General reference / mood |
| `city/bub-london.jpg` | 253.3 | https://capcutworld.com/assets/city/bub-london.jpg | General reference / mood |
| `city/bub-losangeles.jpg` | 271.4 | https://capcutworld.com/assets/city/bub-losangeles.jpg | **1–6:** LA arrival lock — city poster / bubble hero |
| `gallery/gal-cell-01.jpg` | 242.2 |  | General reference / mood |
| `gallery/gal-cell-02.jpg` | 221.8 |  | General reference / mood |
| `gallery/gal-cell-03.jpg` | 122.0 |  | General reference / mood |
| `gallery/gal-cell-04.jpg` | 135.6 |  | General reference / mood |
| `gallery/gal-cell-05.jpg` | 143.2 |  | General reference / mood |
| `gallery/gal-cell-06.jpg` | 256.7 |  | General reference / mood |
| `la/gal-atlas.webp` | 493.1 | https://capcutworld.com/assets/la/gal-atlas.webp | **1,5:** LA orbital photo ring — texture for portal→stage transitions |
| `la/globe-white.webp` | 38.2 | https://capcutworld.com/assets/la/globe-white.webp | General reference / mood |
| `la/how-img.jpg` | 201.7 | https://capcutworld.com/assets/la/how-img.jpg | **Avoid as portal beat** (creator at computer) — OK for **social BTS** only, not hero “arrival through screen” |
| `la/join-bg.jpg` | 58.3 | https://capcutworld.com/assets/la/join-bg.jpg | **6:** Fashion / gala lighting reference |
| `la/la-ball-ripple.webp` | 144.0 | https://capcutworld.com/assets/la/la-ball-ripple.webp | General reference / mood |
| `la/num-1.svg` | 0.5 | https://capcutworld.com/assets/la/num-1.svg | General reference / mood |
| `la/num-2.svg` | 1.3 | https://capcutworld.com/assets/la/num-2.svg | General reference / mood |
| `la/num-3.svg` | 2.0 | https://capcutworld.com/assets/la/num-3.svg | General reference / mood |
| `la/num-4.svg` | 0.6 | https://capcutworld.com/assets/la/num-4.svg | General reference / mood |
| `la/plane-l.svg` | 2.2 | https://capcutworld.com/assets/la/plane-l.svg | General reference / mood |
| `la/plane-r.svg` | 2.2 | https://capcutworld.com/assets/la/plane-r.svg | General reference / mood |
| `la/s3-ball-fallback.webp` | 230.6 | https://capcutworld.com/assets/la/s3-ball-fallback.webp | General reference / mood |
| `la/sched-1000.png` | 610.6 | https://capcutworld.com/assets/la/sched-1000.png | **1,5:** Session UI cards — experience / agenda beats in workflow proof |
| `la/sched-1100.png` | 825.4 | https://capcutworld.com/assets/la/sched-1100.png | **1,5:** Session UI cards — experience / agenda beats in workflow proof |
| `la/sched-1400.png` | 771.5 | https://capcutworld.com/assets/la/sched-1400.png | **1,5:** Session UI cards — experience / agenda beats in workflow proof |
| `la/sched-1530.png` | 852.3 | https://capcutworld.com/assets/la/sched-1530.png | **1,5:** Session UI cards — experience / agenda beats in workflow proof |
| `la/sched-1900.png` | 744.4 | https://capcutworld.com/assets/la/sched-1900.png | **1,5:** Session UI cards — experience / agenda beats in workflow proof |
| `la/sched-allday.png` | 953.3 | https://capcutworld.com/assets/la/sched-allday.png | **1,5:** Session UI cards — experience / agenda beats in workflow proof |
| `la/spk-1.webp` | 98.5 | https://capcutworld.com/assets/la/spk-1.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-10.webp` | 87.1 | https://capcutworld.com/assets/la/spk-10.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-11.webp` | 96.1 | https://capcutworld.com/assets/la/spk-11.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-12.webp` | 99.8 | https://capcutworld.com/assets/la/spk-12.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-13.webp` | 88.5 | https://capcutworld.com/assets/la/spk-13.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-2.webp` | 83.1 | https://capcutworld.com/assets/la/spk-2.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-3.webp` | 83.9 | https://capcutworld.com/assets/la/spk-3.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-4.webp` | 90.1 | https://capcutworld.com/assets/la/spk-4.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-5.webp` | 83.0 | https://capcutworld.com/assets/la/spk-5.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-6.webp` | 71.4 | https://capcutworld.com/assets/la/spk-6.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-7.webp` | 123.2 | https://capcutworld.com/assets/la/spk-7.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-8.webp` | 80.1 | https://capcutworld.com/assets/la/spk-8.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `la/spk-9.webp` | 82.2 | https://capcutworld.com/assets/la/spk-9.webp?v=2 | **—:** Speaker headshots — reference only; avoid uncredited speaker inserts |
| `logos/capcut-only.svg` | 3.0 | https://capcutworld.com/assets/logo/capcut-only.svg | **1,3,5,6:** End cards, lower-thirds, stadium scoreboard logos |
| `logos/capcut-world.svg` | 16.5 | https://capcutworld.com/assets/logo/capcut-world.svg | **1,3,5,6:** End cards, lower-thirds, stadium scoreboard logos |
| `logos/favicon.png` | 82.5 | https://capcutworld.com/assets/logo/favicon.png | General reference / mood |
| `logos/glyph.svg` | 0.6 | https://capcutworld.com/assets/logo/glyph.svg | General reference / mood |
| `sections/s5-mbs.png` | 2108.1 | https://capcutworld.com/assets/sections/s5-mbs.png | **5:** Pop-up / stadium exterior scale |
| `singapore-recap/img/hero/hero-poster.webp` | 154.2 | https://capcutworld.com/recap/singapore/assets/img/hero/hero-poster.webp | General reference / mood |
| `singapore-recap/img/hero/watch-poster-b.webp` | 107.9 | https://capcutworld.com/recap/singapore/assets/img/hero/watch-poster-b.webp | General reference / mood |
| `singapore-recap/img/moments/gala.webp` | 171.3 | https://capcutworld.com/recap/singapore/assets/img/moments/gala.webp | **6:** Fashion / gala lighting reference |
| `singapore-recap/img/moments/main-stage-m.webp` | 101.0 | https://capcutworld.com/recap/singapore/assets/img/moments/main-stage-m.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/moments/main-stage.webp` | 170.3 | https://capcutworld.com/recap/singapore/assets/img/moments/main-stage.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/moments/mbs.webp` | 108.6 | https://capcutworld.com/recap/singapore/assets/img/moments/mbs.webp | **5:** Pop-up / stadium exterior scale |
| `singapore-recap/img/moments/screening.webp` | 104.2 | https://capcutworld.com/recap/singapore/assets/img/moments/screening.webp | General reference / mood |
| `singapore-recap/img/moments/workshops.webp` | 32.4 | https://capcutworld.com/recap/singapore/assets/img/moments/workshops.webp | General reference / mood |
| `singapore-recap/img/quotes2/q1.webp` | 104.6 | https://capcutworld.com/recap/singapore/assets/img/quotes2/q1.webp | General reference / mood |
| `singapore-recap/img/quotes2/q2.webp` | 56.5 | https://capcutworld.com/recap/singapore/assets/img/quotes2/q2.webp | General reference / mood |
| `singapore-recap/img/quotes2/q3b.webp` | 36.5 | https://capcutworld.com/recap/singapore/assets/img/quotes2/q3b.webp | General reference / mood |
| `singapore-recap/img/quotes2/q4.webp` | 68.1 | https://capcutworld.com/recap/singapore/assets/img/quotes2/q4.webp | General reference / mood |
| `singapore-recap/img/quotes2/q5.webp` | 86.4 | https://capcutworld.com/recap/singapore/assets/img/quotes2/q5.webp | General reference / mood |
| `singapore-recap/img/quotes2/q6.webp` | 86.9 | https://capcutworld.com/recap/singapore/assets/img/quotes2/q6.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-1.webp` | 24.7 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-1.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-10.webp` | 28.8 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-10.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-11.webp` | 31.0 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-11.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-12.webp` | 28.3 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-12.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-2.webp` | 34.6 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-2.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-3.webp` | 46.7 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-3.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-4.webp` | 21.2 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-4.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-5.webp` | 27.6 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-5.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-6.webp` | 22.3 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-6.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-7.webp` | 20.6 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-7.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-8.webp` | 24.7 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-8.webp | General reference / mood |
| `singapore-recap/img/speakers/spk-9.webp` | 22.7 | https://capcutworld.com/recap/singapore/assets/img/speakers/spk-9.webp | General reference / mood |
| `singapore-recap/img/wall5/aif-1.webp` | 74.8 | https://capcutworld.com/recap/singapore/assets/img/wall5/aif-1.webp | General reference / mood |
| `singapore-recap/img/wall5/aif-2.webp` | 84.4 | https://capcutworld.com/recap/singapore/assets/img/wall5/aif-2.webp | General reference / mood |
| `singapore-recap/img/wall5/aif-3.webp` | 66.2 | https://capcutworld.com/recap/singapore/assets/img/wall5/aif-3.webp | General reference / mood |
| `singapore-recap/img/wall5/aif-4.webp` | 163.3 | https://capcutworld.com/recap/singapore/assets/img/wall5/aif-4.webp | General reference / mood |
| `singapore-recap/img/wall5/aif-5.webp` | 203.5 | https://capcutworld.com/recap/singapore/assets/img/wall5/aif-5.webp | General reference / mood |
| `singapore-recap/img/wall5/aif-6.webp` | 151.2 | https://capcutworld.com/recap/singapore/assets/img/wall5/aif-6.webp | General reference / mood |
| `singapore-recap/img/wall5/aif-7.webp` | 151.9 | https://capcutworld.com/recap/singapore/assets/img/wall5/aif-7.webp | General reference / mood |
| `singapore-recap/img/wall5/aif-8.webp` | 239.4 | https://capcutworld.com/recap/singapore/assets/img/wall5/aif-8.webp | General reference / mood |
| `singapore-recap/img/wall5/capella-1.webp` | 132.9 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-1.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-10.webp` | 229.4 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-10.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-11.webp` | 225.6 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-11.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-12.webp` | 261.6 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-12.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-13.webp` | 90.7 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-13.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-14.webp` | 140.6 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-14.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-2.webp` | 207.1 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-2.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-3.webp` | 164.9 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-3.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-4.webp` | 212.6 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-4.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-5.webp` | 179.2 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-5.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-6.webp` | 205.7 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-6.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-7.webp` | 223.6 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-7.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-8.webp` | 278.0 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-8.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/capella-9.webp` | 226.9 | https://capcutworld.com/recap/singapore/assets/img/wall5/capella-9.webp | **1,5:** Real CCW main-stage reference (Audrey Irmas–style assembly) |
| `singapore-recap/img/wall5/gala-1.webp` | 87.9 | https://capcutworld.com/recap/singapore/assets/img/wall5/gala-1.webp | **6:** Fashion / gala lighting reference |
| `singapore-recap/img/wall5/gala-2.webp` | 172.9 | https://capcutworld.com/recap/singapore/assets/img/wall5/gala-2.webp | **6:** Fashion / gala lighting reference |
| `singapore-recap/img/wall5/gala-3.webp` | 79.7 | https://capcutworld.com/recap/singapore/assets/img/wall5/gala-3.webp | **6:** Fashion / gala lighting reference |
| `singapore-recap/img/wall5/gala-4.webp` | 115.4 | https://capcutworld.com/recap/singapore/assets/img/wall5/gala-4.webp | **6:** Fashion / gala lighting reference |
| `singapore-recap/img/wall5/gala-5.webp` | 138.8 | https://capcutworld.com/recap/singapore/assets/img/wall5/gala-5.webp | **6:** Fashion / gala lighting reference |
| `singapore-recap/img/wall5/gala-6.webp` | 125.6 | https://capcutworld.com/recap/singapore/assets/img/wall5/gala-6.webp | **6:** Fashion / gala lighting reference |
| `singapore-recap/img/wall5/gala-7.webp` | 202.0 | https://capcutworld.com/recap/singapore/assets/img/wall5/gala-7.webp | **6:** Fashion / gala lighting reference |
| `singapore-recap/img/wall5/mbs-1b.webp` | 138.2 | https://capcutworld.com/recap/singapore/assets/img/wall5/mbs-1b.webp | **5:** Pop-up / stadium exterior scale |
| `singapore-recap/img/wall5/mbs-2.webp` | 111.8 | https://capcutworld.com/recap/singapore/assets/img/wall5/mbs-2.webp | **5:** Pop-up / stadium exterior scale |
| `singapore-recap/img/wall5/mbs-3.webp` | 163.8 | https://capcutworld.com/recap/singapore/assets/img/wall5/mbs-3.webp | **5:** Pop-up / stadium exterior scale |
| `singapore-recap/img/wall5/mbs-4.webp` | 295.8 | https://capcutworld.com/recap/singapore/assets/img/wall5/mbs-4.webp | **5:** Pop-up / stadium exterior scale |
| `singapore-recap/img/wall5/mbs-5.webp` | 305.2 | https://capcutworld.com/recap/singapore/assets/img/wall5/mbs-5.webp | **5:** Pop-up / stadium exterior scale |
| `singapore-recap/img/wall5/mbs-6.webp` | 302.4 | https://capcutworld.com/recap/singapore/assets/img/wall5/mbs-6.webp | **5:** Pop-up / stadium exterior scale |
| `singapore-recap/img/wall5/ws-1.webp` | 80.1 | https://capcutworld.com/recap/singapore/assets/img/wall5/ws-1.webp | General reference / mood |
| `singapore-recap/img/wall5/ws-2.webp` | 206.7 | https://capcutworld.com/recap/singapore/assets/img/wall5/ws-2.webp | General reference / mood |
| `singapore-recap/img/wall5/ws-3.webp` | 184.3 | https://capcutworld.com/recap/singapore/assets/img/wall5/ws-3.webp | General reference / mood |
| `singapore-recap/img/wall5/ws-4.webp` | 184.5 | https://capcutworld.com/recap/singapore/assets/img/wall5/ws-4.webp | General reference / mood |
| `singapore-recap/img/wall5/ws-5.webp` | 63.4 | https://capcutworld.com/recap/singapore/assets/img/wall5/ws-5.webp | General reference / mood |
| `singapore-recap/img/wall5/ws-6.webp` | 161.1 | https://capcutworld.com/recap/singapore/assets/img/wall5/ws-6.webp | General reference / mood |
| `singapore-recap/video/hero-b.mp4` | 8388.7 | https://capcutworld.com/recap/singapore/assets/video/hero-b.mp4 | **1,5:** Official event energy — stage, crowd, venue (composite under your gens) |
| `singapore-recap/video/recap.mp4` | 36563.2 | https://capcutworld.com/recap/singapore/assets/video/recap.mp4 | **1,5:** Official event energy — stage, crowd, venue (composite under your gens) |
| `singapore-recap/video/talk-1.mp4` | 22155.3 | https://capcutworld.com/recap/singapore/assets/video/talk-1.mp4 | **5:** Main-stage talk clip — scoreboard / Jumbotron inserts |
| `singapore-recap/video/talk-12.mp4` | 16061.4 | https://capcutworld.com/recap/singapore/assets/video/talk-12.mp4 | **5:** Main-stage talk clip — scoreboard / Jumbotron inserts |
| `singapore-recap/video/talk-2.mp4` | 35765.6 | https://capcutworld.com/recap/singapore/assets/video/talk-2.mp4 | **5:** Main-stage talk clip — scoreboard / Jumbotron inserts |
| `singapore-recap/video/talk-8.mp4` | 15403.1 | https://capcutworld.com/recap/singapore/assets/video/talk-8.mp4 | **5:** Main-stage talk clip — scoreboard / Jumbotron inserts |
| `singapore-recap/video/watch-loop.mp4` | 3967.8 | https://capcutworld.com/recap/singapore/assets/video/watch-loop.mp4 | **1,5:** Official event energy — stage, crowd, venue (composite under your gens) |
| `video/open-1280.mp4` | 4395.3 | https://capcutworld.com/assets/video/open-1280.mp4 | **1,5:** Wide CCW brand film strip (loop B-roll, stadium broadcast beds) |
| `video/open-2560.mp4` | 16482.4 | https://capcutworld.com/assets/video/open-2560.mp4 | **1,5:** Wide CCW brand film strip (loop B-roll, stadium broadcast beds) |
| `video/open-poster.jpg` | 2.6 | https://capcutworld.com/assets/video/open-poster.jpg | **1,5:** Wide CCW brand film strip (loop B-roll, stadium broadcast beds) |

## Gaps / not on CDN

- **3D hero WebGL** (`js/gl3d.js`) renders live in browser — no single MP4 except `open-*.mp4` and Singapore recap set.
- **`open-2560.mp4`** may need retry on slow links (~16 MB); 1280 copy included.
- **LA-specific venue stills** are sparse on the live site; Singapore **Capella / MBS** plates stand in for “CCW main stage / stadium” until LA recap exists.

