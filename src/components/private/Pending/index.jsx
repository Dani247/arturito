import React from 'react';
// Styles
import injectSheet from 'react-jss';
import styles from './pendingStyles';
import Card from '../../../shared/components/Card/'
// Redux

const Pending = ({ classes }) => {
  return (
    <div className={classes.pendingContainer}>
      <Card expense='Gimnasio' total='100' type='Food' />
    </div>
  );
};

const pendingWithStyles = injectSheet(styles)(Pending);
export default pendingWithStyles;
