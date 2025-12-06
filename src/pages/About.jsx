import React from 'react'
import SectionReveal from '../components/SectionReveal.jsx'

export default function About() {
  return (
    <main className="page-shell">
      <SectionReveal className="section-block">
        <div className="section-header">
          <div>
            <h1 className="section-title">Studio</h1>
            <p className="section-desc">
  Avoliro helps organizations elevate everything — clarity, performance and presence.
</p>
          </div>
        </div>

        <div className="grid grid-2">
          <article className="card">
            <div className="card-label">Approach</div>
            <p className="card-body">
              The work aims for calm, readable interfaces and clear messaging. The goal is to help
              visitors understand what you do quickly, rather than impress them with complexity.
            </p>
            <p className="card-body">
              Animation and detail are used as supporting elements, not the main event.
            </p>
          </article>

          <article className="card">
            <div className="card-label">Fit</div>
            <p className="card-body">
              Avoliro is best suited to small and growing companies, teams with long-term products,
              and people who prefer substance over trends.
            </p>
            <p className="card-body">
              The aim is to become a quiet part of your brand and product infrastructure, not a
              one-off launch moment.
            </p>
          </article>
        </div>
      </SectionReveal>
    </main>
  )
}