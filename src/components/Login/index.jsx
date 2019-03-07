import React from 'react'

// * hooks
import useInput from '../../shared/hooks/useInput'
import { usePost } from '../../shared/hooks/useHttp'
// styles
// import injectSheet from 'react-jss'

const Login = () => {
  const email = useInput('')
  const password = useInput('')
  const [ postState, postLogin ] = usePost('https://arturito-api.herokuapp.com/api/v1/auth')

  const onSubmit = e => {
    e.preventDefault()

    postLogin({
      email: email.props.value,
      password: email.props.value
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input {...email.props} type='text' />
        <input {...password.props} type='password' />
        <button>Login</button>
      </form>
      {postState.isLoading && <>Loging in</>}
    </div>
  )
}

export default Login
