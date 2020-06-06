const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'

const addToCart = (payload) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload
  }
}

export {
  ADD_PRODUCT_TO_CART,
  addToCart
}