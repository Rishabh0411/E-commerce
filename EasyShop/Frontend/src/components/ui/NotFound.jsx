import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import Header from '../Home/Header'
import Footer from './Footer'

const NotFound = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.notFoundContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className={styles.homeButton}>
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
