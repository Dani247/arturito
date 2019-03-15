import React from 'react'
// styles
import { Cat } from 'react-kawaii'
import injectSheet from 'react-jss'
import styles from './profileStyles'
// * redux
import { connect } from 'react-redux'
import { compose } from 'redux'

const Profile = ({ classes}) => {
  return (
    <div className={classes.profileContainer}>
      <section className={classes.sectionContainer}>
        <h1>Profile</h1>
        <Cat size={70} mood='lovestruck' color='#596881' />
      </section>
    </div>)
}

const mapStateToProps = state => ({
  state: state.authReducer
})

const mapDispatchToProps = dispatch => ({

})

export default compose(injectSheet(styles), connect(mapStateToProps, mapDispatchToProps))(Profile)
