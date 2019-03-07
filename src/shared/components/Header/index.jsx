import React from 'react'
import { Link } from '@reach/router'
const Header = () => {
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='login'>Login</Link>
    </div>
  )
}

export default Header