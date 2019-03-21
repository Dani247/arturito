import React from 'react'
// styles
import { Cat } from 'react-kawaii'
import injectSheet from 'react-jss'
import styles from './profileStyles'

// * context
// import { useAuth } from '../../../shared/hooks/context/states/auth'

const Profile = ({ classes }) => {
  return (
    <div className={classes.profileContainer}>
      <section className={classes.sectionContainer}>
        <h1>Profile</h1>
        <Cat size={70} mood='lovestruck' color='#596881' />
      </section>
    </div>)
}

export default injectSheet(styles)(Profile)
