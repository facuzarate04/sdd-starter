#!/bin/bash
set -e

# SDD Framework Initializer
# Copies the SDD framework structure to a target project directory.
#
# Usage:
#   ./init.sh /path/to/project           Install (skip existing files)
#   ./init.sh /path/to/project --update  Update commands and templates (overwrite)

TARGET="${1:-.}"
MODE="${2:-install}"

if [ "$TARGET" = "." ] || [ "$TARGET" = "--help" ] || [ "$TARGET" = "-h" ]; then
  echo "Usage: ./init.sh /path/to/target/project [--update]"
  echo ""
  echo "Modes:"
  echo "  (default)   Install: copies framework files, skips existing"
  echo "  --update    Update: overwrites commands and templates only"
  echo "              Does NOT touch constitution, config, docs, domains, specs, or CLAUDE.md"
  exit 1
fi

if [ ! -d "$TARGET" ]; then
  echo "Error: Target directory '$TARGET' does not exist."
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

COPIED=0
SKIPPED=0
UPDATED=0

copy_if_missing() {
  local src="$1"
  local dst="$2"
  if [ -f "$dst" ]; then
    echo "  SKIP (exists): $(basename "$dst")"
    SKIPPED=$((SKIPPED + 1))
  else
    mkdir -p "$(dirname "$dst")"
    cp "$src" "$dst"
    echo "  COPY: $(basename "$dst")"
    COPIED=$((COPIED + 1))
  fi
}

force_copy() {
  local src="$1"
  local dst="$2"
  mkdir -p "$(dirname "$dst")"
  if [ -f "$dst" ] && diff -q "$src" "$dst" > /dev/null 2>&1; then
    echo "  OK (up to date): $(basename "$dst")"
    SKIPPED=$((SKIPPED + 1))
  elif [ -f "$dst" ]; then
    cp "$src" "$dst"
    echo "  UPDATE: $(basename "$dst")"
    UPDATED=$((UPDATED + 1))
  else
    cp "$src" "$dst"
    echo "  COPY: $(basename "$dst")"
    COPIED=$((COPIED + 1))
  fi
}

# ============================================================
# UPDATE MODE: only refresh commands and templates
# ============================================================
if [ "$MODE" = "--update" ]; then
  echo "=== SDD Framework Updater ==="
  echo "Source: $SCRIPT_DIR"
  echo "Target: $TARGET"
  echo ""

  echo "[1/3] Updating templates..."
  for f in "$SCRIPT_DIR"/.sdd/templates/*.md; do
    [ -f "$f" ] || continue
    force_copy "$f" "$TARGET/.sdd/templates/$(basename "$f")"
  done

  echo "[2/3] Updating commands..."
  for f in "$SCRIPT_DIR"/.sdd/commands/*.md; do
    [ -f "$f" ] || continue
    force_copy "$f" "$TARGET/.sdd/commands/$(basename "$f")"
  done
  for f in "$SCRIPT_DIR"/.claude/commands/sdd-*.md; do
    [ -f "$f" ] || continue
    force_copy "$f" "$TARGET/.claude/commands/$(basename "$f")"
  done

  echo "[3/3] Done!"
  echo ""
  echo "=== SDD Framework updated ==="
  echo "  Files updated: $UPDATED"
  echo "  Files added:   $COPIED"
  echo "  Already current: $SKIPPED"
  echo ""
  echo "NOT touched: constitution, config, docs/*, domains/*, specs/*, CLAUDE.md"
  exit 0
fi

# ============================================================
# INSTALL MODE: first-time setup (skip existing)
# ============================================================
echo "=== SDD Framework Installer ==="
echo "Source: $SCRIPT_DIR"
echo "Target: $TARGET"
echo ""

# --- Step 1: Directory structure ---
echo "[1/5] Creating directory structure..."
mkdir -p "$TARGET/.sdd/templates"
mkdir -p "$TARGET/.sdd/commands"
mkdir -p "$TARGET/.claude/commands"
mkdir -p "$TARGET/docs"
mkdir -p "$TARGET/domains"
mkdir -p "$TARGET/specs/active"
mkdir -p "$TARGET/specs/completed"
mkdir -p "$TARGET/specs/bugs"

# --- Step 2: Framework files ---
echo "[2/5] Copying framework files..."

# .sdd root files (constitution, config)
for f in "$SCRIPT_DIR"/.sdd/*.md; do
  [ -f "$f" ] || continue
  copy_if_missing "$f" "$TARGET/.sdd/$(basename "$f")"
done

# Templates
for f in "$SCRIPT_DIR"/.sdd/templates/*.md; do
  [ -f "$f" ] || continue
  copy_if_missing "$f" "$TARGET/.sdd/templates/$(basename "$f")"
done

# Commands (source of truth)
for f in "$SCRIPT_DIR"/.sdd/commands/*.md; do
  [ -f "$f" ] || continue
  copy_if_missing "$f" "$TARGET/.sdd/commands/$(basename "$f")"
done

# Commands (Claude Code integration)
for f in "$SCRIPT_DIR"/.claude/commands/sdd-*.md; do
  [ -f "$f" ] || continue
  copy_if_missing "$f" "$TARGET/.claude/commands/$(basename "$f")"
done

# --- Step 3: System-level docs ---
echo "[3/5] Copying system-level doc templates..."
for f in "$SCRIPT_DIR"/docs/*.md; do
  [ -f "$f" ] || continue
  copy_if_missing "$f" "$TARGET/docs/$(basename "$f")"
done

# --- Step 4: CLAUDE.md merge ---
echo "[4/5] Handling CLAUDE.md..."
SDD_SECTION_MARKER="# SDD Framework - Spec Driven Development"

if [ ! -f "$TARGET/CLAUDE.md" ]; then
  cp "$SCRIPT_DIR/CLAUDE.md" "$TARGET/CLAUDE.md"
  echo "  COPY: CLAUDE.md (new file)"
  COPIED=$((COPIED + 1))
elif grep -q "$SDD_SECTION_MARKER" "$TARGET/CLAUDE.md"; then
  echo "  SKIP: CLAUDE.md already contains SDD section"
  SKIPPED=$((SKIPPED + 1))
else
  echo "" >> "$TARGET/CLAUDE.md"
  echo "" >> "$TARGET/CLAUDE.md"
  cat "$SCRIPT_DIR/CLAUDE.md" >> "$TARGET/CLAUDE.md"
  echo "  MERGE: SDD section appended to existing CLAUDE.md"
  COPIED=$((COPIED + 1))
fi

# --- Step 5: Summary ---
echo "[5/5] Done!"
echo ""
echo "=== SDD Framework installed ==="
echo "  Files copied:  $COPIED"
echo "  Files skipped: $SKIPPED"
echo ""
echo "Next steps:"
echo "  1. Open Claude Code in your project directory"
echo "  2. Run /sdd-bootstrap to auto-fill docs from your codebase"
echo "  3. Review and approve the generated documentation"
echo "  4. Start using /sdd-new-feature, /sdd-new-bug, etc."
echo ""
echo "Tip: Run './init.sh $TARGET --update' to sync latest commands and templates"
echo ""
