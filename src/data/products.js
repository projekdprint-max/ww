// Product + image data for TS by TEXSAVERIO
// Uses real Unsplash/Picsum photos so images always load

const UNSPLASH = {
  scarf1: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=800&q=80',
  scarf2: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
  scarf3: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
  scarf4: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=800&q=80',
  scarf5: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=800&q=80',
  scarf6: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80',
  scarf7: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
  scarf8: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
  bag1:   'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
  bag2:   'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80',
  dress1: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
  dress2: 'https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=800&q=80',
  shoe1:  'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
  hero1:  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=90',
  hero2:  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=90',
  hero3:  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1600&q=90',
  studio: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80',
  box:    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80',
  com1:   'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80',
  com2:   'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
  com3:   'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80',
  com4:   'https://images.unsplash.com/photo-1493106819501-8f9e9f4e1b2c?w=600&q=80',
  com5:   'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80',
  com6:   'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
}

export const heroSlides = [
  {
    id: 1,
    image: UNSPLASH.hero1,
    label: 'New Season Edition',
    title: ['The Art of', 'Timeless Grace'],
    italic: 'Timeless',
    desc: 'Discover our Signature Silk Collection — a curated blend of artisanal heritage and contemporary modest aesthetics.',
    cta: 'Explore Collection',
    link: '/collection',
  },
  {
    id: 2,
    image: UNSPLASH.hero2,
    label: 'Exclusive Drop',
    title: ['Wrapped in', 'Quiet Luxury'],
    italic: 'Quiet',
    desc: 'The Bimu Horizon Square — premium Egyptian voile, hand-finished in Dubai. Limited edition.',
    cta: 'Shop Now',
    link: '/collection',
  },
  {
    id: 3,
    image: UNSPLASH.hero3,
    label: 'Atelier Journal',
    title: ['Sophistication in', 'Every Stitch'],
    italic: 'Every',
    desc: 'Behind every piece is a story of artisanship. Step inside the atelier.',
    cta: 'Read the Story',
    link: '/',
  },
]

export const categories = [
  { id: 1, name: 'Scarves', image: UNSPLASH.scarf2, link: '/collection' },
  { id: 2, name: 'Bags',    image: UNSPLASH.bag1,   link: '/collection' },
  { id: 3, name: 'Apparel', image: UNSPLASH.dress1,  link: '/collection' },
  { id: 4, name: 'Shoes',   image: UNSPLASH.shoe1,   link: '/collection' },
]

export const newArrivals = [
  { id: 1, name: 'The Monogram Abaya', price: '$395.00', tag: '', image: UNSPLASH.dress2, size: 'large' },
  { id: 2, name: 'Gilded Brooch',      price: '$95.00',  tag: 'New', image: UNSPLASH.scarf4, size: 'small' },
  { id: 3, name: 'Heritage Bucket Bag',price: '$420.00', tag: '',    image: UNSPLASH.bag2,   size: 'small' },
]

export const communityImages = [
  UNSPLASH.com1, UNSPLASH.com2, UNSPLASH.com3,
  UNSPLASH.com4, UNSPLASH.com5, UNSPLASH.com6,
]

export const products = [
  { id: 1, name: 'Royal Voile Scarf',    color: 'Midnight Navy',  price: '$85.00',  image: UNSPLASH.scarf1, tag: '' },
  { id: 2, name: 'Atelier Silk Satin',   color: 'Champagne Gold', price: '$145.00', image: UNSPLASH.scarf2, tag: '' },
  { id: 3, name: 'Heritage Voile',       color: 'Emerald Green',  price: '$65.00',  image: UNSPLASH.scarf3, tag: 'Best Seller' },
  { id: 4, name: 'Luxe Modesty Wrap',    color: 'Pearl White',    price: '$110.00', image: UNSPLASH.scarf4, tag: '' },
  { id: 5, name: 'Evening Drape',        color: 'Charcoal',       price: '$195.00', image: UNSPLASH.scarf5, tag: '' },
  { id: 6, name: 'Daylight Chiffon',     color: 'Blush Pink',     price: '$55.00',  image: UNSPLASH.scarf6, tag: '' },
  { id: 7, name: 'Patterned Heirloom',   color: 'Antique Paisley',price: '$225.00', image: UNSPLASH.scarf7, tag: 'New' },
  { id: 8, name: 'Sovereign Satin',      color: 'Royal Burgundy', price: '$130.00', image: UNSPLASH.scarf8, tag: '' },
]

export const pdpImages = [
  UNSPLASH.scarf1,
  UNSPLASH.scarf2,
  UNSPLASH.scarf5,
  UNSPLASH.box,
]

export const crossSell = [
  { id: 1, name: 'Horizon Tote Bag', price: '$420.00', image: UNSPLASH.bag1 },
  { id: 2, name: 'Silk Atelier Tunic', price: '$295.00', image: UNSPLASH.dress1 },
  { id: 3, name: 'Gilded Ridge Cuff', price: '$115.00', image: UNSPLASH.scarf4 },
  { id: 4, name: 'Milanese Loafer', price: '$380.00', image: UNSPLASH.shoe1 },
]

export { UNSPLASH }
