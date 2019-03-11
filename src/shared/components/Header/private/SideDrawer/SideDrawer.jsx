import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './SideDrawerStyles'
import classNames from 'classnames'

const SideDrawer = ({ classes, show, drawerToggleClickHandler, backdropClickHandler }) => {
  let drawerClasses = classes.sideDrawer
  let combineClasses = classNames(
    classes.sideDrawer,
    classes.sideDrawerOpen
  )

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
        <li><Link to='/'>Goals</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </nav>
  )
}

const sideDrawerWithStyles = injectSheet(styles)(SideDrawer)
export default sideDrawerWithStyles