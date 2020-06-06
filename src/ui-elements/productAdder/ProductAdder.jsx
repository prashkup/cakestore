import React from 'react'
import './ProductAdder.css'

import { useDispatch } from 'react-redux'
import { addToCart } from './actions'

const ProductAdder = () => {
  const dispatch = useDispatch()

  return (
    <div className='add-to-cart-wrapper'>
      <button onClick={() => dispatch(addToCart(1))}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductAdder
