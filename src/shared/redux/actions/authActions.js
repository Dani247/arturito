import { AUTH_FAILED, AUTH_SUCCESS } from '../types/authTypes'

// * checks token in order to get the user info
export const userLogin = (payload) => ({
  type: AUTH_SUCCESS,
  payload
})

export const userFailed = () => ({
  type: AUTH_FAILED
})
