import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import useAddToCart from '../useAddToCart'

import './ShoppingCartItem.css'

const ShoppingCartItem = ({ id }) => {
  const product = useSelector((state) => {
    return state.products.items.find((product) => product.id === parseInt(id))
  })
  const quantity = useSelector((state) => state.cart.items[id])
  const [ProductQuantityIncrementor] = useAddToCart({
    label: '+',
    productId: id,
    quantity: 1,
  })
  const [ProductQuantityDecrementor] = useAddToCart({
    label: '-',
    productId: id,
    quantity: -1,
  })
  const [ProductRemover] = useAddToCart({
    label: 'X',
    productId: id,
    quantity: -quantity,
  })

  return (
    <div className="shopping-cart-item-row">
      <div className="cart-item-controls">
        <ProductQuantityIncrementor />
        <ProductQuantityDecrementor />
      </div>
      <h1>{product.name}</h1>
      <img
        width="60"
        height="60"
        src={product.image}
        alt="cake in the shopping cart"
      />
      <h2>
        ({product.price} X {quantity})
      </h2>
      <ProductRemover />
    </div>
  )
}

ShoppingCartItem.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ShoppingCartItem
