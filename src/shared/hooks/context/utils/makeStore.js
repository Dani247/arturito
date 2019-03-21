import React, { useState, useContext } from 'react'

export default function makeStore() {

  // ! Create Context
  const Context = React.createContext()
  // ! Create Provider
  const Provider = ({ children, initState = {} }) => {
    const [state, setState] = useState(initState)

    const loggerSetState = update => {
      console.log('%c old state', 'color: red', state)
      console.log('%c updater state', 'color: blue', update)
      setState(update)
      console.log('%c new state', 'color: green', update)
    }

    // TODO needs to change a memoized
    const store = [state, loggerSetState]

    return <Context.Provider value={store}>{children}</Context.Provider>
  }
  // ! Use Context Hook
  const useStore = () => useContext(Context)

  return {
    Provider,
    useStore
  }
}