import * as types from '../types'
// estados iniciais
const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const { payload } = action
      // console.log('foi um sucessão! =) (Saga redux)', payload)
      const newState = { ...state }
      newState.isLoggedIn = true
      newState.user = payload.user
      newState.token = payload.token
      newState.isLoading = false
      return newState
    }
    case types.LOGIN_FAILURE: {
      // console.log('falhei em agir =( (Saga redux)')
      const newState = { ...initialState }
      newState.isLoading = false
      return newState
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state }
      // console.log('falhei em agir =( (Saga redux)')
      newState.isLoading = true
      return newState
    }

    case types.EDIT_SUCCESS: {
      const { payload } = action
      const newState = { ...state }
      newState.user.email = payload.email
      newState.user.nome = payload.nome
      newState.isLoading = false
      return newState
    }

    case types.EDIT_FAILURE: {
      const newState = { ...state }
      newState.isLoading = false
      return newState
    }

    case types.EDIT_REQUEST: {
      const newState = { ...state }
      // console.log('falhei em agir =( (Saga redux)')
      newState.isLoading = true
      return newState
    }

    case types.REQUEST_FAILURE: {
      const newState = { ...state }
      newState.isLoading = false
      return newState
    }

    default: {
      return state
    }
  }
}
