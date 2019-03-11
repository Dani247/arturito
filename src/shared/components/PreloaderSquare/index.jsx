import React from 'react'
import InjectSheet from 'react-jss'
import styles from './stylesPreloaderSquare'

function PreloaderSquare ({ classes }) {
  return (
    <div className={classes.preloaderContainer}>
      <span className={classes.loader}>
        <span className={classes.loaderInner} />
      </span>
    </div>
  )
}

export default InjectSheet(styles)(PreloaderSquare)
