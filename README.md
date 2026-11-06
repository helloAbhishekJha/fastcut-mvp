# FastCut MVP (v0.2.1)

Minimal **AI short-form video editor** for the PayPal hackathon — a vertical slice with a broad **AI Feature Studio** (demo/fixture pipeline), not production parity with FastCut.

## Judge / tester — 60-second path

1. Open the app (local [http://localhost:4418](http://localhost:4418) or your hosted URL below).
2. Confirm badges: **Demo mode**, **33 AI features** (with default `.env.example`).
3. **Upload** any short video (phone clip is fine).
4. Optional: one-line brief → click **Run AI pipeline** (~2s simulated analyze).
5. Scroll to **AI Feature Studio** — expand categories, flip a toggle, confirm preview overlays (b-roll, blur, lower third).
6. **Continue to export** → **Download preview (watermarked)**.
7. **Unlock HD export — $5** → in demo mode, instant unlock → **Download HD (original file)**.

Full flag reference: [`docs/fastcut-ai-feature-catalog.md`](docs/fastcut-ai-feature-catalog.md) (Devpost copy). Summary tables below.

## Run locally

```bash
git clone https://github.com/helloAbhishekJha/fastcut-mvp.git
cd fastcut-mvp
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:4418](http://localhost:4418).

Production build:

```bash
npm run build
npm start
```

## Deploy (hosted demo)

### Vercel (recommended)

1. Import [helloAbhishekJha/fastcut-mvp](https://github.com/helloAbhishekJha/fastcut-mvp) in Vercel.
2. Framework preset: **Next.js** (uses root `vercel.json`).
3. **Environment variables:** copy all keys from `.env.example` (defaults are demo-safe). Minimum for judges:
   - `NEXT_PUBLIC_DEMO_MODE=true`
   - `ENABLE_PAYPAL=false`, `ENABLE_FFMPEG=false`, `ENABLE_OPENAI=false`
   - leave all `ENABLE_*` AI flags `true` unless trimming the demo surface.
4. Deploy → use the `*.vercel.app` URL in Devpost / YouTube description.

### Render

1. New **Blueprint** → connect this repo (uses root `render.yaml`).
2. Service sets demo env vars automatically; adjust in the Render dashboard if needed.
3. Health check: `GET /api/config`.
4. Note: `npm start` binds to `PORT` (Render) or **4418** locally.

After deploy, paste the public URL at the top of your test pass checklist.

## Feature flags

Flags live in `src/lib/feature-flags.ts` and [`src/lib/ai-feature-definitions.ts`](src/lib/ai-feature-definitions.ts). The client loads them from `GET /api/config` (includes `aiFeatureCatalog` metadata). Set `ENABLE_*=false` to **hide** that feature and skip related API output — no broken half-UI.

### Infrastructure

| Variable | Default (demo) | Effect |
|----------|----------------|--------|
| `NEXT_PUBLIC_DEMO_MODE` | `true` | Skip PayPal; fake successful checkout |
| `ENABLE_PAYPAL` | `false` | Sandbox Orders v2 + PayPal JS buttons |
| `ENABLE_OPENAI` | `false` | LLM caption/hook path (studio still uses fixtures when off) |
| `ENABLE_FFMPEG` | `false` | Longer analyze ticks vs simulated progress |
| `ENABLE_HD_EXPORT` | `true` | HD export + $5 unlock flow |

### AI editing (33 flags)

| Variable | Default | Feature |
|----------|---------|---------|
| `ENABLE_AUTO_CAPTIONS` | `true` | Timed caption lines |
| `ENABLE_KARAOKE_CAPTIONS` | `true` | Word highlight stub |
| `ENABLE_CAPTION_EMOJIS` | `true` | Emoji on captions |
| `ENABLE_HASHTAG_SUGGESTIONS` | `true` | Hashtag sets |
| `ENABLE_MULTILANG_SUBTITLES` | `true` | Extra subtitle tracks (stub) |
| `ENABLE_BROLL_UNDER_FACE` | `true` | B-roll under speaker |
| `ENABLE_STOCK_BROLL` | `true` | Stock clip slots |
| `ENABLE_GIF_INSERTS` | `true` | GIF beat markers |
| `ENABLE_AI_HOOKS` | `true` | Hook openers |
| `ENABLE_SCRIPT_REWRITE` | `true` | Tighter script variant |
| `ENABLE_CTA_LINES` | `true` | CTA copy lines |
| `ENABLE_END_CARD_CTA` | `true` | End-card generator |
| `ENABLE_TRIM_SILENCE` | `true` | Silence trim in pipeline |
| `ENABLE_FILLER_WORD_REMOVAL` | `true` | Um/like cut list (simulated) |
| `ENABLE_VOICE_DENOISE` | `true` | Denoise pass (simulated) |
| `ENABLE_AUDIO_NORMALIZE` | `true` | Normalize pass (simulated) |
| `ENABLE_REELS_PRESET` | `true` | Instagram Reels 9:16 |
| `ENABLE_TIKTOK_PRESET` | `true` | TikTok vertical |
| `ENABLE_SHORTS_PRESET` | `true` | YouTube Shorts |
| `ENABLE_LINKEDIN_SQUARE_PRESET` | `true` | LinkedIn 1:1 |
| `ENABLE_YOUTUBE_LANDSCAPE_PRESET` | `true` | YouTube 16:9 |
| `ENABLE_SMART_REFRAME` | `true` | Speaker tracking (simulated) |
| `ENABLE_BACKGROUND_BLUR` | `true` | Portrait blur preview |
| `ENABLE_BACKGROUND_REMOVE` | `true` | Cutout preview (simulated) |
| `ENABLE_AUTO_CHAPTERS` | `true` | Chapter markers |
| `ENABLE_VIRAL_MOMENTS` | `true` | Viral moment scores |
| `ENABLE_BEAT_SYNC_MARKERS` | `true` | Beat-sync cut points |
| `ENABLE_PUNCH_IN_ZOOM` | `true` | Emphasis zoom markers |
| `ENABLE_COLOR_GRADE_LUT` | `true` | LUT preset list |
| `ENABLE_LOWER_THIRDS` | `true` | Lower-third overlay |
| `ENABLE_BRAND_TEMPLATE` | `true` | Brand safe-zone overlay |
| `ENABLE_AUTO_THUMBNAIL` | `true` | Top 3 frame picks |
| `ENABLE_INTRO_OUTRO_BUMPER` | `true` | Intro/outro templates |

Dev-only hints when a flag is off: `npm run dev` sets `showDevHints` via `/api/config`.

## API

- `GET /api/config` — all flags + catalog
- `POST /api/ai/studio` — fixture pipeline payload (respects flags)
- `POST /api/ai/suggestions` — legacy captions/hooks endpoint
- PayPal: `POST /api/paypal/create-order`, `POST /api/paypal/capture-order`

## Scripts

- `npm run dev` — port **4418**
- `npm run build` / `npm start` — production (respects `PORT` on hosts like Render)

## Stack

Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui.
