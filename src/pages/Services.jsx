import React from 'react'

export default function Services() {
  return (
    <div className="page-shell">
      <header className="section-header">
        <h2 className="section-title">All Services</h2>
        <p className="section-desc">
          Two expert sub-brands — one mission: Elevate Everything.
        </p>
      </header>

      <h3 className="section-title" style={{ margin: '24px 0 12px' }}>Velano — Web Systems</h3>
      <div className="grid grid-3">
        <a className="card card-link" href="https://velano-portfolio.vercel.app/" target="_blank">
          <h3 className="card-title">Full-stack Web Systems</h3>
          <p>Long-term digital infrastructure for growing teams.</p>
        </a>

        <a className="card card-link" href="https://velano-portfolio.vercel.app/" target="_blank">
          <h3 className="card-title">Company & Product Websites</h3>
          <p>Sales-driven presence built with purpose.</p>
        </a>
      </div>

      <h3 className="section-title" style={{ margin: '40px 0 12px' }}>InkForge — Branding & Creative</h3>
      <div className="grid grid-3">
        <a className="card card-link" href="https://inkforge-by-avoliro.vercel.app/" target="_blank">
          <h3 className="card-title">Branding</h3>
          <p>Identity systems for new companies.</p>
        </a>

        <a className="card card-link" href="https://inkforge-by-avoliro.vercel.app/" target="_blank">
          <h3 className="card-title">Re-Branding</h3>
          <p>Refreshing outdated brands to stay relevant.</p>
        </a>

        <a className="card card-link" href="https://inkforge-by-avoliro.vercel.app/" target="_blank">
          <h3 className="card-title">Graphic Design</h3>
          <p>Creative assets used daily — social media, print, campaigns.</p>
        </a>
      </div>
    </div>
  )
}