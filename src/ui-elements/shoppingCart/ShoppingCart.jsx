import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartItem from './shoppingCartItem/ShoppingCartItem'
import { Link } from '@reach/router'

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items)
  const ids = Object.keys(cart)
  let CartProducts = () => <h2>There are no products in the cart.</h2>

  if (ids.length > 0) {
    CartProducts = () =>
      ids.map((el, index) => <ShoppingCartItem key={index} id={el} />)
  }

  return (
    <div>
      <CartProducts />
      <Link to="/checkout">Checkout</Link>
      <Link to="/">Continue Shopping</Link>
    </div>
  )
}

export default ShoppingCart
