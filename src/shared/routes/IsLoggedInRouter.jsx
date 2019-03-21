import React, { useEffect } from 'react'

// * context
import { useAuth, useAuthGetUserData } from '../hooks/context/states/auth'

// * public Routes
import RoutesPrivateContainer from '../../components/public/routes'
// * private Routes
import RoutesPublicContainer from '../../components/private/routes'

const IsLoggedInRouter = () => {
  const state = useAuth()
  const getUserData = useAuthGetUserData()

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

export default IsLoggedInRouter
