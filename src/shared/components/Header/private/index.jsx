import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './styesHeader'
// * redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { userFailed } from '../../../redux/actions/authActions'

const Header = ({ classes }) => {
  return (
    <header className={classes.headerContainer}>
       <Link to='/accounting'>Accounting</Link>
       <Link to='/goals'>Goals</Link>
       <Link to='/pending'>Pending</Link>
       <Link to='/profile'>Profile</Link>
       <Link to='/programing'>Programing</Link>
       <Link to='/reports'>Reports</Link>
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
