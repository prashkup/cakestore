import productAdderReducer from './productAdderReducer'
import { addToCart } from './actions'

const initialState = {
  items: {},
}

describe('productAdderReducer tests', () => {
  it('should add a product if it is not already present in the cart', () => {
    const state = initialState
    const newState = productAdderReducer(state, addToCart(1))

    expect(newState).toStrictEqual({
      items: {
        '1': 1,
      },
    })
  })
})

describe('productAdderReducer tests', () => {
  it('should update the product quantity if it is already present in the cart', () => {
    const state = {
      items: {
        '2': 1,
      },
    }
    const newState = productAdderReducer(state, addToCart(1))

    expect(newState).toStrictEqual({
      items: {
        '2': 1,
        '1': 1,
      },
    })
  })
})
