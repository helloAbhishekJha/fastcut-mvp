# WhatsPlanner — WhatsApp Chrome extension

**Board:** **CC-83**  
**Captured:** Fri **30 Oct 2026** (IST)

---

## Product vision (your spec)

**WhatsPlanner** — **Chrome extension** for **WhatsApp Web**:

1. **Pull** chats / threads (or selected messages) from WhatsApp in the browser  
2. **Organize with AI** — topics, tasks, contacts, summaries (you define taxonomy later)  
3. **Planner page** — single view to **drag-and-drop** reorder groups, cards, or sections  
4. **Export** — **Markdown** (and optionally copy to Notion/Obsidian later)

---

## Why on the todo

- You live on **WhatsApp** for job, clients, family — inbox chaos → structured plans
- Strong **pre-hire** story: multi-person workflow (manual copy from WA → notes) → one extension
- Overlap with **CC-78** bookmark inbox (links) — WhatsPlanner is **WA-native**; may merge or stay separate

---

## MVP scope (2-week sketch)

| Layer | v1 |
|-------|-----|
| **Extension** | Manifest V3 · content script on `web.whatsapp.com` · minimal permissions |
| **Extract** | Selected chat or date range → normalized JSON |
| **AI** | **BYOK default** — user picks model (cheap for sort/tag, premium optional) · see [SaaS AI cost patterns](/cursor/stores/self/docs/saas-ai-cost-composer-sdk-patterns.md) · avoid burning **your** API key on every export |
| **UI** | Extension side panel or `chrome-extension://` full page — **drag-drop** lists |
| **Export** | Download `.md` with headings per group + metadata |
| **Auth** | Local-only v1; optional sync v2 |

**Out of v1:** Mobile WA · multi-device sync · team sharing · auto-send messages

---

## Risks / constraints

- **WhatsApp ToS** — unofficial clients/scraping can break; prefer **user-initiated export** from visible DOM, document limitation  
- **Privacy** — process locally or disclose if cloud AI; no logging others’ messages without consent  
- **Chrome Web Store** review — clear privacy policy + single purpose

---

## Build hooks

- [ ] **CC-83** — Repo name `whatsplanner` · spike DOM read on WA Web  
- [ ] Reuse **CC-28** / **the-system** if backend needed  
- [ ] **Chrome dev ac** trial from purchases backlog when building  
- [ ] Rank in **CC-68** vs bookmark inbox · AstroTalk alt
- [ ] **CC-84** — Cursor SDK / Composer billing pattern (forum thread) before any hosted AI credits

---

## Timeline

- Plan now · build **after Sapient (11 Nov)** unless promoted  
- [Build playlist](/cursor/stores/self/docs/saas-ideas-workstream.md) for extension/AI lessons

---

## Related

- [SaaS ideas workstream](/cursor/stores/self/docs/saas-ideas-workstream.md) · [AI bookmark inbox](/cursor/stores/self/docs/saas-idea-ai-bookmark-inbox.md)
