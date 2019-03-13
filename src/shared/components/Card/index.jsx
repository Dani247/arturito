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
    <strong className={classes.titleCard}>{data.label}</strong>
    <p className={classes.infoCard}><i>${data.value} [{data.type}]</i></p>
    <div className={classes.iconsCard}>
      <span onClick={() => editHandler(data)} className={classes.iconStyles}>
        <Icon width='25px' height='25px' icon={pencilCircleOutline} />
      </span>
      <span className={classes.iconStyles}>
        <Icon onClick={() => deleteHandler(data)} width='25px' height='25px' icon={trashF} />
      </span>
    </div>
  </div>)
}

const cardWithStyles = injectSheet(styles)(Card)
export default cardWithStyles
