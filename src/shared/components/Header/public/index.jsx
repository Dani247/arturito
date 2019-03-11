import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './styesHeader'
// Components
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const Header = ({ classes, drawerToggleClickHandler }) => {
  return (
    <header className={classes.headerContainer}>
       <nav className={classes.toolbarNavigation}>
        <div className={classes.toolbarToggleButton}>
          <DrawerToggleButton click={drawerToggleClickHandler} />
        </div>
        <div className={classes.toolbarLogo}><Link to="/">THE LOGO</Link></div>
        <div className={classes.space}></div>
        <div className={classes.toolbarNavigaionItems}>
          <ul>
            <li> <Link to='/'>Login</Link> </li>
            <li> <Link to='/home'>Home</Link> </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

const publicHeaderWithStyles = injectSheet(styles)(Header)
export default publicHeaderWithStyles
