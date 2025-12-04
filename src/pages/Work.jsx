import React from 'react'
import SectionReveal from '../components/SectionReveal.jsx'

const projects = [
  {
    tag: 'Product company',
    title: 'VelocityOS — Launch site',
    meta: 'Homepage and feature overview for a developer-focused infrastructure platform.'
  },
  {
    tag: 'Consulting studio',
    title: 'Northline — Services site',
    meta: 'Clear narrative, service breakdown and lead-focused contact path.'
  },
  {
    tag: 'B2B SaaS',
    title: 'Signalcraft — Marketing site',
    meta: 'Modular sections to explain the product without overwhelming visitors.'
  },
  {
    tag: 'Founder presence',
    title: 'Axis Layer — Personal brand',
    meta: 'Simple, credible overview for a founder working across multiple products.'
  }
]

export default function Work() {
  return (
    <main className="page-shell">
      <SectionReveal className="section-block">
        <div className="section-header">
          <div>
            <h1 className="section-title">Selected work</h1>
            <p className="section-desc">
              Avoliro works with product teams, studios and founders who care about
              framing their work clearly. Below is a representative sample.
            </p>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <article className="project" key={p.title}>
              <div className="project-tag">{p.tag}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-meta">{p.meta}</div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </main>
  )
}