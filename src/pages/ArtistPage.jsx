import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { artists } from '../data/artists'
import InstagramFeed from '../components/InstagramFeed/InstagramFeed'
import './ArtistPage.css'

export default function ArtistPage() {
  const { slug } = useParams()
  const artist = artists.find(a => a.id === slug)

  if (!artist) {
    return (
      <div className="artist-not-found">
        <p>Artist not found.</p>
        <Link to="/" className="btn-outline">Back to Home</Link>
      </div>
    )
  }

  return (
    <main className="artist-page">
      {/* Header */}
      <div className="artist-hero">
        {artist.photo && (
          <img src={artist.photo} alt={artist.name} className="artist-hero-bg" />
        )}
        <div className="artist-hero-overlay" />
        <motion.div
          className="artist-hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="artist-back">← All Artists</Link>
          <p className="section-label">{artist.role}</p>
          <h1 className="artist-name">{artist.name}</h1>
          <a
            href={`https://www.instagram.com/${artist.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-ig-link"
          >
            @{artist.instagram}
          </a>
        </motion.div>
      </div>

      {/* Bio */}
      {artist.bio && (
        <div className="artist-bio-section">
          <div className="artist-bio-inner">
            <p className="artist-bio">{artist.bio}</p>
          </div>
        </div>
      )}

      {/* Portfolio gallery */}
      {artist.portfolio && artist.portfolio.length > 0 && (
        <section className="artist-portfolio-section">
          <div className="artist-portfolio-inner">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Recent Work</h2>
            <div className="divider divider-left" />
            <div className="artist-portfolio-grid">
              {artist.portfolio.map((src, i) => (
                <a
                  key={i}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="artist-portfolio-tile"
                >
                  <img src={src} alt={`${artist.name} tattoo ${i + 1}`} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Instagram feed */}
      <section className="artist-ig-section">
        <div className="artist-ig-inner">
          <p className="section-label">Follow Along</p>
          <h2 className="section-title">From the feed</h2>
          <div className="divider divider-left" />
          <InstagramFeed handle={artist.instagram} igTokenKey={artist.igTokenKey} count={9} />
        </div>
      </section>

      {/* Book CTA */}
      <section className="artist-book-section">
        <motion.div
          className="artist-book-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Ready to book?</p>
          <h2 className="section-title">Work with {artist.name}</h2>
          <div className="divider" />
          <p className="artist-book-description">
            Slide into the DMs on Instagram or send an email — {artist.name} will
            get back to you to talk through your idea and get you scheduled.
          </p>
          <div className="artist-book-actions">
            <a
              href={`https://www.instagram.com/${artist.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              DM on Instagram
            </a>
            {artist.email && (
              <a
                href={`mailto:${artist.email}`}
                className="btn-outline"
              >
                Send an Email
              </a>
            )}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
