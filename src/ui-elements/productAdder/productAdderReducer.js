import { ADD_PRODUCT_TO_CART } from './actions'

const initialState = {
  productsInCart: 0,
}

const productAdderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        productsInCart: state.productsInCart + 1,
      }
    default:
      return state
  }
}

export default productAdderReducer
