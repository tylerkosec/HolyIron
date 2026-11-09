import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { artists } from '../data/artists'
import InstagramFeed from '../components/InstagramFeed/InstagramFeed'
import usePageMeta from '../hooks/usePageMeta'
import './ArtistPage.css'

// Google description: who they are, what they do, where, in about 150 to 160 characters.
function artistDescription(a) {
  const piercer = a.role.includes('Piercer')
  const who = a.role.toLowerCase().startsWith('owner') ? 'the owner and a tattoo artist' : piercer ? 'the piercer' : 'a tattoo artist'
  const lead = `${a.name} is ${who} at Holy Iron Tattoo in Glenwood Springs, CO`
  const end = piercer ? ', using titanium and 14k gold jewelry. See the work and book.' : '. See the work and book.'
  const word = s => s.replace(/&/g, 'and').toLowerCase().replace(/\b(american|japanese)\b/g, m => m[0].toUpperCase() + m.slice(1))
  let styles = (a.styles || []).map(word)
  const list = l => l.length > 1 ? l.slice(0, -1).join(', ') + ' and ' + l.at(-1) : l[0]
  const build = l => l.length ? `${lead}, doing ${list(l)} work${end}` : `${lead}${end}`
  while (styles.length > 1 && build(styles).length > 160) styles = styles.slice(0, -1)
  return build(styles)
}

export default function ArtistPage() {
  const { slug } = useParams()
  const artist = artists.find(a => a.id === slug)

  const job = artist?.role?.includes('Piercer') ? 'Piercer' : 'Tattoo Artist'
  usePageMeta({
    title: artist
      ? `${artist.name}, ${job} in Glenwood Springs | Holy Iron`
      : 'Artist not found | Holy Iron Tattoo',
    description: artist ? artistDescription(artist) : 'Holy Iron Tattoo, Glenwood Springs, Colorado.',
    path: `/artists/${slug}`,
    breadcrumb: artist ? artist.name : null,
  })

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
            Message {artist.name} on Instagram{artist.email ? ' or by email' : ''} to
            talk through your idea and get on the schedule.
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
