import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation, Pagination, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import { products, pdpImages, crossSell, UNSPLASH } from '../data/products'
import styles from './ProductDetailPage.module.css'

const colors = ['#000c1e', '#f1e7d0', '#4a5d51', '#775a19']
const colorNames = ['Midnight Gold', 'Ivory Sand', 'Forest Sage', 'Pure Gold']

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products[Number(id) - 1] || products[0]
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeColor, setActiveColor] = useState(0)
  const [addedToBag, setAddedToBag] = useState(false)

  const handleAdd = () => {
    setAddedToBag(true)
    setTimeout(() => setAddedToBag(false), 2000)
  }

  return (
    <main>
      <div className={`container ${styles.pdpLayout}`}>
        {/* ──── Left: Gallery ──── */}
        <div className={styles.gallery}>
          {/* Main Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            navigation
            pagination={{ clickable: true, el: `.${styles.pgBullets}` }}
            className={`${styles.mainSwiper} pdp-swiper`}
          >
            {pdpImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className={`${styles.mainSlide} img-zoom-container`}>
                  <img src={img} alt={`${product.name} view ${i + 1}`} />
                  {i === 0 && (
                    <div className={styles.zoomHint}>
                      <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>zoom_in</span>
                      Hover to Zoom
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Thumbnails */}
          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            freeMode
            watchSlidesProgress
            slidesPerView={4}
            spaceBetween={12}
            className={styles.thumbSwiper}
          >
            {pdpImages.map((img, i) => (
              <SwiperSlide key={i} className={styles.thumbSlide}>
                <div className="img-zoom-container" style={{ height: '100%' }}>
                  <img src={img} alt={`Thumb ${i + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ──── Right: Product Info ──── */}
        <div className={styles.info}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>chevron_right</span>
            <Link to="/collection">Scarves</Link>
            <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>chevron_right</span>
            <span>{product.name}</span>
          </nav>

          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.priceRow}>
            <span className={styles.price}>{product.price}</span>
            <span className={styles.exclusiveTag}>Exclusive Collection</span>
          </div>

          {/* Color Picker */}
          <div className={styles.colorSection}>
            <span className={styles.colorLabel}>Selected Color: {colorNames[activeColor]}</span>
            <div className={styles.colorRow}>
              {colors.map((c, i) => (
                <button
                  key={i}
                  className={`${styles.colorBtn} ${activeColor === i ? styles.colorBtnActive : ''}`}
                  style={{ background: c }}
                  onClick={() => setActiveColor(i)}
                  aria-label={colorNames[i]}
                />
              ))}
            </div>
          </div>

          {/* Modesty Guide */}
          <div className={styles.guideLine}>
            <a href="#" className={styles.guideLink}>
              <span className="material-symbols-outlined">straighten</span>
              <span>Modesty &amp; Styling Guide</span>
            </a>
          </div>

          {/* CTA */}
          <button
            className={`${styles.addBtn} ${addedToBag ? styles.addBtnActive : ''}`}
            onClick={handleAdd}
          >
            {addedToBag ? '✓ Added to Bag' : 'Add to Bag'}
          </button>
          <p className={styles.shippingNote}>Complimentary express shipping on orders over $500.</p>

          {/* Guarantee */}
          <div className={styles.guarantee}>
            <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontVariationSettings: "'FILL' 1" }}>verified</span>
            <div>
              <p className={styles.guaranteeTitle}>Atelier Guarantee</p>
              <p className={styles.guaranteeText}>Each piece is meticulously inspected by our master artisans before being curated for your collection.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ──── Craftsmanship Bento ──── */}
      <section className={`container ${styles.craftsSection}`}>
        <h2 className={styles.craftTitle}>The Craftsmanship</h2>
        <div className={styles.craftGrid}>
          <div className={styles.craftSpecs}>
            <h3 className={styles.craftSubTitle}>Material Specification</h3>
            <div className={styles.specGrid}>
              {[
                { label: 'Composition', value: '100% Premium Egyptian Voile' },
                { label: 'Dimensions',  value: '115cm × 115cm (Square)' },
                { label: 'Weight',      value: 'Ultra-Lightweight (70 GSM)' },
                { label: 'Origin',      value: 'Hand-finished in Dubai' },
              ].map(s => (
                <div key={s.label}>
                  <span className={styles.specLabel}>{s.label}</span>
                  <p className={styles.specValue}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.craftCare}>
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'var(--secondary-container)' }}>wash</span>
            <h3 className={styles.craftCareTitle}>Care Instructions</h3>
            <ul className={styles.careList}>
              {['Hand wash only in cold water', 'Use mild silk-safe detergent', 'Do not tumble dry', 'Steam iron on low setting'].map(c => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ──── Unboxing ──── */}
      <section className={`container ${styles.unboxingSection}`}>
        <div className={styles.unboxingGrid}>
          <div className={`${styles.unboxingImg} img-zoom-container`}>
            <img src={UNSPLASH.box} alt="Premium Unboxing Experience" />
          </div>
          <div className={styles.unboxingText}>
            <span className="section-label">The Presentation</span>
            <h2 className={styles.unboxingTitle}>The Unboxing Experience</h2>
            <p className={styles.unboxingDesc}>
              Your scarf arrives in our signature ivory textured box, hand-embossed with gold foil.
              Wrapped in acid-free silk tissue and accompanied by a personalized care certificate,
              the experience begins before you even touch the fabric.
            </p>
            <div className={styles.unboxingBadges}>
              <div className={styles.badge}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>redeem</span>
                <span>Gift Ready</span>
              </div>
              <div className={styles.badge}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>eco</span>
                <span>Sustainable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Complete the Look ──── */}
      <section className={`container ${styles.ctlSection}`}>
        <div className={styles.ctlHead}>
          <div>
            <span className={styles.ctlLabel}>Curated for you</span>
            <h2 className={styles.ctlTitle}>Complete the Look</h2>
          </div>
          <Link to="/collection" className={styles.ctlViewAll}>View Collection</Link>
        </div>
        <div className={styles.ctlGrid}>
          {crossSell.map(item => (
            <Link to={`/product/${item.id}`} key={item.id} className={`${styles.ctlCard} product-card`}>
              <div className={`${styles.ctlImg} img-zoom-container`}>
                <img src={item.image} alt={item.name} />
                <button className={`${styles.ctlCart} quick-shop`} aria-label="Add to cart">
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
              <h4 className={styles.ctlName}>{item.name}</h4>
              <p className={styles.ctlPrice}>{item.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
