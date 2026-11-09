import { useEffect } from 'react'

const SITE = 'https://www.holyirontattoo.com'

function setTag(selector, attr, value, create) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

// Sets the page title, Google description and canonical link for each page.
export default function usePageMeta({ title, description, path = '/', breadcrumb = null }) {
  // Breadcrumb markup for inner pages (Home > this page).
  useEffect(() => {
    const id = 'ld-breadcrumb'
    document.getElementById(id)?.remove()
    if (!breadcrumb) return
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = id
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Holy Iron Tattoo', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: breadcrumb, item: SITE + path },
      ],
    })
    document.head.appendChild(s)
    return () => s.remove()
  }, [breadcrumb, path])

  useEffect(() => {
    const url = SITE + path
    document.title = title
    setTag('meta[name="description"]', 'content', description, () => {
      const m = document.createElement('meta'); m.name = 'description'; return m
    })
    setTag('link[rel="canonical"]', 'href', url, () => {
      const l = document.createElement('link'); l.rel = 'canonical'; return l
    })
    setTag('meta[property="og:title"]', 'content', title, () => {
      const m = document.createElement('meta'); m.setAttribute('property', 'og:title'); return m
    })
    setTag('meta[property="og:description"]', 'content', description, () => {
      const m = document.createElement('meta'); m.setAttribute('property', 'og:description'); return m
    })
    setTag('meta[property="og:url"]', 'content', url, () => {
      const m = document.createElement('meta'); m.setAttribute('property', 'og:url'); return m
    })
    setTag('meta[name="twitter:title"]', 'content', title, () => {
      const m = document.createElement('meta'); m.name = 'twitter:title'; return m
    })
    setTag('meta[name="twitter:description"]', 'content', description, () => {
      const m = document.createElement('meta'); m.name = 'twitter:description'; return m
    })
  }, [title, description, path])
}
