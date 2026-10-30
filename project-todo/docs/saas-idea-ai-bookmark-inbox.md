# SaaS idea — AI bookmark inbox (links + comments)

**Board:** **CC-78** (under **CC-66** SaaS workstream)  
**Captured:** Thu **29 Oct 2026** (IST)

---

## One-line pitch

Send **links and short comments** (email, webhook, share target, etc.) — **AI sorts/tags** into your idea library **without logging in to add**. **Deletes require login** so the inbox cannot be wiped anonymously.

---

## Core requirements (your words)

| Need | Detail |
|------|--------|
| **Capture** | You send links + optional comment; no app login required to **add** |
| **Sort** | AI auto-categorizes (topic, project, urgency, duplicate detection) |
| **Safety** | **No delete** without authenticated session (only you can remove) |
| **Use case** | Ideas, references, SaaS seeds, hackathon links — replaces scattered bookmarks + GSheet rows |

---

## MVP slice (when you build — after Sapient unless promoted)

- [ ] **Ingress:** one channel v1 (e.g. dedicated email address **or** Telegram bot **or** bookmarklet → API)
- [ ] **Store:** link URL + comment + AI tags + created-at · immutable append-only from public ingress
- [ ] **AI:** classify into folders/tags (reuse LLM via cheap API); optional embed for “similar idea” search
- [ ] **Auth:** magic link or passkey **only** for read-all + **delete/edit** UI
- [ ] **Out of v1:** multi-user teams, public galleries, social sharing

**Effort guess:** **M** (2-week slice if stack reused from **CC-28** / **Growth Hub**)

---

## Why it’s on the todo

- Stops losing links across YouTube, GDrive, chat — pairs with [SaaS ideas workstream](/cursor/stores/self/docs/saas-ideas-workstream.md) and your Excel list.
- Strong **pre-hire** story: personal **knowledge ops** agent ([pre-hire lever](/cursor/stores/self/docs/pre-hire-project-lever.md)).
- Overlap: **CC-15** Growth Hub / content calendar — same “capture → sort → act” spine; merge repos if you pick this as **CC-68** winner.

---

## Next steps (board)

- [ ] **CC-78** — Spec validated · pick ingress channel · spike after **CC-68** ranks this vs other sheet ideas
- [ ] **CC-67** — Still paste **GDrive** link so Excel and this spec stay in sync

---

## Related

- [SaaS ideas tracker](/cursor/stores/self/docs/saas-ideas-workstream.md) · [master todo](/cursor/stores/self/docs/active-todo-with-why.md)
