import * as types from '../types'
// estados iniciais
const initialState = {
  isLoading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOADING_REQUEST: {
      // console.log('Loading (redux)')
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }
    case types.LOADING_FINISHED: {
      // console.log('Loading finished (redux)')
      const newState = { ...initialState }
      return newState
    }

    default: {
      return state
    }
  }
}
