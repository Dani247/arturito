import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './styesHeader'
// * redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { userFailed } from '../../redux/actions/authActions'

const Header = ({ classes, logOut, state }) => {
  return (
    <header className={classes.headerContainer}>
      <Link to='home'>Home</Link>
      {state.isAuth ? <button onClick={logOut}>Sign out</button> : <Link to='/'>Sign in</Link>}
    </header>
  )
}

const mapStateToProps = state => ({
  state: state.authReducer
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(userFailed())
})

export default compose(injectSheet(styles), connect(mapStateToProps, mapDispatchToProps))(Header)
