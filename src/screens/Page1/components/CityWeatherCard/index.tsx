import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core/';

import { IUseStates } from '../../states';
import useStyles from './styles';

const CityWeatherCard: React.FC<IUseStates> = (states) => {
  const classes = useStyles();

  const {
    cityInfo,
  } = states;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {cityInfo.date}
        </Typography>
        <Typography variant="h5" component="h2">
          {cityInfo.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CityWeatherCard;