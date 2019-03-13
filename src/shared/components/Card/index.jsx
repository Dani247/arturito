import React from 'react'
// styles
import injectSheet from 'react-jss'
import styles from './cardStyles'
import { CreditCard } from 'react-kawaii'

const Card = ({ classes, expense, total, type }) => (
  <div className= {classes.cardContainer}>
    <CreditCard size={50} mood="sad" color="#83D1FB" />
    <strong>{expense}</strong>
    <i>{total}$</i>
    <p><strong>Type: </strong>{type}</p>
    <div>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  </div>
)

const cardWithStyles = injectSheet(styles)(Card)
export default cardWithStyles