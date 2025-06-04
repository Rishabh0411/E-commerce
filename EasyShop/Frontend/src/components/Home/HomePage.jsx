import CardContainer from './CardContainer'
import Header from './Header'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { ProductGridPlaceholder } from '../ui/ProductCardPlaceholder'
import styles from './HomeCard.module.css'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [retrying, setRetrying] = useState(false)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await api.get('/products/')
      console.log('API Response:', res.data) // Debug log
      setProducts(res.data)
    } catch (err) {
      console.error('Error details:', err)
      setError(
        err.response?.data?.message ||
        err.message ||
        'Failed to fetch products. Please try again.'
      )
    } finally {
      setLoading(false)
      setRetrying(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleRetry = () => {
    setRetrying(true)
    fetchProducts()
  }

  if (loading) {
    return (
      <>
        <Header />
        <section className="py-5" id="shop">
          <h4 style={{textAlign: 'center'}}>Our Amazing Products!!</h4>
          <div className="container px-4 px-lg-5 mt-5">
            <ProductGridPlaceholder count={8} />
          </div>
        </section>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="container py-5">
          <div className="text-center">
            <h3 className="text-danger mb-3">Oops! Something went wrong</h3>
            <p className="text-muted mb-4">{error}</p>
            <button 
              className="btn btn-primary"
              onClick={handleRetry}
              disabled={retrying}
            >
              {retrying ? 'Retrying...' : 'Try Again'}
            </button>
          </div>
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

export default HomePage
