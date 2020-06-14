import React from 'react'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
  const products = useSelector((state) => state.cart.productsInCart)
  const ProductsList = () =>
    products.map((el) => (
      <div>
        <h1>{el.name}</h1>
        <p>{el.price}</p>
        <img src={el.img} alt="cake" />
      </div>
    ))
  return <ProductsList />
}

export default ShoppingCart
