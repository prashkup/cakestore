import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../product/Product'

import './ProductList.css'
import { fetchProducts } from './actions'

const ProductList = () => {
  const products = useSelector((state) => state.products.items) || []
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProducts())
  }, [dispatch, products.length])

  const Products = products.map((val) => {
    return (
      <Product
        product={{ name: val.name, desc: val.desc, id: val.id, img: val.image }}
      />
    )
  })

  return (
    <div className="product-list-wrapper">
      <h2>Cakes</h2>
      <div className="product-list">{Products}</div>
    </div>
  )
}

export default ProductList
