import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './styesHeader'
// Components
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
// * redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { userFailed } from '../../../redux/actions/authActions'

const Header = ({ classes, logOut, state, drawerToggleClickHandler }) => {
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
            {state.isAuth ? <button onClick={logOut}>Sign out</button> : <Link to='/'>Sign in</Link>}
          </ul>
        </div>
      </nav>
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
