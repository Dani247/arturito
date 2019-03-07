import React, {Suspense} from 'react'
//Routes
import { Router } from '@reach/router'
// Components
import App from '../../components/App'
import Header from '../components/Header'
// Lazy components
const Login = React.lazy(() => import('../../components/Login/'))
const Home  = React.lazy(() => import('../../components/Home/'))
const AppRouter = () => {
  return(
    <App>
      <Header/>
      <Suspense fallback={<div>...Loading</div>}>
        <Router>
          <Home path='/'/>
          <Login path='login'/>
        </Router>
      </Suspense>
    </App>
  )
}

export default AppRouter