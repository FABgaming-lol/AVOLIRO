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
              Avoliro builds high-impact digital presence for companies, products and founders.
              A focused set of services to cover most modern web needs.
            </p>
          </div>
        </div>

        <div className="grid grid-3">
          {/* FULL STACK WEB DEVELOPMENT - Sub-brand Velano */}
          <a
            className="card"
            href="https://velano-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div className="card-label">01 · Web Systems</div>
            <h3 className="card-title">Full-stack Web Development</h3>
            <p className="card-body">
              Custom built web apps, dashboards and platforms. Powered by modern full-stack
              technologies. Delivered through our development sub-brand: Velano.
            </p>
          </a>

          {/* Full Company Website */}
          <article className="card">
            <div className="card-label">02 · Core Presence</div>
            <h3 className="card-title">Company / Product Website</h3>
            <p className="card-body">
              A structured multi-page build designed to communicate your positioning clearly
              and convert new leads or users with confidence.
            </p>
          </article>

          {/* Launch Site */}
          <article className="card">
            <div className="card-label">03 · Launch Focus</div>
            <h3 className="card-title">Single Page Launch Sites</h3>
            <p className="card-body">
              Clear narrative, focused call-to-action and a strong first impression that helps
              audiences understand your core message instantly.
            </p>
          </article>
        </div>
      </SectionReveal>

      <SectionReveal className="section-block">
        <div className="section-header">
          <div>
            <h2 className="section-title">How engagements work</h2>
            <p className="section-desc">
              A straightforward and efficient collaboration process — from outline to launch,
              with minimal overhead.
            </p>
          </div>
        </div>

        <div className="grid grid-3">
          <article className="card">
            <div className="card-label">Step 1</div>
            <h3 className="card-title">Short call & outline</h3>
            <p className="card-body">
              A quick conversation or short written brief to define goals,
              audience and messaging clearly from the beginning.
            </p>
          </article>

          <article className="card">
            <div className="card-label">Step 2</div>
            <h3 className="card-title">Structure & draft</h3>
            <p className="card-body">
              A first version of structure, content and design direction —
              just enough to confirm the approach and get aligned quickly.
            </p>
          </article>

          <article className="card">
            <div className="card-label">Step 3</div>
            <h3 className="card-title">Build, review & launch</h3>
            <p className="card-body">
              Modern implementation, a few review cycles, then a confident launch with
              post-launch refinements as needed.
            </p>
          </article>
        </div>
      </SectionReveal>
    </main>
  )
}