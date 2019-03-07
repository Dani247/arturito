import React from 'react'

const App = (props) => {
  const { children } = props
  return(
    <div>
      {children}
      App
    </div>
  )
}

export default App