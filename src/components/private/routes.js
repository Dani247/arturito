import React from 'react'
// Routes
import { Router } from '@reach/router'
// Components
import Error404 from '../../shared/components/Error404'
import Header from '../../shared/components/Header/private'
// Lazy Components


function PrivateContainer () {
  return (
    <>
      <Header />
      <Router className='routerContainer' primary={false}>
        
        <Error404 default />
      </Router>
    </>
  )
}

export default PrivateContainer
