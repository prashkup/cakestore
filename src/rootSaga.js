import { takeEvery } from 'redux-saga/effects'
import { FETCH_PRODUCTS } from './ui-elements/productList/actions'
import productListSaga from './ui-elements/productList/productListSaga'

const rootSaga = function* () {
  yield takeEvery(FETCH_PRODUCTS, productListSaga)
}

export default rootSaga
