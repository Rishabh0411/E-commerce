import React from 'react'
import HomeCard from './HomeCard'

const CardContainer = ({products = []}) => {
  return (
    <section className="py-5" id="shop">
      <div className="container">
        <h4 className="text-center mb-4">Our Amazing Products!!</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {Array.isArray(products) && products.map((product) => (
            <div className="col" key={product.id}>
              <HomeCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CardContainer
console.log("CardContainer rendered!");