import React, { useMemo } from 'react'
import InjectSheet from 'react-jss'
import styles from './stylesProgressBar'

function ProgressBar ({ classes, total, current }) {
  const getPercentage = () => {
    if (current > total) {
      return 100
    } else if (current < 0) {
      return 0
    } else {
      return (current / total * 100)
    }
  }

  return (
    <div className={classes.progressContainer}>
      <div className={classes.filler} style={{ width: `${useMemo(() => getPercentage(), [total, current])}%` }} >
        <p style={{ color: current < 0 ? 'red' : 'black' }} className={classes.ammount}> ${current} MXN</p>
      </div>
    </div>
  )
}

export default InjectSheet(styles)(ProgressBar)
