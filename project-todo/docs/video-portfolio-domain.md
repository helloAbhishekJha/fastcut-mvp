# Video portfolio domain (11s-ads / Vercel)

## Current decision (26 Oct 2026)

| Item | Choice |
|------|--------|
| **Public URL for now** | **https://11s-ads.vercel.app** — stay on Vercel default; **no** `abhishekjha.com` subdomain and **no** prominent link from primary personal site yet |
| **Why** | Keep portfolio **separate** from main identity (less jealousy/copying in network); primary domain reserved for later or other use |
| **SEO / AEO / GEO** | **Deferred** until a **dedicated** site/domain plus **real content** (case studies, copy, structure) — ranking needs that layer, not just a reel grid |
| **Future** | Optional **standalone** domain or content property when ready — see [competitor-domains-and-positioning.md](./competitor-domains-and-positioning.md); do not rush merge of PR [#2](https://github.com/helloAbhishekJha/11s-ads-portfolio/pull/2) if it forces `videoads.abhishekjha.com` redirect |

Repo: [helloAbhishekJha/11s-ads-portfolio](https://github.com/helloAbhishekJha/11s-ads-portfolio) · Vercel project: **11s-ads**

---

## Earlier plan (on hold — subdomain on primary domain)

**https://videoads.abhishekjha.com** — recommended in competitor research but **not activating** per decision above.

## Alternates (if you change your mind)

| Subdomain | Pro |
|-----------|-----|
| `motion.abhishekjha.com` | General motion/video brand; less “ads-only”. |
| `watch.abhishekjha.com` | Short, link-in-bio friendly. |
| `reels.abhishekjha.com` | Emphasizes vertical short form; weaker for OTT/long-form. |

**videoads** fits the current mix: 11s performance ads, OTT-style series (e.g. Dracula Hunters), and other video (demos, brand films).

## Your checklist (manual — only when you reverse the hold)

1. **Vercel** → project **11s-ads** → **Settings** → **Domains** → add `videoads.abhishekjha.com` (or another host).
2. **Registrar DNS** → CNAME per Vercel UI.
3. Smoke-test HTTPS and redirects.

Detailed steps: repo file `docs/DOMAIN-SETUP.md`. **Skip until** you want primary-domain or standalone SEO property.

## DM / outreach note

Templates in [dm-outreach-templates.md](./dm-outreach-templates.md) and [youtube-dm-targets-next-week.md](./youtube-dm-targets-next-week.md) still say **https://11s-ads.vercel.app**. After DNS is live, those URLs redirect to **videoads** — no urgent mass edit. Prefer the custom URL in **new** messages and LinkedIn Featured.

## Site scope

Portfolio page categories: **11s Ads**, **Films & OTT**, **Other Work** (filters on the single-page site).

## Separate domain for SEO / AEO / GEO?

**Default for you: no** — keep **`videoads.abhishekjha.com`** (or `motion.` if you rebrand). One personal entity (**Abhishek Jha** + **abhishekjha.com**) is stronger for jobs, VC DMs, and generative search than splitting authority across a second domain.

| Approach | SEO | AEO / GEO (AI answers, citations) |
|----------|-----|-----------------------------------|
| **Subdomain on your name** (`videoads.abhishekjha.com`) | Builds under your root domain; fine for a portfolio | Clear link “this work → this person”; repeat same URL in LinkedIn, GitHub, DMs |
| **Path on main site** (`abhishekjha.com/video` or `/work`) | Slightly better consolidation than subdomain | Same as subdomain if main site has Person/org schema and links to the gallery |
| **New domain** (`something.ai`, keyword `.com`) | Splits links; exact-match domains matter less now | Risky: models may not tie work to **you** unless you bridge heavily from LinkedIn |

**When a separate domain *is* worth it:** a distinct **product** (e.g. Interview Drill), a future **agency** brand not tied to your name, or a **paid media buy** on a memorable short URL — not for a personal video portfolio today.

**Cheap GEO wins (no second domain):** one canonical portfolio URL everywhere; page title + meta that name **you** and the work type; optional `Person` / `CreativeWork` JSON-LD on the portfolio or main site; case-study text (not video-only). Funnel / ebook / Growth Hub can stay on other subdomains or Vercel apps — link **to** the portfolio, don’t duplicate the same gallery on two domains.
