#!/usr/bin/env node
// scripts/split-comprehensive-reference.mjs
//
// Splits docs/comprehensive-reference.md into one file per numbered H1 chapter
// under docs/comprehensive-reference/. Chapter boundaries are detected at
// runtime via regex (not hardcoded line numbers) so this can be re-run if the
// source document is ever updated upstream.

import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
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
    throw new Error(
      `No chapter headings found in ${SOURCE} — check CHAPTER_HEADING_RE against the current file.`,
    );
  }

  console.log(`Found ${chapters.length} chapters.`);

  if (existsSync(OUT_DIR)) rmSync(OUT_DIR, { recursive: true });
  mkdirSync(OUT_DIR, { recursive: true });

  chapters.forEach((chapter, idx) => {
    const bodyStart = chapter.startLine + 1; // skip the chapter's own heading line
    const bodyEnd =
      idx + 1 < chapters.length ? chapters[idx + 1].startLine : lines.length;
    const body = lines
      .slice(bodyStart, bodyEnd)
      .join('\n')
      .replace(/^\n+/, '')
      .trimEnd();

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

    writeFileSync(join(OUT_DIR, filename), `${frontmatter + body}\n`, 'utf8');
    console.log(`  ${filename}  (${bodyEnd - bodyStart} lines)`);
  });

  const category = {
    label: 'C# Comprehensive Reference',
    position: 3,
    collapsible: true,
    collapsed: true,
    link: {
      type: 'generated-index',
      // Without an explicit slug, Docusaurus derives the generated-index route
      // from the category label (e.g. "C#" -> "c"), producing
      // /docs/category/c-comprehensive-reference instead of the
      // /docs/comprehensive-reference route the navbar/footer (Task 7) and the
      // Task 11 smoke test both expect. Pinning the slug keeps the promised URL.
      slug: '/comprehensive-reference',
      title: 'C# Comprehensive Reference',
      description:
        '29 chapters and 524 worked examples — every C# feature explained in full, from language fundamentals through concurrency, reflection, and the newest C# 14 additions.',
    },
  };
  writeFileSync(
    join(OUT_DIR, '_category_.json'),
    `${JSON.stringify(category, null, 2)}\n`,
    'utf8',
  );

  console.log(
    `\nWrote ${chapters.length} chapter files + _category_.json to ${OUT_DIR}`,
  );
}

main();
