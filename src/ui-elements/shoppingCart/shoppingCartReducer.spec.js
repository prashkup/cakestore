import shoppingCartReducer from './shoppingCartReducer'
import { changeCartContents } from './actions'

const initialState = {
  items: {},
}

describe('shoppingCartReducer tests', () => {
  it('should add a product if it is not already present in the cart', () => {
    const state = initialState
    const newState = shoppingCartReducer(
      state,
      changeCartContents({
        id: 1,
        quantity: 1,
      })
    )

    expect(newState).toStrictEqual({
      items: {
        '1': 1,
      },
    })
  })

  it('should update the product quantity if it is already present in the cart', () => {
    const state = {
      items: {
        '2': 1,
      },
    }
    const newState = shoppingCartReducer(
      state,
      changeCartContents({
        id: 1,
        quantity: 1,
      })
    )

    expect(newState).toStrictEqual({
      items: {
        '2': 1,
        '1': 1,
      },
    })
  })

  it('should subtract the product quantity in the cart if the quantity is negative', () => {
    const state = {
      items: {
        '2': 2,
      },
    }
    const newState = shoppingCartReducer(
      state,
      changeCartContents({
        id: 2,
        quantity: -1,
      })
    )

    expect(newState).toStrictEqual({
      items: {
        '2': 1,
      },
    })
  })

  it('should subtract the product quantity in the cart if the quantity is negative', () => {
    const state = {
      items: {
        '2': 2,
      },
    }
    const newState = shoppingCartReducer(
      state,
      changeCartContents({
        id: 2,
        quantity: -1,
      })
    )

    expect(newState).toStrictEqual({
      items: {
        '2': 1,
      },
    })
  })

  it('should remove the product from the cart if the quantity is less than one', () => {
    const state = {
      items: {
        '2': 1,
      },
    }
    const newState = shoppingCartReducer(
      state,
      changeCartContents({
        id: 2,
        quantity: -1,
      })
    )

    expect(newState).toStrictEqual({
      items: {},
    })
  })

  it('should do nothing if the quantity in the action is zero', () => {
    const state = {
      items: {
        '2': 1,
      },
    }
    const newState = shoppingCartReducer(
      state,
      changeCartContents({
        id: 1,
        quantity: 0,
      })
    )

    expect(newState).toStrictEqual({
      items: {
        '2': 1,
      },
    })
  })

  it('should do nothing if the quantity in the action is less than zero', () => {
    const state = {
      items: {
        '2': 1,
      },
    }
    const newState = shoppingCartReducer(
      state,
      changeCartContents({
        id: 1,
        quantity: -1,
      })
    )

    expect(newState).toStrictEqual({
      items: {
        '2': 1,
      },
    })
  })
})
