import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

// TODO: Fill in your EmailJS credentials
// 1. Create a free account at emailjs.com
// 2. Add an Email Service (Gmail works fine)
// 3. Create a Template with these variables:
//    {{artist_name}}, {{from_name}}, {{from_email}}, {{phone}},
//    {{idea}}, {{placement}}, {{size}}, {{dates}}, {{to_email}}
// 4. Set to_email in the template to route to the artist's address
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function ContactForm({ artist }) {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [fields, setFields] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    idea: '',
    placement: '',
    size: '',
    dates: '',
  })

  const handleChange = (e) => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          ...fields,
          artist_name: artist.name,
          to_email: artist.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFields({ from_name: '', from_email: '', phone: '', idea: '', placement: '', size: '', dates: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-success">
        <div className="contact-success-icon">✦</div>
        <h3>Request Sent</h3>
        <p>{artist.name} will be in touch soon.</p>
        <button className="btn-outline" onClick={() => setStatus('idle')}>
          Send Another
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="from_name">Name *</label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            required
            value={fields.from_name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className="contact-field">
          <label htmlFor="from_email">Email *</label>
          <input
            id="from_email"
            name="from_email"
            type="email"
            required
            value={fields.from_email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={fields.phone}
          onChange={handleChange}
          placeholder="Optional"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="idea">Tattoo Idea *</label>
        <textarea
          id="idea"
          name="idea"
          required
          rows={5}
          value={fields.idea}
          onChange={handleChange}
          placeholder="Describe what you're thinking — subject matter, style, references, vibe..."
        />
      </div>

      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="placement">Body Placement</label>
          <input
            id="placement"
            name="placement"
            type="text"
            value={fields.placement}
            onChange={handleChange}
            placeholder="e.g. forearm, ribcage..."
          />
        </div>
        <div className="contact-field">
          <label htmlFor="size">Approximate Size</label>
          <input
            id="size"
            name="size"
            type="text"
            value={fields.size}
            onChange={handleChange}
            placeholder="e.g. palm-sized, half-sleeve..."
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="dates">Preferred Dates / Availability</label>
        <input
          id="dates"
          name="dates"
          type="text"
          value={fields.dates}
          onChange={handleChange}
          placeholder="e.g. weekends in July, flexible..."
        />
      </div>

      {status === 'error' && (
        <p className="contact-error">Something went wrong. Please try again or DM us on Instagram.</p>
      )}

      <button
        type="submit"
        className="btn-primary contact-submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : `Book with ${artist.name}`}
      </button>
    </form>
  )
}
