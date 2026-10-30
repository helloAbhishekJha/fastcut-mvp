# Project todo sync log

## Last sync

| Zone | Timestamp |
|------|-----------|
| **UTC** | 2026-10-30 17:05:08 UTC |
| **IST** | 2026-10-30 22:35:08 IST |

**Direction:** Cursor Project store (`/cursor/stores/self`) → this repo (`project-todo/`)

**Excluded:** `media/` and other non-markdown binaries (not copied).

## Files in this mirror (52)

### Root

- `notes.md`
- `preferences.md`

### `docs/` (49 files)

- `11s-buy-intent-sticky-points.md`
- `11s-competitor-value-comparison.md`
- `11s-site-value-props-no-roas.md`
- `active-todo-with-why.md`
- `astrotalk-alternative-plan.md`
- `canva-templates-workstream.md`
- `capcut-build-howto.md`
- `capcut-entry1-paths-prompts.md`
- `capcut-multi-submission-plan.md`
- `capcut-offline-agent-handoff.md`
- `capcut-past-winner-links.md`
- `capcut-six-canonical-briefs.md`
- `capcut-six-creative-fusions.md`
- `capcut-world-asset-pack.md`
- `capcut-world-la-checklist.md`
- `chatgpt-go-custom-gpt.md`
- `chatterbox-ai-use.md`
- `chroma-awards-s2-brief-2026-10-30.md`
- `cloud-build-todo.md`
- `cloud-env-by-repo.md`
- `competitor-domains-and-positioning.md`
- `consolidated-todo-saved.md`
- `contest-todo-2026-10-25.md`
- `cursor-cloud-start-here.md`
- `dm-outreach-templates.md`
- `fde-role-prep.md`
- `hackathon-discovery-tracker.md`
- `kt-archive-optional.md`
- `learning-attendance-log.md`
- `linkedin-strategy-beyond-cam-trew.md`
- `mac-github-path-map.md`
- `master-todo-index.md`
- `nebius-cc13-emergency-plan.md`
- `ops-backlog-expanded-2026-10-25.md`
- `pre-hire-project-lever.md`
- `project-context.md`
- `saas-ai-cost-composer-sdk-patterns.md`
- `saas-idea-ai-bookmark-inbox.md`
- `saas-ideas-workstream.md`
- `sapient-codility-assessment.md`
- `sapient-codility-practice.md`
- `seo-aeo-geo-workstream.md`
- `sim-cloning-security-checklist.md`
- `subscriptions-and-trials-log.md`
- `todo-categories.md`
- `todo-time-estimates.md`
- `video-portfolio-domain.md`
- `whatsplanner-extension-plan.md`
- `youtube-dm-targets-next-week.md`

### `workflows/` (1 file)

- `weekly-rhythm.md`

---

## Manual sync: store → GitHub (push backup)

**On a Cloud Agent VM** (store path available):

1. From repo root, run:
   ```bash
   chmod +x scripts/sync-project-todo-to-repo.sh
   ./scripts/sync-project-todo-to-repo.sh
   ```
2. Update the **Last sync** table and file list in this file (`SYNC.md`) if the set of files changed.
3. Commit and push:
   ```bash
   git add project-todo/ README.md scripts/
   git commit -m "Sync Project todo board and docs from Cursor store"
   git push origin main
   ```

**Without the store** (edit in Git only): change files under `project-todo/`, commit, push — then merge back to Project Context when Cloud returns (see below).

## Manual sync: GitHub → store (restore / merge)

When Cursor Project is available again:

1. Pull latest from GitHub locally or ask a Cloud Agent to clone/pull this repo.
2. Copy changed markdown from `project-todo/` into Project Context (same relative paths: `notes.md`, `preferences.md`, `docs/`, `workflows/`).
3. Or tell the **Project agent**: “Pull todo docs from GitHub repo &lt;url&gt; into Project Context, preserving store-only files like `media/`.”

**Do not** overwrite store `media/` from this repo — it is intentionally omitted here.

## Store path reference

| Environment | Typical store path |
|-------------|-------------------|
| Cloud Agent VM | `/cursor/stores/self` (override with `CURSOR_PROJECT_STORE`) |
| Cursor app | Project **Context** UI / shared Project store |
