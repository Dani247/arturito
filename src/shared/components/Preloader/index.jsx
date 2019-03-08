import React from 'react'
import InjectSheet from 'react-jss'
import { Planet } from 'react-kawaii'

import styles from './stylesPreloader'

function Preloader ({ classes }) {
  return (
    <div className={classes.preloaderContainer}>
      <div className={classes.planet}>
        <Planet mood='blissful' color='#83D1FB' />
      </div>
      <div className={classes.preloader}>
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default InjectSheet(styles)(Preloader)
