import { SAVE_PRODUCTS } from './actions'

const productListReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state
  }
}

export default productListReducer
