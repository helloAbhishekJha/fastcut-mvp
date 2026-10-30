# Forward Deployed Engineer (FDE) — role prep (Abhishek Jha)

**Task:** CC-63  
**Trend:** FDE hiring expanded beyond Palantir into **AI labs and startups** (Anthropic, OpenAI-style motions, enterprise AI vendors) — customer-embedded engineers who **scope, integrate, ship, and hand off playbooks**.  
**Parallel tracks:** CC-49 Sapient Codility (vendor SWE) · CC-5 job applications · CC-31 MLOps/LLMOps

**Last updated:** 28 Oct 2026 (IST)

---

## 1. What an FDE is (and is not)

| | **FDE** | **Typical product SWE** | **Consulting / SI** |
|--|---------|-------------------------|---------------------|
| **Where** | **Inside customer context** (calls, their stack, their data boundaries) | Internal roadmap | Slide + handoff |
| **Goal** | **Working production** in *their* environment + adoption | Feature in *your* product | Statement of work |
| **Success** | Go-live, integrations, stakeholder trust, **playbook** for next hire | Metrics, releases | Billing hours |
| **Interview** | **Decomposition**, client sim, practical code, deployment design | LeetCode + generic system design | Varies |

**Not fortune telling:** FDE roles care about **delivery and integration** — not promising client ROAS. Same honesty rule as your 11s site.

---

## 2. Why FDE is trending (2025–26)

- **Enterprise AI** needs people who can **wire LLMs/agents into SAP, Salesforce, data lakes, on-prem** — not only build demos.
- Job posts emphasize **integrations (53/88)**, **Python (53/88)**, **customer-facing (46/88)**, **ambiguity (47/88)**, **stakeholders (49/88)** — [FDE Field JD analysis](https://fdefield.com/blog/what-fde-jds-actually-ask) (Aug 2026 sample).
- AI-specific JDs add **RAG, evals, agents, MCP/tool use, observability, security/latency/cost** — [FDE Academy](https://fde.academy/blog/forward-deployed-engineer-interview-questions), [Learn AI Engineering FDE guide](https://learnaiengineering.dev/fde/interview).

**India / remote:** Many FDE posts are **US/EU HQ** with travel; also **remote-first AI startups** and **GCC captives** building “forward deployed” pods. Filter LinkedIn for: `Forward Deployed Engineer`, `Applied AI Engineer`, `Solutions Engineer` (technical), `Field Engineer` + LLM.

---

## 3. What JDs actually ask (prep checklist)

### Must-have (name the skill on resume + stories)

- [ ] **Python** (primary) — scripts, APIs, data wrangling, agent glue  
- [ ] **TypeScript** (secondary) — many customer UIs and Node integrations  
- [ ] **SQL** + basic data modeling  
- [ ] **REST/APIs**, auth (OAuth, API keys, SSO concepts)  
- [ ] **Integrations** — CRM, ticketing, webhooks, ETL-ish flows  
- [ ] **Cloud** — one of AWS/GCP/Azure: deploy, IAM-ish thinking, secrets  
- [ ] **Production debugging** — logs, retries, idempotency, failure modes  
- [ ] **Customer communication** — discovery, scoping, pushback, exec summaries  

### AI FDE add-ons (your lane)

- [ ] **LLM apps:** prompt/context design, tool calling, **MCP** servers  
- [ ] **RAG:** chunking, retrieval, when *not* to RAG  
- [ ] **Evals:** golden sets, regression, human-in-the-loop  
- [ ] **Agents:** orchestration, guardrails, cost/latency tradeoffs  
- [ ] **Observability:** tracing (OpenTelemetry), logging prompts/outputs safely  
- [ ] **Security/privacy:** PII, retention, customer data boundaries  

### Nice differentiators (you already have)

- **Shipped consumer/product work** (Play apps, LightningGen) → “I ship under real constraints.”  
- **Agent SDK / BDK-style bots** → MCP, sessions, hosted deploy — maps to **custom agents** FDE motions.  
- **Video/creative pipeline** → weaker for core FDE unless role is **media/gen-AI vertical** — use as **breadth**, not lead.  

---

## 4. Interview loop (typical rounds)

| Round | Signal | Prep |
|-------|--------|------|
| Recruiter | Why FDE, travel, level | 2-min **Why FDE** + one deployment story |
| Coding (practical) | APIs, JSON, parsing, small features | Not only LeetCode — **CC-8** medium + **practical** drills below |
| **Decomposition / open case** | Vague brief → staged plan | **Highest weight** — framework §5 |
| Client simulation | Scope creep, security objection, unhappy exec | Role-play out loud |
| Deployment / system design | Identity, data, network, cost, on-prem | Agent + RAG architecture under constraints |
| Unfamiliar codebase | Add feature in 45–60 min | Clone small OSS, one afternoon |
| Behavioral / values | Ambiguity, ownership, disagreement | 5 STAR stories §7 |

Sources: [Learn AI Engineering — FDE interview 2026](https://learnaiengineering.dev/fde/interview) · [Anthropic FDE guide pattern](https://www.chillinterview.com/learn/interview-guides/anthropic-forward-deployed-engineer-fde-interview-guide) (public prep summaries).

---

## 5. Decomposition framework (memorize — use out loud)

Use on any vague prompt: *“Customer wants AI on their workflow.”*

```
TODAY?         Current workflow + pain (who does what manually?)
WHO / HOW MUCH? Users, volume, locales, SLAs
WHAT?          Data sources, integrations, systems of record
HOW FAR?       Read-only assist → recommend → act (with approvals)
BOUNDARIES?    Failure modes, security, latency, cost, compliance
PLAN           POC (2 wk) → pilot (1 env) → production + playbook
```

Practice timers: **15 min** talk-through, no code. [Forward Deployed Prep — decomposition module](https://forwarddeployedprep.com/interview/final-week/module-01-fde-problem-decomposition).

**Example prompt (self-drill):**  
*“Retail brand wants AI to answer product questions on WhatsApp using their catalog PDFs and Shopify orders.”*  
→ Discovery questions → RAG vs fine-tune → human handoff → OAuth to Shopify → eval set from top 50 tickets → rollout.

---

## 6. Map your projects → FDE stories

| Your asset | FDE story angle |
|------------|-----------------|
| **Agent SDK / BDK agents** (sessions, MCP, deploy) | Built **production-shaped** agent host; integrated tools; handled auth and ops |
| **LightningGen / shipped Play apps** | End-to-end delivery, latency, user-facing reliability |
| **Resume AI / askagent-smallest** | Scoped POC, API design, customer-problem framing |
| **Hackathons (Nebius, etc.)** | Fast integration under deadline — say what **you** owned vs demo |
| **11s / video portfolio** | Only for **creative AI** or **marketing tech** FDE roles — otherwise one line |
| **Study Glows / MLOps (CC-31)** | Pairs with **evals, pipelines, monitoring** talking points |

**Resume headline options (pick one):**  
- *AI product engineer · agents, integrations, shipped apps — interested in forward-deployed / applied AI roles*  
- *Applied AI engineer · LLM tools, MCP, production agents · customer-facing delivery*

**Bullet pattern:**  
`Scoped [ambiguous customer problem] → integrated [systems] → shipped [measurable outcome: time saved, error rate, go-live date] → documented playbook for [next team].`

---

## 7. Five STAR stories to draft (fill in numbers)

1. **Ambiguity:** Requirement changed mid-project — how you re-scoped.  
2. **Integration pain:** API/auth/data mismatch — how you unblocked.  
3. **Production fire:** Something broke live — debug + fix + prevent recurrence.  
4. **Stakeholder pushback:** “We need it tomorrow” — tradeoffs you negotiated.  
5. **Playbook:** Something you wrote so the *next* person could repeat the work.

Store drafts in Mac `job-search/` when you write them; link from CC-7 resume v2.

---

## 8. Practice questions (rotate daily on phone)

### Decomposition (1/day, voice note)

- Design AI assist for **internal IT helpdesk** (Confluence + Jira).  
- **Bank** wants document Q&A on policies — on-prem only.  
- **D2C brand** wants catalog chatbot + order status — Shopify + WhatsApp.

### Practical coding (30–45 min, Python)

- Parse messy CSV → validate → POST to webhook with retries.  
- Wrap an OpenAI/Claude call with **timeout, retry, structured JSON** output.  
- Small **FastAPI** route: auth header + rate limit stub.

### System design (whiteboard notes)

- RAG for **10k PDFs** — ingestion, update strategy, eval.  
- **Agent** that files tickets — tool boundaries, human approval step.  
- **Multi-tenant** SaaS: customer A must never see customer B’s embeddings.

### Client simulation (5 min aloud)

- “Legal says we can’t send data to your cloud.”  
- “CEO wants full autonomy by Friday.”  
- “Your model hallucinated in the demo — deal is at risk.”

Full question banks: [FDE Academy guide](https://fde.academy/blog/forward-deployed-engineer-interview-questions) · [Learn AI Engineering — 30 questions](https://learnaiengineering.dev/fde/interview).

---

## 9. Four-week prep plan (fits CC-5 / CC-8 / CC-31)

| Week | Focus | Hours (~6–8/wk) |
|------|--------|-----------------|
| **1** | Read this doc + 3 decomposition talk-throughs + resume bullets §6 | 2h decomposition, 2h resume, 2h CC-8 |
| **2** | Practical Python/API labs + one OSS “unfamiliar repo” feature | 4h code, 2h CC-31 eval/RAG module |
| **3** | Deployment design (3 prompts §8) + client sim role-play | 3h design, 2h sim, 2h agent/MCP demo polish |
| **4** | Mock loop (record yourself 45 min case + 30 min behavioral) + apply to 5 FDE-titled roles | Applications tied to **CC-5** |

**Daily phone (15 min):** one decomposition prompt OR one behavioral story rehearsed.

**Do not drop:** CC-49 Sapient prep if invite arrives — overlap is **Python + practical**, not full FDE case load.

---

## 10. Where to apply (search strings)

LinkedIn / Wellfound / company sites:

- `Forward Deployed Engineer`  
- `Forward Deployed Software Engineer`  
- `Applied AI Engineer` + enterprise  
- `Custom Agents` + customer  
- `Solutions Architect` + **Python** + **LLM** (verify hands-on coding)

**Tier A (AI-native FDE):** Anthropic FDE motions, OpenAI solutions engineering (title varies), Harvey, Glean field roles, Databricks field engineering (data + AI), Palantir (classic FDE).

**Tier B (India / hybrid):** Enterprise SaaS with **implementation engineer** + AI feature; GCC **customer engineering** pods; startups copying Palantir job titles ([Tacto](https://fdefield.com/blog/what-fde-jds-actually-ask)-style “first FDE writes the playbook”).

**Filter out:** Pure sales SE with no coding · “FDE” that is only LeetCode hard without customer rounds.

---

## 11. CC-63 checklist

- [ ] Draft **Why FDE** (200 words) + **Why not pure SWE** (100 words)  
- [ ] Add **FDE-titled** section to resume (CC-7) using §6 bullets  
- [ ] Complete **3 decomposition** voice recordings  
- [ ] One **MCP or agent demo** repo README framed for **customer deployment** (not hackathon only)  
- [ ] Apply **5** roles with FDE / Applied AI in title (log in `job-search/applications.csv` on Mac)  
- [ ] Optional: cert line from CC-37 (AIOps/LLMOps) under skills — supports AI FDE JDs  

---

## 12. Sources

| Resource | URL |
|----------|-----|
| What FDE JDs ask (phrase counts) | https://fdefield.com/blog/what-fde-jds-actually-ask |
| FDE interview questions + 4-week plan | https://fde.academy/blog/forward-deployed-engineer-interview-questions |
| FDE interview 2026 (rounds + decomposition) | https://learnaiengineering.dev/fde/interview |
| Anthropic FDE interview pattern (prep site) | https://www.chillinterview.com/learn/interview-guides/anthropic-forward-deployed-engineer-fde-interview-guide |
| Problem decomposition module | https://forwarddeployedprep.com/interview/final-week/module-01-fde-problem-decomposition |
| Your Codility track (overlap: Python) | [sapient-codility-practice.md](./sapient-codility-practice.md) |
| Weekly job rhythm | [workflows/weekly-rhythm.md](../workflows/weekly-rhythm.md) |

---

**Related:** CC-5 · CC-7 · CC-8 · CC-31 · CC-49 · [project-context.md](./project-context.md)
