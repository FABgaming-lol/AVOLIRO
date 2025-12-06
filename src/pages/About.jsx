import React from "react";

export default function About() {
  return (
    <div className="page-shell">
      <header className="section-header">
        <h2 className="section-title">About Avoliro</h2>
        <p className="section-desc">
          We elevate everything — your presence, performance & potential.
        </p>
      </header>

      <p className="section-body" style={{ maxWidth: "700px" }}>
        Avoliro is a business-focused design and technology company. We combine
        strategic thinking with practical execution to help organizations stand out
        and scale. We build strong brands and digital systems that move businesses forward.
      </p>

      <h3 className="section-category" style={{ marginTop: "42px" }}>
        Sub-Brands & Capabilities
      </h3>

      <ul className="about-list">
        <li>
          <strong>Velano</strong> — Web & Digital Systems<br />
          High-performance websites, dashboards, automation and scalable digital products.
        </li>
        <li>
          <strong>InkForge</strong> — Branding & Creative<br />
          Identity design, re-branding, marketing visuals & communication systems.
        </li>
      </ul>

      <p className="section-body" style={{ marginTop: "30px", maxWidth: "700px" }}>
        Through Velano and InkForge, we deliver a complete growth system: presence, operations,
        marketing, and brand trust — everything under one direction.
      </p>
    </div>
  );
}