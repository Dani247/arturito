import React from 'react'
// Styles
import injectSheet from  'react-jss'
import styles from './drawerToggleButtonStyles'

const DrawerToggleButton = ({ classes, click }) => (
  <button className={classes.toggleButton}  onClick={click}>
    <div className={classes.toggleButtonLine}/>
    <div className={classes.toggleButtonLine}/>
    <div className={classes.toggleButtonLine}/>
  </button>
)
const drawerToggleButtonWithStyles = injectSheet(styles)(DrawerToggleButton)
export default drawerToggleButtonWithStyles