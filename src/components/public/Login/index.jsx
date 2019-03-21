import React, { useState } from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './stylesLogin'
import { Ghost } from 'react-kawaii'
import { Link, navigate } from '@reach/router'
import swal from 'sweetalert'
import PreloaderSquare from '../../../shared/components/PreloaderSquare'
// * Hooks
import useInput from '../../../shared/hooks/custom/useInput'
import { useAuthSuccess, useAuthLogout } from '../../../shared/hooks/context/states/auth'

const Login = ({ classes }) => {
  const userLogin = useAuthSuccess()
  const userFailed = useAuthLogout()
  // * form input states
  const email = useInput('')
  const password = useInput('')
  // * loading state
  const [ isLoading, setIsLoading ] = useState(false)
  // * status message
  const [ statusMsg, setStatusMsg ] = useState('')

  const onSubmit = async e => {
    e.preventDefault()
    setStatusMsg('')

    const body = JSON.stringify({
      email: email.props.value.trim().toLowerCase(),
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
        console.log('deberia guardar esto', data.token)
        window.sessionStorage.setItem('token', data.token)
        email.clear()
        password.clear()
        const timeout = setTimeout(() => {
          navigate('/')
          console.log('data', { ...data })
          userLogin({ ...data })
          swal.stopLoading()
          swal.close()
        }, 1500)
        swal({
          text: ' ',
          icon: 'success',
          button: [],
          closeOnClickOutside: () => {
            navigate('/')
            userLogin({ ...data })
            clearTimeout(timeout)
          }
        })
      } else {
        // * nope
        setStatusMsg(data.msg)
        userFailed()
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
      <Ghost size={100} mood='blissful' color='#E0E4E8' />
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input disabled={isLoading} {...email.props} required placeholder='example@example.com' type='email' />
        <input disabled={isLoading} {...password.props} required placeholder='*************' type='password' />
        <button>Login</button>
      </form>
      {isLoading ? <PreloaderSquare /> : <p className={classes.errorMsg}>{statusMsg}</p>}
      <p>
      You dont have an account? <Link to='/register'>Sign Up!</Link>
      </p>
    </div>
  )
}

export default injectSheet(styles)(Login)
