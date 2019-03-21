import React, { useMemo } from 'react'
import InjectSheet from 'react-jss'
import styles from './stylesProgressBar'

function ProgressBar ({ classes, total, current, expenses }) {
  const getSubstraction = () => {
    return current - expenses
  }

  const getPercentage = () => {
    const sub = getSubstraction()
    if (sub < 0) {
      return 0
    }
    return (sub / current * 100)
  }

  return (
    <div className={classes.progressContainer}>
      <p className={classes.ammount}> <span style={{ color: getSubstraction() < 0 ? 'red' : 'black' }}>${getSubstraction()}</span> &nbsp; / ${current}</p>
      <div className={classes.filler} style={{ width: `${useMemo(() => getPercentage(), [expenses, current])}%` }} />
    </div>
  )
}

export default InjectSheet(styles)(ProgressBar)
