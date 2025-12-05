import React from 'react'
import SectionReveal from '../components/SectionReveal.jsx'

const projects = [
  {
    label: 'Full-stack · Sub-brand',
    name: 'Velano',
    role: 'Full-stack web development & technical implementation.',
    outcome:
      'Engineering-focused web presence for Avoliro’s custom development offering.',
    link: 'https://velano-portfolio.vercel.app/'
  },
  {
    label: 'Brand + Web',
    name: 'Product Studio',
    role: 'Positioning, landing structure & visual tone.',
    outcome:
      'Supported the studio with a confident presentation of services for early outreach.',
    link: null
  },
  {
    label: 'Internal Systems',
    name: 'Operations Dashboard',
    role: 'Interface design + front-end build for team-level visibility.',
    outcome:
      'Improved clarity and reduced friction in daily workflows through usability-first dashboards.',
    link: null
  },
  {
    label: 'Marketing Presence',
    name: 'Service Business Site',
    role: 'Website structure & messaging refinement.',
    outcome:
      'Aligned storytelling and navigation to help customers understand how to begin working together.',
    link: null
  }
]

export default function Work() {
  return (
    <main className="page-shell">
      <SectionReveal className="section-block">
        <div className="section-header">
          <div>
            <h1 className="section-title">Selected Work</h1>
            <p className="section-desc">
              A small sample of web systems, digital presence and brand-aligned interfaces
              for growing companies. More detailed case studies available on request.
            </p>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.name}>
              <div className="project-chip">{p.label}</div>
              <h3 className="project-title">{p.name}</h3>
              <p className="project-role">{p.role}</p>
              <p className="project-outcome">{p.outcome}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View project <span>↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </SectionReveal>
    </main>
  )
}