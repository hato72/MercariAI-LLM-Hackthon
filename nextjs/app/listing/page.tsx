// pages/index.tsx
import ListingScreen from '../../components/listing'  
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from './page.module.css';  // CSSモジュールをインポート

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.customHeader}>
        <Header />
      </header>
      <ListingScreen />
      <footer className={styles.customFooter}>
        <Footer />
      </footer>
    </div>
  )
}
