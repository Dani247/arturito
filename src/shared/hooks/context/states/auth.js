import Store from '../store/'

const { useStore } = Store

export const initialState = {
  isAuth: false,
  user: null,
  token: window.sessionStorage.getItem('token')
}

export const useAuthSucces = () => {
  const [ state, setState ] = useStore()
  return (payload) => setState({
    ...state,
    ...payload,
    isAuth: true
  })
}

export const useAuthLogout = () => {
  const [ state, setState ] = useStore()
  window.sessionStorage.removeItem('token')
  return () => setState({
    ...state,
    token: null,
    user: null,
    isAuth: false
  })
}

export const useAuthGetUserData = () => {
  const [ state, setState ] = useStore()
  return (payload) => setState({
    ...state,
    isAuth: true,
    user: payload
  })
}