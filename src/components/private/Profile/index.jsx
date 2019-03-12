import React from 'react'
// styles
import { Cat } from 'react-kawaii'
import injectSheet from 'react-jss'
import styles from './profileStyles'

const Profile = ({classes}) => {
  return(
  <div className={classes.profileContainer}>
    <section className={classes.sectionContainer}>
      <h1>Profile</h1>
      <Cat size={70} mood="lovestruck" color="#596881" />
    </section>
    <div className={classes.dataContainer}>
      <span className={classes.inputContainer}>
        <p>Ingresos Mensuales:</p>
        <input type="number"/>
      </span>    
    </div>
  </div>)
}

const profileWithStyles = injectSheet(styles)(Profile)
export default profileWithStyles