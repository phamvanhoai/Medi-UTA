import './Header.css'
import '../../styles/global.css';
import React, { useState, useRef, useEffect } from 'react'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)     // mobile header overlay
  const [openDropdown, setOpenDropdown] = useState(false) // Products submenu
  const dropdownRef = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  return (
    <header className={`site-header ${openMenu ? 'open' : ''}`}>
      <div className="container header-container">
        {/* Hamburger */}
        <div
          className={`menu-toggle ${openMenu ? 'active' : ''}`}
          id="menuToggle"
          onClick={() => setOpenMenu(v => !v)}
          role="button"
          aria-label="Toggle menu"
          aria-expanded={openMenu}
        >
          <span></span><span></span><span></span>
        </div>

        {/* Logo */}
        <a href="#" className="logo">
          <img src="/assets/images/Logo-Medi-UTA.png" alt="Medi UTA Logo" />
        </a>

        {/* Nav */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li className={`dropdown ${openDropdown ? 'open' : ''}`} ref={dropdownRef}>
              <a
                href="#"
                className="dropdown-toggle"
                onClick={(e) => { e.preventDefault(); setOpenDropdown(v => !v) }}
              >
                Products <img src="/assets/images/641_465.svg" alt="dropdown arrow" className="arrow" />
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">PubExplainer</a></li>
                <li><a href="#">MedExplainer</a></li>
              </ul>
            </li>
            <li><a href="#">Careers</a></li>
            <li><a href="#case-study">Case Studies</a></li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <a href="#" className="btn btn-primary btn-small">BOOK FREE DEMO</a>
          <a href="tel:+31851119799" className="phone-number">or call: +31 (0)85 111 9799</a>
        </div>
      </div>
    </header>
  )
}
