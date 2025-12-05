import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleBrandClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileOpen(false)
  }

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className={`nav-shell ${solid ? 'nav-solid' : ''}`}>
      <div className="nav-inner">
        <button className="brand-mark" onClick={handleBrandClick}>
          <img src={logo} alt="Avoliro logo" className="brand-logo-img" />
          <div className="brand-name">AVOLIRO</div>
        </button>

        <nav className="nav-links-desktop">
          <NavLink to="/" className="nav-link" onClick={closeMobile}>
            Home
          </NavLink>
          <NavLink to="/work" className="nav-link" onClick={closeMobile}>
            Work
          </NavLink>
          <NavLink to="/services" className="nav-link" onClick={closeMobile}>
            Services
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMobile}>
            Studio
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMobile}>
            Contact
          </NavLink>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <div className="nav-toggle-lines">
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-menu">
          <NavLink to="/" className="nav-mobile-item" onClick={closeMobile}>
            Home
          </NavLink>
          <NavLink to="/work" className="nav-mobile-item" onClick={closeMobile}>
            Work
          </NavLink>
          <NavLink to="/services" className="nav-mobile-item" onClick={closeMobile}>
            Services
          </NavLink>
          <NavLink to="/about" className="nav-mobile-item" onClick={closeMobile}>
            Studio
          </NavLink>
          <NavLink to="/contact" className="nav-mobile-item" onClick={closeMobile}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  )
}