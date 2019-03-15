import React, { useRef } from 'react'
import { navigate } from '@reach/router'
import swal from '@sweetalert/with-react'
// ? styles
import InjectSheet from 'react-jss'
import styles from './stylesAccounting'
import ProgressBar from '../../../shared/components/ProgressBar/'
import { Icon } from '@iconify/react'
import chevronCircleRight from '@iconify/react/jam/chevron-circle-right'
import settingsIcon from '@iconify/react/ic/settings'

// ? redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUser } from '../../../shared/redux/actions/authActions'

// ? charts
import { Line } from 'react-chartjs-2'

const Accounting = ({ classes, state, getUserData }) => {
  const budgetRef = useRef()

  const editBudget = e => {
    // * input
    swal({
      buttons: [''],
      content: (<form onSubmit={e => {
        e.preventDefault()
        sendBudget()
      }}>
        <label>Ingresa tu presupuesto</label>
        <input required ref={budgetRef} className={classes.niceInput} placeholder='$$$' type='number' />
        <button className={classes.niceButton}>Agregar</button>
      </form>)
    })

    const sendBudget = e => {
      // * put request
      swal({
        content: (<div>Sending...</div>),
        buttons: ['']
      })

      window.fetch(`https://arturito-api.herokuapp.com/api/v1/users/budget/${state.user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': state.token
        },
        body: JSON.stringify({
          budget: budgetRef.current.value
        })
      })
        .then(res => {
          if (res.status === 200) {
            getUserData(state.token)
            swal({
              title: 'Saved!',
              icon: 'success'
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
  }

  return (<div className={classes.accountingContainer}>
    <section className={classes.sectionAccounting}>
      <div className={classes.graphContainer}>
        <h1>Saldo total: <small>${state.user.incomesTotal} MXN</small></h1>
        <Line data={{
          labels: ['Ene', 'Feb', 'Mar'],
          datasets: [{
            label: 'Ingresos',
            data: [1400, 2000, 3000, 1000, 200],
            backgroundColor: ['green'],
            borderColor: ['yellow'],
            borderWidth: 1
          }, {
            label: 'Gastos',
            data: [800, 600, 300, 600, 39],
            backgroundColor: ['red'],
            borderColor: ['yellow'],
            borderWidth: 1
          }]
        }} options={{
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          steppedLine: true
        }} />
      </div>
    </section>
    <div className={classes.infoContainer}>
      <section className={classes.budgetSection}>
        <span className={classes.infoData}>
          <h2>Presupuesto</h2>
          <p>[${state.user.budget} MXN]</p>
        </span>
        <span className={classes.infoBudgetBarContainer}>
          <ProgressBar total={state.user.budget} current={state.user.budget} />
          <Icon onClick={editBudget} icon={settingsIcon} color='lightblue' width="40px" height="40px" />
        </span>
      </section>

      <section className={classes.infoSection}>
        <span className={classes.infoData}>
          <p>Total: <span style={{ color: 'green' }}>${state.user.incomesTotal}</span></p>
          <p>Num. de Ingresos: {state.user.incomes.length}</p>
        </span>
        <span className={classes.infoButton}>
          <Icon onClick={() => navigate('/incomes')} icon={chevronCircleRight} color='lightblue' width="50px" height="50px" />
        </span>
      </section>

      <section className={classes.infoSection}>
        <span className={classes.infoData}>
          <p>Total: <span style={{ color: 'red' }}>${state.user.expensesTotal}</span></p>
          <p>Num. de Gastos: {state.user.expenses.length}</p>
        </span>
        <span className={classes.infoButton}>
          <Icon onClick={() => navigate('/expenses')} icon={chevronCircleRight} color='lightblue' width="50px" height="50px" />
        </span>
      </section>
    </div>
  </div>)
}

const mapStateToProps = state => ({
  state: state.authReducer
})

const mapDispatchToProp = dispatch => ({
  getUserData: async token => dispatch(await getUser(token))
})

export default compose(InjectSheet(styles), connect(mapStateToProps, mapDispatchToProp))(Accounting)
