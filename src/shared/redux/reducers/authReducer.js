// * types
import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_GET_USER_DATA } from '../types/authTypes'

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
    case AUTH_LOGOUT:
    // * sets user and token to null and isAuth to false
      window.sessionStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        isAuth: false
      }
    case AUTH_GET_USER_DATA:
      return {
        ...state,
        isAuth: true,
        user: action.payload
      }
    default:
      return state
  }
}
