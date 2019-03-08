import React, { useState } from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './stylesLogin'
import { Ghost } from 'react-kawaii'
// * Hooks
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
        window.localStorage.setItem('token', data.token)
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
      <Ghost size={100} mood="blissful" color="#E0E4E8" />
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input disabled={isLoading} {...email.props} required placeholder='example@example.com' type='email' />
        <input disabled={isLoading} {...password.props} required placeholder='*************' type='password' />
        <button>Login</button>
      </form>
      {isLoading ? <>Sending</> : <>{statusMsg}</>}
    </div>
  )
}

export default injectSheet(styles)(Login)
