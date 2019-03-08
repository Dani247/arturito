import React from 'react'
// Routes
import { Router } from "@reach/router";
import Error404 from '../../shared/components/Error404'
import Header from '../../shared/components/Header/public'

// Lazy components
const Login = React.lazy(() => import("../../components/public/Login/"));
const Register = React.lazy(() => import('../../components/public/Register/'))
const Home = React.lazy(() => import("../../components/public/Home/"));


const PublicContainer = () => {
  return (
    <>
      <Header />
      <Router className='routerContainer' primary={false}>
        <Home path='home' />
        <Login path='/' />
        <Register path='register' />
        <Error404 default />
      </Router>
    </>
  )
}

export default PublicContainer
