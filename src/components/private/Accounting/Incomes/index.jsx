import React, { useRef } from 'react'
import { navigate } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './incomesStyles'
import swal from '@sweetalert/with-react'
import useName from '../../../../helpers/useName'
// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUser } from '../../../../shared/redux/actions/authActions'

import Card from '../../../../shared/components/Card'
import { Icon } from '@iconify/react'
import arrowCircleLeft from '@iconify/react/jam/arrow-circle-left'
import plusCircleF from '@iconify/react/jam/plus-circle-f'

const Incomes = ({ classes, state, getUserData }) => { 
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
            getUserData(state.token)
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

  const editIncome = (income) => {

  }

  const deleteIncome = income => {
    swal({
      title: 'Are you sure?',
      text: 'It will be deleted forever',
      icon: 'warning',
      dangerMode: true,
      buttons: ['Never mind', 'Delete']
    })
      .then(res => {
        if (res) {
          // * delete request
          swal({
            content: (<div>Sending...</div>),
            buttons: ['']
          })

          window.fetch(`https://arturito-api.herokuapp.com/api/v1/users/income/${state.user._id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': state.token
            },
            body: JSON.stringify(income)
          })
            .then(res => {
              if (res.status === 200) {
                getUserData(state.token)
                swal({
                  icon: 'success',
                  title: 'deleted successfuly'
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
      })
  }

  return (
    <div>
      <Icon onClick={() => navigate('/')} icon={arrowCircleLeft} width='30px' height='30px' /> Tus ingresos
      {state.user.incomes.length > 0 ? state.user.incomes.map((income, index) => {
        return <Card key={income._id} editHandler={editIncome} deleteHandler={deleteIncome} data={income} />
      }) : <p>No data</p>}

      <Icon onClick={addIncome} icon={plusCircleF} color='green' width='70px' height='70px' />
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.authReducer
})

const mapDispatchToProps = dispatch => ({
  getUserData: async token => dispatch(await getUser(token))
})

export default compose(injectSheet(styles), connect(mapStateToProps, mapDispatchToProps))(Incomes)