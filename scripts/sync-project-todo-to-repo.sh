#!/usr/bin/env bash
# Sync Cursor Project store markdown into this repo's project-todo/ mirror.
#
# The store path exists only on a Cloud Agent VM (or equivalent) where
# /cursor/stores/self is mounted. Do not expect it on a local Mac unless
# you replicate that mount.
#
# Usage (from repo root):
#   ./scripts/sync-project-todo-to-repo.sh
#   ./scripts/sync-project-todo-to-repo.sh /path/to/repo

set -euo pipefail

STORE="${CURSOR_PROJECT_STORE:-/cursor/stores/self}"
REPO_ROOT="${1:-$(cd "$(dirname "$0")/.." && pwd)}"
DEST="${REPO_ROOT}/project-todo"

if [[ ! -d "$STORE" ]]; then
  echo "Error: store not found at $STORE" >&2
  echo "Set CURSOR_PROJECT_STORE or run on a Cloud Agent VM." >&2
  exit 1
fi

mkdir -p "$DEST/docs" "$DEST/workflows"

rsync -a --delete \
  --include='notes.md' \
  --include='preferences.md' \
  --include='docs/' \
  --include='docs/*.md' \
  --include='workflows/' \
  --include='workflows/*.md' \
  --exclude='*' \
  "$STORE/" "$DEST/"

echo "Synced store -> $DEST"
find "$DEST" -type f | sort
