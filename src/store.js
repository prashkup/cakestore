import { createStore } from 'redux'
import reducer from './ui-elements/productAdder/reducer'

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
  const store = createStore(reducer, persistedState)
  store.subscribe(() => saveToLocalStorage(store.getState()))
  return { store }
}

export default configureStore
