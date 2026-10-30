# Standalones — project context

Master priorities and file index for this Project. **Build order (one at a time):**  
`1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → (10 register) → 9` · nights: `11` · weekends: `12` · anytime: `13`

## Repo layout (not one monorepo)

Local planning lives in **`ethglobal2026`**; its `git remote` is **NextBeat only** ([nextbeat-ethonline](https://github.com/helloAbhishekJha/nextbeat-ethonline)) — do not push personal ops there.

| Role | Repo / location |
| --- | --- |
| **Build queue + Growth Hub plan** | Private [the-system](https://github.com/helloAbhishekJha/the-system) — [PROJECT-BUILD-QUEUE.md](https://github.com/helloAbhishekJha/the-system/blob/main/PROJECT-BUILD-QUEUE.md) |
| **Growth Hub API plan** | [docs-GROWTH-HUB-API-PLAN.md](https://github.com/helloAbhishekJha/the-system/blob/main/docs-GROWTH-HUB-API-PLAN.md) (same repo) |
| **ethglobal2026 copy of queue** | `ethglobal2026/PROJECT-BUILD-QUEUE.md` (local) |
| **Full ops monorepo** | Not on GitHub yet; optional private `ethglobal-ops` if cloud clone needed |
| **SMM poster (30-day LinkedIn)** | Private [smm-july2026](https://github.com/helloAbhishekJha/smm-july2026) — [index.html](https://github.com/helloAbhishekJha/smm-july2026/blob/main/index.html) at repo root (373 files) |

**Cursor cloud clone (primary):** `git clone https://github.com/helloAbhishekJha/the-system.git`  
**SMM poster:** `git clone https://github.com/helloAbhishekJha/smm-july2026.git`

**Mac sync:** `/Users/abhishekjha/aiagents/smm/july2026/` → same remote (`git pull` / `git push` after edits). Listed in **the-system** `PROJECT-BUILD-QUEUE.md` next to **11s-ads-portfolio**.

### Quick clone links (build order)

1. [the-system](https://github.com/helloAbhishekJha/the-system.git) — Kanban + Growth Hub  
2. [askagent-smallest](https://github.com/helloAbhishekJha/askagent-smallest.git) — GitLab + Nebius  
3. [dracula-film](https://github.com/helloAbhishekJha/dracula-film.git)  
4. [resumeai-api](https://github.com/helloAbhishekJha/resumeai-api.git)  
5. [base44-give-it-a-glow](https://github.com/helloAbhishekJha/base44-give-it-a-glow.git) (optional)  
6. [nextbeat-ethonline](https://github.com/helloAbhishekJha/nextbeat-ethonline.git)  

**11s portfolio:** [11s-ads-portfolio](https://github.com/helloAbhishekJha/11s-ads-portfolio) · Mac `ethglobal2026/portfolio/11s-ads` · live https://11s-ads.vercel.app  

**Path map (Mac ↔ GitHub, Cloud clone layout):** [mac-github-path-map.md](/cursor/stores/self/docs/mac-github-path-map.md)

**Cloud env (no secrets in git/chat):** [cloud-env-by-repo.md](/cursor/stores/self/docs/cloud-env-by-repo.md)

**Cursor Cloud entry points (`docs/README.md` per repo):** [cursor-cloud-start-here.md](/cursor/stores/self/docs/cursor-cloud-start-here.md) · plan edits on Mac → `the-system/scripts/sync-docs-from-monorepo.sh`

**CapCut:** no repo — `capcut-world-la/plan.md` locally or a `the-system` issue  

## Master index (ethglobal2026 local paths)

| Topic | Path |
| --- | --- |
| Hackathon dates | `HACKATHONS-TODO.md` · `CALENDAR-HACKATHONS-FIRST.md` |
| Priorities | `.system/MERGED-TASK-LIST.md` · `PRIORITIZATION-PROFIT-FIRST.md` |
| All checkboxes | `TASK-LIST.md` |
| Project map | `PROJECT-REGISTRY.md` |

## P0 — BUILD FIRST (System cluster)

### 1. The System (Kanban + APIs)

- **Start:** `docs-GROWTH-HUB-API-PLAN.md` in [the-system](https://github.com/helloAbhishekJha/the-system)
- **Live:** https://the-system-sandy.vercel.app
- **Also:** `.system/MERGED-TASK-LIST.md` (#28) · `TASK-LIST.md` § Growth Hub
- **Deploy:** GitHub → Vercel (Cursor Cloud agent)

### 2. SMM poster (30-day LinkedIn)

- **Repo:** [smm-july2026](https://github.com/helloAbhishekJha/smm-july2026.git) · poster: [index.html](https://github.com/helloAbhishekJha/smm-july2026/blob/main/index.html)
- **Planning (ethglobal2026):** `content-studio/SOCIAL-MEDIA-AUTOMATION.md` · `GROWTH-AND-CONTENT-SYSTEM.md`
- **Wire to:** #1 System / content API (after Kanban APIs ship)

### 3. 11s ads portfolio (maintain)

- **Start:** `portfolio/11s-ads/README.md` · `portfolio/11s-ads/index.html`
- **Live:** https://11s-ads.vercel.app
- **Chroma:** `content-studio/CHROMA-AWARDS-SEASON-2.md`

### 4. Verydemy + Topmate funnel

- **Start:** `CTA-TOPMATE-LINKEDIN.md` · `content-studio/AGOLY-AND-VERYDEMY.md`
- **MERGED:** #8 · Link CTAs from #1 System

## P1 — CONTESTS / LAUNCH (≥10 winners or product)

| # | Item | Due | Winners | Start / links |
| --- | --- | --- | --- | --- |
| 5 | CapCut World LA | Mon 27 Oct 2026 ~12:29 PM IST | 13 | `capcut-world-la/plan.md` · [guidelines](https://contra.com/community/topic/capcutworldlachallenge/guidelines) · `HACKATHONS-TODO.md` |
| 6 | GitLab Transcend | Mon 27 Oct 2026 ~6:30 PM IST | many | `gitlab-transcend-2026/plan.md` · [Devpost](https://gitlab-transcend.devpost.com/) |
| 7 | Nebius × NVIDIA | Thu 30 Oct 2026 night | 38 | `go-smallest/README.md` · `go-smallest/PHASE-2-VOICE-BUILDER.md` · [Devpost](https://nebiusglobalaihackathon.devpost.com/) |
| 8 | Dracula Hunters launch | Fri 31 Oct 2026 | — | `dracula-hunters/LAUNCH-PLAN.md` · `dracula-hunters/DH-VIDEO-SPEND-SEQUENCE.md` (merged #5) |
| 9 | PayPal AI | Thu 13 Nov 2026 ~1:30 AM IST | 23 | `HACKATHONS-TODO.md` § PayPal AI · [Devpost](https://paypalaihackathon.devpost.com/) |
| 10 | Chroma Awards S2 | 7 Jan 2027 | light | `content-studio/CHROMA-AWARDS-SEASON-2.md` · [submit](https://submit.chromaawards.com/) |

## P2 — NIGHTS / WEEKENDS / AUTOMATE

| # | Item | When | Start |
| --- | --- | --- | --- |
| 11 | DSA | nights | `.system/MERGED-TASK-LIST.md` #3 · `education/CRIO-APNI-KAKSHA.md` · [freeCodeCamp Python](https://www.freecodecamp.org/learn) |
| 12 | Job applications | weekends | `job-search/JOB-SEARCH-WLB.md` · `job-search/applications.csv` · follow-ups in `job-search/` |
| 13 | Etsy planner SKU 1 | automate anytime | `.system/MERGED-TASK-LIST.md` #7 · `commerce/PLANNER-CART-LOCAL.md` |
| 14 | Resume AI app | folio | `resume-chat-app/README.md` · `resume-chat-app/SHIPATON-RESUME-PLAN.md` |
| 15 | go-smallest deploy /health | resume + Nebius/GitLab | `go-smallest/README.md` · `go-smallest/main.go` |

## SKIP (<10 winners or blocked) — free time only

- Base44 Challenge (4) — `base44-challenge/plan.md`
- Amazon Dev 2026 (12) — `HACKATHONS-TODO.md` unless ≥80% reuse
- OpenCV AI (~60) — `opencv-ai-competition-2026/plan.md` unless formflow hot
- Learn AI Devpost (3) · Qloo (3) · YouCam (5) — SKIP
- Meta VR Start (20) — PARKED (Roblox/game DAU proof)
- SVGator / invideo / Rive — missed or cancelled

## Workspace note (2026-10-21)

This Project workspace is an empty Cursor tmp repo until **private `the-system`** is cloned with GitHub credentials the cloud agent can use.
