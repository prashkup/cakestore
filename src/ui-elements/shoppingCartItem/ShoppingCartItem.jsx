import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import './ShoppingCartItem.css'

const ShoppingCartItem = ({ id }) => {
  const product = useSelector((state) => {
    return state.products.items.find((product) => product.id === parseInt(id))
  })
  const quantity = useSelector((state) => state.cart.items[id])

  return (
    <div className="shopping-cart-item-row">
      <button>+</button>
      <button> - </button>
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
    </div>
  )
}

ShoppingCartItem.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ShoppingCartItem
