import React from "react";
import Reveal from "src/components/Reveal.jsx";

export default function Services() {
  return (
    <div className="page-shell">
      <header className="section-header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-desc">
          Unified strategy. Specialized execution. Elevate Everything.
        </p>
      </header>

      <div className="grid grid-2">

  {/* Velano */}
  <Reveal>
    <a
      className="card card-link"
      href="https://velano-portfolio.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-label">01 — Velano</div>
      <h3 className="card-title">Web & Digital Systems</h3>
      <p className="card-body">
        High-performance websites, dashboards, operations portals —
        everything your business runs on.
      </p>
      <span className="project-link">Explore Velano ↗</span>
    </a>
  </Reveal>

  {/* InkForge */}
  <Reveal>
    <a
      className="card card-link"
      href="https://inkforge-by-avoliro.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-label">02 — InkForge</div>
      <h3 className="card-title">Branding & Creative</h3>
      <p className="card-body">
        Identity, re-branding, marketing visuals — consistent design across
        every touchpoint.
      </p>
      <span className="project-link">Explore InkForge ↗</span>
    </a>
  </Reveal>

</div>

      {/* Hidden items preserved for future */}
      <div style={{ display: "none" }}>
        <p>Legacy services hidden for future expansion.</p>
      </div>
    </div>
  );
}