# Scoped resume variants

The resume is JS-rendered: `data.js` (base SSOT) → `variants.js` (scope merge) → `main.js` (render).
Adding `?v=<scope>` to the URL swaps in a tailored title, headline, summary, work bullets, and
skills before render. No `?v=` → untouched public default (`enkr1.github.io/resume/`).

## Live URLs

| Scope | URL | Use for |
|-------|-----|---------|
| _(default)_ | `…/resume/` | Public link, general |
| FDE / AI Solutions | `…/resume/?v=fde` | Forward Deployed Eng, AI Solutions, Voice AI, customer-facing delivery |
| Senior Full-Stack | `…/resume/?v=fullstack` | TS/React/Node full-stack, product eng |
| AI/ML Platform | `…/resume/?v=ai-platform` | Backend, distributed systems, ML platform/infra |
| Regtech / Compliance | `…/resume/?v=fintech-regtech` | Fintech, regtech, compliance-AI, banks/insurers |

## Build PDFs

```bash
./build-resumes.sh                 # base + all 4 variants -> personalised/
./build-resumes.sh fde             # one scope only
```

Uses system headless Chrome (zero install). Output is gitignored — regenerate any time.

## Add a 5th scope

1. Add one entry to `RESUME_VARIANTS` in `scripts/variants.js` (copy an existing block).
   Override only what differs: `title`, `headline`, `summary`, `skills`, `work_bullets` (keyed
   by `start_date`), `projects`. Anything omitted falls through to `data.js`.
2. Add its label to the `LABELS` map in `build-resumes.sh`.
3. `./build-resumes.sh <new-scope>` to render.

No DOM edits, no touching the obfuscated `main.js`. The merge is data-driven.

## Honesty rule

Variants reframe and reprioritise **real** experience. Never add a skill the base resume
can't defend in an interview. ATS keyword-matching is not worth a credibility landmine.
