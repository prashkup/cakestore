import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import shoppingCartReducer from './ui-elements/shoppingCart/shoppingCartReducer'
import productListReducer from './ui-elements/productList/productListReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('cakestore-state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cakestore-state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const configureStore = () => {
  const store = createStore(
    combineReducers({ cart: shoppingCartReducer, products: productListReducer }),
    persistedState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  )
  store.subscribe(() => saveToLocalStorage(store.getState()))
  sagaMiddleware.run(rootSaga)
  return { store }
}

export default configureStore
