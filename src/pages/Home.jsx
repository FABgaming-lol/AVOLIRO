import React from 'react'
import { motion } from 'framer-motion'
import Lightning from '../components/Lightning'

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }

  return (
    <div className="page-shell">

      <section className="hero-block">
        <div className="hero-lightning-layer">
          <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
        </div>

        <motion.div 
          className="hero-content"
          initial="initial"
          animate="animate"
        >

          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <div className="hero-eyebrow">Future-ready Businesses</div>
          </motion.div>

          <motion.h1 className="hero-title" {...fadeUp} transition={{ delay: 0.22 }}>
            Avoliro
          </motion.h1>

          <motion.p className="hero-tagline" {...fadeUp} transition={{ delay: 0.40 }}>
            Elevate Everything
          </motion.p>

          <motion.p className="hero-sub" {...fadeUp} transition={{ delay: 0.52 }}>
            We help companies strengthen how they look, work and communicate — through strategy,
            brand and web systems.
          </motion.p>

          <motion.div 
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }} 
            {...fadeUp} 
            transition={{ delay: 0.65 }}
          >
            <a href="/services" className="btn-primary">Services</a>
            <a href="/contact" className="btn-ghost">Start project</a>
          </motion.div>

        </motion.div>
      </section>

      {/* Services below remain same */}

      <section className="section-block">
        <header className="section-header">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            From web systems to branding — we support companies with the essentials that drive growth.
          </p>
        </header>

        <div className="grid grid-3">
          {/* Full Stack Web */}
          <a
            className="card card-link"
            href="https://velano-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="service-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 3h8v8H3V3m10 0h8v8h-8V3M3 13h8v8H3v-8m10 0h8v8h-8v-8Z" />
            </svg>
            <div className="card-label">01 · Web Systems</div>
            <h3 className="card-title">Full-stack web development</h3>
            <p className="card-body">
              Internal tools + online experiences that drive real business operations.
            </p>
            <span className="project-link">Visit Velano ↗</span>
          </a>

          {/* Company websites */}
          <article className="card">
            <svg className="service-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18m0 2a7 7 0 0 1 6.93 6H12V5m0 14a7 7 0 0 1-6.93-6H12v6Z" />
            </svg>
            <div className="card-label">02 · Web Presence</div>
            <h3 className="card-title">Company & product websites</h3>
            <p className="card-body">
              Clear, modern websites designed to convert the right audience with confidence.
            </p>
          </article>

          {/* Branding */}
          <article className="card">
            <svg className="service-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14 2l8 8l-12 12H2v-8zm-2.5 4.91L7.91 10.5L6 8.59L11.59 3L13 4.41z" />
            </svg>
            <div className="card-label">03 · Branding</div>
            <h3 className="card-title">Brand identity for new companies</h3>
            <p className="card-body">
              Strategy + identity foundations for teams defining themselves for the first time.
            </p>
          </article>

          {/* Re-Branding */}
          <article className="card">
            <svg className="service-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.3 0 6 2.7 6 6a6 6 0 0 1-11.9 1H4a8 8 0 0 0 15.9-1c0-4.4-3.6-8-8-8z" />
            </svg>
            <div className="card-label">04 · Re-Branding</div>
            <h3 className="card-title">Modernizing established brands</h3>
            <p className="card-body">
              Updating identity & messaging to reflect current market positioning.
            </p>
          </article>

          {/* InkForge — Graphic Design */}
          <a
            className="card card-link"
            href="https://inkforge-by-avoliro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="service-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M2 4h20v2H2V4m0 14h20v2H2v-2m0-7h20v2H2v-2Z" />
            </svg>
            <div className="card-label">05 · InkForge</div>
            <h3 className="card-title">Graphic design & creative assets</h3>
            <p className="card-body">
              Visual content that strengthens how your brand looks in everyday communication.
            </p>
            <span className="project-link">Visit InkForge ↗</span>
          </a>
        </div>
      </section>
    </div>
  )
}