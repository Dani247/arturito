import React, { useEffect } from 'react'

// * redux
import { connect } from 'react-redux'
import { getUser } from '../redux/actions/authActions'

// * public Routes
import PublicContainer from '../../components/public/'
// * private Routes
import PrivateContainer from '../../components/private/'

const IsLoggedInRouter = ({ state, getUserData }) => {
  useEffect(() => {
    if (state.token) {
      getUserData(state.token)
    }
  }, [state.token])

  return (
    <div>
      {state.isAuth ? <PrivateContainer /> : <PublicContainer />}
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
