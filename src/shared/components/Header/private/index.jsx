import React from 'react'
// Routes
import { Link } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './styesHeader'
import swal from 'sweetalert'
// Components
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
// * redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { userFailed } from '../../../redux/actions/authActions'

const Header = ({ classes, logOut, drawerToggleClickHandler }) => {
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
      <nav className={classes.toolbarNavigation}>
        <div className={classes.toolbarToggleButton}>
          <DrawerToggleButton click={drawerToggleClickHandler} />
        </div>
        <div className={classes.toolbarLogo}><Link to="/">THE LOGO</Link></div>
        <div className={classes.space}></div>
        <div className={classes.toolbarNavigaionItems}>
          <ul>
            <li> <Link to='/'>Accounting</Link> </li>
            <li> <Link to='/goals'>Goals</Link> </li>
            {/* <li> <Link to='/pending'>Pending</Link> </li>
            <li> <Link to='/profile'>Profile</Link> </li>
            <li> <Link to='/programing'>Programing</Link> </li>
            <li> <Link to='/reports'>Reports</Link> </li> */}
            <li>  <button onClick={onLogOut}>Sign Out</button> </li>
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
