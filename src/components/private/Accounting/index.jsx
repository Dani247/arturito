import React from 'react'
// Styles
import injectSheet from 'react-jss'
import styles from './stylesAccounting'

const Accounting = ({classes}) => (
  <div className={classes.accountingContainer}>
    <section className={classes.sectionAccounting}>
      <h1>Accounting</h1>
    </section>
  </div>
)

const accountingWithStyles = injectSheet(styles)(Accounting)
export default accountingWithStyles
