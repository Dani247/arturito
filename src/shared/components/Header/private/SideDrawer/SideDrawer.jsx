import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './SideDrawerStyles'
import classNames from 'classnames'
import swal from 'sweetalert'

// * redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { userFailed } from '../../../../redux/actions/authActions'

const SideDrawer = ({ classes, show, drawerToggleClickHandler, backdropClickHandler, logOut }) => {
  let drawerClasses = classes.sideDrawer
  let combineClasses = classNames(
    classes.sideDrawer,
    classes.sideDrawerOpen
  )

  const onLogOut = () => {
    swal({
      title: 'Are you sure?',
      text: 'Leaving so soon?',
      icon: 'info',
      buttons: ['Stay', 'Sign Out']
    })
      .then(res => res && logOut())
  }

  const listOnClickHandler = e => {
    if (e.target.href) {
      drawerToggleClickHandler()
      backdropClickHandler()
    }
  }

  if (show.sideDrawerOpen) {
    drawerClasses = combineClasses
  }

  return (
    <nav className={drawerClasses}>
      <ul onClick={listOnClickHandler}>
        <li><Link to='/'>Accounting</Link></li>
        <li><Link to='/goals'>Goals</Link></li>
        <li><Link to='/peding'>Peding</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/programing'>Programing</Link></li>
        <li><Link to='/reports'>Repots</Link></li>
        <li><button onClick={onLogOut}>Sign Out</button></li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(userFailed())
})

export default compose(injectSheet(styles), connect(mapStateToProps, mapDispatchToProps))(SideDrawer)
