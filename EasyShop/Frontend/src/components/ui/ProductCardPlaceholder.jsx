import styles from './ProductCardPlaceholder.module.css'

const ProductCardPlaceholder = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={`${styles.cardImgWrapper} ${styles.shimmer}`}></div>
        <div className={styles.cardBody}>
          <div className={`${styles.titlePlaceholder} ${styles.shimmer}`}></div>
          <div className={`${styles.pricePlaceholder} ${styles.shimmer}`}></div>
        </div>
      </div>
    </div>
  )
}

// Create an array of placeholders for the grid
export const ProductGridPlaceholder = ({ count = 8 }) => {
  return (
    <div className={styles.gridContainer}>
      {Array(count).fill(null).map((_, index) => (
        <ProductCardPlaceholder key={index} />
      ))}
    </div>
  )
}

export default ProductCardPlaceholder
