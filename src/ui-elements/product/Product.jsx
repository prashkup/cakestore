import React from 'react'
import './Product.css'

const Product = ({name, id, desc}) => {
  return (
    <div className='product'>
      <h1>{name}</h1>
      <h2>{id}</h2>
      <h3>{desc}</h3>
      <button>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
