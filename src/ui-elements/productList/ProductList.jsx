import React from 'react'
import Product from '../product/Product'
import './ProductList.css'

const ProductList = props => {
  const Products = [1,2,3,4,5,6,7,8,9,10,11,12].map((val) => {
    return <Product />
  })

  return (
    <div className='product-list-wrapper'>
      <h2>Cakes</h2>
      <div className='product-list'>
        {Products}
      </div>
    </div>
  )
}

export default ProductList
