import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Nav.css'

const links = [
  { label: 'Artists', href: '/#artists' },
  { label: 'The Shop', href: '/#shop' },
  { label: 'Instagram', href: '/#instagram' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const handleNavClick = (href) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <img src="/assets/logo/holy-iron-logo.png" alt="Holy Iron Tattoo" />
        </Link>

        <nav className="nav-links">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#artists"
            className="nav-book"
            onClick={(e) => { e.preventDefault(); handleNavClick('/#artists') }}
          >
            Book Now
          </a>
        </nav>

        <button
          className={`nav-hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="nav-mobile-link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#artists"
              className="nav-mobile-book"
              onClick={(e) => { e.preventDefault(); handleNavClick('/#artists') }}
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
