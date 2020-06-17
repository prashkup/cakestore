import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartItem from '../shoppingCartItem/ShoppingCartItem'

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items)
  const ids = Object.keys(cart)
  const ProductsList = () =>
    ids.map((el, index) => <ShoppingCartItem key={index} id={el} />)

  return (
    <div>
      <ProductsList />
      <h3>100</h3>
      <button>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  )
}

export default ShoppingCart
