import React from 'react'
// styles
import injectSheet from 'react-jss'
import calma from '../../media/error.png'
import styles from './stylesError404'

const Error404 = ({ classes }) => {
  return(
    <div className={classes.imgContainer}>
      <h2>Error 404</h2>
      <img src={calma} alt="Se va a estabilizar"/>
    </div>
  )
}

const error404WithStyles = injectSheet(styles)(Error404)
export default error404WithStyles