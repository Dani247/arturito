// * types
import { AUTH_SUCCESS, AUTH_FAILED } from '../types/authTypes'

const initState = {
  isAuth: false,
  user: null,
  token: window.sessionStorage.getItem('token')
}

export default (state = initState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      // * recives token and user info in the payload and set isAuth to true
      return {
        ...state,
        ...action.payload,
        isAuth: true
      }
    case AUTH_FAILED:
    // * sets user and token to null and isAuth to false
      window.sessionStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: false,
        isAuth: false
      }
    default:
      return state
  }
}
