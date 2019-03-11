import React, { useEffect } from 'react'

// * redux
import { connect } from 'react-redux'
import { getUser } from '../redux/actions/authActions'

// * public Routes
import RoutesPrivateContainer from '../../components/public/routes'
// * private Routes
import RoutesPublicContainer from '../../components/private/routes'

const IsLoggedInRouter = ({ state, getUserData }) => {
  useEffect(() => {
    if (state.token) {
      getUserData(state.token)
    }
  }, [state.token])

  return (
    <div>
      {state.isAuth ? <> <RoutesPublicContainer /> </> : <RoutesPrivateContainer />}
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.authReducer
})

const mapDispatchToProps = dispatch => ({
  getUserData: async (token) => dispatch(await getUser(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(IsLoggedInRouter)
