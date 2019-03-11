import React from 'react'
// styles
import styles from  './BackdropStyles'
import injectSheet from 'react-jss'

const Backdrop = ({classes}) => (
  <div className={classes.backdrop}>

  </div>
)

const backdropWithStyles =  injectSheet(styles)(Backdrop)
export default backdropWithStyles