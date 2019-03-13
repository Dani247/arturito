import { AUTH_LOGOUT, AUTH_SUCCESS, AUTH_GET_USER_DATA } from '../types/authTypes'

// * get total sum
const getTotal = arr => {
  let total = 0
  arr.map((item) => {
    total += item.value
  })

  return total
}

// * get user data
export const getUser = async token => {
  const result = await window.fetch('https://arturito-api.herokuapp.com/api/v1/auth/user', {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
    }
  })
  const data = await result.json()

  if (result.status === 200) {
    return {
      type: AUTH_GET_USER_DATA,
      payload: { ...data, incomesTotal: getTotal(data.incomes), expensesTotal: getTotal(data.expenses) }
    }
  } else {
    return {
      type: AUTH_LOGOUT
    }
  }
}

// * checks token in order to get the user info
export const userLogin = (payload) => ({
  type: AUTH_SUCCESS,
  payload
})

export const userFailed = () => ({
  type: AUTH_LOGOUT
})
