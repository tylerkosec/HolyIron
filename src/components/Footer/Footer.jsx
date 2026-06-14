import { Link } from 'react-router-dom'
import { shop, artists } from '../../data/artists'
import './Footer.css'

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  shop.address || 'Holy Iron Tattoo Fort Collins Colorado'
)}`

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* LEFT — stacked artist names */}
        <div className="footer-col footer-col--artists">
          <p className="footer-col-title">The Artists</p>
          <nav className="footer-artist-stack">
            {artists.map(artist => (
              <Link key={artist.id} to={`/artists/${artist.id}`} className="footer-artist-name">
                {artist.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* CENTER — logo links to top */}
        <div className="footer-col footer-col--center">
          <a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="footer-logo-link">
            <img
              src="/assets/logo/holy-iron-logo.png"
              alt="Holy Iron Tattoo — back to top"
              className="footer-logo"
              onError={e => { e.target.style.display = 'none' }}
            />
          </a>
        </div>

        {/* RIGHT — address, hours, map */}
        <div className="footer-col footer-col--visit">
          <p className="footer-col-title">Visit</p>
          {shop.address && <p className="footer-address">{shop.address}</p>}
          {shop.phone && (
            <a href={`tel:${shop.phone}`} className="footer-detail">{shop.phone}</a>
          )}
          {shop.hours.length > 0 && (
            <div className="footer-hours">
              {shop.hours.map((line, i) => <p key={i}>{line}</p>)}
            </div>
          )}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            Get Directions
          </a>
          <a
            href={`https://www.instagram.com/${shop.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-ig"
          >
            @{shop.instagram}
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Holy Iron Tattoo. All rights reserved.</p>
      </div>
    </footer>
  )
}
