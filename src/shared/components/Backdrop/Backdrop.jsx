import React from 'react'
// styles
import styles from  './BackdropStyles'
import injectSheet from 'react-jss'

const Backdrop = ({classes, click}) => (
  <div className={classes.backdrop} onClick={click}>
  </div>
)

const backdropWithStyles =  injectSheet(styles)(Backdrop)
export default backdropWithStyles