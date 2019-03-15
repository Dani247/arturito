import React, { useRef } from 'react'
import { navigate } from '@reach/router'
// Styles
import injectSheet from 'react-jss'
import styles from './incomesStyles'
import swal from '@sweetalert/with-react'
import useName from '../../../../helpers/useName'
import addKawwai from '../../../../shared/media/icons/notebook.png'
// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUser } from '../../../../shared/redux/actions/authActions'
// Components
import Card from '../../../../shared/components/Card'
import { Icon } from '@iconify/react'
import arrowCircleLeft from '@iconify/react/jam/arrow-circle-left'
// import plusCircleF from '@iconify/react/jam/plus-circle-f'

const Incomes = ({ classes, state, getUserData }) => {
  // states
  const labelRef = useRef('')
  const ammountRef = useRef(0)
  // const selectRef = useRef('')

  const addIncome = e => {
    // * on submit event
    const onAddHandler = e => {
      e.preventDefault()
      const body = JSON.stringify({
        label: useName(labelRef.current.value),
        value: ammountRef.current.value,
        type: '0'
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
    <div className={classes.incomesContainer}>
      <div className={classes.iconReturnButtom}>
        <Icon onClick={() => navigate('/')} icon={arrowCircleLeft} width='40px' height='40px' />
      </div>
      <p className={classes.titleIncomes}>Tus ingresos:</p>
      {state.user.incomes.length > 0 ? state.user.incomes.map((income, index) => {
        return <Card key={income._id} editHandler={editIncome} deleteHandler={deleteIncome} data={income} />
      }) : <p className={classes.nodataTitle}>No data</p>}
      <div className={classes.buttonAdd}>
        <svg onClick={addIncome} height="45pt" viewBox="-25 0 512 512" width="45pt" xmlns="http://www.w3.org/2000/svg"><path d="m279.117188 213.386719h-162.257813c-8.882813 0-16.082031-7.203125-16.082031-16.082031v-92.59375c0-53.601563 43.609375-97.210938 97.210937-97.210938 53.601563 0 97.210938 43.609375 97.210938 97.210938v92.59375c0 8.882812-7.199219 16.082031-16.082031 16.082031zm-146.175782-32.164063h130.09375v-76.511718c0-35.863282-29.179687-65.046876-65.046875-65.046876-35.863281 0-65.046875 29.179688-65.046875 65.046876zm0 0" fill="#efedee"/><path d="m116.859375 213.386719h162.257813c8.882812 0 16.085937-7.203125 16.085937-16.082031v-69.199219h-32.167969v53.113281h-130.09375v-53.113281h-32.164062v69.199219c0 8.882812 7.199218 16.082031 16.082031 16.082031zm0 0" fill="#d4d4d4"/><path d="m349.167969 201.277344c-5.421875-25.183594-27.6875-43.167969-53.449219-43.167969h-195.457031c-25.761719 0-48.03125 17.984375-53.453125 43.167969l-37.601563 174.664062c-10.074219 46.796875 25.59375 90.957032 73.460938 90.957032h323.683593zm0 0" fill="#dc8b72"/><path d="m49.207031 375.941406 37.601563-174.664062c5.421875-25.1875 27.691406-43.167969 53.453125-43.167969h-40c-25.761719 0-48.03125 17.984375-53.453125 43.167969l-37.601563 174.664062c-10.074219 46.796875 25.59375 90.957032 73.460938 90.957032h40c-47.871094 0-83.535157-44.160157-73.460938-90.957032zm0 0" fill="#b3684b"/><path d="m454.394531 402.617188c0 56.269531-45.613281 101.882812-101.882812 101.882812-56.265625 0-101.878907-45.613281-101.878907-101.882812 0-56.265626 45.613282-101.878907 101.878907-101.878907 56.269531 0 101.882812 45.613281 101.882812 101.878907zm0 0" fill="#94dc7e"/><path d="m372.511719 484.5c-56.265625 0-101.878907-45.613281-101.878907-101.882812 0-23.03125 7.644532-44.277344 20.535157-61.34375-24.621094 18.597656-40.535157 48.113281-40.535157 81.34375 0 56.269531 45.613282 101.882812 101.878907 101.882812 33.234375 0 62.75-15.914062 81.34375-40.535156-17.0625 12.886718-38.308594 20.535156-61.34375 20.535156zm0 0" fill="#80c56e"/><path d="m127.71875 287.476562v-14.074218c0-4.140625-3.355469-7.5-7.5-7.5-4.140625 0-7.5 3.359375-7.5 7.5v14.074218c0 4.144532 3.359375 7.5 7.5 7.5 4.144531 0 7.5-3.355468 7.5-7.5zm0 0"/><path d="m283.25 287.476562v-14.074218c0-4.140625-3.359375-7.5-7.5-7.5s-7.5 3.359375-7.5 7.5v14.074218c0 4.144532 3.359375 7.5 7.5 7.5s7.5-3.355468 7.5-7.5zm0 0"/><path d="m197.984375 302.488281c9.644531 0 18.699219-4.027343 24.839844-11.054687 2.726562-3.117188 2.410156-7.855469-.710938-10.582032-3.117187-2.726562-7.855469-2.410156-10.582031.710938-3.292969 3.765625-8.230469 5.925781-13.546875 5.925781s-10.253906-2.160156-13.546875-5.925781c-2.726562-3.117188-7.464844-3.4375-10.582031-.710938-3.121094 2.726563-3.4375 7.464844-.710938 10.582032 6.140625 7.027344 15.195313 11.054687 24.839844 11.054687zm0 0"/><path d="m311.371094 410.117188h33.636718v33.640624c0 4.140626 3.359376 7.5 7.5 7.5 4.144532 0 7.5-3.359374 7.5-7.5v-33.640624h33.640626c4.140624 0 7.5-3.355469 7.5-7.5 0-4.140626-3.359376-7.5-7.5-7.5h-33.640626v-33.636719c0-4.140625-3.355468-7.5-7.5-7.5-4.140624 0-7.5 3.359375-7.5 7.5v33.636719h-33.636718c-4.140625 0-7.5 3.359374-7.5 7.5 0 4.144531 3.359375 7.5 7.5 7.5zm0 0"/><path d="m25.566406 335.566406c.871094-4.050781-1.703125-8.039062-5.753906-8.910156-4.046875-.871094-8.039062 1.703125-8.910156 5.753906l-9.03125 41.953125c-5.28125 24.53125.734375 49.792969 16.5 69.316407 15.765625 19.519531 39.199218 30.714843 64.292968 30.714843h187.378907c20.066406 23.027344 49.597656 37.605469 82.46875 37.605469 60.3125 0 109.378906-49.066406 109.378906-109.382812 0-51.808594-36.207031-95.320313-84.648437-106.558594l-20.746094-96.359375c-5.625-26.144531-27.679688-45.683594-53.800782-48.679688v-46.308593c0-20.742188-6.082031-40.808594-17.59375-58.035157-2.300781-3.445312-6.957031-4.371093-10.402343-2.070312-3.445313 2.300781-4.371094 6.960937-2.070313 10.40625 9.859375 14.75 15.066406 31.933593 15.066406 49.699219v45.894531h-17.164062v-45.894531c0-40-32.542969-72.546876-72.546875-72.546876-40 0-72.542969 32.546876-72.542969 72.546876v45.894531h-17.167968v-45.894531c0-49.46875 40.246093-89.710938 89.710937-89.710938 20.585937 0 39.96875 6.816406 56.042969 19.71875 3.230468 2.59375 7.953125 2.074219 10.542968-1.15625 2.59375-3.230469 2.074219-7.949219-1.15625-10.542969-18.496093-14.84375-41.734374-23.019531-65.429687-23.019531-57.738281 0-104.710937 46.972656-104.710937 104.710938v46.308593c-26.121094 2.996094-48.171876 22.535157-53.800782 48.679688l-22.476562 104.417969c-.875 4.046874 1.703125 8.039062 5.753906 8.910156 4.046875.871094 8.039062-1.703125 8.90625-5.753906l22.480469-104.417969c4.644531-21.582031 24.042969-37.246094 46.121093-37.246094h195.457032c22.074218 0 41.472656 15.664063 46.117187 37.246094l19.535157 90.742187c-.035157-.003906-.070313-.003906-.105469-.007812-2.90625-.246094-5.835938-.351563-8.75-.351563-60.316407 0-109.382813 49.070313-109.382813 109.382813 0 19.605468 5.578125 39.765625 15.894532 56.777344h-176.359376c-20.539062 0-39.71875-9.164063-52.625-25.140626-12.902343-15.980468-17.824218-36.660156-13.503906-56.738281zm229.964844-184.957031h-115.09375v-45.898437c0-31.730469 25.816406-57.546876 57.546875-57.546876s57.546875 25.816407 57.546875 57.546876zm2.957031 260.121094c-4.792969-53.78125 40.125-102.492188 94.023438-102.492188 51.355469 0 94.378906 43 94.378906 94.378907 0 52.042968-42.339844 94.382812-94.382813 94.382812-48.21875 0-89.746093-38.347656-94.019531-86.269531zm0 0"/></svg>
      </div>
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