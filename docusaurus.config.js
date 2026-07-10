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

  // concise-reference.md and ultimate-cheatsheet.md ship in legacy 'md' format
  // (see markdown.format below), and Docusaurus's own broken-anchor checker
  // doesn't see anchors correctly on 'md'-format pages — it flags real,
  // working in-page links as broken. Verified every flagged anchor actually
  // exists as a rendered element id (grepped the built HTML) and resolves
  // correctly via rumdl's independent MD051 check (which has zero findings
  // with the rule fully enabled). This is a known Docusaurus limitation for
  // this parser mode, not a real broken link — 'ignore' silences the false
  // positive rather than a genuine problem.
  onBrokenAnchors: 'ignore',

  // Content is full of bare C# generic syntax (List<T>, Dictionary<TKey,TValue>)
  // outside fenced code blocks, which the default MDX parser reads as unclosed
  // JSX tags. 'detect' uses the legacy Markdown parser for every .md file
  // (all our content is .md, never .mdx) — sidesteps JSX parsing entirely.
  // Discovered during Task 2's scaffold verification.
  markdown: {
    format: 'detect',
    hooks: { onBrokenMarkdownLinks: 'warn' },
  },

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/LabinatorSolutions/csharp-cheat-sheet/tree/main/',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      { hashed: true, language: ['en'] },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/csharp-mindmap-poster.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Labinator',
        logo: { alt: 'Labinator', src: 'img/favicon.svg' },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'referenceSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'pathname:///mindmap.html',
            label: 'Mindmap',
            position: 'left',
          },
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
              {
                label: 'Comprehensive Reference',
                to: '/docs/comprehensive-reference',
              },
              { label: 'Mindmap', href: 'pathname:///mindmap.html' },
            ],
          },
          {
            title: 'Elsewhere',
            items: [
              { label: 'Labinator.com', href: 'https://labinator.com' },
              { label: 'Core C# Guide', href: 'https://csharp.labinator.com' },
              { label: 'Unity C# Guide', href: 'https://unity.labinator.com' },
              {
                label: 'GitHub',
                href: 'https://github.com/LabinatorSolutions/csharp-cheat-sheet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://labinator.com" target="_blank" rel="noopener noreferrer">Labinator.com</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.github,
        additionalLanguages: ['csharp', 'bash', 'json'],
      },
    }),
};

export default config;
