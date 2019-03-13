import React, { useState } from 'react'
// Routes
import { Link, Redirect } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './SideDrawerStyles'
import classNames from 'classnames'
import swal from 'sweetalert'
// * icons
import { Icon } from '@iconify/react'
import calcualtorIcon from '@iconify/react/uil/calcualtor'
import awardIcon from '@iconify/react/uil/award'
import clipboardNotes from '@iconify/react/uil/clipboard-notes'
import userIcon from '@iconify/react/uil/user'
import scheduleIcon from '@iconify/react/uil/schedule'
import receiptAlt from '@iconify/react/uil/receipt-alt'
import cancelIcon from '@iconify/react/uil/cancel'

// * redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { userFailed } from '../../../../redux/actions/authActions'

const SideDrawer = ({ classes, show, drawerToggleClickHandler, backdropClickHandler, logOut }) => {
  const [ redirect, setRedirect ] = useState(false)

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
      .then(res => {
        if (res) {
          setRedirect(true)
          logOut()
        }
      })
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
    redirect ? <Redirect noThrow to='/' /> : <nav className={drawerClasses}>
      <ul onClick={listOnClickHandler}>
        <li><Link to='/'><Icon icon={calcualtorIcon} /> Accounting</Link></li>
        <li><Link to='/goals'><Icon icon={awardIcon} /> Goals</Link></li>
        <li><Link to='/peding'><Icon icon={clipboardNotes} />Pending</Link></li>
        <li><Link to='/profile'><Icon icon={userIcon} /> Profile</Link></li>
        <li><Link to='/programing'><Icon icon={scheduleIcon} /> Programming</Link></li>
        <li><Link to='/reports'><Icon icon={receiptAlt} /> Reports</Link></li>
        <li className={classes.buttonSignOut}><span onClick={onLogOut}><Icon icon={cancelIcon} /> Sign Out</span></li>
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
