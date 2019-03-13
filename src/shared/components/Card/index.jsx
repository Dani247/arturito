import React from 'react'
// styles
import injectSheet from 'react-jss'
import styles from './cardStyles'
import { CreditCard } from 'react-kawaii'
import { Icon } from '@iconify/react'
import trashF from '@iconify/react/jam/trash-f'
import pencilCircleOutline from '@iconify/react/mdi/pencil-circle-outline'

const Card = ({ classes, data, mood, editHandler, deleteHandler }) => {
  return (<div className={classes.cardContainer}>
    <CreditCard size={50} mood={mood} color='#83D1FB' />
    <p><strong>{data.label}</strong></p>
    <p><i>${data.value} [{data.type}]</i></p>
    <div>
      <span onClick={() => editHandler(data)} className={classes.iconStyles}>
        <Icon width='30px' height='30px' icon={pencilCircleOutline} />
      </span>
      <span className={classes.iconStyles}>
        <Icon onClick={() => deleteHandler(data)} width='30px' height='30px' icon={trashF} />
      </span>
    </div>
  </div>)
}

const cardWithStyles = injectSheet(styles)(Card)
export default cardWithStyles
