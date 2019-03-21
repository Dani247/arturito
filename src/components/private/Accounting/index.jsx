import React, { useRef } from 'react'
import { navigate } from '@reach/router'
import swal from '@sweetalert/with-react'
// ? styles
import InjectSheet from 'react-jss'
import styles from './stylesAccounting'
import ProgressBar from '../../../shared/components/ProgressBar/'
import { Icon } from '@iconify/react'
import chevronCircleRight from '@iconify/react/jam/chevron-circle-right'
import icon from '../../../shared/media/icons/cogwheel.png'
// ? redux
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUser } from '../../../shared/redux/actions/authActions'

// ? charts
import { Pie } from 'react-chartjs-2'

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
      if (budgetRef.current.value <= state.user.incomesTotal) {
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
      } else {
        swal({
          icon: 'warning',
          title: 'you dont have enough money to set that budget'
        })
      }
    }
  }

  return (<div className={classes.accountingContainer}>
    <section className={classes.sectionAccounting}>
      <div className={classes.graphContainer}>
        <h1>Saldo total: <small>${state.user.incomesTotal} MXN</small></h1>
        <h4>Total - Presupuesto: <small>${state.user.incomesTotal - state.user.budget} MXN</small></h4>
        <Pie data={{
          labels: ['Ingresos', 'Gastos'],
          datasets: [{
            label: 'Ingresos',
            data: [state.user.incomesTotal, state.user.expensesTotal],
            backgroundColor: ['#47AB6C', '#F2B134'],
            borderColor: ['yellow'],
            borderWidth: 1
          }]
        }} />
      </div>
    </section>
    <div className={classes.infoContainer}>
      <section className={classes.budgetSection}>
        <span className={classes.infoData}>
          <h2>Presupuesto</h2>
        </span>
        <span className={classes.infoBudgetBarContainer}>
          <ProgressBar total={state.user.incomesTotal} current={state.user.budget} expenses={state.user.expensesTotal} />
          <img className={classes.gearStylesIcon} onClick={editBudget} src={icon} alt="gearkawaii"/>
        </span>
      </section>

      <section className={classes.infoSection}>
        <span className={classes.infoData}>
          <p>Total: <span style={{ color: 'green' }}>${state.user.incomesTotal}</span></p>
          <p>Num. de Ingresos: {state.user.incomes.length}</p>
        </span>
        <span className={classes.infoButton}>
          <Icon onClick={() => navigate('/incomes')} icon={chevronCircleRight} color='#0894A1' width="50px" height="50px" />
        </span>
      </section>

      <section className={classes.infoSection}>
        <span className={classes.infoData}>
          <p>Total: <span style={{ color: 'red' }}>${state.user.expensesTotal}</span></p>
          <p>Num. de Gastos: {state.user.expenses.length}</p>
        </span>
        <span className={classes.infoButton}>
          <Icon onClick={() => navigate('/expenses')} icon={chevronCircleRight} color='#0894A1' width="50px" height="50px" />
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
