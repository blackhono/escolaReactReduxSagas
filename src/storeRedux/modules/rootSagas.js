import { all } from 'redux-saga/effects'

import loginRequest from './auth/sagas'

export default function* rootSaga() {
  return yield all([loginRequest])
}
