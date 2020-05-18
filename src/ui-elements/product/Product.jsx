import React from 'react'
import './Product.css'

const Product = ({name, id, desc, img}) => {
  return (
    <div className='product'>
      <h1>{name}</h1>
      <h2>{id}</h2>
      <p>{desc}</p>
      <img src={img} alt='cake' />
      <button>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
