import React from 'react'
// styles
import injectSheet from 'react-jss'
import styles from './stylesApp.js'

const App = (props) => {
  const { children, classes } = props
  return(
    <div className={classes.appContainer}>
      { children }
    </div>
  )
}
const appWithStyles = injectSheet(styles)(App)
export default appWithStyles