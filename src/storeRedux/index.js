import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

import rootReducers from './modules/rootReducers'
import rootSaga from './modules/rootSagas'
import persistedReducers from './modules/reduxPersist'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  persistedReducers(rootReducers),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store

/*  exemplo
const reducer = (state, action) => {
  console.log(action)
  return state

} */
