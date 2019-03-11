import React, { useState } from 'react'
// Routes
import { Router } from '@reach/router'
// Components
import Error404 from '../../shared/components/Error404'
import Header from '../../shared/components/Header/private'
import SideDrawer from '../../shared/components/Header/private/SideDrawer/SideDrawer'
import Backdrop from '../../shared/components/Backdrop/Backdrop'
// Lazy Components
const Accounting = React.lazy(() => import('./Accounting/'))

function PrivateContainer () {

  const [ sideDrawerOpen, setSideDrawerOpen  ] = useState(false)
  let sideDrawer, backdrop

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((preventState) => {
      return {sideDrawerOpen: !preventState.sideDrawerOpen}
    })
  }

  if(sideDrawerOpen) {
    sideDrawer = <SideDrawer/>
    backdrop = <Backdrop/>
  }
  return (
    <>
      <Header drawerToggleClickHandler={drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
      <Router className='routerContainer' primary={false}>
        <Accounting path='/'/>
        <Error404 default />
      </Router>
    </>
  )
}

export default PrivateContainer
