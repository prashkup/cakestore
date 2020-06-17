import React from 'react'
import './ProductAdder.css'

import { useDispatch } from 'react-redux'
import { addToCart } from './actions'

const ProductAdder = ({ id }) => {
  const dispatch = useDispatch()

  return (
    <div className="add-to-cart-wrapper">
      <button onClick={() => dispatch(addToCart(id))}>Add to Cart</button>
    </div>
  )
}

export default ProductAdder
