import React, { useState } from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './stylesRegister'
import { Link, Redirect } from '@reach/router'
import { Ghost } from 'react-kawaii'
// * Hooks
import useInput from '../../../shared/hooks/useInput'

// * redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { userLogin } from '../../../shared/redux/actions/authActions'

const Register = ({ classes, login, state }) => {
  // * form input states
  const name = useInput('')
  const lastName = useInput('')
  const email = useInput('')
  const password = useInput('')
  const phone = useInput('')

  // ! State
  const [ isLoading, setIsLoading ] = useState(false)
  const [ statusMsg, setStatusMsg ] = useState('')

  // * on form submit
  const onSubmit = async e => {
    e.preventDefault()

    // * set body
    const body = JSON.stringify({
      name: name.props.value.trim(),
      lastName: lastName.props.value.trim(),
      email: email.props.value.trim(),
      password: password.props.value,
      phone: phone.props.value.trim()
    })

    // * try post request to register new user
    try {
      setIsLoading(true)
      const res = await window.fetch('https://arturito-api.herokuapp.com/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })

      const data = await res.json()

      if (res.status === 200) {
        // * registered succesfully
        window.alert('Registered in!')
        window.sessionStorage.setItem('token', data.token)
        name.clear()
        lastName.clear()
        password.clear()
        phone.clear()
        login(data)
      } else {
        // * nope
        console.log(data)
        password.clear()
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
    state.isAuth ? <Redirect noThrow to='/home' /> : <div className={classes.formContainer}>
      <Ghost size={50} mood='shocked' color='#E0E4E8' />
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <input disabled={isLoading} {...name.props} type='text' required placeholder='Name' />
        <input disabled={isLoading} {...lastName.props} type='text' required placeholder='Last Name' />
        <input disabled={isLoading} {...email.props} type='text' required placeholder='example@example.com' />
        <input disabled={isLoading} {...password.props} type='password' required placeholder='*************' />
        <input disabled={isLoading} {...phone.props} type='text' required placeholder='(555-555-5555)' />
        <button>Register</button>
      </form>
      {isLoading ? <>Sending</> : <>{statusMsg}</>}
      <p>Already have an account? <Link to='/login'>Sign In!</Link></p>
    </div> 
  )
}

const mapStateToProps = state => ({
  state: state.authReducer
})

const mapDispatchToProps = dispatch => ({
  login: (payload) => dispatch(userLogin(payload))
})

export default compose(injectSheet(styles), connect(mapStateToProps, mapDispatchToProps))(Register)
