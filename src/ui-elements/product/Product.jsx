import React from 'react'
import ProductAdder from '../productAdder/ProductAdder'

import './Product.css'

const Product = ({ name, id, desc, img, price }) => {
  return (
    <div className="product">
      <h1>{name}</h1>
      <h2>{id}</h2>
      <p>{desc}</p>
      <p>{price}</p>
      <img src={img} alt="cake" />
      <ProductAdder />
    </div>
  )
}

export default Product
