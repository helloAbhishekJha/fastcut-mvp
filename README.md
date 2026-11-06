# FastCut MVP

Minimal **AI short-form video editor** for the PayPal hackathon — a vertical slice inspired by FastCut, not feature parity.

## Demo in 30 seconds

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:4418](http://localhost:4418), upload any video file, click **Analyze**, then **Export**. Demo mode skips PayPal and unlocks HD with one click.

## Feature flags

All flags are read from `.env.local` at build/runtime. The client loads them from `GET /api/config`. Set any flag to `false` to hide that path in the UI and skip related API work.

| Variable | Default (demo) | Effect |
|----------|----------------|--------|
| `NEXT_PUBLIC_DEMO_MODE` | `true` | Skip PayPal; fake successful checkout |
| `ENABLE_PAYPAL` | `false` | Real sandbox Orders v2 + PayPal JS buttons |
| `ENABLE_OPENAI` | `false` | LLM caption/hook suggestions vs fixtures |
| `ENABLE_FFMPEG` | `false` | Real trim pipeline vs simulated progress |
| `ENABLE_HD_EXPORT` | `true` | Show HD export + $5 unlock flow |
| `ENABLE_AUTO_CAPTIONS` | `true` | Auto-caption step, preview list, and `/api/ai/suggestions` captions |
| `ENABLE_CAPTION_EMOJIS` | `true` | Emoji decoration on caption lines (fixtures + OpenAI) |
| `ENABLE_BROLL_UNDER_FACE` | `true` | B-roll under-speaker overlay + edit toggle |
| `ENABLE_AI_HOOKS` | `true` | Hook suggestions from AI/fixtures |
| `ENABLE_TRIM_SILENCE` | `true` | Silence-trim checkbox and analyze simulation |
| `ENABLE_REELS_PRESET` | `true` | Reels 9:16 preset button and default framing |

In local dev (`npm run dev`), disabled AI features show a small “Disabled via env” hint. Production builds omit those hints.

Implementation: [`src/lib/feature-flags.ts`](src/lib/feature-flags.ts).

Copy `.env.example` to `.env.local` and toggle flags without code changes.

## PayPal (sandbox)

- `POST /api/paypal/create-order` — one-time **$5 USD** HD export unlock
- `POST /api/paypal/capture-order` — capture after buyer approval
- Set `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, and `NEXT_PUBLIC_PAYPAL_CLIENT_ID` from [PayPal Developer](https://developer.paypal.com/) sandbox apps.

## What's real vs stubbed

| Area | MVP behavior |
|------|----------------|
| Upload / preview | Browser `File` + `<video>` |
| Analyze progress | Simulated unless `ENABLE_FFMPEG=true` |
| Silence trim | UI + message only (no ffmpeg.wasm bundled yet); off with `ENABLE_TRIM_SILENCE=false` |
| Captions / hooks | Fixture JSON; optional OpenAI when keyed; per-flag disable |
| B-roll under face | Preview overlay + toggle (placement stub) |
| Preview export | Watermarked PNG frame from video |
| HD export | Downloads **original uploaded file** after unlock |

## Scripts

- `npm run dev` — port **4418**
- `npm run build` / `npm start` — production

## Stack

Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui.

## Devpost angle

**PayPal:** monetize HD export with sandbox checkout. **AI:** one-line brief drives caption and hook suggestions (fixtures always work offline).
