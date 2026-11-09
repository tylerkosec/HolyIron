// Holy Iron question pages: all the words live here.
// Edit this file, then run: node seo/build.mjs
// Facts only from Tyler, Kira or the shop's own site/Instagram. No made-up claims.

export const SITE = 'https://www.holyirontattoo.com'

export const shop = {
  name: 'Holy Iron Tattoo',
  oldName: 'White Lodge Tattoo',
  street: '824 Grand Ave',
  city: 'Glenwood Springs',
  region: 'CO',
  zip: '81601',
  phone: '(970) 230-9366',
  phoneIntl: '+1-970-230-9366',
  email: 'info@holyirontattoo.com',
  hours: 'Open every day, 11am to 7pm',
  instagram: 'holyirontattoo',
  maps: 'https://www.google.com/maps/search/?api=1&query=824%20Grand%20Ave%2C%20Glenwood%20Springs%2C%20CO%2081601',
}

export const artists = [
  { name: 'Kira Knowlton', slug: 'kira', role: 'Owner, tattoo artist', does: 'neotraditional and illustrative work, and does her best work with creative freedom', book: 'the booking form on her page' },
  { name: 'Tanis Martin', slug: 'tanis', role: 'Tattoo artist', does: 'American traditional and neo traditional, with a love for blackwork horror, nerd culture and lady faces', book: 'an Instagram message to @tanis_martin' },
  { name: 'Kayla Warren', slug: 'dovah', role: 'Tattoo artist', does: 'bright, colorful, cute work and pop culture pieces', book: 'the booking form on her page' },
  { name: 'Jimmy Sandoval', slug: 'jimbear', role: 'Tattoo artist', does: 'American traditional, Japanese traditional and lettering', book: 'an Instagram message to @jimbeartattoos' },
  { name: 'Ivy DeMent', slug: 'ivy', role: 'Tattoo artist', does: 'black and grey, fine line, geometric, dotwork and ornamental work, often drawn freehand to fit the body', book: 'her booking link on her page' },
  { name: 'Christian Terzich', slug: 'stoopkid', role: 'Tattoo artist', does: 'bright, bold traditional work and fine line', book: 'an Instagram message to @stoopkidtattoo' },
  { name: 'Mateo Gil de Rubio', slug: 'untotheblade', role: 'Piercer', does: 'piercings with titanium and solid 14k gold jewelry', book: 'an Instagram message to @untotheblade' },
]

// Shared answers. Pages pick from these by key.
export const Q = {
  where: ['Where is Holy Iron Tattoo?', 'We are at 824 Grand Ave in downtown Glenwood Springs, Colorado 81601. We are open every day, 11am to 7pm. Call us at (970) 230-9366.'],
  hours: ['What are your hours?', 'We are open every day of the week, 11am to 7pm.'],
  walkins: ['Do you take walk-ins?', 'Yes. Walk-ins are 12pm to 7pm every day, and we take appointments too. Event days and holidays can be different, so check our Instagram, @holyirontattoo. If you want a big custom piece, book with your artist ahead of time so they can draw it for you.'],
  cost: ['How much does a tattoo cost?', 'Every artist prices their own work, so the price depends on who you pick and what you want. Tattoos start at $150. Send your artist your idea, the size and where it goes on your body, and they will give you a quote.'],
  minimum: ['Do you have a shop minimum?', 'Yes. Tattoos start at $150. Your artist will give you the exact price for your piece.'],
  age: ['How old do I have to be to get a tattoo?', 'You have to be 18 or older to get tattooed at Holy Iron.'],
  friends: ['Can I bring friends to my appointment?', 'Please bring just one friend if you can.'],
  deposit: ['Do I need a deposit?', 'Some of our artists take a deposit to hold your appointment. Deposits are non-refundable.'],
  book: ['How do I book?', 'Each artist and our piercer book on their own. Pick the artist whose work you like and use the Contact Me button on their page. Some book through a form and some through an Instagram message. You can also walk in during open hours.'],
  pick: ['How do I pick the right artist?', 'Look through each artist\'s Instagram, which is where they post the most work, and pick the one whose style matches what you want. Kira does neotraditional and illustrative. Tanis does traditional and neo traditional. Kayla does bright, colorful and pop culture work. Jimmy does American and Japanese traditional and lettering. Ivy does black and grey and fine line. Christian does bold traditional and fine line.'],
  styles: ['What tattoo styles do you do?', 'American traditional, neo traditional, neotraditional, illustrative, Japanese traditional, lettering, black and grey, fine line, geometric, dotwork, ornamental, color work, anime and pop culture. Each artist\'s page shows their work.'],
  custom: ['Can I get a custom tattoo?', 'Yes. Bring your idea, reference photos and where you want it, and your artist will draw a design that is yours.'],
  ownDesign: ['Can I bring my own design?', 'Yes. Bring your drawing or reference photos and talk it through with your artist. They will help make it work as a tattoo.'],
  coverup: ['Do you do cover-ups?', 'Yes. Bring a clear photo of the old tattoo, or come in, and an artist will tell you what can go over it. Darker and bolder designs usually cover best.'],
  rework: ['Can you fix or rework an old tattoo?', 'Yes. Old tattoos can often be touched up, reworked or brought back to life. Come in or send your artist a photo and they will tell you what is possible.'],
  touchup: ['Do you do touch-ups?', 'Yes. Touch-ups are up to each artist, so reach out to the artist who did your tattoo, or come in and we will take a look.'],
  flash: ['What is a flash day?', 'A flash day is when our artists put out sheets of ready-made designs at set prices and tattoo them first come, first served. We do flash events on most holidays and every Friday the 13th. We post them on Instagram at @holyirontattoo.'],
  flashWhen: ['When is your next flash day?', 'Watch our Instagram, @holyirontattoo. That is where every flash day gets posted first.'],
  piercing: ['Do you do piercings?', 'Yes. Mateo Gil de Rubio is our piercer. He pierces Friday through Monday. Message him on Instagram at @untotheblade to book.'],
  piercingTypes: ['What piercings do you do?', 'Mateo does ear piercings like the helix, forward helix, conch, rook, flat, tragus, surface tragus and transverse lobe, plus nostril, septum, eyebrow, lip and navel piercings.'],
  piercingCost: ['How much does a piercing cost?', 'It depends on the piercing and the jewelry you pick. Message Mateo on Instagram at @untotheblade with what you want and he will give you a price.'],
  piercingAge: ['How old do I have to be to get pierced?', 'Mateo pierces anyone 18 and up. If you are 16 or 17, he does earlobes only, with consent from a parent or guardian. He does not pierce anyone under 16.'],
  jewelry: ['What jewelry do you use for piercings?', 'Mateo uses titanium and solid 14k gold jewelry, including pieces from Junipurr Jewelry and Tilum.'],
  hangout: ['What is the shop like?', 'Holy Iron is a welcoming, positive shop on Grand Ave. There is a pool table, movies playing, a place to hang out, and local art and books for sale. It is the shop for people who live and work in the valley.'],
  art: ['Do you sell art?', 'Yes. We carry art and books by local artists in the shop.'],
  whiteLodge: ['Were you White Lodge Tattoo?', 'Yes. Holy Iron Tattoo used to be White Lodge Tattoo and Gallery. Same spot on Grand Ave in Glenwood Springs.'],
  owner: ['Who owns Holy Iron Tattoo?', 'Kira Knowlton owns Holy Iron, so we are a women-owned shop. She is also one of our tattoo artists.'],
  busy: ['When should I book ahead?', 'Winter around the holidays and all of summer are our busiest times. Book ahead for those. Fall and spring are quieter, which is a great time to get in fast.'],
  long: ['How long does a tattoo take?', 'It depends on the size and detail. A small piece can take under an hour. Big pieces can take several sessions. Your artist will give you an idea when you book.'],
  prep: ['How should I get ready for my tattoo?', 'Get a good night of sleep, eat a real meal before you come in, drink water and wear clothes that make the spot easy to get to. Your artist will go over aftercare when you are done.'],
  // Area pages
  fromCarbondale: ['How far is Holy Iron from Carbondale and Basalt?', 'About 25 minutes from Carbondale and about 35 minutes from Basalt, down Highway 82 into downtown Glenwood Springs.'],
  fromAspen: ['How far is Holy Iron from Aspen?', 'About an hour down Highway 82. A lot of people who work in Aspen and Vail live in Glenwood, and this is their shop.'],
  aspenShop: ['Is there a good tattoo shop near Aspen?', 'Holy Iron Tattoo in Glenwood Springs is about an hour from Aspen. Six tattoo artists in every style from traditional to fine line, a piercer, and open every day.'],
  fromRifle: ['How far is Holy Iron from Rifle?', 'About 30 minutes east of Rifle on I-70.'],
  fromVail: ['How far is Holy Iron from Vail and Eagle?', 'About 45 minutes from Eagle and about an hour from Vail, west on I-70 through Glenwood Canyon.'],
  vailShop: ['Is there a tattoo shop near Vail or Eagle?', 'Holy Iron Tattoo in downtown Glenwood Springs is under an hour from Eagle and about an hour from Vail. Six tattoo artists, a piercer, walk-ins and appointments, open every day.'],
  fromGJ: ['How far is Holy Iron from Grand Junction?', 'About an hour and a half east on I-70. You come out right by downtown Glenwood Springs, a few minutes from the shop on Grand Ave.'],
  gjWorth: ['Is it worth driving from Grand Junction for a tattoo?', 'You get to pick an artist by their work, talk through a custom piece and spend the day in Glenwood with the hot springs, food and the river right there.'],
  gjPlan: ['How do I plan a trip from Grand Junction for a tattoo?', 'Pick your artist, book with them ahead of time and send your idea, size and placement. Then you can drive over knowing your spot is held. Walk-ins are welcome too if you want to take a chance.'],
}

const P = (keys) => keys.map(k => Q[k])

export const pages = [
  {
    slug: 'tattoo-shop-glenwood-springs',
    label: 'Tattoo shop in Glenwood Springs',
    title: 'Tattoo Shop in Glenwood Springs, CO | Holy Iron Tattoo',
    desc: 'Tattoo and piercing shop at 824 Grand Ave in downtown Glenwood Springs, CO. Six tattoo artists and a piercer, walk-ins and appointments, open daily 11 to 7.',
    h1: 'Tattoo shop in Glenwood Springs, Colorado',
    intro: [
      'Holy Iron Tattoo is on Grand Ave in downtown Glenwood Springs. Six tattoo artists and a piercer, open every day from 11am to 7pm. Walk-ins are 12 to 7 every day, and we take appointments too.',
      'It is the shop for the people who live here, from Glenwood to Rifle to Aspen. Come in, shoot some pool, look at the local art and books, and talk through your idea with an artist.',
    ],
    faqs: P(['where', 'walkins', 'cost', 'minimum', 'age', 'deposit', 'book', 'friends', 'pick', 'styles', 'hangout', 'whiteLodge', 'owner', 'busy', 'fromRifle']),
  },
  {
    slug: 'piercing-glenwood-springs',
    label: 'Piercing in Glenwood Springs',
    title: 'Piercing in Glenwood Springs, CO | Holy Iron Tattoo',
    desc: 'Ear, nose, septum, lip, eyebrow and navel piercing at Holy Iron Tattoo in downtown Glenwood Springs, CO. Titanium and solid 14k gold jewelry. Book with Mateo.',
    h1: 'Piercing in Glenwood Springs',
    intro: [
      'Mateo Gil de Rubio is the piercer at Holy Iron Tattoo on Grand Ave. He pierces Friday through Monday and does everything from a simple nostril to stacked ear setups and weird, technical piercings.',
      'He uses titanium and solid 14k gold jewelry. Message him on Instagram at @untotheblade to book.',
    ],
    faqs: P(['piercing', 'piercingTypes', 'piercingAge', 'piercingCost', 'jewelry', 'where', 'hours', 'busy']),
  },
  {
    slug: 'cover-up-tattoos',
    label: 'Cover-ups and reworks',
    title: 'Cover-Up Tattoos in Glenwood Springs, CO | Holy Iron Tattoo',
    desc: 'Want to cover up or fix an old tattoo? Holy Iron Tattoo in Glenwood Springs, CO does cover-ups, reworks and touch-ups. Send your artist a photo or walk in.',
    h1: 'Cover-up tattoos and reworks',
    intro: [
      'Want to cover up or fix an old tattoo? Our artists do cover-ups, reworks and touch-ups at Holy Iron Tattoo in downtown Glenwood Springs.',
      'Send your artist a clear photo of the old tattoo, or walk in, and they will tell you what can work.',
    ],
    faqs: P(['coverup', 'rework', 'touchup', 'cost', 'pick', 'book', 'where']),
  },
  {
    slug: 'walk-in-tattoos-flash-days',
    label: 'Walk-ins and flash days',
    title: 'Walk-In Tattoos and Flash Days, Glenwood Springs | Holy Iron',
    desc: 'Holy Iron Tattoo takes walk-ins 12 to 7 every day on Grand Ave in Glenwood Springs, CO. Flash days with ready-made designs get posted on @holyirontattoo.',
    h1: 'Walk-in tattoos and flash days',
    intro: [
      'Want a tattoo today? Holy Iron Tattoo takes walk-ins from 12pm to 7pm every day at 824 Grand Ave in Glenwood Springs.',
      'We also run flash events on most holidays and every Friday the 13th, where artists put out ready-made designs at set prices, first come, first served.',
    ],
    faqs: P(['walkins', 'flash', 'flashWhen', 'hours', 'minimum', 'age', 'cost', 'busy', 'prep', 'friends']),
  },
  {
    slug: 'custom-tattoos',
    label: 'Custom tattoos',
    title: 'Custom Tattoos in Glenwood Springs, CO | Holy Iron Tattoo',
    desc: 'Get a custom tattoo drawn just for you at Holy Iron Tattoo in Glenwood Springs, CO. Pick your artist by style, send your idea, size and placement, get a quote.',
    h1: 'Custom tattoos in Glenwood Springs',
    intro: [
      'Bring an idea, a reference or a rough sketch. Our artists draw custom pieces in every style, from traditional and neotraditional to fine line, black and grey and anime.',
      'Pick the artist whose work you love, send them your idea, size and placement, and they will take it from there.',
    ],
    faqs: P(['custom', 'ownDesign', 'pick', 'styles', 'cost', 'deposit', 'long', 'book', 'prep']),
  },
  {
    slug: 'tattoo-shop-near-aspen',
    label: 'Near Aspen, Basalt and Carbondale',
    title: 'Tattoo Shop Near Aspen and Carbondale | Holy Iron Tattoo',
    desc: 'Looking for a tattoo shop in the Roaring Fork Valley? Holy Iron Tattoo in Glenwood Springs, CO is 25 minutes from Carbondale and about an hour from Aspen.',
    h1: 'Tattoo shop for the Roaring Fork Valley',
    intro: [
      'Holy Iron Tattoo is at the bottom of the valley in downtown Glenwood Springs, about 25 minutes from Carbondale, 35 from Basalt and an hour from Aspen.',
      'A lot of people who work in Aspen and Vail live down valley in Glenwood, and this is their shop. Six tattoo artists, a piercer, walk-ins and appointments, open every day.',
    ],
    faqs: P(['aspenShop', 'fromAspen', 'fromCarbondale', 'walkins', 'cost', 'pick', 'piercing', 'busy', 'where']),
  },
  {
    slug: 'tattoo-grand-junction',
    label: 'Coming from Grand Junction',
    title: 'Worth the Drive From Grand Junction | Holy Iron Tattoo',
    desc: 'Grand Junction to Glenwood Springs is about 90 minutes on I-70. Holy Iron Tattoo has six tattoo artists and a piercer. Book ahead and make a day of it.',
    h1: 'Coming from Grand Junction',
    intro: [
      'Holy Iron Tattoo is about an hour and a half east of Grand Junction on I-70, in downtown Glenwood Springs.',
      'Pick an artist by their work and get a custom piece you love. Book ahead, then make a day of it in Glenwood.',
    ],
    faqs: P(['fromGJ', 'gjWorth', 'gjPlan', 'pick', 'cost', 'deposit', 'custom', 'coverup', 'piercing', 'where']),
  },
  {
    slug: 'tattoo-shop-near-vail-eagle',
    label: 'Near Vail and Eagle',
    title: 'Tattoo Shop Near Vail and Eagle, CO | Holy Iron Tattoo',
    desc: 'Holy Iron Tattoo in Glenwood Springs, CO is 45 minutes from Eagle and about an hour from Vail on I-70. Six tattoo artists, a piercer, walk-ins and appointments.',
    h1: 'Tattoo shop near Vail and Eagle',
    intro: [
      'Holy Iron Tattoo is in downtown Glenwood Springs, about 45 minutes west of Eagle and an hour from Vail through Glenwood Canyon.',
      'Six tattoo artists in every style from traditional to fine line, a piercer, walk-ins and appointments, open every day.',
    ],
    faqs: P(['vailShop', 'fromVail', 'walkins', 'cost', 'pick', 'custom', 'piercing', 'where']),
  },
]

// The all-questions page gets every question once.
export const faqPage = {
  slug: 'faq',
  label: 'All questions',
  title: 'Tattoo Questions, Glenwood Springs | Holy Iron Tattoo',
  desc: 'Answers about prices, deposits, walk-ins, flash days, cover-ups, piercing and booking at Holy Iron Tattoo on Grand Ave in Glenwood Springs, Colorado.',
  h1: 'Questions about Holy Iron Tattoo',
  intro: ['Everything people ask us about getting tattooed or pierced at Holy Iron, in one place.'],
  faqs: Object.values(Q),
}
