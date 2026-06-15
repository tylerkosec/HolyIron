import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import InstagramFeed from '../InstagramFeed/InstagramFeed'
import './ArtistRow.css'

export default function ArtistRow({ artist, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const bookingUrl = artist.booking.type === 'form'
    ? artist.booking.url
    : `https://ig.me/m/${artist.instagram}`

  return (
    <motion.div
      ref={ref}
      className="artist-row"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06, ease: 'easeOut' }}
    >
      {/* Portrait */}
      <div className="artist-row-portrait">
        {artist.photo ? (
          <img src={artist.photo} alt={artist.name} style={artist.photoPosition ? { objectPosition: artist.photoPosition } : undefined} />
        ) : (
          <div className="artist-row-portrait-placeholder" />
        )}
      </div>

      {/* Info */}
      <div className="artist-row-info">
        <div className="artist-row-meta">
          <p className="artist-row-role">{artist.role}</p>
          <h2 className="artist-row-name">{artist.name}</h2>
          <a
            href={`https://www.instagram.com/${artist.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-row-handle"
          >
            @{artist.instagram}
          </a>

          {artist.styles?.length > 0 && (
            <ul className="artist-row-styles">
              {artist.styles.map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}

          {artist.bio && (
            <p className="artist-row-bio">{artist.bio}</p>
          )}
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="artist-row-dm btn-primary"
        >
          {artist.booking.label}
        </a>
      </div>

      {/* Portfolio or IG Feed */}
      <div className="artist-row-feed">
        {artist.portfolio && artist.portfolio.length > 0 ? (
          <div className="artist-row-portfolio">
            <a
              href={`https://www.instagram.com/${artist.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-handle"
            >
              <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @{artist.instagram}
            </a>
            <div className="artist-row-portfolio-grid">
              {artist.portfolio.slice(0, 9).map((src, i) => (
                <a
                  key={i}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="artist-row-portfolio-tile"
                >
                  <img src={src} alt={`${artist.name} tattoo ${i + 1}`} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        ) : (
          <InstagramFeed
            handle={artist.instagram}
            igTokenKey={artist.igTokenKey}
            count={6}
          />
        )}
      </div>
    </motion.div>
  )
}
