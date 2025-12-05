import React from 'react'
import SectionReveal from '../components/SectionReveal.jsx'

export default function Services() {
  return (
    <main className="page-shell">
      <SectionReveal className="section-block">
        <div className="section-header">
          <div>
            <h1 className="section-title">Services</h1>
            <p className="section-desc">
              Avoliro works across design, development and strategy to support how your business
              presents itself and operates online.
            </p>
          </div>
        </div>

        <div className="grid grid-3">
          <a
            className="card card-link"
            href="https://velano-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-label">01 · Web systems</div>
            <h3 className="card-title">Full-stack web development</h3>
            <p className="card-body">
              Custom web apps, dashboards and tools, delivered through Velano – Avoliro’s
              development sub-brand.
            </p>
            <span className="project-link" style={{ marginTop: '8px', display: 'inline-flex' }}>
              Visit Velano <span>↗</span>
            </span>
          </a>

          <article className="card">
            <div className="card-label">02 · Core presence</div>
            <h3 className="card-title">Company & product websites</h3>
            <p className="card-body">
              Multi-page sites that explain what you do, why it matters and how people can start
              working with you.
            </p>
          </article>

          <article className="card">
            <div className="card-label">03 · Brand & visuals</div>
            <h3 className="card-title">Brand & graphic design</h3>
            <p className="card-body">
              Visual systems, layouts and supporting graphics for web, presentations and campaigns.
            </p>
          </article>
        </div>
      </SectionReveal>

      <SectionReveal className="section-block">
        <div className="section-header">
          <div>
            <h2 className="section-title">How projects run</h2>
            <p className="section-desc">
              A simple structure that gets from outline to launch without unnecessary calls or
              complicated processes.
            </p>
          </div>
        </div>

        <div className="grid grid-3">
          <article className="card">
            <div className="card-label">Step 1</div>
            <h3 className="card-title">Short outline</h3>
            <p className="card-body">
              A small amount of context: what you do, what you think you need, and when you would
              like it live.
            </p>
          </article>

          <article className="card">
            <div className="card-label">Step 2</div>
            <h3 className="card-title">Structure & proposal</h3>
            <p className="card-body">
              A suggested structure, scope and estimated timeline so you know what is being built
              and why.
            </p>
          </article>

          <article className="card">
            <div className="card-label">Step 3</div>
            <h3 className="card-title">Build & refinement</h3>
            <p className="card-body">
              Implementation, a few focused review rounds, then launch and small adjustments once
              live.
            </p>
          </article>
        </div>
      </SectionReveal>
    </main>
  )
}