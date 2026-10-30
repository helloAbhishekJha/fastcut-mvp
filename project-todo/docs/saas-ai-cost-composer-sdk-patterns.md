# SaaS AI cost patterns — Composer, SDK, user-picked models

**Source:** [Cursor forum — SDK in SaaS, model choice & pay-per-usage](https://forum.cursor.com/t/sdk-in-a-saas-product-can-customers-pick-the-model-and-pay-per-usage/176778) (30 Oct 2026)  
**Board:** **CC-84** (research) · applies to **CC-83** WhatsPlanner · **CC-78** bookmark inbox · future SaaS  
**Updated:** Fri **30 Oct 2026** (IST)

---

## What the thread describes

A **merchant SaaS** (Shopify/Woo assistant) built with the **Cursor TypeScript SDK**:

- Agents run **on their servers**, with **custom tools** (store read/write).
- End users **never** get Cursor IDE, accounts, or API keys.
- They want:
  1. **Model choice** — merchant picks from a list (e.g. **Composer**, Grok, Claude, GPT, Gemini).
  2. **Billing** — merchant pays **credits per token**, priced at Cursor list rates.

**Open question (no official answer on thread yet):** Is that **ToS-compliant**, or does it count as reselling **“Cursor-powered usage under your account”**? Kevin (May 2025) said embedding SDK in your product stack is intended; the line is **reselling Cursor itself** or passing through **your** Cursor account usage as a metered product.

**Implication for you:** Before shipping **metered Cursor SDK** to customers, get clarity (forum reply, Teams/service account, or commercial agreement). Until then, prefer patterns below that **cut your burn** without ToS risk.

---

## Cost-saving patterns (ideas list)

| Pattern | Who pays | Best for |
|---------|----------|----------|
| **BYOK** | User’s OpenAI/Anthropic/Google key in settings | WhatsPlanner, bookmark inbox — **you pay $0** inference |
| **User picks model** | User key or your credits | Cheap model for **sort/tag/summary**; premium only on demand |
| **Composer / fast model default** | You or user | High-volume **classification** (planner buckets) — use fastest/cheapest allowed |
| **Batch + cache** | You | Same chat exported twice → reuse last AI layout hash |
| **Local-first** | $0 | Regex/rules for dates/links; AI only when user clicks “Organize” |
| **Flat feature price** | Customer | If using Cursor SDK on **your** account: sell “AI organize” as plan tier, **don’t** expose raw token pass-through until ToS clear |
| **Serverless jobs** | You | Nebius-style async for heavy runs; sync path for small sorts |

---

## Apply to **WhatsPlanner (CC-83)**

| Step | Cost-aware design |
|------|-------------------|
| **Extract** | No AI — DOM → JSON |
| **Organize** | Default: **BYOK** + model dropdown (Haiku/Mini → Sonnet only if user selects) |
| **Planner UI** | No AI — drag-drop is free |
| **Export MD** | No AI |
| **Optional v2** | Your backend with **rate limits** + credit packs — only after pricing/ToS model chosen |

**Product copy:** “Bring your own API key — you control model and cost.”

---

## Apply to **AI bookmark inbox (CC-78)**

- Ingress without login can use **rules + embeddings on user key** after first magic-link session.
- Never run unbounded AI on **your** key for anonymous adds.

---

## Research / legal todo

- [ ] **CC-84** — Watch forum thread for Cursor team answer on **per-model + token resale**
- [ ] Read follow-up: [API/SDK Terms (May 2025)](https://forum.cursor.com/t/api-sdk-terms-of-use-question/) — Kevin’s “intended use” vs resell line
- [ ] If building agents: evaluate **Cursor TS SDK** vs direct **provider APIs** for WhatsPlanner v1 (APIs + BYOK = simpler billing)
- [ ] For **FDE/Sapient** interviews: one paragraph — “metered multi-model SaaS with BYOK and task-tier routing”

---

## Links

- [WhatsPlanner plan](/cursor/stores/self/docs/whatsplanner-extension-plan.md)  
- [SaaS ideas backlog](/cursor/stores/self/docs/saas-ideas-workstream.md)  
- Forum: https://forum.cursor.com/t/sdk-in-a-saas-product-can-customers-pick-the-model-and-pay-per-usage/176778
