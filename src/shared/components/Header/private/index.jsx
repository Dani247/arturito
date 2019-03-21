import React, { useState } from 'react'
// Routes
import { Link, Redirect } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from '../styesHeader'
import swal from 'sweetalert'
// * icons
// * icons
import { Icon } from '@iconify/react'
import calcualtorIcon from '@iconify/react/uil/calcualtor'
import awardIcon from '@iconify/react/uil/award'
import clipboardNotes from '@iconify/react/uil/clipboard-notes'
import userIcon from '@iconify/react/uil/user'
import scheduleIcon from '@iconify/react/uil/schedule'
import receiptAlt from '@iconify/react/uil/receipt-alt'
import cancelIcon from '@iconify/react/uil/cancel'
// Components
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import reactLogo from '../../../media/reactLogo.png'

// * context
import { useAuthLogout } from '../../../hooks/context/states/auth'

const Header = ({ classes, drawerToggleClickHandler }) => {
  const logOut = useAuthLogout()
  const [ redirect, setRedirect ] = useState(false)

  const onLogOut = () => {
    swal({
      title: 'Are you sure?',
      text: 'Leaving so soon?',
      icon: 'info',
      buttons: ['Stay', 'Sign Out']
    })
      .then(res => {
        if (res) {
          setRedirect(true)
          logOut()
        }
      })
  }

  return (
    redirect ? <Redirect noThrow to='/' /> : <header className={classes.headerContainer}>
      <nav className={classes.toolbarNavigation}>
        <div className={classes.toolbarToggleButton}>
          <DrawerToggleButton click={drawerToggleClickHandler} />
        </div>
        <div className={classes.toolbarLogo}><Link to='/'><img className={classes.reactLogo} src={reactLogo} alt='reactLogo' /></Link></div>
        <div className={classes.space} />
        <div className={classes.toolbarNavigaionItems}>
          <ul>
            <li><Link to='/'><Icon icon={calcualtorIcon} /> Accounting</Link></li>
            <li><Link to='/goals'><Icon icon={awardIcon} /> Goals</Link></li>
            <li><Link to='/peding'><Icon icon={clipboardNotes} />Peding</Link></li>
            <li><Link to='/profile'><Icon icon={userIcon} /> Profile</Link></li>
            <li><Link to='/programing'><Icon icon={scheduleIcon} /> Programing</Link></li>
            <li><Link to='/reports'><Icon icon={receiptAlt} /> Repots</Link></li>
            <li><span onClick={onLogOut}><Icon icon={cancelIcon} /> Sign Out</span></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default injectSheet(styles)(Header)
