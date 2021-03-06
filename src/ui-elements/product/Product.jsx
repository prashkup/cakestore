import React from 'react'
import PropTypes from 'prop-types'
import useAddToCart from '../shoppingCart/useAddToCart'

import './Product.css'

const Product = ({ product }) => {
  const [AddToCartButton] = useAddToCart({
    label: 'Add to Cart',
    productId: product.id,
    quantity: 1,
  })

  return (
    <div className="product">
      <h1>{product.name}</h1>
      <h2>{product.id}</h2>
      <p>{product.desc}</p>
      <p>{product.price}</p>
      <img src={product.img} alt="cake" />
      <AddToCartButton />
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }),
}

export default Product
