import React, { useState, useEffect } from 'react'
import Product from '../product/Product'

import firebase from '../../firebase'

import './ProductList.css'

const ProductList = () => {
  const [ products, setProducts ]= useState([])

  useEffect(() => {
    if (products.length === 0)
    firebase.getProducts()
    .then((val) => setProducts(val))
    .catch(err => console.log(err))
    return () => {}
  }, [products])

  const Products = products.map((val) => {
    return <Product name={val.name} id={val.id} desc={val.description} />
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
