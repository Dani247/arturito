import React, { Suspense } from 'react'

// ! Redux
import { Provider } from 'react-redux'
import store from '../redux/configureStore'

// Components
import App from '../../components/App'

// import Footer from '../components/Footer'

// Styles
import { ThemeProvider } from 'react-jss'
import theme from '../themes/v1'
import Preloader from '../components/Preloader/'

// * check is loggin router
import IsLoggedInRouter from './IsLoggedInRouter'

const AppRouter = () => {
  return (
    <Provider store={store({authed: false})}>
      <ThemeProvider theme={theme}>
        <App>
          <Suspense fallback={<Preloader />}>
            <IsLoggedInRouter />
          </Suspense>
        </App>
      </ThemeProvider>
    </Provider>
  )
}

export default AppRouter
