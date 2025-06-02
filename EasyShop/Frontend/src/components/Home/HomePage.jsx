import CardContainer from './CardContainer'
import Header from './Header'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import styles from './HomeCard.module.css'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await api.get('products/')
        setProducts(res.data)
      } catch (err) {
        setError(err.message || 'Failed to fetch products')
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading products...</p>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <div className={styles.errorContainer}>
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
          <button 
            className={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <CardContainer products={products}/>
    </>
  )
}

console.log("HomePage rendered!");

export default HomePage
