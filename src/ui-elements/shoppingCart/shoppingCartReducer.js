import { CHANGE_CART_CONTENTS } from './actions'

const initialState = {
  items: {},
}

const productAdderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CART_CONTENTS:
      const id = action.payload.id.toString()
      const cartContents = { ...state.items }
      const currentQuantity = cartContents[`${id}`] > 0 ? cartContents[`${id}`] : 0
      const newQuantity = currentQuantity + action.payload.quantity

      if (newQuantity <= 0) {
        delete cartContents[`${id}`]
        return {
          items: cartContents,
        }
      } else {
        return {
          items: { ...cartContents, [id]: newQuantity },
        }
      }
    default:
      return state
  }
}

export default productAdderReducer
