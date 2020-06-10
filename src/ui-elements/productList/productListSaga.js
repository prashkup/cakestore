import { put, call } from 'redux-saga/effects'
import { saveProducts } from './actions'
import firebase from '../../firebase'

const productListSaga = function* () {
  const products = yield call([firebase, firebase.getProducts])
  yield put(saveProducts(products))
}

export default productListSaga
