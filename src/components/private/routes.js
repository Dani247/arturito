import React from 'react'
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
  return (
    <>
      <Header />
      <SideDrawer/>
      <Backdrop/>
      <Router className='routerContainer' primary={false}>
        <Accounting path='/'/>
        <Error404 default />
      </Router>
    </>
  )
}

export default PrivateContainer
