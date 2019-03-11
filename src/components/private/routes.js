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
  let  backdrop

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((preventState) => {
      return {sideDrawerOpen: !preventState.sideDrawerOpen}
    })
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  if(sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler}/>
  }
  return (
    <>
      <Header drawerToggleClickHandler={drawerToggleClickHandler}/>
      <SideDrawer show={sideDrawerOpen}/>
      {backdrop}
      <Router className='routerContainer' primary={false}>
        <Accounting path='/'/>
        <Error404 default />
      </Router>
    </>
  )
}

export default PrivateContainer
