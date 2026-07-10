import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const resources = [
  {
    index: '01 / QUICK LOOKUP',
    title: 'C# Concise Reference',
    desc: '70 topics, one paragraph and one example each. Built for the moment you know what you need and just want the syntax, fast.',
    href: '/docs/concise-reference',
    cta: 'View reference',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 7h9M4 12h13M4 17h6"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="square"
        />
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
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h5v5H4zM10 6h5v5h-5zM16 6h5v5h-5zM4 13h5v5H4zM10 13h5v5h-5zM16 13h5v5h-5z"
          stroke="currentColor"
          strokeWidth="1.25"
        />
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
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 5h16M4 5v14h16V5M4 9h16M4 13h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
  {
    index: '04 / VISUAL & RELATIONAL',
    title: 'C# Mindmap',
    desc: "An interactive mindmap of how C# concepts connect to each other — for when a list isn't the right shape and you need to see the relationships.",
    href: 'pathname:///mindmap.html',
    cta: 'View mindmap',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.25" />
        <circle
          cx="12"
          cy="18"
          r="2"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M8 7l3 9M16 7l-3 9M8 6h8"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
];

const arrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h13M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
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
            <p className="eyebrow">
              C# Language Reference — Maintained Through C# 14
            </p>
            <h1 className="mega-display hero-title">
              <span>Every C# feature,</span>
              <span className="accent-line">indexed and current.</span>
            </h1>
            <p className="subtitle hero-subtitle">
              Four free references covering the same ground at different depths
              — pick the one that matches what you need right now, from a
              mid-flow lookup to a full-depth read.
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

        <section
          className="stats-bar-section"
          aria-label="Reference statistics"
        >
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
            <p className="eyebrow" id="resources-heading">
              Pick Your Depth
            </p>
            {resources.map((r) => (
              <div className="resource-row" key={r.href}>
                <div className="resource-icon" aria-hidden="true">
                  {r.icon}
                </div>
                <div className="resource-body">
                  <span className="resource-index">{r.index}</span>
                  <h2 className="heading-3 resource-title">
                    <Link to={r.href}>{r.title}</Link>
                  </h2>
                  <p className="body-sm resource-desc">{r.desc}</p>
                </div>
                <div className="resource-action">
                  <Link
                    className="action-link"
                    to={r.href}
                    aria-label={`Open the ${r.title}`}
                  >
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
              Want the guided version instead of a reference?{' '}
              <strong>Labinator&apos;s Core C# Guide</strong> covers the same
              ground as a structured, progressive course.
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
