import React from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './stylesHome'

const Home = ({classes}) => {
  return(
  <div className={classes.homeContainer}>
    Home
  </div>)
}

const homeWithStyles = injectSheet(styles)(Home)
export default homeWithStyles