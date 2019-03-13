import React from 'react'
// ? styles
import InjectSheet from 'react-jss'
import styles from './stylesAccounting'
import ProgressBar from '../../../shared/components/ProgressBar/'
// ? routes
import { Link } from '@reach/router'
// ? redux

// ? charts
import { Line } from 'react-chartjs-2'

const Accounting = ({ classes }) => (
  <div className={classes.accountingContainer}>
    <section className={classes.sectionAccounting}>
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

      <h4>Presupuesto [$7002 MXN]</h4> 
      <ProgressBar total={7002} current={5000} />
    </section>
    <section className={classes.infoContainer}>
      <div>
        <Link to='/incomes'>Incomes</Link>
      </div>
      <div>
        <Link to='/expenses'>Expenses</Link>
      </div>
    </section>
  </div>
)

export default InjectSheet(styles)(Accounting)
