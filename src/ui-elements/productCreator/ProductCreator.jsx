import React, { useRef, useEffect, useReducer } from 'react'
import './ProductCreator.css'
import cakePainter from '../../cakePainter'
import reducer from './reducer'
import initialState from './initialState'
import {
  addLayer,
  removeLastLayer,
  reset,
  setFrostingFlavor,
  setTierFlavor,
  setToppings,
} from './actions'

const ProductCreator = () => {
  const svgRef = useRef(null)
  const [data, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (svgRef.current) {
      cakePainter(svgRef.current, data)
    }
  }, [data])

  const addLayerHandler = (layerType) => {
    dispatch(addLayer(layerType))
  }
  const setToppingsHandler = (topping) => {
    dispatch(setToppings(topping))
  }
  const removeLastLayerHandler = () => {
    dispatch(removeLastLayer())
  }
  const resetHandler = () => {
    dispatch(reset())
  }
  const setFrostingFlavorHandler = (flavor) => {
    dispatch(setFrostingFlavor(flavor))
  }
  const setTierFlavorHandler = (flavor) => {
    dispatch(setTierFlavor(flavor))
  }

  return (
    <div id="product-creator" className="product-creator">
      <svg width="300" height="300" className="recipe" ref={svgRef}></svg>
      <div className="flavor-menus">
        <p>Tiers: </p>
        <select
          className="flavor-menu"
          name="tier-flavors"
          onChange={(e) => {
            setTierFlavorHandler(e.target.value)
          }}
        >
          <option selected value="chocolate">
            Chocolate
          </option>
          <option value="strawberry">Strawberry</option>
          <option value="pineapple">Pineapple</option>
          <option value="butterscotch">Butterscotch</option>
        </select>
        <p>Frostings: </p>
        <select
          className="flavor-menu"
          name="frosting-flavors"
          onChange={(e) => {
            setFrostingFlavorHandler(e.target.value)
          }}
        >
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option selected value="pineapple">
            Pineapple
          </option>
          <option value="butterscotch">Butterscotch</option>
        </select>
        <p>Topping: </p>
        <select
          className="flavor-menu"
          name="frosting-flavors"
          onChange={(e) => {
            setToppingsHandler(e.target.value)
          }}
        >
          <option selected value="none">
            None
          </option>
          <option value="sprinkles">Sprinkles</option>
        </select>
      </div>
      <h3>Price: {data.price}</h3>
      <div className="control-panel">
        <button
          onClick={() => {
            addLayerHandler('tier')
          }}
        >
          Add tier
        </button>
        <button
          onClick={() => {
            removeLastLayerHandler()
          }}
        >
          Remove last layer
        </button>
        <button
          onClick={() => {
            addLayerHandler('frosting')
          }}
        >
          Add frosting
        </button>
        <button
          onClick={() => {
            resetHandler()
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            console.log('coming soon')
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCreator
