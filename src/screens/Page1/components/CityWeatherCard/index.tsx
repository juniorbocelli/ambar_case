import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from '@material-ui/core/';

import inconTempMin from '../../../../assets/img/inconTempMin.png';
import inconTempMax from '../../../../assets/img/inconTempMax.png';

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

        <Typography className={classes.date} color="textSecondary" gutterBottom>
          {cityInfo.date}
        </Typography>

        <Typography className={classes.city} variant="h4" component="h2">
          {cityInfo.name}
        </Typography>

        <Grid alignItems="center" className={classes.iconContainer} container>
          <Grid item>
            <img className={classes.icon} src={cityInfo.icon} alt="Ícone indicando nebulosidade no local." />
          </Grid>

          <Grid item>
            <Typography className={classes.currentTemp} variant="h3">{cityInfo.temp} ºC</Typography>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.maxMinTempContainer}>
          <Grid item>
            <img className={classes.indicatorIcon} src={inconTempMin} alt="Ícone indicando temperatura minima." />
          </Grid>
          <Grid item>
            <Typography className={classes.titleIndicatorTemp} variant="body2">
              MÍNIMA: 
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.valueIndicatorTemp} color="textSecondary">
              {cityInfo.temp_min}
            </Typography>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.maxMinTempContainer}>
          <Grid item>
            <img className={classes.indicatorIcon} src={inconTempMax} alt="Ícone indicando temperatura minima." />
          </Grid>
          <Grid item>
            <Typography className={classes.titleIndicatorTemp} variant="body2">
              MÁXIMA: 
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.valueIndicatorTemp} color="textSecondary">
              {cityInfo.temp_max}
            </Typography>
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  );
}

export default CityWeatherCard;