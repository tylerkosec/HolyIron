import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Hero from '../components/Hero/Hero'
import ArtistsGrid from '../components/ArtistsGrid/ArtistsGrid'
import ShopSection from '../components/ShopSection/ShopSection'
import InstagramFeed from '../components/InstagramFeed/InstagramFeed'
import Divider from '../components/Divider/Divider'
import { shop } from '../data/artists'
import './Home.css'

export default function Home() {
  const igRef = useRef(null)
  const igInView = useInView(igRef, { once: true, margin: '-80px' })

  return (
    <main>
      <Hero />
      <Divider />
      <ArtistsGrid />
      <Divider />
      <ShopSection />
      <Divider />

      <section id="instagram" className="home-ig-section" ref={igRef}>
        <motion.div
          className="home-ig-inner"
          initial={{ opacity: 0, y: 24 }}
          animate={igInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Holy Iron on Instagram</p>
          <h2 className="section-title">Forged From The Iron</h2>
          <div className="divider" />
          <InstagramFeed
            handle={shop.instagram}
            igTokenKey={shop.igTokenKey}
            count={9}
          />
        </motion.div>
      </section>
    </main>
  )
}
