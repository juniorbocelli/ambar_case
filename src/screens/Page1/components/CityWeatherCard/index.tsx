import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core/';

import inconTempMin from '../../../../assets/img/inconTempMin.png';
import inconTempMax from '../../../../assets/img/inconTempMax.png';
import { IWeatherInformations } from '../../../../store/ducks/weatherInformations/types';

import useStyles from './styles';

const CityWeatherCard: React.FC<IWeatherInformations> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>

        <Typography className={classes.date} color="textSecondary" gutterBottom>
          {props.date}
        </Typography>

        <Typography className={classes.city} variant="h4" component="h2">
          {props.name}
        </Typography>

        <Grid alignItems="center" className={classes.iconContainer} container>
          <Grid item>
            <img className={classes.icon} src={props.icon} alt="Ícone indicando nebulosidade no local." />
          </Grid>

          <Grid item>
            <Typography className={classes.currentTemp} variant="h3">{props.temp} ºC</Typography>
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
              {props.temp_min} ºC
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
              {props.temp_max} ºC
            </Typography>
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  );
}

export default CityWeatherCard;