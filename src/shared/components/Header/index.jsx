import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './styesHeader'

const Header = ({classes}) => {
  return(
    <header className={classes.headerContainer}>
      <Link to='home'>Home</Link>
      <Link to='/'>Login</Link>
    </header>
  )
}
const headertWithStyles =  injectSheet(styles)(Header)
export default headertWithStyles