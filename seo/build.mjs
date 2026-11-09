// Builds the plain-HTML question pages, llms.txt and sitemap.xml into public/.
// Run from the project folder: node seo/build.mjs
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { SITE, shop, artists, pages, faqPage } from './content.mjs'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const pub = path.join(root, 'public')
const all = [...pages, faqPage]
const today = new Date().toISOString().slice(0, 10)

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const AREAS = ['Glenwood Springs', 'Carbondale', 'Basalt', 'Aspen', 'Rifle', 'Eagle', 'Vail', 'Grand Junction', 'Western Slope, Colorado']

const shopLd = {
  '@type': 'TattooParlor',
  '@id': `${SITE}/#shop`,
  name: shop.name,
  alternateName: shop.oldName,
  url: `${SITE}/`,
  telephone: shop.phoneIntl,
  email: shop.email,
  logo: `${SITE}/assets/logo/holy-iron-logo.png`,
  image: `${SITE}/assets/share.jpg`,
  areaServed: AREAS,
  address: { '@type': 'PostalAddress', streetAddress: shop.street, addressLocality: shop.city, addressRegion: shop.region, postalCode: shop.zip, addressCountry: 'US' },
  openingHours: 'Mo-Su 11:00-19:00',
  sameAs: [`https://www.instagram.com/${shop.instagram}/`],
}

function page(p) {
  const url = `${SITE}/${p.slug}/`
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      shopLd,
      { '@type': 'FAQPage', '@id': `${url}#faq`, url, name: p.title, about: { '@id': `${SITE}/#shop` },
        mainEntity: p.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ...(p.slug === 'faq' ? [] : [{ '@type': 'Service', name: p.label, serviceType: p.label, url, provider: { '@id': `${SITE}/#shop` }, areaServed: AREAS }]),
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: shop.name, item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: p.label, item: url } ] },
    ],
  }
  const others = all.filter(o => o.slug !== p.slug)
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<link rel="canonical" href="${url}">
<link rel="icon" type="image/png" href="/assets/logo/holy-iron-logo.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${shop.name}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/assets/share.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.desc)}">
<meta name="twitter:image" content="${SITE}/assets/share.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<style>
:root{--black:#0A0A0A;--gold:#9A7535;--gold-light:#C4A46B;--text:#E8E0D0;--muted:#8a7f72;--surface:#111;--border:rgba(154,117,53,.25)}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--black);color:var(--text);font:300 17px/1.7 Inter,sans-serif;-webkit-font-smoothing:antialiased}
a{color:var(--gold-light)}
.wrap{max-width:820px;margin:0 auto;padding:0 20px}
header{border-bottom:1px solid var(--border)}
header .wrap{display:flex;align-items:center;justify-content:space-between;height:72px;gap:16px}
header img{height:44px;display:block}
nav a{font-family:Cinzel,serif;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;margin-left:20px}
h1{font-family:Cinzel,serif;font-weight:600;font-size:clamp(1.8rem,5vw,2.6rem);line-height:1.2;margin:56px 0 20px}
.intro p{margin-bottom:14px;color:var(--text)}
.cta{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 48px}
.btn{font-family:Cinzel,serif;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;padding:12px 22px;border:1px solid var(--gold);color:var(--gold-light)}
.btn.solid{background:var(--gold);color:var(--black)}
h2.sec{font-family:Cinzel,serif;font-weight:600;font-size:1.4rem;color:var(--gold-light);margin:8px 0 18px}
.faq{border-top:1px solid var(--border);padding:22px 0}
.faq h3{font-family:Inter,sans-serif;font-weight:500;font-size:1.08rem;margin-bottom:8px}
.faq p{color:#cfc6b6}
.artists{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:8px 0 48px}
.artists a{display:block;border:1px solid var(--border);padding:14px 16px;text-decoration:none;color:var(--text)}
.artists b{display:block;font-weight:500}
.artists span{font-size:.85rem;color:var(--muted)}
.visit{border:1px solid var(--border);background:var(--surface);padding:22px;margin:40px 0}
.visit p{margin-bottom:4px}
.more{display:flex;flex-wrap:wrap;gap:10px 18px;margin:8px 0 56px;font-size:.95rem}
footer{border-top:1px solid var(--border);padding:28px 0;font-size:.8rem;color:var(--muted);text-align:center}
@media (max-width:560px){nav a{margin-left:12px;font-size:.7rem}header img{height:36px}}
</style>
</head>
<body>
<header><div class="wrap">
<a href="/" aria-label="${shop.name} home"><img src="/assets/logo/holy-iron-logo.png" alt="${shop.name}"></a>
<nav><a href="/#artists">Artists</a><a href="/faq/">Questions</a></nav>
</div></header>
<main class="wrap">
<h1>${esc(p.h1)}</h1>
<div class="intro">${p.intro.map(t => `<p>${esc(t)}</p>`).join('')}</div>
<div class="cta"><a class="btn solid" href="/#artists">Meet the artists</a><a class="btn" href="${shop.maps}" target="_blank" rel="noopener">Get directions</a><a class="btn" href="tel:${shop.phoneIntl}">Call ${shop.phone}</a></div>
<h2 class="sec">Questions people ask</h2>
${p.faqs.map(([q, a]) => `<div class="faq"><h3>${esc(q)}</h3><p>${esc(a)}</p></div>`).join('\n')}
<div class="visit">
<p><b>${shop.name}</b> (formerly ${shop.oldName})</p>
<p>${shop.street}, ${shop.city}, ${shop.region} ${shop.zip}</p>
<p>${shop.hours}</p>
<p><a href="tel:${shop.phoneIntl}">${shop.phone}</a></p>
<p><a href="https://www.instagram.com/${shop.instagram}/">@${shop.instagram} on Instagram</a></p>
</div>
<h2 class="sec">The artists</h2>
<div class="artists">${artists.map(a => `<a href="/artists/${a.slug}"><b>${esc(a.name)}</b><span>${esc(a.role)}</span></a>`).join('')}</div>
<h2 class="sec">More about Holy Iron</h2>
<div class="more">${others.map(o => `<a href="/${o.slug}/">${esc(o.label)}</a>`).join('')}</div>
</main>
<footer><div class="wrap">© ${new Date().getFullYear()} ${shop.name}, ${shop.city}, Colorado<br>Website by <a href="https://tylerkosec.com">Kosec Media</a></div></footer>
</body>
</html>
`
}

for (const p of all) {
  const dir = path.join(pub, p.slug)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), page(p))
}

// llms.txt: a plain summary AI tools can read.
const llms = `# ${shop.name}

> Tattoo and piercing shop at ${shop.street}, ${shop.city}, Colorado ${shop.zip}, formerly ${shop.oldName} and Gallery. Owned by Kira Knowlton. Six tattoo artists and a piercer. Walk-ins and appointments. ${shop.hours}. Phone ${shop.phone}. Instagram @${shop.instagram}.

Serves Glenwood Springs, Carbondale, Basalt, Aspen, Rifle, Eagle, Vail and the Western Slope, including Grand Junction (about 90 minutes away on I-70). Email ${shop.email}.

Services: custom tattoos, cover-ups, reworks, touch-ups, walk-ins, flash days, piercing. Each artist prices their own work; tattoos start at $150; some artists take non-refundable deposits. Local art and books for sale in the shop, plus a pool table and a place to hang out.

## Artists
${artists.map(a => `- [${a.name}](${SITE}/artists/${a.slug}): ${a.role}. ${a.does}. Book through ${a.book}.`).join('\n')}

## Pages
- [Home](${SITE}/): artists, portfolios and booking
${all.map(p => `- [${p.label}](${SITE}/${p.slug}/): ${p.desc}`).join('\n')}
`
fs.writeFileSync(path.join(pub, 'llms.txt'), llms)

// sitemap.xml: home, artist pages, question pages.
const urls = [`${SITE}/`, ...artists.map(a => `${SITE}/artists/${a.slug}`), ...all.map(p => `${SITE}/${p.slug}/`)]
fs.writeFileSync(path.join(pub, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') + '\n</urlset>\n')

console.log(`built ${all.length} pages, ${all.reduce((n, p) => n + p.faqs.length, 0)} answers, llms.txt, sitemap (${urls.length} urls)`)
