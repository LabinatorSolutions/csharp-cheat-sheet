# C# Learning Resources & Cheat Sheets

> By [Labinator.com](https://labinator.com) – Comprehensive C# references, current through C# 14

This repository contains a collection of comprehensive C# learning resources, cheatsheets, and references designed for developers at all skill levels. Whether you're a beginner learning the basics or an experienced developer looking for a quick reference, you'll find valuable resources here.

## Live Preview

> [csharp-cheatsheet.labinator.com](https://csharp-cheatsheet.labinator.com/)

## Available Resources

| Resource                                                                                            | Description                                                                                                        |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [C# Ultimate Cheatsheet](https://csharp-cheatsheet.labinator.com/docs/ultimate-cheatsheet)           | The most comprehensive C# cheatsheet covering C# 1-14, plus a preview of unreleased C# 15 features                 |
| [C# Comprehensive Reference](https://csharp-cheatsheet.labinator.com/docs/comprehensive-reference)   | Detailed reference guide covering all C# features through version 14, plus a preview of unreleased C# 15 features  |
| [C# Concise Reference](https://csharp-cheatsheet.labinator.com/docs/concise-reference)               | A more concise reference guide for quick lookups                                                                    |
| [C# Mindmap](https://csharp-cheatsheet.labinator.com/mindmap.html)                                   | Visual mindmap of C# concepts and their relationships                                                               |

## How to Use These Resources

- **For beginners**: Start with the [C# Concise Reference](https://csharp-cheatsheet.labinator.com/docs/concise-reference) to get familiar with the core concepts.
- **For quick lookups**: The [C# Ultimate Cheatsheet](https://csharp-cheatsheet.labinator.com/docs/ultimate-cheatsheet) is organized for easy reference.
- **For visual learners**: Check out the [C# Mindmap](https://csharp-cheatsheet.labinator.com/mindmap.html) to see how concepts relate to each other.
- **For in-depth learning**: The [C# Comprehensive Reference](https://csharp-cheatsheet.labinator.com/docs/comprehensive-reference) provides detailed explanations of all features.
- **For the full structured course**: [Labinator's Core C# Guide](https://csharp.labinator.com/) covers the same material as a progressive, in-depth learning path rather than a reference.

## Repository Structure

```text
CSharp Cheatsheet/
├── docs/                           # Documentation content (Docusaurus docs plugin)
│   ├── comprehensive-reference/    # 29-chapter comprehensive C# reference
│   ├── concise-reference.md        # Concise C# reference
│   └── ultimate-cheatsheet.md      # Ultimate C# cheatsheet
├── scripts/
│   └── split-comprehensive-reference.mjs  # Re-runnable chapter-split script
├── src/
│   ├── css/
│   │   └── custom.css              # Site theme (Infima overrides + landing page styles)
│   ├── pages/
│   │   └── index.js                # Landing page
│   └── theme/
│       └── Footer/                 # Swizzled footer (dynamic copyright year)
├── static/                         # Static assets served as-is
│   ├── fonts/                      # Self-hosted fonts
│   ├── img/                        # Favicon, mindmap poster image
│   └── mindmap.html                # Visual C# mindmap
├── docusaurus.config.js            # Site configuration
├── sidebars.js                     # Docs sidebar configuration
├── package.json                    # Scripts and dependencies (Bun)
├── biome.json                      # Linter/formatter config
├── .rumdl.toml                     # Markdown lint config
├── tsconfig.json                   # JSDoc type-checking config
├── LICENSE.md                      # License information
└── README.md                       # This file
```

## Development

This site runs on [Docusaurus](https://docusaurus.io/) with [Bun](https://bun.sh/) as the package manager.

```bash
bun install      # install dependencies
bun run start    # dev server at localhost:3000
bun run build    # production build to ./build
bun run serve    # serve the production build locally
bun run health   # lint + markdown lint + typecheck
```

## Contributing

Contributions, bug fixes, additions, and improvements are welcome! Please feel free to submit a pull request or open an issue. Run `bun run health` before submitting — it must pass clean.

## License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE.md](./LICENSE.md) file for details.

## SEO & GEO

This site ships canonical URLs, Open Graph/Twitter social cards (`static/img/og-image.png` for the site and `static/img/og-mindmap.png` for the mindmap, 1280×640), and JSON-LD structured data — an `Organization` + `WebSite` `@graph` with a sitelinks `SearchAction`. `static/robots.txt` allows search and citing AI crawlers while blocking training-only bots (GPTBot, CCBot, Google-Extended, Bytespider, Amazonbot); `static/llms.txt` provides an AI-discoverability map; the sitemap is generated at `/sitemap.xml`. All SEO config lives in `docusaurus.config.js` (`url`, `themeConfig.image`, `themeConfig.metadata`, `headTags`). See [CLAUDE.md](./CLAUDE.md) → "SEO & GEO".

## About Labinator

[Labinator.com](https://labinator.com) is a software development studio. These C# references are maintained alongside [Labinator's Core C# Guide](https://csharp.labinator.com/) and [Unity C# Guide](https://unity.labinator.com/).
