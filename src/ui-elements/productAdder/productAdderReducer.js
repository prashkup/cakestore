import { ADD_PRODUCT_TO_CART } from './actions'

const initialState = {
  items: {},
}

const productAdderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const id = action.payload.toString()
      const quantity = Object.entries(state.items).find((el) => el[0] === id)[1] || 0

      return {
        items: { ...state.items, [id]: quantity + 1 },
      }
    default:
      return state
  }
}

export default productAdderReducer
