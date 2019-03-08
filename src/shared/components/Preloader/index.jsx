import React from 'react'
import InjectSheet from 'react-jss'

import styles from './stylesPreloader'

function Preloader ({ classes }) {
  return (
    <div className={classes.preloader}>
      <span />
      <span />
      <span />
    </div>
  )
}

export default InjectSheet(styles)(Preloader)
