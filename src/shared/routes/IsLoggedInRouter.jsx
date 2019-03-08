import React, { useEffect } from 'react'

// Routes
import { Router } from "@reach/router";
import Error404 from '../components/Error404'

// * redux
import { connect } from 'react-redux'
import { getUser } from '../redux/actions/authActions'

// Lazy components
const Login = React.lazy(() => import("../../components/public/Login/"));
const Register = React.lazy(() => import('../../components/public/Register/'))
const Home = React.lazy(() => import("../../components/public/Home/"));

const IsLoggedInRouter = ({ state, getUserData }) => {
  useEffect(() => {
    if(state.token) {
      getUserData(state.token)
    }
  }, [])

  return (
    <div>
      <Router className="routerContainer" primary={false}>
        <Home path="home" />
        <Login path="/" />
        <Register path='register' />
        <Error404 default/>
      </Router>
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.authReducer
})

const mapDispatchToProps = dispatch => ({
  getUserData: async (token) => await dispatch(await getUser(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(IsLoggedInRouter)
