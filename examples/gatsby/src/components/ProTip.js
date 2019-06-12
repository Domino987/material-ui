import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createUseStyles } from 'react-jss';

const useStyles = makeStyles(() => ({
  root: {
    margin: 6,
  },
}));

export default function ProTip() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Pro tip: See more{' '}
      on the Material-UI documentation.
    </div>
  );
}
