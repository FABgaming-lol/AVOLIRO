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
              Avoliro works across brand, digital presence and systems to support how
              your business presents itself and operates online.
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
            <svg className="service-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 3h8v8H3V3m10 0h8v8h-8V3M3 13h8v8H3v-8m10 0h8v8h-8v-8Z"
              />
            </svg>
            <div className="card-label">01 · Web systems</div>
            <h3 className="card-title">Full-stack web development</h3>
            <p className="card-body">
              Custom web apps, dashboards and tools, delivered through Velano —
              Avoliro’s development sub-brand.
            </p>
            <span className="project-link" style={{ marginTop: '8px', display: 'inline-flex' }}>
              Visit Velano <span>↗</span>
            </span>
          </a>

          <article className="card">
            <svg className="service-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18m0 2a7 7 0 0 1 6.93 6H12V5m0 14a7 7 0 0 1-6.93-6H12v6Z"
              />
            </svg>
            <div className="card-label">02 · Core presence</div>
            <h3 className="card-title">Company & product websites</h3>
            <p className="card-body">
              Multi-page sites that explain what you do, why it matters and how to start working with you.
            </p>
          </article>

          <article className="card">
            <svg className="service-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M14 2l8 8l-12 12H2v-8zm-2.5 4.91L7.91 10.5L6 8.59L11.59 3L13 4.41z"
              />
            </svg>
            <div className="card-label">03 · Branding</div>
            <h3 className="card-title">Brand systems for new companies</h3>
            <p className="card-body">
              Identity systems, color & typography foundations and visual direction
              for companies defining themselves for the first time.
            </p>
          </article>

          <article className="card">
            <svg className="service-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 4V1L8 5l4 4V6c3.3 0 6 2.7 6 6a6 6 0 0 1-11.9 1H4a8 8 0 0 0 15.9-1c0-4.4-3.6-8-8-8z"
              />
            </svg>
            <div className="card-label">04 · Re-branding</div>
            <h3 className="card-title">Modernizing existing brands</h3>
            <p className="card-body">
              Evolving logos, visuals, messaging & structure to reflect where your
              business is today — and where it’s going next.
            </p>
          </article>

          <article className="card">
            <svg className="service-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M2 4h20v2H2V4m0 14h20v2H2v-2m0-7h20v2H2v-2Z"
              />
            </svg>
            <div className="card-label">05 · Graphic support</div>
            <h3 className="card-title">Graphic assets & design support</h3>
            <p className="card-body">
              Campaign graphics, layouts & supporting visuals that keep your brand consistent
              across every touchpoint.
            </p>
          </article>
        </div>
      </SectionReveal>

      <SectionReveal className="section-block">
        <div className="section-header">
          <div>
            <h2 className="section-title">How projects run</h2>
            <p className="section-desc">
              A simple structure that gets from outline to launch without unnecessary calls
              or complicated processes.
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