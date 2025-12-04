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
      {/* Hero with lightning background & parallax */}
      <section
        className="hero-block hero-with-lightning"
        onMouseMove={handleMouseMove}
      >
        <div
          className="hero-lightning-layer"
          style={{
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) scale(1.06)`
          }}
        >
          <Lightning
            hue={220}      // Electric royal blue
            xOffset={0}
            speed={1}
            intensity={1}
            size={1}
          />
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
            Bold, minimal web experiences with real presence.
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
          >
            Avoliro builds focused, high-impact sites for teams who want a strong first
            impression without visual clutter or over-design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
          >
            <Link to="/contact" className="btn-primary">
              Start project <span>↗</span>
            </Link>{' '}
            <Link to="/work" className="btn-ghost">
              View selected work
            </Link>
          </motion.div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <span className="hero-scroll-arrow" />
        </div>
      </section>

      {/* Services */}
      <SectionReveal className="section-block" id="services">
        <div className="section-header">
          <div>
            <h2 className="section-title">Services</h2>
            <p className="section-desc">
              A clear, minimal set of offers. Simple to understand, easy to extend later.
            </p>
          </div>
        </div>

        <div className="grid grid-3">
          <motion.article
            className="card"
            whileHover={{
              rotateX: 4,
              translateY: -6,
              boxShadow: '0px 22px 60px rgba(0,0,0,0.9)'
            }}
            transition={{ type: 'spring', stiffness: 170, damping: 18 }}
          >
            <div className="card-label">01</div>
            <h3 className="card-title">Launch site</h3>
            <p className="card-body">
              A strong one-page site with a bold hero, concise story and clear call-to-action.
            </p>
          </motion.article>

          <motion.article
            className="card"
            whileHover={{
              rotateX: 4,
              translateY: -6,
              boxShadow: '0px 22px 60px rgba(0,0,0,0.9)'
            }}
            transition={{ type: 'spring', stiffness: 170, damping: 18 }}
          >
            <div className="card-label">02</div>
            <h3 className="card-title">Full website</h3>
            <p className="card-body">
              A structured multi-page site for studios, products or service companies.
            </p>
          </motion.article>

          <motion.article
            className="card"
            whileHover={{
              rotateX: 4,
              translateY: -6,
              boxShadow: '0px 22px 60px rgba(0,0,0,0.9)'
            }}
            transition={{ type: 'spring', stiffness: 170, damping: 18 }}
          >
            <div className="card-label">03</div>
            <h3 className="card-title">Iterative refinement</h3>
            <p className="card-body">
              Light ongoing improvements to keep your site aligned with what you learn over time.
            </p>
          </motion.article>
        </div>
      </SectionReveal>
    </main>
  )
}