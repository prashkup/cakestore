import React, { Fragment } from 'react'
import { Description, ProductCreator, ProductList } from '../ui-elements'

const HomeView = () => {
  return (
    <Fragment>
      <Description />
      <ProductList />
      <ProductCreator />
    </Fragment>
  )
}

export default HomeView
