import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import InstagramFeed from '../InstagramFeed/InstagramFeed'
import './ArtistCard.css'

export default function ArtistCard({ artist }) {
  return (
    <motion.div
      className="artist-card"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {/* Header */}
      <div className="artist-card-image">
        {artist.photo ? (
          <img src={artist.photo} alt={artist.name} />
        ) : (
          <div className="artist-card-placeholder" />
        )}
        <div className="artist-card-overlay" />
        <div className="artist-card-header-info">
          <h3 className="artist-card-name">{artist.name}</h3>
          <p className="artist-card-role">{artist.role}</p>
        </div>
      </div>

      {/* IG Feed preview */}
      <div className="artist-card-feed">
        <a
          href={`https://www.instagram.com/${artist.instagram}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="artist-card-ig-handle"
          onClick={e => e.stopPropagation()}
        >
          @{artist.instagram}
        </a>
        <InstagramFeed handle={artist.instagram} igTokenKey={artist.igTokenKey} count={6} />
      </div>

      {/* Footer CTA */}
      <Link to={`/artists/${artist.id}`} className="artist-card-cta-row">
        <span>Full Profile &amp; Booking</span>
        <span className="artist-card-arrow">→</span>
      </Link>
    </motion.div>
  )
}
