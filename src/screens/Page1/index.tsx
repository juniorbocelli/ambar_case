import React from 'react';
import {
  Paper,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';

import useStyles from './styles';

const Page1: React.FC<React.ReactFragment> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.content} elevation={0} square>
        <Typography variant='h4' className={classes.title}>Notas de Serviço Tomado</Typography>
      </Paper>
    </div>
  );
}

export default Page1;