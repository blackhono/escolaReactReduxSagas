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

      return newState
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state }
      // console.log('falhei em agir =( (Saga redux)')
      newState.isLoading = true
      return newState
    }

    default: {
      return state
    }
  }
}
