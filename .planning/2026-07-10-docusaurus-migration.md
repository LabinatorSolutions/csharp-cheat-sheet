# Docusaurus Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current zero-build static site (raw `.md` files linked directly, rendered as unstyled plain text in-browser) with a single unified Docusaurus site — styled reference docs with sidebar nav + search, and the existing hand-built landing page absorbed as a custom Docusaurus page — deployed via Cloudflare Pages building directly from this GitHub repo.

**Architecture:** One Docusaurus "classic" (JS, no TypeScript) project scaffolded at the repo root. `docs/` becomes Docusaurus's content folder: `concise-reference.md` and `ultimate-cheatsheet.md` stay single pages; `comprehensive-reference.md` (588KB, 29 chapters) is split by a small script into 29 sidebar pages under `docs/comprehensive-reference/`. The old hand-built landing page (`index.html`) is ported 1:1 as JSX into `src/pages/index.js`, reusing its exact CSS (scoped so it can't leak into docs pages) and its exact design tokens (which also become the site-wide Infima theme, so docs pages match the brand). `mindmap.html` (585KB, already a self-contained interactive page) is served untouched as a static file. Local, no-backend search via `@easyops-cn/docusaurus-search-local`. No CI needed — Cloudflare Pages builds straight from the repo; the existing (disabled) GitHub Pages Actions workflow is deleted.

**Tech Stack:** Docusaurus (classic preset, JS), Bun, Biome, rumdl, `@easyops-cn/docusaurus-search-local`, Cloudflare Pages.

## Global Constraints

- Runtime: Bun. Linter: Biome. Markdown lint: rumdl. (User's default stack — see [[bun-biome-rumdl]], [[docu-bun-biome-rumdl]].)
- **No hardcoded package versions anywhere in this plan.** Every `bun create` / `bun add` command resolves latest at run time. Do not pin versions in `package.json` beyond what the scaffold/install generates.
- Docusaurus **classic template, plain JS** (no TypeScript) — matches the simplicity of the current project, which has zero build tooling today.
- **Split scope:** only `comprehensive-reference.md` becomes multi-page. `concise-reference.md` and `ultimate-cheatsheet.md` stay exactly one Docusaurus doc page each — splitting them would defeat their "one scannable page" purpose.
- **Landing page is absorbed**: `index.html` is retired. Its markup becomes `src/pages/index.js`; its CSS becomes (a) site-wide Infima variable overrides (fonts, primary color) and (b) a `.lb-landing`-scoped block for everything that isn't safe to apply globally. The old bespoke `.site-header` nav is **dropped** — Docusaurus's own configured Navbar replaces it.
- **Dark mode is disabled** (`themeConfig.colorMode.disableSwitch: true`). The current brand is a single fixed light palette with no dark variant designed — inventing one is out of scope for this migration.
- **Footer**: use Docusaurus's built-in `themeConfig.footer` (3 link columns + copyright), which the classic theme renders on every page (docs included) for free. The old giant blue "LABINATOR" wordmark colophon block is **intentionally dropped** in this migration — it doesn't map to standard footer config and would require swizzling the Footer component to reproduce exactly. Flagged as an optional Task 10 (dynamic copyright year swizzle is included; the wordmark block is not — call this out to the user as a deliberate visual simplification, not an oversight).
- **Mindmap**: copied verbatim to `static/mindmap.html`, served at `/mindmap.html`, linked from the navbar. Not converted to a React page — it's already a complete, working interactive document.
- **Deploy**: Cloudflare Pages, connected directly to this GitHub repo. Build command `bun run build`, output directory `build`, root directory `/` (Docusaurus lives at repo root, no subfolder). No GitHub Actions involved.
- **Delete `.github/workflows/static.yml`** (and the now-empty `.github/` tree) — GitHub Actions is disabled for this repo; GitHub hosts the repo files only, Cloudflare does the build. Confirmed by user.
- **Production URL — resolved during Task 5:** `docusaurus.config.js`'s `url` field is `https://csharp-cheatsheet.labinator.com` — confirmed directly from the original `docs/mindmap.html`'s own pre-existing `og:image`/`twitter:image`/`og:url`/`twitter:url` meta tags (repo evidence, not a guess). Task 7 uses this value, not a placeholder.
- **Markdown parsing mode — discovered during Task 2:** the content in `docs/` is full of C# generic syntax (`List<T>`, `Dictionary<TKey, TValue>`, etc.) appearing as bare prose/headings, not just inside fenced code blocks. Docusaurus's default MDX parser reads a bare `<T>` as an unclosed JSX tag and fails the build. Task 7 sets `markdown: { format: 'detect' }` at the top level of `docusaurus.config.js` — this makes Docusaurus use the lenient legacy Markdown parser for every `.md` file (all our content is `.md`, never `.mdx`), sidestepping JSX parsing entirely instead of hand-escaping angle brackets across 588KB of source content.

---

## File Structure

Final target layout at repo root (after this plan completes):

```
labinator-csharp-cheatsheet/
├── docs/
│   ├── concise-reference.md          # single page, frontmatter added, sidebar_position 1
│   ├── ultimate-cheatsheet.md         # single page, frontmatter added, sidebar_position 2
│   └── comprehensive-reference/       # split output, sidebar_position 3 (via _category_.json)
│       ├── _category_.json
│       ├── 01-introduction-to-csharp.md
│       ├── 02-core-language-fundamentals.md
│       ├── ...                        # 29 files total, see Task 9
│       └── 29-resources-and-further-learning.md
├── src/
│   ├── css/
│   │   └── custom.css                 # Infima overrides + scoped .lb-landing rules
│   ├── pages/
│   │   └── index.js                   # ported landing page
│   └── theme/
│       └── Footer/
│           └── index.js               # swizzled wrapper, dynamic copyright year
├── static/
│   ├── img/
│   │   └── favicon.svg
│   ├── fonts/
│   │   ├── space-grotesk-latin-300-normal.woff2
│   │   ├── space-grotesk-latin-400-normal.woff2
│   │   ├── space-grotesk-latin-500-normal.woff2
│   │   ├── inter-latin-400-normal.woff2
│   │   ├── inter-latin-500-normal.woff2
│   │   ├── inter-latin-600-normal.woff2
│   │   └── jetbrains-mono-latin-400-normal.woff2
│   └── mindmap.html
├── scripts/
│   └── split-comprehensive-reference.mjs
├── docusaurus.config.js
├── sidebars.js
├── package.json
├── biome.json
├── .rumdl.toml
├── .gitignore                         # existing file, append Docusaurus ignores
├── README.md / LICENSE.md / SECURITY.md / .directory   # untouched
└── .planning/2026-07-10-docusaurus-migration.md         # this file
```

Removed entirely: `index.html`, `assets/` (css/js/fonts/favicon — all redistributed above), `docs/mindmap.html` (moved), `docs/comprehensive-reference.md` (split then deleted), `.github/workflows/static.yml`, `.github/` (now empty).

---

### Task 1: Delete the stale GitHub Actions workflow

**Files:**
- Delete: `.github/workflows/static.yml`
- Delete: `.github/` (now empty)

- [ ] **Step 1: Remove the workflow and empty directory**

```bash
cd "/home/kai/Downloads/[X] - Portal/BitBucket/Labinator/labinator-csharp-cheatsheet"
git rm .github/workflows/static.yml
rmdir .github/workflows .github
```

- [ ] **Step 2: Verify it's gone**

Run: `test -d .github && echo "STILL THERE" || echo "removed"`
Expected: `removed`

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove disabled GitHub Pages Actions workflow (Cloudflare Pages builds directly from repo)"
```

---

### Task 2: Scaffold Docusaurus into a temp dir, merge skeleton into repo root

**Files:**
- Create (temp, outside repo): `/tmp/claude-1001/-home-kai-Downloads--X----Portal-BitBucket-Labinator/4224b4ba-4e53-4637-9aec-541ca3e69ded/scratchpad/docusaurus-scaffold/`
- Create: `package.json`, `docusaurus.config.js`, `sidebars.js`, `.gitignore` additions, `babel.config.js` (if generated), `src/css/custom.css` (placeholder, overwritten in Task 4)

**Interfaces:**
- Produces: a working `bun run start` / `bun run build` Docusaurus site with default sample content, ready for content replacement in later tasks.

- [ ] **Step 1: Scaffold into a scratch directory (not the repo — repo root already has files)**

```bash
cd /tmp/claude-1001/-home-kai-Downloads--X----Portal-BitBucket-Labinator/4224b4ba-4e53-4637-9aec-541ca3e69ded/scratchpad
bun create docusaurus@latest docusaurus-scaffold classic
```

Expected: completes without prompts, creates `docusaurus-scaffold/` with the standard classic template (sample `docs/`, `blog/`, `src/pages/index.js`, `docusaurus.config.js`, `sidebars.js`, `package.json`, `static/img/`).

- [ ] **Step 2: Copy the skeleton files into the repo root**

```bash
REPO="/home/kai/Downloads/[X] - Portal/BitBucket/Labinator/labinator-csharp-cheatsheet"
SCAFFOLD="/tmp/claude-1001/-home-kai-Downloads--X----Portal-BitBucket-Labinator/4224b4ba-4e53-4637-9aec-541ca3e69ded/scratchpad/docusaurus-scaffold"

cp "$SCAFFOLD/package.json" "$REPO/package.json"
cp "$SCAFFOLD/docusaurus.config.js" "$REPO/docusaurus.config.js"
cp "$SCAFFOLD/sidebars.js" "$REPO/sidebars.js"
[ -f "$SCAFFOLD/babel.config.js" ] && cp "$SCAFFOLD/babel.config.js" "$REPO/babel.config.js"
mkdir -p "$REPO/src/css" "$REPO/src/pages"
cp "$SCAFFOLD/src/css/custom.css" "$REPO/src/css/custom.css"
```

- [ ] **Step 3: Remove the scaffold's sample content (we bring our own)**

```bash
cd "$REPO"
rm -rf docs-blog-sample-placeholder 2>/dev/null || true
# The scaffold's default blog/ is not used by this site — remove if present
rm -rf blog
# Remove the scaffold's default sample docs/tutorial-* pages — our real docs/*.md already exist in the repo and are untouched by this copy step
```

(No `docs/tutorial-basics` etc. exist in the repo yet — the scaffold's sample docs live only in `$SCAFFOLD`, not copied. Nothing to remove here in `$REPO/docs/`; this step is a no-op safety check, confirmed by Step 4.)

- [ ] **Step 4: Append Docusaurus ignores to the existing `.gitignore`**

Read the current `.gitignore`, then append (don't overwrite):

```
# Docusaurus
.docusaurus
build
node_modules
.cache-loader
```

- [ ] **Step 5: Install dependencies and verify the dev server boots**

```bash
cd "$REPO"
bun install
bun run start &
sleep 5
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000
kill %1
```

Expected: `200`

- [ ] **Step 6: Clean up the scratch scaffold dir**

```bash
rm -rf "$SCAFFOLD"
```

- [ ] **Step 7: Commit**

```bash
cd "$REPO"
git add package.json docusaurus.config.js sidebars.js src/ .gitignore bun.lock 2>/dev/null
git add -A
git commit -m "chore: scaffold Docusaurus classic project at repo root"
```

---

### Task 3: `package.json` scripts, Biome, rumdl config

**Files:**
- Modify: `package.json` (scripts block)
- Create: `biome.json`
- Create: `.rumdl.toml`

**Interfaces:**
- Produces: `bun run lint`, `bun run lint:md`, `bun run health` — used by Task 11's final verification.

- [ ] **Step 1: Set `package.json` scripts**

```json
{
  "scripts": {
    "start": "docusaurus start",
    "build": "docusaurus build",
    "prebuild": "bun run lint:md",
    "serve": "docusaurus serve",
    "clear": "docusaurus clear",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "lint:md": "rumdl check docs/",
    "format": "biome format --write .",
    "health": "bun run lint && bun run lint:md"
  }
}
```

(Keep the scaffold's existing `dependencies`/`devDependencies`/`name`/`version` fields as-is — only replace the `scripts` block.)

- [ ] **Step 2: Install Biome and rumdl**

```bash
bun add -d @biomejs/biome rumdl
```

- [ ] **Step 3: Create `biome.json`**

```json
{
  "$schema": "https://biomejs.dev/schemas/latest/schema.json",
  "files": {
    "includes": [
      "**",
      "!!static/img",
      "!!static/fonts",
      "!!**/node_modules",
      "!!**/build",
      "!!**/.docusaurus",
      "!!bun.lock"
    ]
  },
  "formatter": { "enabled": true },
  "linter": { "enabled": true, "rules": { "preset": "recommended" } }
}
```

- [ ] **Step 4: Create `.rumdl.toml`**

```toml
[global]
disable = ["MD013", "MD033", "MD041", "MD025", "MD024"]
```

(MD013 line-length and MD024 duplicate-headings are disabled because the 29-chapter comprehensive reference and the 70-topic concise reference both legitimately repeat heading text like "Example" across many sections.)

- [ ] **Step 5: Verify**

```bash
bun run lint
bun run lint:md
```

Expected: both exit 0 (or only report pre-existing issues in the scaffold's own default files, not errors).

- [ ] **Step 6: Commit**

```bash
git add package.json biome.json .rumdl.toml bun.lock
git commit -m "chore: configure Biome + rumdl for the Docusaurus project"
```

---

### Task 4: Port design tokens + fonts into `src/css/custom.css` (global, site-wide part)

**Files:**
- Modify: `src/css/custom.css` (replace scaffold defaults)
- Create: `static/fonts/` (populated in Task 5)

**Interfaces:**
- Produces: `--lb-*` custom properties available globally; Infima's `--ifm-color-primary*`, `--ifm-font-family-base`, `--ifm-font-family-monospace`, `--ifm-heading-font-family` remapped to the Labinator brand. Every docs page and the landing page share these.

- [ ] **Step 1: Replace the top of `src/css/custom.css` with brand tokens + font faces + Infima overrides**

```css
/* ==========================================================================
   Labinator design system tokens (ported from the original static site)
   ========================================================================== */

@font-face {
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url("/fonts/space-grotesk-latin-300-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/space-grotesk-latin-400-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("/fonts/space-grotesk-latin-500-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/inter-latin-400-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("/fonts/inter-latin-500-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("/fonts/inter-latin-600-normal.woff2") format("woff2");
}
@font-face {
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/jetbrains-mono-latin-400-normal.woff2") format("woff2");
}

:root {
  /* Color */
  --lb-primary: #2400ff;
  --lb-primary-text: #1e00d6;
  --lb-primary-deep: #1b00bd;
  --lb-primary-tint: #eceafd;
  --lb-primary-wash: #f5f4fe;
  --lb-on-primary: #ffffff;
  --lb-ink: #141414;
  --lb-ink-soft: #262626;
  --lb-charcoal: #3d3d3d;
  --lb-slate: #4a4a4a;
  --lb-paper: #faf8f4;
  --lb-paper-bright: #ffffff;
  --lb-paper-deep: #f2efe8;
  --lb-ink-panel: #141414;
  --lb-on-ink: #faf8f4;
  --lb-on-ink-muted: #c9c6bf;
  --lb-hairline: #e3dfd6;
  --lb-hairline-strong: #c9c4b8;
  --lb-hairline-ink: #2e2e2e;
  --lb-focus-ring: #2400ff;
  --lb-link: #1e00d6;

  /* Type */
  --lb-font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --lb-font-body: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --lb-font-mono: "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace;

  /* Spacing */
  --lb-xxs: 0.25rem;
  --lb-xs: 0.5rem;
  --lb-sm: 0.75rem;
  --lb-md: 1rem;
  --lb-lg: 1.5rem;
  --lb-xl: 2rem;
  --lb-xxl: 3rem;
  --lb-xxxl: 4rem;
  --lb-section-sm: clamp(3rem, 6vw, 5rem);
  --lb-section: clamp(4rem, 9vw, 7.5rem);
  --lb-section-lg: clamp(6rem, 12vw, 10rem);

  /* Motion */
  --lb-duration-fast: 200ms;
  --lb-duration-base: 450ms;
  --lb-duration-slow: 700ms;
  --lb-ease-out-soft: cubic-bezier(0.16, 1, 0.3, 1);
  --lb-rise: 1.25rem;

  /* Radius */
  --lb-radius-none: 0;
  --lb-radius-xs: 0.125rem;

  /* Infima overrides — site-wide brand (docs pages + landing page share these) */
  --ifm-font-family-base: var(--lb-font-body);
  --ifm-font-family-monospace: var(--lb-font-mono);
  --ifm-heading-font-family: var(--lb-font-display);
  --ifm-color-primary: #2400ff;
  --ifm-color-primary-dark: #1e00d6;
  --ifm-color-primary-darker: #1b00bd;
  --ifm-color-primary-darkest: #150096;
  --ifm-color-primary-light: #4d33ff;
  --ifm-color-primary-lighter: #7a66ff;
  --ifm-color-primary-lightest: #eceafd;
  --ifm-code-font-size: 90%;
}
```

> Note: `--ifm-color-primary-{light,lighter,darkest}` are approximated by interpolating toward `--lb-primary-tint` / darkening `--lb-primary-deep` — the original site only ever defined 5 primary shades, not Infima's 7-step ramp. Adjust to taste; they only affect hover/focus states, not primary brand recognition.

- [ ] **Step 2: Disable dark mode (original site has no dark variant)**

This goes in `docusaurus.config.js`, not `custom.css` — tracked in Task 7, Step 2. Note it here so this task's visual check (Step 3 below) doesn't get confused by an unstyled dark toggle still being visible.

- [ ] **Step 3: Verify fonts load (visual check)**

```bash
bun run start &
sleep 5
```

Open `http://localhost:3000` in a browser, inspect any heading with devtools — computed `font-family` should resolve to `Space Grotesk`. Then:

```bash
kill %1
```

- [ ] **Step 4: Commit**

```bash
git add src/css/custom.css
git commit -m "feat: port Labinator design tokens as site-wide Infima theme"
```

---

### Task 5: Move static assets (favicon, fonts, mindmap)

**Files:**
- Move: `assets/favicon.svg` → `static/img/favicon.svg`
- Move: `assets/fonts/*.woff2` → `static/fonts/`
- Move: `docs/mindmap.html` → `static/mindmap.html`
- Delete: `assets/js/main.js` (superseded by Task 10's Footer swizzle), `assets/css/styles.css` (already ported in Task 4/6), `assets/` (now empty)
- Delete (unused, was never referenced by the app, only decorative asset): confirm `assets/csharp-mindmap-poster.png` isn't referenced anywhere before deleting — if it is, move it to `static/img/` instead.

- [ ] **Step 1: Check whether the poster PNG is referenced anywhere**

```bash
cd "/home/kai/Downloads/[X] - Portal/BitBucket/Labinator/labinator-csharp-cheatsheet"
grep -rl "csharp-mindmap-poster" --include="*.html" --include="*.md" --include="*.js" . 2>/dev/null
```

If it returns a match (e.g. an Open Graph image tag inside `docs/mindmap.html`), move it to `static/img/csharp-mindmap-poster.png` and keep the reference path updated in Task 9's mindmap step. If no match, it's unused decorative art from the old repo — leave it out of the new `static/` (don't silently delete original file until Task 11's final cleanup, per surgical-changes practice: unreferenced files get flagged, not deleted, until the user confirms).

- [ ] **Step 2: Move favicon and fonts**

```bash
mkdir -p static/img static/fonts
git mv assets/favicon.svg static/img/favicon.svg
git mv assets/fonts/space-grotesk-latin-300-normal.woff2 static/fonts/
git mv assets/fonts/space-grotesk-latin-400-normal.woff2 static/fonts/
git mv assets/fonts/space-grotesk-latin-500-normal.woff2 static/fonts/
git mv assets/fonts/inter-latin-400-normal.woff2 static/fonts/
git mv assets/fonts/inter-latin-500-normal.woff2 static/fonts/
git mv assets/fonts/inter-latin-600-normal.woff2 static/fonts/
git mv assets/fonts/jetbrains-mono-latin-400-normal.woff2 static/fonts/
```

- [ ] **Step 3: Move the mindmap**

```bash
git mv docs/mindmap.html static/mindmap.html
```

- [ ] **Step 4: Remove the now-superseded CSS/JS (content already ported to `src/css/custom.css` in Task 4/6; the year-stamp JS is replaced by Task 10's Footer swizzle)**

```bash
git rm assets/js/main.js assets/css/styles.css
rmdir assets/js assets/css assets/fonts 2>/dev/null || true
```

- [ ] **Step 5: Verify nothing under `assets/` remains except the flagged poster PNG (if unreferenced)**

```bash
find assets -type f
```

Expected: empty, or only `csharp-mindmap-poster.png` if Step 1 found it unreferenced.

- [ ] **Step 6: Verify the mindmap still opens standalone**

```bash
bun run start &
sleep 5
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/mindmap.html
kill %1
```

Expected: `200`

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: move favicon, fonts, and mindmap into Docusaurus static/"
```

---

### Task 6: Build the landing page (`src/pages/index.js`)

**Files:**
- Create: `src/pages/index.js`
- Modify: `src/css/custom.css` (append `.lb-landing`-scoped rules)

**Interfaces:**
- Consumes: `--lb-*` tokens from Task 4's `custom.css`.
- Produces: `/` route rendering the ported landing page, linking to `/docs/concise-reference`, `/docs/ultimate-cheatsheet`, `/docs/comprehensive-reference` (category index, from Task 9), and `/mindmap.html` (from Task 5).

- [ ] **Step 1: Append the scoped landing CSS to `src/css/custom.css`**

These rules are prefixed with `.lb-landing` so they only ever apply inside the landing page — none of this can leak into docs pages, navbar, or sidebar (the original stylesheet had unscoped resets like `ul { list-style: none }` and `h1,h2,h3,h4,p { margin: 0 }` that would otherwise strip bullets and spacing from every reference doc on the site).

```css
/* ==========================================================================
   Landing page (scoped — see src/pages/index.js)
   ========================================================================== */

.lb-landing img { max-width: 100%; display: block; }
.lb-landing a { color: inherit; text-decoration: none; }
.lb-landing ul { margin: 0; padding: 0; list-style: none; }
.lb-landing h1, .lb-landing h2, .lb-landing h3, .lb-landing h4, .lb-landing p { margin: 0; }
.lb-landing button { font: inherit; cursor: pointer; }

.lb-landing .container {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 var(--lb-xl);
}

@media (max-width: 30rem) {
  .lb-landing .container { padding: 0 var(--lb-lg); }
}

.lb-landing .eyebrow {
  font-family: var(--lb-font-display);
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--lb-slate);
}

.lb-landing .mega-display {
  font-family: var(--lb-font-display);
  font-size: clamp(2.5rem, 6vw + 1rem, 5.5rem);
  font-weight: 300;
  line-height: 1.04;
  letter-spacing: -0.025em;
  color: var(--lb-ink);
}

.lb-landing .heading-3 {
  font-family: var(--lb-font-display);
  font-size: clamp(1.25rem, 0.75vw + 1rem, 1.5rem);
  font-weight: 500;
  line-height: 1.3;
}

.lb-landing .subtitle {
  font-family: var(--lb-font-body);
  font-size: clamp(1.0625rem, 0.35vw + 1rem, 1.25rem);
  font-weight: 400;
  line-height: 1.6;
  color: var(--lb-charcoal);
}

.lb-landing .body-sm { font-size: 0.875rem; line-height: 1.6; color: var(--lb-charcoal); }
.lb-landing .mono-tag { font-family: var(--lb-font-mono); font-size: 0.8125rem; color: var(--lb-slate); }

.lb-landing .hero {
  padding: var(--lb-section) 0 var(--lb-xxl);
  border-bottom: 1px solid var(--lb-hairline);
  background: var(--lb-paper);
}
.lb-landing .hero .eyebrow { margin-bottom: var(--lb-md); }
.lb-landing .hero-title { max-width: 42rem; }
.lb-landing .hero-title span { display: block; }
.lb-landing .hero-title .accent-line { color: var(--lb-primary-text); }
.lb-landing .hero-subtitle { margin-top: var(--lb-lg); max-width: 34rem; }

.lb-landing .version-timeline { margin-top: var(--lb-xxl); max-width: 42rem; position: relative; }
.lb-landing .version-timeline-labels { display: flex; justify-content: space-between; margin-bottom: var(--lb-xs); }
.lb-landing .version-timeline-rule { position: relative; height: 2px; background: var(--lb-primary); }
.lb-landing .version-timeline-rule::before,
.lb-landing .version-timeline-rule::after {
  content: ""; position: absolute; top: 50%; width: 0.5rem; height: 0.5rem;
  border-radius: 50%; background: var(--lb-primary); transform: translateY(-50%);
}
.lb-landing .version-timeline-rule::before { left: 0; }
.lb-landing .version-timeline-rule::after { right: 0; }
.lb-landing .version-timeline-preview {
  position: absolute; right: -3.5rem; top: 0; width: 3rem; height: 2px;
  background-image: linear-gradient(to right, var(--lb-hairline-strong) 50%, transparent 50%);
  background-size: 8px 2px;
}
.lb-landing .version-timeline-ticks { display: flex; justify-content: space-between; margin-top: var(--lb-xs); }
.lb-landing .version-timeline-ticks span { font-family: var(--lb-font-mono); font-size: 0.75rem; color: var(--lb-slate); }

.lb-landing .stats-bar-section { border-bottom: 1px solid var(--lb-hairline); background: var(--lb-paper); }
.lb-landing .stats-bar { display: grid; grid-template-columns: repeat(4, 1fr); }
.lb-landing .stat-cell { padding: var(--lb-lg) var(--lb-xl); border-left: 1px solid var(--lb-hairline); }
.lb-landing .stat-cell:first-child { border-left: none; padding-left: 0; }
.lb-landing .stat-figure {
  font-family: var(--lb-font-display); font-size: clamp(1.75rem, 2vw + 1rem, 2.75rem);
  font-weight: 300; line-height: 1.1; letter-spacing: -0.015em; color: var(--lb-ink);
}
.lb-landing .stat-label {
  margin-top: var(--lb-xxs); font-family: var(--lb-font-display); font-size: 0.6875rem;
  font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--lb-slate);
}
@media (max-width: 40rem) {
  .lb-landing .stats-bar { grid-template-columns: repeat(2, 1fr); }
  .lb-landing .stat-cell:nth-child(3) { border-left: none; padding-left: 0; }
  .lb-landing .stat-cell:nth-child(1), .lb-landing .stat-cell:nth-child(2) {
    border-bottom: 1px solid var(--lb-hairline); padding-bottom: var(--lb-lg);
  }
}

.lb-landing .resources { padding: var(--lb-section) 0; background: var(--lb-paper); }
.lb-landing .resources .eyebrow { margin-bottom: var(--lb-lg); }
.lb-landing .resource-row {
  display: grid; grid-template-columns: 3rem 1fr auto; align-items: start;
  gap: var(--lb-xl); padding: var(--lb-xl) 0; border-top: 1px solid var(--lb-hairline);
  animation: lb-rise-in var(--lb-duration-slow) var(--lb-ease-out-soft) both;
}
@keyframes lb-rise-in {
  from { opacity: 0; transform: translateY(var(--lb-rise)); }
  to { opacity: 1; transform: none; }
}
.lb-landing .resource-row:nth-of-type(1) { animation-delay: 0ms; }
.lb-landing .resource-row:nth-of-type(2) { animation-delay: 80ms; }
.lb-landing .resource-row:nth-of-type(3) { animation-delay: 160ms; }
.lb-landing .resource-row:nth-of-type(4) { animation-delay: 240ms; }
.lb-landing .resources > .container > .resource-row:last-child { border-bottom: 1px solid var(--lb-hairline); }
.lb-landing .resource-icon { width: 2rem; height: 2rem; color: var(--lb-ink); }
.lb-landing .resource-icon svg { width: 100%; height: 100%; }
.lb-landing .resource-body { max-width: 40rem; }
.lb-landing .resource-index {
  font-family: var(--lb-font-mono); font-size: 0.75rem; color: var(--lb-slate);
  display: block; margin-bottom: var(--lb-xs);
}
.lb-landing .resource-title { color: var(--lb-ink); }
.lb-landing .resource-desc { margin-top: var(--lb-sm); color: var(--lb-charcoal); max-width: 38rem; }
.lb-landing .resource-action { align-self: center; white-space: nowrap; }

.lb-landing .action-link {
  display: inline-flex; align-items: center; gap: 0.375rem;
  font-family: var(--lb-font-display); font-size: 0.9375rem; font-weight: 500;
  letter-spacing: 0.01em; color: var(--lb-ink); padding: 0.25rem 0;
  border-bottom: 1px solid var(--lb-ink);
  transition: border-color var(--lb-duration-fast) var(--lb-ease-out-soft),
    color var(--lb-duration-fast) var(--lb-ease-out-soft);
}
.lb-landing .action-link svg { width: 1rem; height: 1rem; transition: transform var(--lb-duration-base) var(--lb-ease-out-soft); }
.lb-landing .action-link:hover, .lb-landing .action-link:focus-visible {
  color: var(--lb-primary-text); border-bottom-color: var(--lb-primary-text); border-bottom-width: 2px;
}
.lb-landing .action-link:hover svg, .lb-landing .action-link:focus-visible svg { transform: translateX(0.25rem); }

@media (max-width: 40rem) {
  .lb-landing .resource-row { grid-template-columns: 1fr; gap: var(--lb-md); }
  .lb-landing .resource-icon { display: none; }
  .lb-landing .resource-action { justify-self: start; }
}

.lb-landing .crosslink {
  border-top: 1px solid var(--lb-hairline); border-bottom: 1px solid var(--lb-hairline);
  padding: var(--lb-xl) 0; background: var(--lb-paper);
}
.lb-landing .crosslink .container {
  display: flex; align-items: center; justify-content: space-between; gap: var(--lb-xl); flex-wrap: wrap;
}
.lb-landing .crosslink-text { max-width: 34rem; color: var(--lb-charcoal); }
.lb-landing .crosslink-text strong { color: var(--lb-ink); font-weight: 500; }

@media (prefers-reduced-motion: reduce) {
  .lb-landing .resource-row { animation: none; opacity: 1; transform: none; }
}
```

- [ ] **Step 2: Create `src/pages/index.js`**

```jsx
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const resources = [
  {
    index: '01 / QUICK LOOKUP',
    title: 'C# Concise Reference',
    desc: '70 topics, one paragraph and one example each. Built for the moment you know what you need and just want the syntax, fast.',
    href: '/docs/concise-reference',
    cta: 'View reference',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 7h9M4 12h13M4 17h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    index: '02 / DENSE REFERENCE',
    title: 'C# Ultimate Cheatsheet',
    desc: 'Every C# feature from version 1 through 14, packed into one dense, scannable document — built to sit open on a second monitor while you work.',
    href: '/docs/ultimate-cheatsheet',
    cta: 'View cheatsheet',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 6h5v5H4zM10 6h5v5h-5zM16 6h5v5h-5zM4 13h5v5H4zM10 13h5v5h-5zM16 13h5v5h-5z" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    ),
  },
  {
    index: '03 / FULL DEPTH',
    title: 'C# Comprehensive Reference',
    desc: '29 chapters and 524 worked examples — every feature explained in full, from language fundamentals through concurrency, reflection, and the newest C# 14 additions.',
    href: '/docs/comprehensive-reference',
    cta: 'View reference',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 5h16M4 5v14h16V5M4 9h16M4 13h16M4 17h16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    index: '04 / VISUAL & RELATIONAL',
    title: 'C# Mindmap',
    desc: "An interactive mindmap of how C# concepts connect to each other — for when a list isn't the right shape and you need to see the relationships.",
    href: '/mindmap.html',
    cta: 'View mindmap',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.25" />
        <path d="M8 7l3 9M16 7l-3 9M8 6h8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
      </svg>
    ),
  },
];

const arrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

export default function Home() {
  return (
    <Layout
      title="C# Learning Resources"
      description="Free C# reference resources by Labinator — a concise reference, a comprehensive cheatsheet, a full-depth guide, and an interactive mindmap. Current through C# 14."
    >
      <div className="lb-landing">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">C# Language Reference — Maintained Through C# 14</p>
            <h1 className="mega-display hero-title">
              <span>Every C# feature,</span>
              <span className="accent-line">indexed and current.</span>
            </h1>
            <p className="subtitle hero-subtitle">
              Four free references covering the same ground at different depths — pick the one that
              matches what you need right now, from a mid-flow lookup to a full-depth read.
            </p>

            <div className="version-timeline">
              <div className="version-timeline-labels mono-tag">
                <span>C# 1.0 — 2002</span>
                <span>C# 14.0 — 2025</span>
              </div>
              <div className="version-timeline-rule">
                <div className="version-timeline-preview" aria-hidden="true" />
              </div>
              <div className="version-timeline-ticks">
                <span>Every version covered</span>
                <span>+ C# 15 preview</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-bar-section" aria-label="Reference statistics">
          <div className="container stats-bar">
            <div className="stat-cell">
              <div className="stat-figure">29</div>
              <div className="stat-label">Chapters</div>
            </div>
            <div className="stat-cell">
              <div className="stat-figure">524</div>
              <div className="stat-label">Code Examples</div>
            </div>
            <div className="stat-cell">
              <div className="stat-figure">70</div>
              <div className="stat-label">Concise Topics</div>
            </div>
            <div className="stat-cell">
              <div className="stat-figure">1–14</div>
              <div className="stat-label">Versions Covered</div>
            </div>
          </div>
        </section>

        <section className="resources" aria-labelledby="resources-heading">
          <div className="container">
            <p className="eyebrow" id="resources-heading">Pick Your Depth</p>
            {resources.map((r) => (
              <div className="resource-row" key={r.href}>
                <div className="resource-icon" aria-hidden="true">{r.icon}</div>
                <div className="resource-body">
                  <span className="resource-index">{r.index}</span>
                  <h2 className="heading-3 resource-title">{r.title}</h2>
                  <p className="body-sm resource-desc">{r.desc}</p>
                </div>
                <div className="resource-action">
                  <Link className="action-link" to={r.href} aria-label={`Open the ${r.title}`}>
                    {r.cta}
                    {arrowIcon}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="crosslink">
          <div className="container">
            <p className="body-sm crosslink-text">
              Want the guided version instead of a reference? <strong>Labinator&apos;s Core C# Guide</strong>{' '}
              covers the same ground as a structured, progressive course.
            </p>
            <a
              className="action-link"
              href="https://csharp.labinator.com"
              aria-label="Visit Labinator's Core C# Guide"
            >
              Start the guide
              {arrowIcon}
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
```

- [ ] **Step 3: Verify visually**

```bash
bun run start &
sleep 5
```

Open `http://localhost:3000/` — hero, stats bar, 4 resource rows, and crosslink band should render matching the old design (fonts, colors, spacing). Click each of the 4 resource links and confirm they navigate (docs pages will 404 until Tasks 8–9 land — expected at this point). Then:

```bash
kill %1
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.js src/css/custom.css
git commit -m "feat: port landing page to src/pages/index.js"
```

---

### Task 7: `docusaurus.config.js` — site metadata, navbar, footer, search, dark mode

**Files:**
- Modify: `docusaurus.config.js` (replace scaffold defaults entirely)

**Interfaces:**
- Consumes: `static/img/favicon.svg` (Task 5), `/mindmap.html` (Task 5), search plugin package (installed this task).
- Produces: navbar with Docs / Mindmap / GitHub links, footer with 3 link columns, search box, `onBrokenLinks: 'throw'`.

- [ ] **Step 1: Install the local search plugin**

```bash
bun add @easyops-cn/docusaurus-search-local
```

- [ ] **Step 2: Replace `docusaurus.config.js`** (production URL already resolved from repo evidence — see Global Constraints):

```js
// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'C# Learning Resources — Labinator',
  tagline: 'Every C# feature, indexed and current.',
  favicon: 'img/favicon.svg',

  // Confirmed from docs/mindmap.html's pre-existing og:image/twitter:image meta tags (Task 5).
  url: 'https://csharp-cheatsheet.labinator.com',
  baseUrl: '/',

  organizationName: 'LabinatorSolutions',
  projectName: 'csharp-cheat-sheet',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Content is full of bare C# generic syntax (List<T>, Dictionary<TKey,TValue>)
  // outside fenced code blocks, which the default MDX parser reads as unclosed
  // JSX tags. 'detect' uses the legacy Markdown parser for every .md file
  // (all our content is .md, never .mdx) — sidesteps JSX parsing entirely.
  // Discovered during Task 2's scaffold verification.
  markdown: { format: 'detect' },

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/LabinatorSolutions/csharp-cheat-sheet/tree/main/',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({ hashed: true, language: ['en'] }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/favicon.svg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Labinator',
        logo: { alt: 'Labinator', src: 'img/favicon.svg' },
        items: [
          { type: 'docSidebar', sidebarId: 'referenceSidebar', position: 'left', label: 'Docs' },
          { to: '/mindmap.html', label: 'Mindmap', position: 'left' },
          {
            href: 'https://github.com/LabinatorSolutions/csharp-cheat-sheet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'References',
            items: [
              { label: 'Concise Reference', to: '/docs/concise-reference' },
              { label: 'Ultimate Cheatsheet', to: '/docs/ultimate-cheatsheet' },
              { label: 'Comprehensive Reference', to: '/docs/comprehensive-reference' },
              { label: 'Mindmap', to: '/mindmap.html' },
            ],
          },
          {
            title: 'Elsewhere',
            items: [
              { label: 'Labinator.com', href: 'https://labinator.com' },
              { label: 'Core C# Guide', href: 'https://csharp.labinator.com' },
              { label: 'Unity C# Guide', href: 'https://unity.labinator.com' },
              { label: 'GitHub', href: 'https://github.com/LabinatorSolutions/csharp-cheat-sheet' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Labinator.com`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.github,
        additionalLanguages: ['csharp', 'bash', 'json'],
      },
    }),
};

export default config;
```

> Note: `copyright` here is evaluated once at **build time**, not per-request — this is why Task 10 swizzles the Footer component instead (renders client-side, so the year is correct even for a page cached and served long after the last deploy).

- [ ] **Step 3: Create `sidebars.js` with the autogenerated sidebar**

```js
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  referenceSidebar: [{ type: 'autogenerated', dirName: '.' }],
};

export default sidebars;
```

- [ ] **Step 4: Verify the build succeeds**

```bash
bun run build
```

Expected: exits 0. (Will fail with broken-link errors until Tasks 8–9 create the referenced docs — if so, re-run this verification after those tasks instead of blocking here.)

- [ ] **Step 5: Commit**

```bash
git add docusaurus.config.js sidebars.js package.json bun.lock
git commit -m "feat: configure navbar, footer, local search, and disable dark mode"
```

---

### Task 8: Migrate `concise-reference.md` and `ultimate-cheatsheet.md` as single doc pages

**Files:**
- Modify: `docs/concise-reference.md` (add frontmatter, drop duplicate leading H1)
- Modify: `docs/ultimate-cheatsheet.md` (add frontmatter, drop duplicate leading H1)

**Interfaces:**
- Produces: `/docs/concise-reference` and `/docs/ultimate-cheatsheet` routes, `sidebar_position: 1` and `2` respectively (comprehensive-reference is `3`, set in Task 9).

- [ ] **Step 1: `concise-reference.md`** — the file currently starts:

```
# C# Concise Reference

## Introduction
...
```

Replace the first line (`# C# Concise Reference`) with frontmatter (keep everything from `## Introduction` onward untouched):

```yaml
---
title: "C# Concise Reference"
description: "70 topics, one paragraph and one example each — built for the moment you know what you need and just want the syntax, fast."
sidebar_position: 1
---

```

- [ ] **Step 2: `ultimate-cheatsheet.md`** — the file currently starts:

```
# The Ultimate C# Comprehensive Cheatsheet

## Table of Contents
...
```

Replace the first line with frontmatter (keep `## Table of Contents` onward untouched):

```yaml
---
title: "C# Ultimate Cheatsheet"
description: "Every C# feature from version 1 through 14, packed into one dense, scannable document."
sidebar_position: 2
---

```

- [ ] **Step 3: Verify both pages render**

```bash
bun run start &
sleep 5
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/docs/concise-reference
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/docs/ultimate-cheatsheet
kill %1
```

Expected: `200` for both.

- [ ] **Step 4: Verify no content was lost**

```bash
# Line counts should match the original minus 1 (the removed duplicate H1) plus ~4 (frontmatter block)
wc -l docs/concise-reference.md docs/ultimate-cheatsheet.md
```

Compare against the original counts noted before editing (concise-reference.md and ultimate-cheatsheet.md line counts from `git show HEAD~N:docs/concise-reference.md | wc -l` if unsure) — should differ by only the swapped header lines, never a large unexplained drop.

- [ ] **Step 5: Commit**

```bash
git add docs/concise-reference.md docs/ultimate-cheatsheet.md
git commit -m "feat: migrate concise-reference and ultimate-cheatsheet to Docusaurus doc pages"
```

---

### Task 9: Split `comprehensive-reference.md` into 29 chapter pages

**Files:**
- Create: `scripts/split-comprehensive-reference.mjs`
- Create: `docs/comprehensive-reference/_category_.json`
- Create: `docs/comprehensive-reference/01-introduction-to-csharp.md` … `29-resources-and-further-learning.md` (29 files, generated — not hand-written)
- Delete: `docs/comprehensive-reference.md` (superseded, after the script runs successfully)

**Interfaces:**
- Consumes: `docs/comprehensive-reference.md` (the original 21,841-line file — chapters are lines matching `/^# \d+\.\s/`, confirmed: 29 matches, from `# 1. Introduction to C#` at line 39 to `# 29. Resources and Further Learning` at line 21420; lines 1–38 are the doc title + hand-written table of contents, superseded by the `_category_.json` generated index and Docusaurus's autogenerated sidebar — intentionally not carried into any output file).
- Produces: one `.md` file per chapter with `title` + `sidebar_position` frontmatter, chapter's own `# N. Title` heading line stripped from the body (frontmatter `title` supplies the page heading instead, avoiding a duplicate H1).

- [ ] **Step 1: Write the split script**

```js
#!/usr/bin/env node
// scripts/split-comprehensive-reference.mjs
//
// Splits docs/comprehensive-reference.md into one file per numbered H1 chapter
// under docs/comprehensive-reference/. Chapter boundaries are detected at
// runtime via regex (not hardcoded line numbers) so this can be re-run if the
// source document is ever updated upstream.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const SOURCE = join(REPO_ROOT, 'docs', 'comprehensive-reference.md');
const OUT_DIR = join(REPO_ROOT, 'docs', 'comprehensive-reference');

const CHAPTER_HEADING_RE = /^# (\d+)\.\s+(.+?)\s*$/;

function slugify(title) {
  return title
    .replace(/C#/gi, 'csharp')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function main() {
  const text = readFileSync(SOURCE, 'utf8');
  const lines = text.split('\n');

  const chapters = [];
  lines.forEach((line, i) => {
    const m = line.match(CHAPTER_HEADING_RE);
    if (m) chapters.push({ num: Number(m[1]), title: m[2], startLine: i });
  });

  if (chapters.length === 0) {
    throw new Error(`No chapter headings found in ${SOURCE} — check CHAPTER_HEADING_RE against the current file.`);
  }

  console.log(`Found ${chapters.length} chapters.`);

  if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true });
  mkdirSync(OUT_DIR, { recursive: true });

  chapters.forEach((chapter, idx) => {
    const bodyStart = chapter.startLine + 1; // skip the chapter's own heading line
    const bodyEnd = idx + 1 < chapters.length ? chapters[idx + 1].startLine : lines.length;
    const body = lines.slice(bodyStart, bodyEnd).join('\n').replace(/^\n+/, '').trimEnd();

    const slug = slugify(chapter.title);
    const filename = `${String(chapter.num).padStart(2, '0')}-${slug}.md`;

    const frontmatter = [
      '---',
      `title: "${chapter.title.replace(/"/g, '\\"')}"`,
      `sidebar_position: ${chapter.num}`,
      '---',
      '',
      '',
    ].join('\n');

    writeFileSync(join(OUT_DIR, filename), frontmatter + body + '\n', 'utf8');
    console.log(`  ${filename}  (${bodyEnd - bodyStart} lines)`);
  });

  const category = {
    label: 'C# Comprehensive Reference',
    position: 3,
    collapsible: true,
    collapsed: true,
    link: {
      type: 'generated-index',
      title: 'C# Comprehensive Reference',
      description:
        '29 chapters and 524 worked examples — every C# feature explained in full, from language fundamentals through concurrency, reflection, and the newest C# 14 additions.',
    },
  };
  writeFileSync(join(OUT_DIR, '_category_.json'), JSON.stringify(category, null, 2) + '\n', 'utf8');

  console.log(`\nWrote ${chapters.length} chapter files + _category_.json to ${OUT_DIR}`);
}

main();
```

- [ ] **Step 2: Run it**

```bash
cd "/home/kai/Downloads/[X] - Portal/BitBucket/Labinator/labinator-csharp-cheatsheet"
node scripts/split-comprehensive-reference.mjs
```

Expected: `Found 29 chapters.` followed by 29 filenames, then `Wrote 29 chapter files + _category_.json to .../docs/comprehensive-reference`.

- [ ] **Step 3: Verify file count and total line count parity**

```bash
ls docs/comprehensive-reference/*.md | wc -l
```

Expected: `29`

```bash
# Sanity-check no content was silently dropped: summed chapter body line counts
# plus 29 chapter-heading lines plus the 38-line title/ToC preamble should be
# within a few lines of the original file's total (frontmatter lines added,
# blank-line trimming at each boundary account for the difference).
wc -l docs/comprehensive-reference.md
cat docs/comprehensive-reference/*.md | wc -l
```

Both counts should be in the same ballpark (tens of lines apart from frontmatter/trimming, not thousands) — a large gap means a chapter boundary was mis-detected.

- [ ] **Step 4: Spot-check first and last chapter**

```bash
head -10 docs/comprehensive-reference/01-introduction-to-csharp.md
tail -5 docs/comprehensive-reference/29-resources-and-further-learning.md
cat docs/comprehensive-reference/_category_.json
```

Expected: chapter 1 starts with frontmatter then `## What is C#?` (the heading right after the stripped `# 1. Introduction to C#` line); chapter 29 ends with the original file's final lines; category JSON is valid.

- [ ] **Step 5: Delete the now-superseded monolithic file**

```bash
git rm docs/comprehensive-reference.md
```

- [ ] **Step 6: Rebuild and verify no broken links**

```bash
bun run build
```

Expected: exits 0 with `onBrokenLinks: 'throw'` — this is the real proof the 29 pages + category index + navbar/footer links all resolve.

- [ ] **Step 7: Verify sidebar order and search in production build**

```bash
bun run serve &
sleep 3
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/docs/comprehensive-reference
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/docs/comprehensive-reference/29-resources-and-further-learning
kill %1
```

Expected: `200` for both. Then open `http://localhost:3000` in a browser (re-run `bun run serve` if killed), use the search box, search "reflection" — chapter 18 should appear in results (search index only builds in production `serve`, not `start`, per the skill's documented pitfall).

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: split comprehensive-reference.md into 29 chapter pages"
```

---

### Task 10: Swizzle Footer for a dynamic copyright year

**Files:**
- Create: `src/theme/Footer/index.js`

**Interfaces:**
- Consumes: `@theme-original/Footer` (the classic theme's original Footer component).
- Produces: identical footer output to Task 7's config, except the copyright year is computed client-side on every render — matching the original site's `assets/js/main.js` behavior (deleted in Task 5), which set `#current-year` via `new Date().getFullYear()` at page-load.

- [ ] **Step 1: List swizzlable components to confirm `Footer` is safe to wrap**

```bash
bun run swizzle -- --list
```

Expected: `Footer` listed, ideally marked safe for `--wrap` (non-ejecting).

- [ ] **Step 2: Wrap it**

```bash
bun run swizzle @docusaurus/theme-classic Footer --wrap
```

This generates `src/theme/Footer/index.js` containing a default re-export of the original. Replace its contents with:

```jsx
import React from 'react';
import OriginalFooter from '@theme-original/Footer';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function Footer(props) {
  const { footer } = useThemeConfig();
  const yearlyFooter = footer
    ? { ...footer, copyright: `Copyright © ${new Date().getFullYear()} Labinator.com` }
    : footer;

  return <OriginalFooter {...props} footer={yearlyFooter} />;
}
```

> This intentionally overrides `footer.copyright` client-side on every render, superseding the build-time string set in Task 7's `docusaurus.config.js` (which stays as a correct fallback for the very first paint / no-JS case).

- [ ] **Step 3: Verify**

```bash
bun run start &
sleep 5
```

Open `http://localhost:3000`, scroll to footer, confirm the copyright year is the current year. Then:

```bash
kill %1
```

- [ ] **Step 4: Restart dev server if it was already running before swizzling** (per the skill's documented pitfall — swizzled components require a restart to take effect). Already satisfied by Step 3 since it's a fresh `bun run start`.

- [ ] **Step 5: Commit**

```bash
git add src/theme/
git commit -m "feat: swizzle Footer for a client-side dynamic copyright year"
```

---

### Task 11: Final cleanup and verification

**Files:**
- Delete: `index.html` (repo root — fully superseded by `src/pages/index.js`)
- Modify: `README.md` (update any references to the old file paths, e.g. `docs/concise-reference.md` direct links → point at the deployed docs URLs instead, since raw `.md` files are no longer the intended viewing method)

- [ ] **Step 1: Check what `README.md` currently links to**

```bash
grep -n "\.md\|\.html\|assets/" README.md
```

- [ ] **Step 2: Update any broken/stale references found in Step 1** — repoint them at the new Docusaurus routes (`/docs/concise-reference`, `/docs/ultimate-cheatsheet`, `/docs/comprehensive-reference`, `/mindmap.html`) or the live production URL once known. Show the actual diff for whatever Step 1 finds — content depends on Step 1's output, so this step is executed by the implementing engineer against the real grep results, not pre-written here blind.

- [ ] **Step 3: Delete the old landing page**

```bash
git rm index.html
```

- [ ] **Step 4: Run the full health check**

```bash
bun run health
```

Expected: exits 0.

- [ ] **Step 5: Full production build + serve smoke test**

```bash
bun run clear
bun run build
bun run serve &
sleep 3
for path in / /docs/concise-reference /docs/ultimate-cheatsheet /docs/comprehensive-reference /mindmap.html; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$path")
  echo "$path -> $code"
done
kill %1
```

Expected: `200` for every path.

- [ ] **Step 6: Manual visual pass in an actual browser** (per this project's UI-verification requirement — type-checking and a build passing verifies correctness, not visual/UX quality):
  - Landing page matches the original's look (fonts, hero, stats bar, 4 resource rows, crosslink band)
  - Navbar shows Docs / Mindmap / GitHub, no dark-mode toggle visible
  - A docs page (e.g. chapter 13, LINQ) renders with working sidebar nav, code blocks syntax-highlighted, bullet lists intact (this is the regression the `.lb-landing` CSS scoping in Task 6 was specifically protecting against)
  - Search box returns results for a known term (e.g. "async")
  - Footer shows current year and all links resolve
  - `/mindmap.html` loads and is interactive, same as before migration

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: remove superseded index.html, finish Docusaurus migration"
```

- [ ] **Step 8: No open manual step remains** — the `url` field in `docusaurus.config.js` was set to the confirmed production domain (`https://csharp-cheatsheet.labinator.com`) in Task 7, resolved from repo evidence during Task 5. Nothing further needed before connecting the Cloudflare build.

---

## Self-Review Notes

- **Spec coverage:** all three locked decisions covered — landing page absorbed (Task 6), only comprehensive-reference split (Task 9), Cloudflare Pages deploy assumed with GitHub Actions removed (Task 1). Fonts/colors/spacing tokens ported (Task 4). Mindmap preserved (Task 5). Search added (Task 7). No dark mode (Task 7).
- **Known deliberate simplifications** (called out inline, not hidden): the old wordmark/colophon footer block is dropped in favor of Docusaurus's standard footer; the hand-written in-page Table of Contents inside `concise-reference.md`/`ultimate-cheatsheet.md` is left as-is (now redundant with Docusaurus's auto-generated right-side TOC, but removing it is optional cosmetic cleanup, not required for correctness).
- **Resolved during execution:** production `url` in `docusaurus.config.js` was an open question at plan-writing time; Task 5's implementer discovered the real domain (`https://csharp-cheatsheet.labinator.com`) already embedded in `docs/mindmap.html`'s pre-existing social meta tags, so Task 7 uses that confirmed value directly — no user input was needed after all.
