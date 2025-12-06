import React from "react";

export default function Services() {
  return (
    <div className="page-shell">

      <header className="section-header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-desc">
          Unified strategy. Specialized execution. Elevate Everything.
        </p>
      </header>

      <section className="services-section">
        <h3 className="services-cat">Velano — Web & Digital Systems</h3>

        <div className="grid grid-2">
          <a
            className="card card-link"
            href="https://velano-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="card-title">Web & Digital Systems</h4>
            <p className="card-body">
              High-performance websites, dashboards, and operations portals — everything your business runs on.
            </p>
            <span className="project-link">Explore Velano ↗</span>
          </a>
        </div>
      </section>

      <section className="services-section">
        <h3 className="services-cat">InkForge — Branding & Creative</h3>

        <div className="grid grid-2">
          <a
            className="card card-link"
            href="https://inkforge-by-avoliro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="card-title">Branding & Creative</h4>
            <p className="card-body">
              Re-branding, identity, marketing visuals — consistent design across every touchpoint.
            </p>
            <span className="project-link">Explore InkForge ↗</span>
          </a>
        </div>
      </section>

    </div>
  );
}