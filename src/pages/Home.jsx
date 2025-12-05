import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal.jsx'
import Lightning from '../components/Lightning.jsx'

export default function Home() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setParallax({
      x: x * 18,
      y: y * 12
    })
  }

  return (
    <main className="page-shell">
      <section className="hero-block" onMouseMove={handleMouseMove}>
        <div
          className="hero-lightning-layer"
          style={{
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) scale(1.06)`
          }}
        >
          <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
        </div>

        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Avoliro Studio
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 60, rotateX: -18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Bold, minimal web & brand experiences for real businesses.
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
          >
            Design, technology & strategy for growing companies. Avoliro builds clean,
            focused digital touchpoints that help your work make sense to the right people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
          >
            <Link to="/contact" className="btn-primary">
              Start a project <span>↗</span>
            </Link>{' '}
            <Link to="/work" className="btn-ghost">
              View selected work
            </Link>
          </motion.div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
        </div>
      </section>

      <SectionReveal className="section-block" id="services">
        <div className="section-header">
          <div>
            <h2 className="section-title">Services</h2>
            <p className="section-desc">
              A focus on core brand and digital capabilities — from first positioning
              to long-term product infrastructure.
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
              Dashboards, portals and internal tools built as long-term product infrastructure.
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
              Clear, modern websites designed to get the right people to act with confidence.
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
              Identity fundamentals for teams defining themselves for the first time.
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
              Updating visuals & messaging to reflect current market positioning.
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
            <h3 className="card-title">Graphic assets & visual support</h3>
            <p className="card-body">
              Campaigns, social graphics and layouts that extend your brand.
            </p>
          </article>
        </div>
      </SectionReveal>
    </main>
  )
}