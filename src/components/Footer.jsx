import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const shopLinks    = ['New Arrivals', 'Bestsellers', 'Gift Cards', 'Care Guide']
const serviceLinks = ['Contact Us', 'Shipping & Returns', 'Track Order', 'FAQs']
const infoLinks    = ['About Us', 'Sustainability', 'Privacy Policy', 'Terms of Use']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>TS by TEXSAVERIO</Link>
          <p className={styles.tagline}>Redefining modest luxury through intentional design and artisanal craftsmanship.</p>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" aria-label="Message">
              <span className="material-symbols-outlined">chat_bubble</span>
            </a>
          </div>
          {/* Newsletter */}
          <div className={styles.newsletter}>
            <p className={styles.newsletterLabel}>Join the inner circle</p>
            <div className={styles.newsletterInput}>
              <input type="email" placeholder="email@example.com" />
              <button aria-label="Subscribe">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Shop */}
        <div className={styles.col}>
          <h5 className={styles.colTitle}>Shop</h5>
          <ul className={styles.colLinks}>
            {shopLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>

        {/* Customer Service */}
        <div className={styles.col}>
          <h5 className={styles.colTitle}>Customer Service</h5>
          <ul className={styles.colLinks}>
            {serviceLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>

        {/* Information */}
        <div className={styles.col}>
          <h5 className={styles.colTitle}>Information</h5>
          <ul className={styles.colLinks}>
            {infoLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 TS by TEXSAVERIO. All rights reserved.</span>
        <div className={styles.bottomLinks}>
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
