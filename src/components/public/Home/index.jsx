import React, { useEffect } from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './stylesHome'
import arturito from '../../../shared/media/arturito.jpg'
// components
import Avatar from 'react-avatar';

const Home = ({classes}) => {

  useEffect(() => {
    return () => (null)
  })

  return(
  <div className={classes.homeContainer}>
    <h2> ¿Arturito? </h2>
    <article className={classes.textContainer}>
      <p className={classes.textP}>
        <strong>Arturito</strong> es un proyecto open source que nació por diversión.
        Su principal función es ayudarte con el manejo y administración de tus gastos
        para evitar que tengas problemas en el futuro <i>*sonido arturito*</i>
      </p>
      <div className={classes.imgContainer}>
        <img src={arturito} alt="arutiro"/>
      </div>
    </article>
    <h2>Developers</h2>
    <section className={classes.developersContainer}>
      <Avatar githubHandle="kikiondo" size={50} round="50px" />
      <Avatar githubHandle="Dani247" size={50} round="50px"/>
    </section>
  </div>)
}

const homeWithStyles = injectSheet(styles)(Home)
export default homeWithStyles