import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

import useStyles from './styles';

interface IBackDropProps {
  open: boolean;
}

const BackDrop: React.FC<IBackDropProps> = (props) => {
  const classes = useStyles();

  return (
    <Backdrop open={props.open} className={classes.root}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default BackDrop;