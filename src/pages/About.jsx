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
              Avoliro is a small, focused web studio. The aim is to build company sites
              that feel confident, fast and clear.
            </p>
          </div>
        </div>

        <div className="grid grid-2">
          <article className="card">
            <div className="card-label">Approach</div>
            <p className="card-body">
              The focus is on essentials: clear positioning, a calm visual environment and a
              straightforward way for people to understand whether your company is the right
              fit for them.
            </p>
            <p className="card-body">
              Animation and effects are used to support the story, not distract from it.
              Everything is built to be maintainable and performance-conscious.
            </p>
          </article>

          <article className="card">
            <div className="card-label">What this is for</div>
            <p className="card-body">
              Avoliro is well-suited for product teams, small companies and studios that
              need a site that will still feel relevant and usable a few years from now,
              not just at launch.
            </p>
            <p className="card-body">
              The goal is to become a quiet, reliable part of your company&apos;s brand
              infrastructure rather than a one-off visual experiment.
            </p>
          </article>
        </div>
      </SectionReveal>
    </main>
  )
}