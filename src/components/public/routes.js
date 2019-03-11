import React, {useState} from 'react'
// Routes
import { Router } from "@reach/router";
import Error404 from '../../shared/components/Error404'
import Header from '../../shared/components/Header/public'
// ? Compoents
import SideDrawer from '../../shared/components/Header/public/SideDrawer/SideDrawer'
import Backdrop from '../../shared/components/Backdrop/Backdrop'
// Lazy components
const Login = React.lazy(() => import("./Login"));
const Register = React.lazy(() => import('./Register'))
const Home = React.lazy(() => import("./Home"));


const PublicContainer = () => {

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
      <Header drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen}/>
      {backdrop}
      <Router className='routerContainer' primary={false}>
        <Home path='home' />
        <Login path='/' />
        <Register path='register' />
        <Error404 default />
      </Router>
    </>
  )
}

export default PublicContainer
