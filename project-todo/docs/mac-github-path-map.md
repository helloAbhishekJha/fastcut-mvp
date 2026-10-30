# Mac local path ↔ GitHub (Cloud agent instructions)

Cloud agents **cannot** read `file:///Users/...` on your laptop unless that folder is the **opened workspace** or synced. On Cloud, use **`git clone`** into the **same path layout** below (or pass the **GitHub URL**).

## P0 — System cluster

| Project | **Local folder (Mac)** | **GitHub** |
|---------|------------------------|------------|
| **The System** | `/Users/abhishekjha/aiagents/ethglobal2026/the-system` | https://github.com/helloAbhishekJha/the-system |
| **Build queue doc** | same repo → `PROJECT-BUILD-QUEUE.md` | https://github.com/helloAbhishekJha/the-system/blob/main/PROJECT-BUILD-QUEUE.md |
| **SMM poster (`index.html`)** | `/Users/abhishekjha/aiagents/smm/july2026` | https://github.com/helloAbhishekJha/smm-july2026 |
| **11s portfolio** | `/Users/abhishekjha/aiagents/ethglobal2026/portfolio/11s-ads` | https://github.com/helloAbhishekJha/11s-ads-portfolio |
| **Plans / hackathon docs** (not full repo) | `/Users/abhishekjha/aiagents/ethglobal2026` | Only app subtree tracks **nextbeat-ethonline**; most `.md` folders are **local-only** |

## P1 — Contests & code

| Project | **Local folder (Mac)** | **GitHub** |
|---------|------------------------|------------|
| **go-smallest** (folder; remote quirk) | `/Users/abhishekjha/aiagents/ethglobal2026/go-smallest` | Folder’s `origin` may point at nextbeat — use **askagent-smallest** for Nebius/GitLab |
| **askagent-smallest** | `/Users/abhishekjha/aiagents/etiotsmallest` | https://github.com/helloAbhishekJha/askagent-smallest |
| **Dracula film** | `/Users/abhishekjha/aiagents/dracula` | https://github.com/helloAbhishekJha/dracula-film |
| **CapCut assets** | `/Users/abhishekjha/aiagents/capcutseedance` | https://github.com/helloAbhishekJha/capcut-seedance |
| **CapCut plan** (no repo) | `/Users/abhishekjha/aiagents/ethglobal2026/capcut-world-la/plan.md` | — |
| **GitLab plan** | `/Users/abhishekjha/aiagents/ethglobal2026/gitlab-transcend-2026/` | — |
| **Base44 Glow** | *local `base44/` deleted Oct 5* — clone fresh | https://github.com/helloAbhishekJha/base44-give-it-a-glow |
| **SprintStory** | *local deleted* — clone fresh | https://github.com/helloAbhishekJha/sprintstory |
| **NextBeat app** | `/Users/abhishekjha/aiagents/ethglobal2026/nextbeat-app` | https://github.com/helloAbhishekJha/nextbeat-ethonline |

## P2 — Job / resume / other

| Project | **Local folder (Mac)** | **GitHub** |
|---------|------------------------|------------|
| **resumeai-api** | `/Users/abhishekjha/aiagents/resumeai/api` | https://github.com/helloAbhishekJha/resumeai-api |
| **resume-chat-app** | `/Users/abhishekjha/aiagents/ethglobal2026/resume-chat-app` | *no dedicated repo* (inside ethglobal2026) |
| **Dealroom Graph** | `/Users/abhishekjha/aiagents/apps/dealroom-graph` | https://github.com/helloAbhishekJha/dealroom-graph |
| **Lakshya Coach** | `/Users/abhishekjha/aiagents/apps/lakshya-coach` | https://github.com/helloAbhishekJha/lakshya-coach |
| **Job search CSV/docs** | `/Users/abhishekjha/aiagents/ethglobal2026/job-search/` | local only |
| **Half Past images** | *no local clone found* | https://github.com/helloAbhishekJha/halfpastimages |

## One-liner for Cloud agent (copy)

```text
Use these Mac paths as the canonical layout (clone GitHub into the same paths on the cloud machine):

/Users/abhishekjha/aiagents/ethglobal2026/the-system          → github.com/helloAbhishekJha/the-system
/Users/abhishekjha/aiagents/smm/july2026                      → github.com/helloAbhishekJha/smm-july2026
/Users/abhishekjha/aiagents/ethglobal2026/portfolio/11s-ads   → github.com/helloAbhishekJha/11s-ads-portfolio
/Users/abhishekjha/aiagents/etiotsmallest                     → github.com/helloAbhishekJha/askagent-smallest
/Users/abhishekjha/aiagents/dracula                           → github.com/helloAbhishekJha/dracula-film
/Users/abhishekjha/aiagents/capcutseedance                    → github.com/helloAbhishekJha/capcut-seedance
/Users/abhishekjha/aiagents/resumeai/api                      → github.com/helloAbhishekJha/resumeai-api
/Users/abhishekjha/aiagents/apps/dealroom-graph               → github.com/helloAbhishekJha/dealroom-graph
/Users/abhishekjha/aiagents/apps/lakshya-coach                → github.com/helloAbhishekJha/lakshya-coach

Planning-only (open parent workspace or sync separately): /Users/abhishekjha/aiagents/ethglobal2026/
```

**ethglobal2026 ops:** For `HACKATHONS-TODO.md` / `.system/` in Cloud, open **`ethglobal2026`** as workspace on a machine that has it, or add private **`ethglobal-ops`** — optional; ask user before creating.

**Auth:** Private repos require GitHub login / Cursor-linked clone; unauthenticated `git clone` fails on this VM.
