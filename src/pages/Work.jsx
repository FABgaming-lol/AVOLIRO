import React from "react";

export default function Work() {
  return (
    <div className="page-shell">
      <header className="section-header">
        <h2 className="section-title">Selected Work</h2>
        <p className="section-desc">
          Real results — powered by our specialized teams under Velano & InkForge.
        </p>
      </header>

      {/* Velano Section */}
      <h3 className="section-category">Velano — Web & Digital Systems</h3>
      <div className="grid grid-3">
        <a className="work-card" href="#" target="_blank" rel="noopener noreferrer">
          <div className="work-thumb placeholder"></div>
          <div className="work-info">
            <h4>Portal System UI</h4>
            <p>Secure dashboard & operations platform.</p>
          </div>
        </a>

        <a className="work-card" href="#" target="_blank" rel="noopener noreferrer">
          <div className="work-thumb placeholder"></div>
          <div className="work-info">
            <h4>Product Landing</h4>
            <p>Fast, conversion-focused product site.</p>
          </div>
        </a>

        <a className="work-card" href="#" target="_blank" rel="noopener noreferrer">
          <div className="work-thumb placeholder"></div>
          <div className="work-info">
            <h4>B2B Website</h4>
            <p>Professional brand-first online presence.</p>
          </div>
        </a>
      </div>

      {/* InkForge Section */}
      <h3 className="section-category" style={{ marginTop: "42px" }}>
        InkForge — Branding & Creative
      </h3>
      <div className="grid grid-3">
        <a className="work-card" href="#" target="_blank" rel="noopener noreferrer">
          <div className="work-thumb placeholder"></div>
          <div className="work-info">
            <h4>Brand Refresh</h4>
            <p>Modern identity for a growing company.</p>
          </div>
        </a>

        <a className="work-card" href="#" target="_blank" rel="noopener noreferrer">
          <div className="work-thumb placeholder"></div>
          <div className="work-info">
            <h4>Campaign Visuals</h4>
            <p>Creative assets for digital campaigns.</p>
          </div>
        </a>

        <a className="work-card" href="#" target="_blank" rel="noopener noreferrer">
          <div className="work-thumb placeholder"></div>
          <div className="work-info">
            <h4>Logo Systems</h4>
            <p>Scalable logo & brand mark systems.</p>
          </div>
        </a>
      </div>
    </div>
  );
}