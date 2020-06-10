const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
const SAVE_PRODUCTS = 'SAVE_PRODUCTS'

const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS,
  }
}

const saveProducts = (payload) => {
  return {
    type: SAVE_PRODUCTS,
    payload,
  }
}

export { FETCH_PRODUCTS, SAVE_PRODUCTS, fetchProducts, saveProducts }
