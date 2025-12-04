import React, { useState } from 'react'
import SectionReveal from '../components/SectionReveal.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="page-shell">
      <SectionReveal className="section-block">
        <div className="section-header">
          <div>
            <h1 className="section-title">Start a project</h1>
            <p className="section-desc">
              A short message is enough to start the conversation. More detail can follow
              once we know the basics.
            </p>
          </div>
        </div>

        <div className="grid grid-2">
          <article className="card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="field">
                <span>Company or project name</span>
                <input type="text" name="company" required />
              </label>

              <label className="field">
                <span>What do you need help with?</span>
                <textarea name="details" rows="3" required />
              </label>

              <label className="field">
                <span>Current website / links (optional)</span>
                <textarea name="links" rows="2" />
              </label>

              <label className="field">
                <span>Contact email</span>
                <input type="email" name="email" required />
              </label>

              <button type="submit" className="btn-primary">
                Send message <span>↗</span>
              </button>

              {sent && (
                <p className="card-body" style={{ marginTop: '10px' }}>
                  This demo form doesn&apos;t send yet. In a live setup it can be connected
                  to an email provider or form handler.
                </p>
              )}
            </form>
          </article>

          <article className="card">
            <div className="card-label">What to include</div>
            <p className="card-body">
              A short description of your company, a rough idea of scope (for example:
              &quot;new marketing site&quot; or &quot;update our existing site&quot;), and
              any timing constraints.
            </p>
            <p className="card-body">
              Typical responses are within 2–3 working days. If the project is not the right
              fit, you will still get a clear answer so you can move forward quickly.
            </p>
          </article>
        </div>
      </SectionReveal>
    </main>
  )
}