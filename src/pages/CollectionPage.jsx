import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, UNSPLASH } from '../data/products'
import styles from './CollectionPage.module.css'

const fabrics  = ['Premium Voile', 'Satin', 'Silk', 'Chiffon']
const modesty  = ['Full Coverage', 'Layered', 'Shoulder Wrap']
const sortOpts = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest Arrivals']
const colors   = ['#000c1e', '#e5d3b3', '#775a19', '#8e9775', '#ffffff']

export default function CollectionPage() {
  const [sort, setSort] = useState('Featured')

  return (
    <main>
      {/* Banner */}
      <header className={styles.banner}>
        <div className={`${styles.bannerBg} img-zoom-container`}>
          <img src={UNSPLASH.scarf3} alt="Signature Scarves" />
          <div className={styles.bannerOverlay} />
        </div>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Signature Scarves</h1>
          <p className={styles.bannerSub}>The Digital Atelier Collection</p>
        </div>
      </header>

      {/* Main */}
      <div className={`container ${styles.layout}`}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h4 className={styles.filterLabel}>Modesty Level</h4>
            {modesty.map(m => (
              <label key={m} className={styles.checkRow}>
                <input type="checkbox" className={styles.check} />
                <span>{m}</span>
              </label>
            ))}
          </div>
          <div className={styles.filterGroup}>
            <h4 className={styles.filterLabel}>Fabric</h4>
            {fabrics.map(f => (
              <label key={f} className={styles.checkRow}>
                <input type="checkbox" className={styles.check} />
                <span>{f}</span>
              </label>
            ))}
          </div>
          <div className={styles.filterGroup}>
            <h4 className={styles.filterLabel}>Color</h4>
            <div className={styles.colorDots}>
              {colors.map(c => (
                <button key={c} className={styles.colorDot} style={{ background: c }} aria-label={c} />
              ))}
            </div>
          </div>
          <div className={styles.filterGroup}>
            <h4 className={styles.filterLabel}>Price</h4>
            <input type="range" min="45" max="250" className={styles.range} />
            <div className={styles.rangeLabels}><span>$45</span><span>$250</span></div>
          </div>
        </aside>

        {/* Grid */}
        <section className={styles.grid}>
          <div className={styles.gridHead}>
            <span className={styles.count}>Showing {products.length} results</span>
            <select className={styles.sort} value={sort} onChange={e => setSort(e.target.value)}>
              {sortOpts.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className={styles.productGrid}>
            {products.map(p => (
              <Link to={`/product/${p.id}`} key={p.id} className={`${styles.card} product-card`}>
                <div className={`${styles.cardImg} img-zoom-container`}>
                  <img src={p.image} alt={p.name} />
                  {p.tag && <span className={styles.cardTag}>{p.tag}</span>}
                  <button className={`${styles.quickShop} quick-shop`}>Quick Shop</button>
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardName}>{p.name}</h3>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardColor}>{p.color}</span>
                    <span className={styles.cardPrice}>{p.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Pagination */}
          <div className={styles.pagination}>
            <button className={styles.pageArrow} aria-label="Previous">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            {[1,2,3].map(n => (
              <button key={n} className={`${styles.pageBtn} ${n === 1 ? styles.pageBtnActive : ''}`}>{n}</button>
            ))}
            <button className={styles.pageArrow} aria-label="Next">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
