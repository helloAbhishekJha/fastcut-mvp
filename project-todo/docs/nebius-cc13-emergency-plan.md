# Nebius × NVIDIA — emergency triage (CC-13)

**Deadline:** **Fri 30 Oct 2026, ~10:30 PM IST** *(30 Oct 10:00 AM PDT)* · [Devpost](https://nebiusglobalaihackathon.devpost.com/)

### Timezone (read this once)

Devpost uses **US Pacific (PDT)**, not IST. **You do not get an extra calendar day.**

| Devpost (official) | Your time (IST) |
|--------------------|-----------------|
| **Thu/Fri 30 Oct 2026, 10:00 AM PDT** | **Fri 30 Oct 2026, ~10:30 PM IST** *(same calendar day in India)* |

So **Oct 30 in California morning = Oct 30 in India late evening** — **not** Oct 31. Plan to submit **before ~10:30 PM IST on Friday 30 Oct**. Trust the **countdown timer** on Devpost while logged in.  
**Updated:** Thu **29 Oct 2026** (IST)

---

## You do **not** need a paid “Nebius plan” first

Judging requires:

1. **Nebius Token Factory** *or* **Nebius AI Cloud** (signup + API — hackathon participants usually use **Token Factory credits / onboarding**, not a large prepaid plan).
2. At least one **NVIDIA open-source model** (e.g. **Nemotron**) **called from your project** on that infra.
3. **Public OSS repo** + README · **working demo URL** · **≤3 min demo video** (YouTube).

Repo target: [askagent-smallest](https://github.com/helloAbhishekJha/askagent-smallest) · track: **Best Apps & Agents** or **Coding & Agentic Engineering**.

---

## Honest capacity

| Situation | Recommendation |
|-----------|------------------|
| **No Nebius Token Factory account by Fri ~2 PM IST** | **Skip submit** — your own [contest todo](/cursor/stores/self/docs/contest-todo-2026-10-25.md) already says *skip if no skeleton*. Protect **Sapient (11 Nov)**. |
| **Account + API key working today (29 Oct)** | **Thin vertical slice only** (~12–16h total per [time estimates](/cursor/stores/self/docs/todo-time-estimates.md)) — not a new product. |
| **Partial (API works, no polish)** | Submit **minimum**: one endpoint/agent path + screen recording + README — still better than zero if demo URL works. |

---

## If you go for it — order of operations

### Today (29 Oct) — unblock infra (2–4h)

- [ ] Register / confirm [Devpost](https://nebiusglobalaihackathon.devpost.com/) entry
- [ ] Create **Nebius Token Factory** account · open hackathon **Resources** / Discord for **credit** or onboarding link
- [ ] Generate API access · store keys in repo-root **`.env.local`** only ([cloud-env](/cursor/stores/self/docs/cloud-env-by-repo.md))
- [ ] Clone [askagent-smallest](https://github.com/helloAbhishekJha/askagent-smallest.git) on Mac (`~/aiagents/etiotsmallest` or fresh clone)
- [ ] **Smoke test:** one HTTP request to **Nemotron** (or chosen NVIDIA OSS model) via Token Factory — log response in README

**Stop line:** If smoke test fails by **Fri 2 PM IST**, cancel build and skip submit.

### Fri 30 Oct — ship + submit (6–10h)

- [ ] Smallest user-visible demo (chat or `/health` + one agent turn) **running on Nebius-backed inference**
- [ ] Public GitHub · MIT/Apache license visible · README: setup + “how we use Nemotron + Token Factory”
- [ ] Deploy demo URL (Nebius Serverless Endpoints **or** local tunnel only if rules allow — prefer hosted URL per Devpost)
- [ ] Record **≤3 min** video: show repo, demo URL, one real inference call
- [ ] Devpost submit before **~10:30 PM IST Fri 30 Oct** *(verify countdown on Devpost)*

---

## What **not** to do

- Do not buy a large Nebius contract guessing — start with **Token Factory signup + hackathon credits**.
- Do not rebuild **Growth Hub / full voice agent** — extend **askagent-smallest** only.
- Do not burn **Thu–Fri** if **Codility** practice is still at zero — Sapient beats a thin Nebius entry.

---

## After decision

- **Submitted:** mark **CC-13** Done · one LinkedIn story (**CC-7**).
- **Skipped:** move **CC-13** to Canceled with note *no Nebius account in time* — no shame; **Kiroween / PayPal** remain.

---

## Links

- Mac path: [mac-github-path-map.md](/cursor/stores/self/docs/mac-github-path-map.md)  
- Build queue §7: GitHub `the-system/docs/CLOUD-BUILD-TODO.md` (clone askagent-smallest)
