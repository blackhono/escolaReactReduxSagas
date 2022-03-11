import * as types from '../types'

export function loadingRequest() {
  return {
    type: types.LOADING_REQUEST,
  }
}

export function loadingfinished() {
  return {
    type: types.LOADING_FINISHED,
  }
}
