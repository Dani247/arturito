import React, {Suspense} from 'react'
// ! Redux
import { Provider } from 'react-redux'
// Routes
import { Router } from '@reach/router'
// Components
import App from '../../components/App'
import Header from '../components/Header'
// Styles
import { ThemeProvider } from 'react-jss'
import theme from '../themes/v1'
// Lazy components
const Login = React.lazy(() => import('../../components/Login/'))
const Home  = React.lazy(() => import('../../components/Home/'))
const AppRouter = () => {
  return(
    // <Provider store={null}>
      <ThemeProvider theme={theme}>
        <App>
          <Header/>
          <Suspense fallback={<div>...Loading</div>}>
            <Router className='routerContainer' primary={false}>
              <Home path='/'/>
              <Login path='login'/>
            </Router>
          </Suspense>
        </App>
      </ThemeProvider>
    // </Provider>
  )
}

export default AppRouter