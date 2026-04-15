import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Collections', to: '/collection' },
  { label: 'Scarves',     to: '/collection' },
  { label: 'Apparel',     to: '/collection' },
  { label: 'Accessories', to: '/collection' },
  { label: 'About Us',    to: '/' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Brand */}
        <Link to="/" className={styles.brand}>TS by TEXSAVERIO</Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map(l => (
            <Link
              key={l.label}
              to={l.to}
              className={`${styles.navLink} ${location.pathname === l.to && l.label === 'Collections' ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button aria-label="Search"><span className="material-symbols-outlined">search</span></button>
          <button aria-label="Wishlist"><span className="material-symbols-outlined">favorite</span></button>
          <button aria-label="Account" className={styles.hideXs}><span className="material-symbols-outlined">person</span></button>
          <button aria-label="Cart" className={styles.cartBtn}>
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className={styles.cartBadge}>2</span>
          </button>
          {/* Hamburger */}
          <button className={styles.hamburger} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            <span className={`material-symbols-outlined`}>{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className={styles.mobileMenu}>
          {navLinks.map(l => (
            <Link key={l.label} to={l.to} className={styles.mobileLink}>{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  )
}
