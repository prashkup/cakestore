import { ADD_PRODUCT_TO_CART } from './actions'

const initialState = {
  productsInCart: [],
}

const productAdderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      }
    default:
      return state
  }
}

export default productAdderReducer
