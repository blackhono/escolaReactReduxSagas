import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import GlobalStyles from './styles/GlobalStyles'

import { AuthProvider } from './contexts/auth'
import store, { persistor } from './storeRedux/index'
import Routes from './routes'
import Header from './components/Header'
import history from './services/history'

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AuthProvider>
            <GlobalStyles />
            <Header />
            <Routes />
            <ToastContainer
              autoClose={3000}
              className='toast-container'
              theme='dark'
            />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </Router>
  )
}

export default App
