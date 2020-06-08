const ADD_LAYER = 'ADD_LAYER'
const REMOVE_LAST_LAYER = 'REMOVE_LAST_LAYER'
const RESET = 'RESET'
const SET_TOPPINGS = 'SET_TOPPINGS'
const SET_TIER_FLAVOR = 'SET_TIER_FLAVOR'
const SET_FROSTING_FLAVOR = 'SET_FROSTING_FLAVOR'

const addLayer = (layerType) => {
  return { type: ADD_LAYER, payload: { type: layerType } }
}
const removeLastLayer = () => {
  return { type: REMOVE_LAST_LAYER }
}
const reset = () => {
  return { type: RESET }
}
const setToppings = (topping) => {
  return { type: SET_TOPPINGS, payload: topping }
}
const setTierFlavor = (flavor) => {
  return { type: SET_TIER_FLAVOR, payload: flavor }
}
const setFrostingFlavor = (flavor) => {
  return { type: SET_FROSTING_FLAVOR, payload: flavor }
}

export {
  ADD_LAYER,
  REMOVE_LAST_LAYER,
  RESET,
  SET_TOPPINGS,
  SET_TIER_FLAVOR,
  SET_FROSTING_FLAVOR,
  addLayer,
  removeLastLayer,
  reset,
  setToppings,
  setTierFlavor,
  setFrostingFlavor,
}
