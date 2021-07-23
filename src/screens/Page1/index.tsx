import React from 'react';
import {
  Paper,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';

import BackDrop from '../../ui/components/BackDrop';
import AlertDialog from '../../ui/components/AlertDialog';
import CityWeatherCard from './components/CityWeatherCard';

import useStyles from './styles';
import useStates from './states';
import useAPIs from './apis';

const Page1: React.FC<React.ReactFragment> = (props) => {
  const classes = useStyles();
  const states = useStates();
  const apis = useAPIs(states);

  const {
    isQueryingAPI,
    hasErrorMessage,
    errorMessage,
    setHasErrorMessage,

    selectedCity,
    setSelectedCity,
  } = states;

  React.useEffect(() => {
    if(selectedCity !== undefined) apis.fetchCityWheaterInfo();
  }, [selectedCity]);

  const clickCityButtonHandle = (city: string) => {
    setSelectedCity(city);
  }

  return (
    <div className={classes.root}>
      <BackDrop open={isQueryingAPI} />

      <AlertDialog
        id="error-alert-dialog"
        open={hasErrorMessage}
        title="Erro"
        content={errorMessage}
        onClose={() => setHasErrorMessage(false)}
      />

      <Paper className={classes.content} elevation={0} square>
        <Typography variant='h4' className={classes.title}>Notas de Serviço Tomado</Typography>

        <Grid container justifyContent="space-around" className={classes.buttonsContainer}>
          <Grid item>
            <Button
              color="primary"
              variant={selectedCity === "São Carlos" ? "contained" : "outlined"}
              onClick={() => clickCityButtonHandle("São Carlos")}
            >
              São Carlos
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="primary"
              variant={selectedCity === "Araraquara" ? "contained" : "outlined"}
              onClick={() => clickCityButtonHandle("Araraquara")}
            >
              Araraquara
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="primary"
              variant={selectedCity === "São Paulo" ? "contained" : "outlined"}
              onClick={() => clickCityButtonHandle("São Paulo")}
            >
              São Paulo
            </Button>
          </Grid>
        </Grid>

        <Grid justifyContent="center" container className={classes.weatherCardContainer}>
          <Grid item>
            {selectedCity && <CityWeatherCard {...states} />}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Page1;