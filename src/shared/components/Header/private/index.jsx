import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './styesHeader'
import swal from 'sweetalert'
// * redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { userFailed } from '../../../redux/actions/authActions'

const Header = ({ classes, logOut }) => {
  const onLogOut = () => {
    swal({
      title: 'Are you sure?',
      text: 'Leaving so soon?',
      icon: 'info',
      buttons: ['Stay', 'Sign Out']
    })
      .then(res => res && logOut())
  }

  return (
    <header className={classes.headerContainer}>
      <Link to='/'>Accounting</Link>
      <Link to='/goals'>Goals</Link>
      <Link to='/pending'>Pending</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/programing'>Programing</Link>
      <Link to='/reports'>Reports</Link>
      <button onClick={onLogOut}>Sign Out</button>
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
