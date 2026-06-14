import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Hero from '../components/Hero/Hero'
import ArtistsGrid from '../components/ArtistsGrid/ArtistsGrid'
import ShopSection from '../components/ShopSection/ShopSection'
import Divider from '../components/Divider/Divider'
import { artists } from '../data/artists'
import './Home.css'

const allPhotos = [
  '/assets/images/portfolio/kira/IMG_0377.jpeg',
  '/assets/images/portfolio/tanis/IMG_1100.jpeg',
  '/assets/images/portfolio/ivy/image0.jpeg',
  '/assets/images/portfolio/jimbear/IMG_2213.jpeg',
  '/assets/images/portfolio/dovah/IMG_9785.jpeg',
  '/assets/images/portfolio/kira/IMG_7541.jpeg',
  '/assets/images/portfolio/tanis/IMG_8003.jpeg',
  '/assets/images/portfolio/ivy/image1.jpeg',
  '/assets/images/portfolio/jimbear/IMG_5985.jpeg',
  '/assets/images/portfolio/dovah/IMG_5796.jpeg',
  '/assets/images/portfolio/kira/IMG_8732.jpeg',
  '/assets/images/portfolio/tanis/IMG_5436.jpeg',
  '/assets/images/portfolio/ivy/image3.jpeg',
  '/assets/images/portfolio/jimbear/IMG_7090.jpeg',
  '/assets/images/portfolio/dovah/IMG_6523.jpeg',
  '/assets/images/portfolio/kira/IMG_0716.jpeg',
  '/assets/images/portfolio/tanis/IMG_8596.jpeg',
  '/assets/images/portfolio/ivy/image7.jpeg',
  '/assets/images/portfolio/kira/E823B05A-BF13-44CA-AE22-C1630985FEBD.jpeg',
  '/assets/images/portfolio/tanis/IMG_4960.jpeg',
  '/assets/images/portfolio/ivy/image9.jpeg',
  '/assets/images/portfolio/dovah/IMG_3852.jpeg',
  '/assets/images/portfolio/kira/IMG_4601.jpeg',
  '/assets/images/portfolio/tanis/IMG_7106.jpeg',
  '/assets/images/portfolio/ivy/image2.jpeg',
  '/assets/images/portfolio/jimbear/IMG_5811.jpeg',
  '/assets/images/portfolio/dovah/IMG_6993.jpeg',
  '/assets/images/portfolio/kira/IMG_7634.jpeg',
  '/assets/images/portfolio/tanis/IMG_8004.jpeg',
  '/assets/images/portfolio/ivy/image4.jpeg',
  '/assets/images/portfolio/kira/IMG_3375.jpeg',
  '/assets/images/portfolio/tanis/IMG_8706.jpeg',
  '/assets/images/portfolio/ivy/image8.jpeg',
  '/assets/images/portfolio/kira/IMG_5559.jpeg',
  '/assets/images/portfolio/tanis/IMG_8910.jpeg',
  '/assets/images/portfolio/ivy/image10.jpeg',
  '/assets/images/portfolio/kira/IMG_8186.jpeg',
  '/assets/images/portfolio/tanis/IMG_8005.jpeg',
  '/assets/images/portfolio/ivy/image12.jpeg',
  '/assets/images/portfolio/kira/IMG_8635.jpeg',
  '/assets/images/portfolio/ivy/image13.jpeg',
]

export default function Home() {
  const galleryRef = useRef(null)
  const galleryInView = useInView(galleryRef, { once: true, margin: '-80px' })

  return (
    <main>
      <Hero />
      <Divider />
      <ArtistsGrid />
      <Divider />
      <ShopSection />
      <Divider />

      <section id="gallery" className="home-ig-section" ref={galleryRef}>
        <motion.div
          className="home-ig-inner"
          initial={{ opacity: 0, y: 24 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Holy Iron on Instagram</p>
          <h2 className="section-title">Forged From The Iron</h2>
          <div className="divider" />
          <div className="home-gallery-grid">
            {allPhotos.map((src, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/holyirontattoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="home-gallery-tile"
                initial={{ opacity: 0 }}
                animate={galleryInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.03 }}
              >
                <img src={src} alt={`Holy Iron Tattoo portfolio ${i + 1}`} loading="lazy" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
