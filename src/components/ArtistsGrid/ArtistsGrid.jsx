import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ArtistRow from '../ArtistRow/ArtistRow'
import { artists } from '../../data/artists'
import './ArtistsGrid.css'

export default function ArtistsGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="artists" className="artists-section" ref={ref}>
      <motion.div
        className="artists-header"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">The Artists</p>
        <h2 className="section-title">Find your artist</h2>
        <div className="divider" />
      </motion.div>

      <div className="artists-stack">
        {artists.map((artist, index) => (
          <ArtistRow key={artist.id} artist={artist} index={index} />
        ))}
      </div>
    </section>
  )
}
