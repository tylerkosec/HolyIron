import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './ShopSection.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const shopPhotos = [
  { src: '/assets/images/misc/IMG_0465.jpg', alt: 'Holy Iron Tattoo' },
  { src: '/assets/images/misc/IMG_0477.jpg', alt: 'Holy Iron Tattoo' },
  { src: '/assets/images/misc/IMG_0481.jpg', alt: 'Holy Iron Tattoo' },
  { src: '/assets/images/misc/IMG_0492.jpg', alt: 'Holy Iron Tattoo' },
  { src: '/assets/images/misc/IMG_0498.jpg', alt: 'Holy Iron Tattoo' },
]

export default function ShopSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="shop" className="shop-section" ref={ref}>
      <div className="shop-inner">
        <motion.div
          className="shop-text"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Our History</p>
          <h2 className="section-title">Holy Iron Tattoo</h2>
          <p className="shop-formerly">Formerly White Lodge Tattoo and Gallery</p>
          <div className="divider divider-left" />
          <p className="shop-description">
            Opened in May of 2016 by fellow artist Aften Willcuts. Over the last
            10 years the shop has grown into an amazing space attracting other
            like-minded artists. We strive for a safe and clean place for clients
            and artists to communicate and be.
          </p>
          <p className="shop-tagline">Good vibes only.</p>
          <a
            href="https://www.instagram.com/holyirontattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Follow the Shop
          </a>
        </motion.div>

        <motion.div
          className="shop-grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {shopPhotos.map((photo, i) => (
            <motion.div
              key={i}
              className={`shop-photo shop-photo--${i + 1}`}
              variants={fadeUp}
            >
              <img src={photo.src} alt={photo.alt} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
