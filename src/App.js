import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// import history from './services/history'

import GlobalStyles from './styles/GlobalStyles'

import { AuthProvider } from './contexts/auth'
import store, { persistor } from './storeRedux/index'
import Routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
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
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
