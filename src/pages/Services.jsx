import React from 'react'

export default function Services() {
  return (
    <div className="page-shell">
      <header className="section-header">
        <h2 className="section-title">All Services</h2>
        <p className="section-desc">
  We elevate everything essential for business growth — design, identity and digital operations.
</p>
      </header>

      <div className="grid grid-3">

        {/* Full Web */}
        <a
          className="card card-link"
          href="https://velano-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="service-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 3h8v8H3V3m10 0h8v8h-8V3M3 13h8v8H3v-8m10 0h8v8h-8v-8Z" />
          </svg>
          <h3 className="card-title">Full-stack Web Systems</h3>
          <p>Dashboard software & web tools designed to operate business infrastructures.</p>
        </a>

        {/* Websites */}
        <article className="card">
          <svg className="service-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18m0 2a7 7 0 0 1 6.93 6H12V5m0 14a7 7 0 0 1-6.93-6H12v6Z" />
          </svg>
          <h3 className="card-title">Websites</h3>
          <p>Digital presence that drives real action and informs the right people.</p>
        </article>

        {/* Branding */}
        <article className="card">
          <svg className="service-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M14 2l8 8l-12 12H2v-8zm-2.5 4.91L7.91 10.5L6 8.59L11.59 3L13 4.41z" />
          </svg>
          <h3 className="card-title">Branding</h3>
          <p>Identity and foundational brand systems for early-stage teams.</p>
        </article>

        {/* Re-Branding */}
        <article className="card">
          <svg className="service-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.3 0 6 2.7 6 6a6 6 0 0 1-11.9 1H4a8 8 0 0 0 15.9-1c0-4.4-3.6-8-8-8z" />
          </svg>
          <h3 className="card-title">Re-Branding</h3>
          <p>Modernizing established brands for competitive advantages.</p>
        </article>

        {/* InkForge */}
        <a
          className="card card-link"
          href="https://inkforge-by-avoliro.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="service-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M2 4h20v2H2V4m0 14h20v2H2v-2m0-7h20v2H2v-2Z" />
          </svg>
          <h3 className="card-title">InkForge — Graphic Design</h3>
          <p>Visual assets and creative design that elevate brand communication.</p>
        </a>
      </div>
    </div>
  )
}