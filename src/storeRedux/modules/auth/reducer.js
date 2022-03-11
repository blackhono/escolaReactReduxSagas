import * as types from '../types'
// estados iniciais
const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
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
      return newState
    }
    case types.LOGIN_FAILURE: {
      // console.log('falhei em agir =( (Saga redux)')
      const newState = { ...initialState }

      return newState
    }

    default: {
      return state
    }
  }
}
