import React from 'react'
// styles
import injectSheet from 'react-jss'
import styles from './cardStyles'
import { CreditCard } from 'react-kawaii'

const Card = ({ classes, expense, total, type, mood }) => (
  <div className={classes.cardContainer}>
    <CreditCard size={50} mood={mood} color="#83D1FB" />
    <p><strong>{expense}</strong></p>
    <p><i>${total} [{type}]</i></p>
    <div>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  </div>
)

const cardWithStyles = injectSheet(styles)(Card)
export default cardWithStyles
