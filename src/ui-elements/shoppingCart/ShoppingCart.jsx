import React from 'react'
import './ShoppingCart.css'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
  const quantity = useSelector((state) => state.cart.productsInCart)

  return (
    <div className="shopping-cart">
      <p>{quantity}</p>
    </div>
  )
}

export default ShoppingCart
