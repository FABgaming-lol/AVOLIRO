import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-shell">
      <div className="footer-inner">
        <span>© {year} Avoliro Studio</span>
        <span>Bold, minimal web experiences with focus.</span>
      </div>
    </footer>
  )
}