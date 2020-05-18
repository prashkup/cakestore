import initialState from './initialState'
import { ADD_LAYER, REMOVE_LAST_LAYER, RESET, SET_TOPPINGS, SET_TIER_FLAVOR, SET_FROSTING_FLAVOR } 
from './actions'
import { prices } from '../../data'

const calculatePrice = (layers) => {
  const numberOfTiers = layers.filter(layer => layer.type === 'tier').length
  const numberOfFrostings = layers.length - numberOfTiers
  const totalPrice = numberOfTiers*prices.tier + numberOfFrostings*prices.frosting
  
  return totalPrice
}

const addLayer = (data, layerType) => {
  const currentLayerType = layerType
  const flavor = currentLayerType === 'tier' ? data.tierFlavor : data.frostingFlavor
  const lastLayer = data.layers[data.layers.length - 1] || {
    level: -1,
    type: 'frosting'
  }
  const { level, type } = lastLayer
  const currentLayerLevel = currentLayerType === 'tier' ? level + 1 : level
  const updatedLayers =  [...data.layers, { type: currentLayerType, level: currentLayerLevel, flavor}]
  const updatedPrice = calculatePrice(updatedLayers)

  if (data.toppings === 'none' && currentLayerType !== type && currentLayerLevel < 3) {
    return {
      ...data,
      layers: updatedLayers,
      price: updatedPrice
    }
  } else {
    return data
  }
}

const removeLastLayer = (data) => {
  const layers = data.layers.slice(0, data.layers.length - 1)

  return {
    ...data,
    layers,
    price: calculatePrice(layers),
    toppings: 'none'
  }
}

const reducer = (state, action) => { 
  const data = state

  switch (action.type) {
    case SET_TIER_FLAVOR:
      return { ...data, tierFlavor: action.payload }
    case SET_FROSTING_FLAVOR:
      return { ...data, frostingFlavor: action.payload }
    case ADD_LAYER:
      const newLayerType = action.payload.type
      return addLayer(data, newLayerType)
    case SET_TOPPINGS:
      return {...data, toppings: action.payload}
    case REMOVE_LAST_LAYER:
      return removeLastLayer(data)
    case RESET:
      return initialState
    default:
      return state
  }
}

export default reducer