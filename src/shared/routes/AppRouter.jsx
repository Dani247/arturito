import React, { Suspense } from 'react'

// ! Redux to Context
import Store from '../hooks/context/store/'
import { initialState as auth } from '../hooks/context/states/auth'

// ? Components
import App from '../../components/App'

// ? Styles
import { ThemeProvider } from 'react-jss'
import theme from '../themes/v1'
import Preloader from '../components/Preloader/'

// ? check is loggin router
import IsLoggedInRouter from './IsLoggedInRouter'

// * compose states
const initialState = {
  auth
}

const AppRouter = () => {
  return (
    <Store.Provider initState={initialState}>
      <ThemeProvider theme={theme}>
        <App>
          <Suspense fallback={<Preloader />}>
            <IsLoggedInRouter />
          </Suspense>
        </App>
      </ThemeProvider>
    </Store.Provider>
  )
}

export default AppRouter
