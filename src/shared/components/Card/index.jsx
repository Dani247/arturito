import React, { useState } from 'react'
// styles
import injectSheet from 'react-jss'
import styles from './cardStyles'
import { CreditCard } from 'react-kawaii'
import { Icon } from '@iconify/react'
import trashF from '@iconify/react/jam/trash-f'
import pencilCircleOutline from '@iconify/react/mdi/pencil-circle-outline'
import checkCircle from '@iconify/react/ic/check-circle'
import useInput from '../../hooks/useInput'

const Card = ({ classes, data, mood, editHandler, deleteHandler }) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const label = useInput(data.label)
  const value = useInput(data.value)

  const edit = e => {
    e.preventDefault()
    const body = {

    }
    setIsEditing(false)
    editHandler(body)
  }

  return (<div className={classes.cardContainer}>
    <CreditCard size={70} mood={mood} color='#83D1FB' />
    {isEditing ? <div className={classes.textContainer}>
      <form onSubmit={edit}>
        <input className={classes.niceInput} {...label.props} />
        <input className={classes.niceInput} {...value.props} />
        <select>
          <option value='biweek'>Bi-weekly</option>
        </select>
        <Icon onClick={edit} width='30px' height='30px' icon={checkCircle} color="lightgreen" />
      </form>
    </div> : <div>
      <p className={classes.titleCard}><strong>{data.label}</strong></p>
      <p className={classes.infoCard}><i>${data.value}</i></p>
      <div className={classes.iconsCard}>
        <span onClick={() => setIsEditing(true)} className={classes.iconStyles}>
          <Icon width='30px' color='lightblue' height='30px' icon={pencilCircleOutline} />
        </span>
        <span className={classes.iconStyles}>
          <Icon onClick={() => deleteHandler(data)} color='lightblue' width='30px' height='30px' icon={trashF} />
        </span>
      </div>
    </div>}
  </div>)
}

const cardWithStyles = injectSheet(styles)(Card)
export default cardWithStyles
