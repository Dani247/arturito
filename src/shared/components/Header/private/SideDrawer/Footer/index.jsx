import React from 'react'
// styles
import styles from './stylesFooter'
import injectSheet  from 'react-jss'

const Footer = ({classes}) => {
  return(<footer className={classes.footerContainer}> @arturito</footer>)
}
const footerWithStyles = injectSheet(styles)(Footer)
export default footerWithStyles