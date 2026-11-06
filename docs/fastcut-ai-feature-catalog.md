# FastCut AI — feature catalog (Devpost / demo copy)

FastCut MVP ships **33 env-gated AI editing features** plus PayPal HD export. Each capability appears in **AI Feature Studio** when its `ENABLE_*` flag is true; set `false` to hide it entirely during testing.

## Captions & text

| Feature | Env flag | Demo behavior |
|---------|----------|---------------|
| Auto captions | `ENABLE_AUTO_CAPTIONS` | Timed lines from brief or fixtures |
| Karaoke highlight | `ENABLE_KARAOKE_CAPTIONS` | Word-by-word highlight stub on first line |
| Caption emojis | `ENABLE_CAPTION_EMOJIS` | Emoji suffixes on caption text |
| Hashtag suggestions | `ENABLE_HASHTAG_SUGGESTIONS` | Platform hashtag set from brief |
| Multi-language subtitles | `ENABLE_MULTILANG_SUBTITLES` | en / es / hi track list (stub) |

## B-roll & visuals

| Feature | Env flag | Demo behavior |
|---------|----------|---------------|
| B-roll under face | `ENABLE_BROLL_UNDER_FACE` | Lower-third b-roll overlay in preview |
| Stock b-roll slots | `ENABLE_STOCK_BROLL` | Timestamped stock search suggestions |
| GIF inserts | `ENABLE_GIF_INSERTS` | Reaction GIF beat markers |

## Script & hooks

| Feature | Env flag | Demo behavior |
|---------|----------|---------------|
| AI hooks | `ENABLE_AI_HOOKS` | Three scroll-stopping openers |
| Script rewrite | `ENABLE_SCRIPT_REWRITE` | Tighter spoken script from brief |
| CTA lines | `ENABLE_CTA_LINES` | Comment/DM/save CTAs |
| End-card CTA | `ENABLE_END_CARD_CTA` | Closing card headline + button copy |

## Audio cleanup

| Feature | Env flag | Demo behavior |
|---------|----------|---------------|
| Trim silence | `ENABLE_TRIM_SILENCE` | Pipeline step + checkbox |
| Filler-word removal | `ENABLE_FILLER_WORD_REMOVAL` | um/like cut timestamps |
| Voice denoise | `ENABLE_VOICE_DENOISE` | Simulated audio pass + progress |
| Audio normalize | `ENABLE_AUDIO_NORMALIZE` | Simulated LUFS pass + progress |

## Platform & framing

| Feature | Env flag | Demo behavior |
|---------|----------|---------------|
| Reels 9:16 | `ENABLE_REELS_PRESET` | Vertical Instagram framing |
| TikTok vertical | `ENABLE_TIKTOK_PRESET` | TikTok-safe preset |
| YouTube Shorts | `ENABLE_SHORTS_PRESET` | Shorts title-safe preset |
| LinkedIn square | `ENABLE_LINKEDIN_SQUARE_PRESET` | 1:1 feed crop |
| YouTube 16:9 | `ENABLE_YOUTUBE_LANDSCAPE_PRESET` | Landscape publish preset |

## Smart video

| Feature | Env flag | Demo behavior |
|---------|----------|---------------|
| Smart reframe | `ENABLE_SMART_REFRAME` | Speaker tracking box (simulated) |
| Background blur | `ENABLE_BACKGROUND_BLUR` | Blur preview on subject |
| Background remove | `ENABLE_BACKGROUND_REMOVE` | Cutout blend preview |
| Auto chapters | `ENABLE_AUTO_CHAPTERS` | Chapter list from transcript stub |
| Viral moments | `ENABLE_VIRAL_MOMENTS` | Scored highlight windows |
| Beat-sync cuts | `ENABLE_BEAT_SYNC_MARKERS` | Beat-aligned cut timestamps |
| Punch-in zoom | `ENABLE_PUNCH_IN_ZOOM` | Emphasis word zoom markers |

## Brand & export

| Feature | Env flag | Demo behavior |
|---------|----------|---------------|
| Color grade / LUT | `ENABLE_COLOR_GRADE_LUT` | Preset look names |
| Lower thirds | `ENABLE_LOWER_THIRDS` | Name/title overlay |
| Brand template | `ENABLE_BRAND_TEMPLATE` | Logo safe-zone chip |
| Auto thumbnail | `ENABLE_AUTO_THUMBNAIL` | Top 3 frames with scores |
| Intro/outro bumpers | `ENABLE_INTRO_OUTRO_BUMPER` | Stinger template names |

## Monetization (unchanged)

| Feature | Env flag | Demo behavior |
|---------|----------|---------------|
| HD export unlock | `ENABLE_HD_EXPORT` + PayPal / demo | $5 sandbox or demo instant unlock |
| PayPal checkout | `ENABLE_PAYPAL` | Orders v2 when not in demo mode |

## One-liner for judges

**FastCut AI** packs 33 toggleable AI editing tools—captions, b-roll, hooks, platform presets, audio cleanup, and brand overlays—behind a single upload + brief, with **PayPal** unlocking HD export. Flip any `ENABLE_*` flag off when a path misbehaves; the UI stays clean.
