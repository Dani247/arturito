import Store from '../store/'
const { useStore } = Store

// * initial state
export const initialState = {
  isAuth: false,
  user: null,
  token: window.sessionStorage.getItem('token')
}

// * get auth state
export const useAuth = () => {
  const [ { auth } ] = useStore()
  return auth
}

// * login success
export const useAuthSuccess = () => {
  const [ state, setState ] = useStore()
  return (payload) => setState({
    ...state,
    auth: {
      ...state.auth,
      ...payload,
      isAuth: true
    }
  })
}

// * logout
export const useAuthLogout = () => {
  const [ state, setState ] = useStore()
  return () => {
    window.sessionStorage.removeItem('token')
    setState({
      ...state,
      auth: {
        ...state.auth,
        token: null,
        user: null,
        isAuth: false
      }
    })
  }
}

// * get user data by token
export const useAuthGetUserData = () => {
  const [ state, setState ] = useStore()

  return async (token) => {
    const result = await window.fetch('https://arturito-api.herokuapp.com/api/v1/auth/user', {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    })
    const data = await result.json()

    if (result.status === 200) {
      setState({
        ...state,
        auth: {
          ...state.auth,
          isAuth: true,
          user: { ...data,
            incomesTotal: getTotal(data.incomes),
            expensesTotal: getTotal(data.expenses),
            balance: getBalance(data.incomes, data.expenses, data.budget)
          }
        }
      })
    } else {
      useAuthLogout()
    }
  }
}

// * extra funtions
// * total sum
const getTotal = arr => {
  let total = 0
  arr.map((item) => {
    total += item.value
    return null
  })

  return total
}

// * get balance
const getBalance = (incomes, expenses, budget) => {
  const balance = (getTotal(incomes) - getTotal(expenses)) - budget
  return balance
}
