import { combineReducers } from 'redux'

import { reducerClickButton } from './example/reducer'
import auth from './auth/reducer'

export default combineReducers({
  auth,
})
