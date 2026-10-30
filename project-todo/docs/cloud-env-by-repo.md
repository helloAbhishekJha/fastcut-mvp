# Cloud environment variables by repo

**Rules:** Do **not** paste secrets into chat or commit `.env` to GitHub. In Cloud, create **`.env.local`** or **`.env`** at the **repo root** (same folder as `.env.example`). Copy values from Mac or **Vercel → Project → Settings → Environment Variables**.

## No `.env` needed (static / open in browser)

| Repo | Cloud action |
|------|----------------|
| **smm-july2026** | Open `index.html` or `npx serve .` — **no env** |
| **11s-ads-portfolio** | Static — **no env** |
| **capcut-seedance** | Assets only — **no env** for viewing |
| **dracula-film** | Media/repo — **no app env** unless you add a build step |
| **Base44 / CapCut contests** | Done in **browser** (Base44.com, CapCut) — not in these repos |

## the-system — yes, if you run API / Mongo / agents

Copy from Mac `the-system/.env` or **Vercel (the-system-sandy)**. Template: `the-system/.env.example`.

| Variable | Required? | Notes |
|----------|-----------|--------|
| `MONGODB_URI` | **Yes** for real app/data | Atlas URI — same as production if you want live tasks |
| `OPENAI_API_KEY` | For AI features | Or Anthropic/Gemini below |
| `ANTHROPIC_API_KEY` | Optional | Failover chain in example |
| `GEMINI_API_KEY` | Optional | |
| `EMERGENT_LLM_KEY` / `ROCKET_LLM_API_KEY` | Optional | Only if you use those |
| `WORKER_SECRET` | If cron/worker | Match Vercel if using worker |
| `SYSTEM_ACCESS_TOKEN` | Optional | Locks dashboard in prod |

**Cloud:** clone `the-system` → `cp .env.example .env.local` → paste values locally on VM → `npm i` → `npm run dev`.

**UI-only / no DB:** skip env for frontend-only edits; full System usually **needs `MONGODB_URI`**.

## go-smallest / askagent-smallest — minimal

| Variable | Notes |
|----------|--------|
| `PORT` | Optional (default 8080) |

No API keys in repo for basic `/health`. Voice/LLM: see `go-smallest/VOICE-AND-AGENTS.md` on Mac monorepo.

## resumeai-api

Use `.env.example` → `.env.local`:

| Variable | Required? |
|----------|-----------|
| `OPENAI_API_KEY` | **Yes** for `/api/craft` |
| `LLM_PROVIDER=openai` | Yes |
| `OPENAI_SCORE_MODEL` / `OPENAI_CRAFT_MODEL` | Defaults in example |
| `POSTGRES_URL` | Optional |

## resume-chat-app (Expo in Cloud)

| Variable | Cloud dev |
|----------|-----------|
| `EXPO_PUBLIC_RC_MOCK=true` | **Set this** — no RevenueCat keys |
| `EXPO_PUBLIC_API_URL` | Optional — empty = local templates |
| `EXPO_PUBLIC_RC_*` | Skip unless real device build |

## nextbeat-app

Skip in Cloud unless on Hedera again — see `nextbeat-app/.env.example`.

## GitLab Transcend / Nebius

Env not in planning repos. Add when coding: `GITLAB_TOKEN`, Nebius dashboard keys → `.env.local` in submission repo.

## Where to paste in Cursor Cloud

1. Open the **cloned repo** in Cloud.  
2. **Settings → Environment variables** (if offered) **or** **`.env.local`** at repo root.  
3. Paste **only** the block for **that** repo.  
4. Confirm **`.env*` is in `.gitignore`** before any commit.

**Production values:** Vercel → **the-system** → **Settings → Environment Variables** (do not screenshot into public channels).

## Minimum paste set (current P0 week)

1. **smm-july2026** — nothing  
2. **11s-ads-portfolio** — nothing  
3. **the-system** — **`MONGODB_URI` + one LLM key** (`OPENAI_API_KEY` or Vercel equivalent)

Narrow further once Cloud goal is **HTML-only** vs **`npm run dev` on the-system**.
