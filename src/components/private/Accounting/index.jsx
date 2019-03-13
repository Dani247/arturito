import React from 'react'
import { navigate } from '@reach/router'
// ? styles
import InjectSheet from 'react-jss'
import styles from './stylesAccounting'
import ProgressBar from '../../../shared/components/ProgressBar/'
import { Icon } from '@iconify/react'
import chevronCircleRight from '@iconify/react/jam/chevron-circle-right';

// ? redux
import { connect } from 'react-redux'
import { compose } from 'redux'

// ? charts
import { Line } from 'react-chartjs-2'

const Accounting = ({ classes, state }) => (
  <div className={classes.accountingContainer}>
    <section className={classes.sectionAccounting}>
      <div className={classes.graphContainer}>
        <h3>Saldo total: <small>$26.000 MXN</small></h3>
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
      <div className={classes.barContainer}>
      <h4>Presupuesto [$7003 MXN]</h4> 
      <ProgressBar total={7002} current={5000} />
    </div>
    </section>
    <div className={classes.infoContainer}>
      <section className={classes.infoSection}>
        <span className={classes.infoData}>
          <p>Total: <span style={{color: 'green'}}>${state.user.incomesTotal}</span></p>
          <p>Ingresos No: 5</p>
        </span>
        <span className={classes.infoButton}>
          <Icon onClick={() => navigate('/incomes')} icon={chevronCircleRight} color='lightblue' width="50px" height="50px" />
        </span>
      </section>
      <section className={classes.infoSection}>
        <span className={classes.infoData}>
          <p>Total: <span style={{color: 'red'}}>${state.user.expensesTotal}</span></p>
          <p>Gastos No: 5</p>
        </span>
        <span className={classes.infoButton}>
          <Icon onClick={() => navigate('/incomes')} icon={chevronCircleRight} color='lightblue' width="50px" height="50px" />
        </span>
      </section>
    </div>
  </div>
)

const mapStateToProps = state => ({
  state: state.authReducer
})

const mapDispatchToProp = dispatch => ({

})

export default compose(InjectSheet(styles), connect(mapStateToProps, mapDispatchToProp))(Accounting)
