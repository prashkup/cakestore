import React, { useState, useEffect } from 'react'
import Product from '../product/Product'
import firebase from '../../firebase'

import './ProductList.css'

const ProductList = () => {
  const [ products, setProducts ]= useState([])

  useEffect(() => {
    async function fetchProducts () {
      try {
        const result = await firebase.getProducts()
        setProducts(result)
      } catch (error) {
        console.error(error)
      }
    }

    if (products.length === 0) fetchProducts()
  }, [products])

  const Products = products.map((val) => {
    return <Product name={val.name} id={val.id} desc={val.description} img={val.image} />
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
