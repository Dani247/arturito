import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './SideDrawerStyles'

const SideDrawer = ({classes}) => (
  <nav className={classes.sideDrawer}>
    <ul>
      <li><Link to='/'>Home</Link></li>
    </ul>
  </nav>
)

const sideDrawerWithStyles = injectSheet(styles)(SideDrawer)
export default sideDrawerWithStyles