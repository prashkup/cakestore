import React from 'react'
import { useDispatch } from 'react-redux'
import { changeCartContents } from './actions'

const useAddToCart = ({ label, productId, quantity }) => {
  const AddToCart = () => {
    const dispatch = useDispatch()

    return (
      <button
        onClick={() => {
          return dispatch(changeCartContents({ id: productId, quantity: quantity }))
        }}
        className="add-to-cart"
      >
        {label}
      </button>
    )
  }
  return [AddToCart]
}

export default useAddToCart
