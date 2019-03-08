import React, { useEffect } from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './stylesHome'
import arturito from '../../shared/media/arturito.jpg'

const Home = ({classes}) => {

  useEffect(() => {
    return () => (null)
  })

  return(
  <div className={classes.homeContainer}>
    <h1> ¿Arturito? </h1>
    <article className={classes.textContainer}>
      <p className={classes.textP}>
        <strong>Arturito</strong> es un proyecto open source que nación por diversión.
        Su principal función es ayudarte con el manejo y administración de tus gastos
        para evitar que tengas problemas en el futuro <i>*sonido arturito*</i>
      </p>
      <div className={classes.imgContainer}>
        <img src={arturito} alt="arutiro"/>
      </div>
    </article>
  </div>)
}

const homeWithStyles = injectSheet(styles)(Home)
export default homeWithStyles