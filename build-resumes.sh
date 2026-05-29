#!/usr/bin/env bash
#
# build-resumes.sh — render every scoped resume variant to PDF via headless Chrome.
#
# Why headless Chrome: the resume is JS-rendered (data.js + variants.js + main.js),
# so static converters (wkhtmltopdf, WeasyPrint, Prince, pandoc) can't execute the
# render. System Chrome is the lightest JS-capable tool with zero install.
#
# Usage:
#   ./build-resumes.sh            # build base + all variants
#   ./build-resumes.sh fde        # build only the fde variant
#
# Output: personalised/*.pdf  (gitignored — regenerate any time)

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="file://${REPO_DIR}/index.html"
OUT_DIR="${REPO_DIR}/personalised"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# scope-key  ->  output filename suffix (recruiter-facing)
declare -A LABELS=(
  [base]="Full-Stack"
  [fde]="FDE-AI-Solutions"
  [fullstack]="Full-Stack-Senior"
  [ai-platform]="AI-Platform-Backend"
  [fintech-regtech]="Regtech-Compliance"
)

NAME="Jing-Hui-Pang"

render() {
  local scope="$1"
  local suffix="${LABELS[$scope]:-$scope}"
  local out="${OUT_DIR}/${NAME}-Resume-${suffix}.pdf"
  local url="$SRC"
  [ "$scope" != "base" ] && url="${SRC}?v=${scope}"

  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=5000 \
    --print-to-pdf="$out" "$url" >/dev/null 2>&1

  local bytes
  bytes=$(stat -f%z "$out" 2>/dev/null || echo 0)
  if [ "$bytes" -lt 20000 ]; then
    echo "  ✗ ${scope}: only ${bytes} bytes — render likely failed"
    return 1
  fi
  printf "  ✓ %-16s -> %s (%d KB)\n" "$scope" "$(basename "$out")" "$((bytes / 1024))"
}

mkdir -p "$OUT_DIR"

if [ $# -gt 0 ]; then
  SCOPES=("$@")
else
  SCOPES=(base fde fullstack ai-platform fintech-regtech)
fi

echo "Building ${#SCOPES[@]} resume(s) -> personalised/"
for s in "${SCOPES[@]}"; do
  render "$s"
done
echo "Done."
