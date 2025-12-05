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
              A focus on a few things done well: digital presence, full-stack systems and brand
              visuals that support how you work.
            </p>
          </div>
        </div>

        <div className="grid grid-3">
          <article className="card">
            <div className="card-label">Web & Product</div>
            <h3 className="card-title">Company & product websites</h3>
            <p className="card-body">
              Clear, fast, modern sites for companies and products that need to explain what they
              do without noise.
            </p>
          </article>

          <article className="card">
            <div className="card-label">Systems</div>
            <h3 className="card-title">Full-stack web applications</h3>
            <p className="card-body">
              Dashboards, portals and internal tools built as long-term infrastructure for your
              team and customers.
            </p>
          </article>

          <article className="card">
            <div className="card-label">Brand & Visuals</div>
            <h3 className="card-title">Brand & graphic design support</h3>
            <p className="card-body">
              Visual systems, layouts and assets that help your brand feel consistent across web,
              decks and campaigns.
            </p>
          </article>
        </div>
      </SectionReveal>
    </main>
  )
}