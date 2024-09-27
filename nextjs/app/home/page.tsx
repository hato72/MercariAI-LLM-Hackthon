
import HomeScreen from '../../components/home/page'  
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from './page.module.css';  // CSSモジュールをインポート

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.customHeader}>
        <Header />
      </header>
      <HomeScreen />
      <footer className={styles.customFooter}>
        <Footer />
      </footer>
    </div>
  )
}
