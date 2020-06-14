import React from 'react'
import './ProductAdder.css'

import { useDispatch } from 'react-redux'
import { addToCart } from './actions'

const ProductAdder = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className="add-to-cart-wrapper">
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}

export default ProductAdder
