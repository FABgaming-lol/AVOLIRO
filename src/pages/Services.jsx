import React from "react";

export default function Services() {
  return (
    <div className="page-shell premium-page">

      <section className="services-hero">
        <h1 className="services-main-title">Our Services</h1>
        <p className="services-sub">
          We create business-ready solutions with bold design and scalable technology.
        </p>
      </section>

      <section className="services-section">
        <h3 className="services-cat">Velano — Web & Digital Systems</h3>

        <div className="grid grid-2">
          <a
            className="service-card"
            href="https://velano-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card-index">01</span>
            <h4 className="service-title">Web & Digital Systems</h4>
            <p className="service-body">
              High-performance websites, dashboards and automation tools that scale with your business.
            </p>
            <span className="service-link">Explore Velano ↗</span>
          </a>
        </div>
      </section>

      <section className="services-section">
        <h3 className="services-cat">InkForge — Branding & Creative</h3>

        <div className="grid grid-2">
          <a
            className="service-card"
            href="https://inkforge-by-avoliro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card-index">02</span>
            <h4 className="service-title">Branding & Creative</h4>
            <p className="service-body">
              Identity and re-branding that elevates brand recognition across every touchpoint.
            </p>
            <span className="service-link">Explore InkForge ↗</span>
          </a>
        </div>
      </section>

    </div>
  );
}