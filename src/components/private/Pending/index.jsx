import React from 'react';
// Styles
import injectSheet from 'react-jss';
import styles from './pendingStyles';
// Redux

const Pending = ({ classes }) => {
  return (
    <div className={classes.pendingContainer}>
      Pending
    </div>
  );
};

const pendingWithStyles = injectSheet(styles)(Pending);
export default pendingWithStyles;
