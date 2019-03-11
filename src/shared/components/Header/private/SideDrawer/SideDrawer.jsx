import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './SideDrawerStyles'
import classNames from 'classnames'

const SideDrawer = ({classes, show}) => {
  let drawerClasses = classes.sideDrawer
  let combineClasses = classNames(
    classes.sideDrawer,
    classes.sideDrawerOpen
  )
  
  if(show){
    drawerClasses =combineClasses
  }
  return(
    <nav className={drawerClasses}>
      <ul>
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