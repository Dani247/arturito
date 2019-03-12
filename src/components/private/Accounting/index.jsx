import React from 'react'

// * styles
import InjectSheet from 'react-jss'
import styles from './stylesAccounting'

// * redux

// * charts
import { Line } from 'react-chartjs-2'

const Accounting = ({ classes }) => (
  <div className={classes.accountingContainer}>
    <h3>Saldo total: <small>$26.000 MXN</small></h3>
    <hr />
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
)

export default InjectSheet(styles)(Accounting)
