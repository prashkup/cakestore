import reducer from './reducer'
import initialState from './initialState'
import {
  addLayer,
  setTierFlavor,
  setFrostingFlavor,
  setToppings,
  removeLastLayer,
  reset,
} from './actions'

describe('reducer tests', () => {
  it('should set the tier flavor', () => {
    const state = initialState
    const newState = reducer(state, setTierFlavor('chocolate'))
    expect(newState.tierFlavor).toStrictEqual('chocolate')
  })

  it('should set the frosting flavor', () => {
    const state = initialState
    const newState = reducer(state, setFrostingFlavor('pineapple'))
    expect(newState.frostingFlavor).toStrictEqual('pineapple')
  })

  it('should add a tier when there are no layers in the cake', () => {
    const state = { ...initialState, layers: [], tierFlavor: 'chocolate' }
    const newState = reducer(state, addLayer('tier'))
    const received = {
      price: newState.price,
      layers: newState.layers,
    }
    const expected = {
      price: 100,
      layers: [
        {
          type: 'tier',
          level: 0,
          flavor: 'chocolate',
        },
      ],
    }
    expect(received).toStrictEqual(expected)
  })

  it('should add a tier when the last layer is not a frosting', () => {
    const state = {
      ...initialState,
      layers: [{ type: 'tier', level: 0, flavor: 'chocolate' }],
      tierFlavor: 'butterscotch',
      price: 100,
    }
    const newState = reducer(state, addLayer('tier'))
    const received = {
      price: newState.price,
      layers: newState.layers,
    }
    const expected = {
      price: 100,
      layers: [
        {
          type: 'tier',
          level: 0,
          flavor: 'chocolate',
        },
      ],
    }
    expect(received).toStrictEqual(expected)
  })

  it('should not add a frosting if the last layer is not a tier', () => {
    const state = {
      ...initialState,
      layers: [
        { type: 'tier', level: 0, flavor: 'chocolate' },
        { type: 'frosting', level: 0, flavor: 'pineapple' },
      ],
      frostingFlavor: 'butterscotch',
    }
    const newState = reducer(state, addLayer('frosting'))
    const received = {
      price: newState.price,
      layers: newState.layers,
    }
    const expected = {
      price: 115,
      layers: [
        {
          type: 'tier',
          level: 0,
          flavor: 'chocolate',
        },
        {
          type: 'frosting',
          level: 0,
          flavor: 'pineapple',
        },
      ],
    }
    expect(received).toStrictEqual(expected)
  })

  it('should not add another layer if toppings have been selected', () => {
    const state = {
      ...initialState,
      layers: [{ type: 'tier', level: 0, flavor: 'pineapple' }],
      toppings: 'sprinkles',
      price: 100,
    }
    const newState = reducer(state, addLayer('tier'))
    const received = {
      price: newState.price,
      layers: newState.layers,
    }
    const expected = {
      price: 100,
      layers: [
        {
          type: 'tier',
          level: 0,
          flavor: 'pineapple',
        },
      ],
    }
    expect(received).toStrictEqual(expected)
  })

  it('should not add another layer if the cake has 3 levels', () => {
    const state = {
      ...initialState,
      layers: [
        { type: 'tier', level: 0, flavor: 'chocolate' },
        { type: 'frosting', level: 0, flavor: 'strawberry' },
        { type: 'tier', level: 1, flavor: 'chocolate' },
        { type: 'frosting', level: 1, flavor: 'strawberry' },
        { type: 'tier', level: 2, flavor: 'chocolate' },
        { type: 'frosting', level: 2, flavor: 'strawberry' },
      ],
      price: 345,
    }
    const newState = reducer(state, addLayer('tier'))
    const received = {
      price: newState.price,
      layers: newState.layers,
    }
    const expected = {
      price: 345,
      layers: [
        { type: 'tier', level: 0, flavor: 'chocolate' },
        { type: 'frosting', level: 0, flavor: 'strawberry' },
        { type: 'tier', level: 1, flavor: 'chocolate' },
        { type: 'frosting', level: 1, flavor: 'strawberry' },
        { type: 'tier', level: 2, flavor: 'chocolate' },
        { type: 'frosting', level: 2, flavor: 'strawberry' },
      ],
    }
    expect(received).toStrictEqual(expected)
  })

  it('should set the toppings', () => {
    const state = { ...initialState, toppings: 'none' }
    const newState = reducer(state, setToppings('sprinkles'))
    expect(newState.toppings).toStrictEqual('sprinkles')
  })

  it('should remove the last layer from the cake if it has any layers', () => {
    const state = {
      ...initialState,
      layers: [
        { type: 'tier', level: 0, flavor: 'chocolate' },
        { type: 'frosting', level: 0, flavor: 'strawberry' },
        { type: 'tier', level: 1, flavor: 'chocolate' },
        { type: 'frosting', level: 1, flavor: 'strawberry' },
        { type: 'tier', level: 2, flavor: 'chocolate' },
        { type: 'frosting', level: 2, flavor: 'strawberry' },
      ],
      price: 345,
    }
    const newState = reducer(state, removeLastLayer())
    const received = {
      price: newState.price,
      layers: newState.layers,
    }
    const expected = {
      price: 330,
      layers: [
        { type: 'tier', level: 0, flavor: 'chocolate' },
        { type: 'frosting', level: 0, flavor: 'strawberry' },
        { type: 'tier', level: 1, flavor: 'chocolate' },
        { type: 'frosting', level: 1, flavor: 'strawberry' },
        { type: 'tier', level: 2, flavor: 'chocolate' },
      ],
    }
    expect(received).toStrictEqual(expected)
  })

  it('should remove the toppings and the last layer if toppings have been set', () => {
    const state = {
      ...initialState,
      layers: [
        { type: 'tier', level: 0, flavor: 'chocolate' },
        { type: 'frosting', level: 0, flavor: 'strawberry' },
        { type: 'tier', level: 1, flavor: 'chocolate' },
        { type: 'frosting', level: 1, flavor: 'strawberry' },
        { type: 'tier', level: 2, flavor: 'chocolate' },
        { type: 'frosting', level: 2, flavor: 'strawberry' },
      ],
      toppings: 'sprinkles',
      price: 345,
    }
    const newState = reducer(state, removeLastLayer())
    const received = {
      price: newState.price,
      layers: newState.layers,
      toppings: newState.toppings,
    }
    const expected = {
      price: 330,
      layers: [
        { type: 'tier', level: 0, flavor: 'chocolate' },
        { type: 'frosting', level: 0, flavor: 'strawberry' },
        { type: 'tier', level: 1, flavor: 'chocolate' },
        { type: 'frosting', level: 1, flavor: 'strawberry' },
        { type: 'tier', level: 2, flavor: 'chocolate' },
      ],
      toppings: 'none',
    }
    expect(received).toStrictEqual(expected)
  })

  it('should reset the cake when it does not contain layers', () => {
    const state = { ...initialState, layers: [] }
    const newState = reducer(state, reset())
    expect(newState).toStrictEqual(initialState)
  })

  it('should reset the cake when it contains layers', () => {
    const state = {
      ...initialState,
      layers: [
        { type: 'tier', level: 0, flavor: 'chocolate' },
        { type: 'frosting', level: 0, flavor: 'strawberry' },
        { type: 'tier', level: 1, flavor: 'chocolate' },
        { type: 'frosting', level: 1, flavor: 'strawberry' },
        { type: 'tier', level: 2, flavor: 'chocolate' },
        { type: 'frosting', level: 2, flavor: 'strawberry' },
      ],
      price: 345,
    }
    const newState = reducer(state, reset())
    expect(newState).toStrictEqual(initialState)
  })
})
