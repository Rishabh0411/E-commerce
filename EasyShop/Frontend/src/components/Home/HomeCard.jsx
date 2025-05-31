import styles from './HomeCard.module.css'
import { Link } from 'react-router-dom'

const HomeCard = ({ style }) => {
  return (
    <div className={`col mb-3 ${style.col}`}>
      <Link to="/detail" className={style.link}>
        <div className={style.card}>
          <div className={style.cardImgWrapper}>
            <img
              src=""
              className={style.cardImgTop}
              alt="Product Image"
            />
          </div>
          <div className={style.cardBody}>
            <h5 className={`${style.cardTitle} mb-1`}>Product Name</h5>
            <h6 className={style.cardText}>Rs. 1000</h6>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeCard