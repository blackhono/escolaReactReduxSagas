import * as types from '../types'

export function clickbutton() {
  return {
    type: types.BOTAO_CLICADO,
  }
}

export function login(email, password) {
  return {
    type: 'LOGIN',
    payload: { email, password },
  }
}
