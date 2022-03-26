import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { get } from 'lodash'
import * as userActions from './actions'
import * as types from '../types'
import { api, createSession, createUser, editUser } from '../../../services/api'
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
  } catch (e) {
    yield put(userActions.loginFailure())
    delete api.defaults.headers.Authorization
    const errors = get(e, 'response.data.errors', [])
    errors.map((erro) => toast.error(erro))
  }
}

function* registerRequest({ payload }) {
  try {
    const response = yield createUser(payload)
    yield put(userActions.registerSuccess())
    toast.success('Registro realizado com sucesso')
  } catch (error) {
    yield put(userActions.registerFailure())
    const errors = get(error, 'response.data.errors', [])
    errors.map((erro) => toast.error(erro))
  }
}

function* editRequest({ payload }) {
  try {
    const response = yield editUser(payload)
    yield put(userActions.editSuccess({ ...response.data }))
  } catch (error) {
    yield put(userActions.editFailure())
    const errors = get(error, 'response.data.errors', [])
    errors.map((erro) => toast.error(erro))
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '')
  if (!token) return
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.EDIT_REQUEST, editRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
])
