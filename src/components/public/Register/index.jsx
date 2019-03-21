import React, { useState } from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './stylesRegister'
import { Link, navigate } from '@reach/router'
import { Ghost } from 'react-kawaii'
import swal from 'sweetalert'
import PreloaderSquare from '../../../shared/components/PreloaderSquare'
// * Hooks
import useInput from '../../../shared/hooks/custom/useInput'
// * helpers
import useName from '../../../helpers/useName'

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
    setStatusMsg('')

    // * set body
    const body = JSON.stringify({
      name: useName(name.props.value),
      lastName: useName(lastName.props.value),
      email: email.props.value.trim().toLowerCase(),
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
        window.sessionStorage.setItem('token', data.token)
        name.clear()
        lastName.clear()
        password.clear()
        phone.clear()
        const timeout = setTimeout(() => {
          navigate('/')
          login({ ...data })
          swal.stopLoading()
          swal.close()
        }, 1500)
        swal({
          title: 'Registered successfully!',
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
    <div className={classes.formContainer}>
      <Ghost size={50} mood='shocked' color='#E0E4E8' />
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <input disabled={isLoading} {...name.props} type='text' required placeholder='Name' />
        <input disabled={isLoading} {...lastName.props} type='text' required placeholder='Last Name' />
        <input disabled={isLoading} {...email.props} type='email' required placeholder='example@example.com' />
        <input disabled={isLoading} {...password.props} type='password' required placeholder='*************' />
        <input disabled={isLoading} {...phone.props} type='text' required placeholder='(555-555-5555)' />
        <button>Register</button>
      </form>
      {isLoading ? <PreloaderSquare /> : <p className={classes.errorMsg}>{statusMsg}</p>}
      <p>Already have an account? <Link to='/'>Sign In!</Link></p>
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
