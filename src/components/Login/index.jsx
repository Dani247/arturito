import React, { useState } from 'react'
import injectSheet from 'react-jss'
import styles from './stylesLogin'
import { Link } from '@reach/router'
// * hooks
import useInput from '../../shared/hooks/useInput'

const Login = ({ classes }) => {
  // * form input states
  const email = useInput('')
  const password = useInput('')
  // * loading state
  const [ isLoading, setIsLoading ] = useState(false)
  // * status message
  const [ statusMsg, setStatusMsg ] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    const body = JSON.stringify({
      email: email.props.value.trim(),
      password: password.props.value
    })

    try {
      setIsLoading(true)
      const res = await window.fetch('https://arturito-api.herokuapp.com/api/v1/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })

      const data = await res.json()

      if (res.status === 200) {
        // * registered succesfully
        window.alert('Logged in!')
        window.sessionStorage.setItem('token', data.token)
        email.clear()
        password.clear()
      } else {
        // * nope
        console.log(data)
        setStatusMsg(data.msg)
      }

      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setStatusMsg('Internal Server Error')
      setIsLoading(false)
    }
  }

  return (
    <div className={classes.formContainer}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input disabled={isLoading} {...email.props} required placeholder='example@example.com' type='text' />
        <input disabled={isLoading} {...password.props} required placeholder='*************' type='password' />
        <button>Login</button>
      </form>
      {isLoading ? <>Sending</> : <>{statusMsg}</>}
      You dont have an account? <Link to='/register'>Sign Up!</Link>
    </div>
  )
}

export default injectSheet(styles)(Login)
