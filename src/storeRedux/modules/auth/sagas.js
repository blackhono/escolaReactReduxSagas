import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { get } from 'lodash'
import * as userActions from './actions'
import * as types from '../types'
import { api, createSession } from '../../../services/api'
import history from '../../../services/history'

// aqui recebo o payload da action
function* loginRequest({ payload }) {
  const { email, password } = payload
  try {
    console.log('saga', payload)
    const response = yield createSession(payload)
    yield put(userActions.loginSuccess({ ...response.data }))
    toast.success('Login realizado com sucesso')
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`

    // history.push(payload.prevPath)
  } catch (e) {
    yield put(userActions.loginFailure())
    delete api.defaults.headers.Authorization
    toast.error('Falha no login')
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '')
  if (!token) return
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
])
