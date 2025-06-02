import { API_BASE_URL } from '../../services/api'
import styles from './HomeCard.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const HomeCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false)

  // Convert the image URL to the correct format
  const imageUrl = product.image
    ? product.image.startsWith('http')
      ? product.image
      : `${API_BASE_URL}${product.image}`
    : 'https://via.placeholder.com/150'

  return (
    <>
      <div className="card h-100 shadow-sm">
        <Link to={`/detail/${product.id}`} className={`${styles.link} text-decoration-none`}>
          <div className={`${styles.cardImgWrapper} position-relative`}>
            <img
              src={imageUrl}
              className="card-img-top"
              alt={product.name}
              onClick={(e) => {
                e.preventDefault()
                setShowModal(true)
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150'
                e.target.onerror = null
              }}
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title text-dark mb-1">{product.name}</h5>
            <p className="card-text text-primary fw-bold">Rs. {product.price}</p>
          </div>
        </Link>
      </div>

      {showModal && (
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={() => setShowModal(false)}>
              &times;
            </span>
            <img
              src={imageUrl}
              alt={product.name}
              className={styles.modalImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default HomeCard