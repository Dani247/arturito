import React, { useRef } from 'react'
// styles
import { Cat } from 'react-kawaii'
import injectSheet from 'react-jss'
import styles from './profileStyles'
import swal from '@sweetalert/with-react'
import useName from '../../../helpers/useName'

// * redux
import { connect } from 'react-redux'
import { compose } from 'redux'

const Profile = ({ classes, state }) => {
  // states
  const labelRef = useRef('')
  const ammountRef = useRef(0)
  const selectRef = useRef('')

  const addIncome = e => {
    // * on submit event
    const onAddHandler = e => {
      e.preventDefault()
      const body = JSON.stringify({
        label: useName(labelRef.current.value),
        value: ammountRef.current.value,
        type: selectRef.current.value
      })

      swal({
        content: (<div>Sending...</div>),
        buttons: ['']
      })

      window.fetch(`https://arturito-api.herokuapp.com/api/v1/users/income/${state.user._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': state.token
        },
        body
      })
        .then(res => {
          if (res.status === 200) {
            swal({
              icon: 'success',
              title: 'Added succesfully'
            })
          }
          return res.json()
        })
        .then(data => {
          if (data.msg) {
            swal({
              icon: 'error',
              title: data.msg
            })
          }
        })
    }

    const content = (
      <form onSubmit={onAddHandler}>
        <div className={classes.dataContainer}>
          <span className={classes.inputContainer}>
            <p>Etiqueta:</p>
            <input required ref={labelRef} className={classes.niceInputProfile} type='text' placeholder='Nombra tu ingreso' />
          </span>
          <span className={classes.inputContainer}>
            <p>Cantidad Total</p>
            <input required ref={ammountRef} className={classes.niceInputProfile} type='number' placeholder='Cantidad Total:' />
          </span>
          <span className={classes.selectContainer}>
            <select ref={selectRef}>
              <option value='biweek'>Quincenal</option>
              <option value='month'>Mensual</option>
              <option value='year'>Anual</option>
            </select>
          </span>
          <button className={classes.niceButton}>Agregar</button>
        </div>
      </form>
    )

    swal({
      content,
      buttons: ['Cancel']
    })
  }

  return (
    <div className={classes.profileContainer}>
      <section className={classes.sectionContainer}>
        <h1>Profile</h1>
        <Cat size={70} mood='lovestruck' color='#596881' />
      </section>
      <button onClick={addIncome}>Agregar ingresos</button>
    </div>)
}

const mapStateToProps = state => ({
  state: state.authReducer
})

const mapDispatchToProps = dispatch => ({

})

export default compose(injectSheet(styles), connect(mapStateToProps, mapDispatchToProps))(Profile)
