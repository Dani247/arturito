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
        <input className={classes.niceInputProfile} type="text" placeholder= 'Ingresos:'/>
      </span>
      <span className={classes.inputContainer}>
        <p>Cantidad Total</p>
        <input className={classes.niceInputProfile} type="number" placeholder= 'Cantidad Total:'/>
      </span> 
      <span className={classes.selectContainer}>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </span>
      <button className={classes.niceButton}>Agregar</button>   
    </div>
  </div>)
}

const profileWithStyles = injectSheet(styles)(Profile)
export default profileWithStyles