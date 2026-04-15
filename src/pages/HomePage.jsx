import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { heroSlides, categories, newArrivals, communityImages } from '../data/products'
import { UNSPLASH } from '../data/products'
import styles from './HomePage.module.css'

/* ── Hero Slider ── */
function Hero() {
  return (
    <section className={styles.heroSection}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className={styles.heroSwiper}
      >
        {heroSlides.map(slide => (
          <SwiperSlide key={slide.id} className={styles.heroSlide}>
            <div className={`${styles.heroBg} img-zoom-container`}>
              <img src={slide.image} alt={slide.title.join(' ')} />
              <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>{slide.label}</span>
              <h1 className={styles.heroTitle}>
                {slide.title[0]}&nbsp;
                <br className={styles.heroBreak} />
                <em>{slide.title[1]}</em>
              </h1>
              <p className={styles.heroDesc}>{slide.desc}</p>
              <Link to={slide.link} className="btn-gold">{slide.cta}</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

/* ── Categories ── */
function Categories() {
  return (
    <section className={styles.catSection}>
      <div className={`container fade-up`}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Curated Essentials</h2>
          <Link to="/collection" className={styles.viewAll}>View All</Link>
        </div>
        <div className={styles.catGrid}>
          {categories.map(cat => (
            <Link to={cat.link} key={cat.id} className={`${styles.catCard} product-card`}>
              <div className={`${styles.catImage} img-zoom-container`}>
                <img src={cat.image} alt={cat.name} />
              </div>
              <h3 className={styles.catName}>{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── New Arrivals Bento ── */
function NewArrivals() {
  const [large, ...smalls] = newArrivals
  return (
    <section className={styles.bentoSection}>
      <div className="container">
        <div className={`${styles.sectionCenter} fade-up`}>
          <h2 className={styles.sectionTitle}>The New Arrivals</h2>
          <p className={styles.sectionSub}>Crafted for the modern woman who values elegance.</p>
        </div>
        <div className={`${styles.bento} fade-up`}>
          {/* Large card */}
          <Link to={`/product/1`} className={`${styles.bentoLarge} bento-card`} style={{ position: 'relative' }}>
            <div className="img-zoom-container" style={{ height: '100%' }}>
              <img src={large.image} alt={large.name} />
            </div>
            <div className="bento-overlay">
              <h3 className={styles.bentoCardTitle}>{large.name}</h3>
              <p className={styles.bentoCardPrice}>{large.price}</p>
              <span className="btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)', marginTop: '0.75rem', display: 'inline-block' }}>Shop Now</span>
            </div>
          </Link>
          {/* Small cards */}
          <div className={styles.bentoSmalls}>
            {smalls.map((item, i) => (
              <Link to={`/product/${item.id}`} key={item.id} className={`bento-card`} style={{ position: 'relative', flex: 1 }}>
                {item.tag && <span className={styles.bentoTag}>{item.tag}</span>}
                <div className="img-zoom-container" style={{ height: '100%' }}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="bento-overlay">
                  <h3 className={styles.bentoCardTitle}>{item.name}</h3>
                  <p className={styles.bentoCardPrice}>{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Editorial Section ── */
function Editorial() {
  return (
    <section className={styles.editorial}>
      <div className={`${styles.editorialGrid} container`}>
        <div className={`${styles.editorialText} fade-up`}>
          <span className="section-label">The Atelier Journal</span>
          <h2 className={styles.editorialTitle}>Sophistication in<br /><em>Every Stitch</em></h2>
          <p className={styles.editorialDesc}>
            Go behind the scenes of our Autumn/Winter creation process. Each piece is meticulously designed,
            sourcing only the finest silks and sustainable fabrics to ensure lasting beauty.
          </p>
          <div className={styles.editorialActions}>
            <Link to="/collection" className="btn-gold">Shop the Edit</Link>
            <Link to="/" className="btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Read Journal</Link>
          </div>
        </div>
        <div className={`${styles.editorialImgWrap} fade-up`}>
          <div className={`${styles.editorialImg} img-zoom-container`}>
            <img src={UNSPLASH.studio} alt="The Atelier Studio" />
          </div>
          <div className={styles.editorialDeco} />
        </div>
      </div>
    </section>
  )
}

/* ── Community Gallery ── */
function Community() {
  return (
    <section className={styles.community}>
      <div className="container">
        <div className={`${styles.sectionCenter} fade-up`}>
          <h2 className={styles.sectionTitle}>The Atelier Community</h2>
        </div>
        <div className={`${styles.communityGrid} fade-up`}>
          {communityImages.map((img, i) => (
            <div key={i} className={styles.communityThumb}>
              <img src={img} alt={`Community look ${i + 1}`} className="community-thumb" />
            </div>
          ))}
        </div>
        <p className={styles.communityTag}>Tag @lateliermodern to be featured</p>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrivals />
      <Editorial />
      <Community />
    </main>
  )
}
