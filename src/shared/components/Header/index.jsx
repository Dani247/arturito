import React from 'react'
import { Link } from '@reach/router'
const Header = () => {
  return(
    <header>
      <Link to='/'>Home</Link>
      <Link to='login'>Login</Link>
    </header>
  )
}

export default Header