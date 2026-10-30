# Cursor Project todo — GitHub backup

This repository mirrors **Abhishek’s Cursor Project todo board** (CC board): notes, preferences, planning docs, and workflows.

## Where the live copy lives

The **canonical** copy is in **Cursor Project Context** (the Project store in Cursor). Treat that as source of truth while Cloud Agents and the Project are available.

This Git repo is a **backup and offline edit surface**:

- Edit here when Cursor Cloud or the Project store is unavailable.
- When Cloud is back, **merge changes back** into Project Context, or ask the Project agent to pull from this GitHub repo.

## Layout

| Path | Contents |
|------|----------|
| [`project-todo/notes.md`](project-todo/notes.md) | Rolling status and pointers |
| [`project-todo/preferences.md`](project-todo/preferences.md) | Reusable preferences for agents |
| [`project-todo/docs/`](project-todo/docs/) | Workstream and todo markdown |
| [`project-todo/workflows/`](project-todo/workflows/) | Recurring workflow docs |
| [`project-todo/SYNC.md`](project-todo/SYNC.md) | Last sync time, file list, manual sync steps |

**Not mirrored:** `media/` and other large binaries stay in Project Context only.

## Sync

Automated sync from the store runs on Cloud Agent VMs (see [`scripts/sync-project-todo-to-repo.sh`](scripts/sync-project-todo-to-repo.sh)). For manual steps, see [`project-todo/SYNC.md`](project-todo/SYNC.md).

## Clone

After this repo is attached to a named GitHub repository under [helloAbhishekJha](https://github.com/helloAbhishekJha), clone that URL. Until then, use the Cursor temporary mirror remote shown in your agent run logs.
