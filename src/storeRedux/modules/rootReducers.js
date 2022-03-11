import { combineReducers } from 'redux'

import { reducerClickButton } from './example/reducer'
import auth from './auth/reducer'
import loading from './loading/reducer'

export default combineReducers({
  auth,
  loading,
})
