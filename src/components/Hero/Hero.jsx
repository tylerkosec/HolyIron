import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85
    }
  }, [])

  const handleScrollDown = () => {
    const el = document.getElementById('artists')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/video/herovideo.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.img
          src="/assets/logo/holy-iron-logo.png"
          alt="Holy Iron Tattoo"
          className="hero-logo"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <motion.p
          className="hero-location"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        >
          Glenwood Springs, Colorado
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
        >
          <button className="btn-primary" onClick={handleScrollDown}>
            Meet the Artists
          </button>
          <a
            href="https://www.instagram.com/holyirontattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            @holyirontattoo
          </a>
        </motion.div>
      </div>

      <motion.button
        className="hero-scroll"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        aria-label="Scroll down"
      >
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </motion.button>
    </section>
  )
}
