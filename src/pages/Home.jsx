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

        <motion.div className="hero-content" initial="initial" animate="animate">
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
            We help companies elevate everything — through branding, digital products and
            communication systems.
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

      <section className="section-block">
        <header className="section-header">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Two expert sub-brands — one strategic direction.
          </p>
        </header>

        <div className="grid grid-3">

          {/* Velano Web Systems */}
          <a
            className="card card-link"
            href="https://velano-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="service-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 3h8v8H3V3m10 0h8v8h-8V3M3 13h8v8H3v-8m10 0h8v8h-8v-8Z"/>
            </svg>
            <div className="card-label">01 · Velano</div>
            <h3 className="card-title">Full-Stack Web Systems</h3>
            <p className="card-body">Long-term operational infrastructure for real businesses.</p>
            <span className="project-link">Visit Velano ↗</span>
          </a>

          {/* Velano Websites */}
          <a
            className="card card-link"
            href="https://velano-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="service-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18Z"/>
            </svg>
            <div className="card-label">02 · Velano</div>
            <h3 className="card-title">Company & Product Websites</h3>
            <p className="card-body">Sales-driven presence with strategy-first messaging.</p>
            <span className="project-link">Visit Velano ↗</span>
          </a>

          {/* InkForge Branding */}
          <a
            className="card card-link"
            href="https://inkforge-by-avoliro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="service-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14 2l8 8l-12 12H2v-8z"/>
            </svg>
            <div className="card-label">03 · InkForge</div>
            <h3 className="card-title">Branding</h3>
            <p className="card-body">Identity that reflects who you are — and who you want to be.</p>
            <span className="project-link">Visit InkForge ↗</span>
          </a>

          {/* InkForge ReBranding */}
          <a
            className="card card-link"
            href="https://inkforge-by-avoliro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="service-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 4V1L8 5l4 4V6z"/>
            </svg>
            <div className="card-label">04 · InkForge</div>
            <h3 className="card-title">Re-Branding</h3>
            <p className="card-body">Modernizing outdated brands for a competitive edge.</p>
            <span className="project-link">Visit InkForge ↗</span>
          </a>

          {/* InkForge Creative Studio */}
          <a
            className="card card-link"
            href="https://inkforge-by-avoliro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="service-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M2 4h20v2H2z"/>
            </svg>
            <div className="card-label">05 · InkForge</div>
            <h3 className="card-title">Graphic Design</h3>
            <p className="card-body">Visual content that elevates everyday brand communication.</p>
            <span className="project-link">Visit InkForge ↗</span>
          </a>

        </div>
      </section>
    </div>
  )
}