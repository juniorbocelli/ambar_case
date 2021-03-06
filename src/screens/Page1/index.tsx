import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  Paper,
  Typography,
  Grid,
  Button,
  Divider,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import BackDrop from '../../ui/components/BackDrop';
import AlertDialog from '../../ui/components/AlertDialog';
import CityWeatherCard from './components/CityWeatherCard';

import { SCREEN_PAGE_2 } from '../../globals/endpoints';

import { IApplicationsState } from '../../store';
import * as WeatherInformationsActions from '../../store/ducks/weatherInformations/actions';
import { IWeatherInformations } from '../../store/ducks/weatherInformations/types';
import { IPage1Props } from './types';

import useStyles from './styles';
import useStates from './states';
import useEffects from './effects';

const Page1: React.FC<IPage1Props> = (props) => {
  // Chama os hooks
  const classes = useStyles();
  const states = useStates();
  const effects = useEffects();
  const history = useHistory();

  const {
    selectedCity,
    setSelectedCity,
  } = states;

  const {
    isQueryingAPI,
    errorAPI,
    loadRequest,
    weatherInformations,
    changeErrorEntry,
  } = props;

  // Ativa efeito ao montar componente
  effects.useComponentDidMount(props);

  const clickCityButtonHandle = (city: string) => {
    setSelectedCity(city);
    loadRequest(city);

    console.log(weatherInformations);
  }

  const getSelectedCityKey = () => {
    return weatherInformations.indexOf(weatherInformations.filter((city: IWeatherInformations) => {
      return city.name === selectedCity;
    })[0]);
  }

  return (
    <div className={classes.root}>
      <BackDrop open={isQueryingAPI} />

      <AlertDialog
        id="error-alert-dialog"
        open={errorAPI.hasError ? true : false}
        title="Erro"
        content={errorAPI.errorMessage}
        onClose={() => changeErrorEntry()}
      />

      <Paper className={classes.content} elevation={0} square>
        <Typography variant='h4' className={classes.title}>Verificar Previs??o de Tempo</Typography>

        <Divider />

        <Grid container justifyContent="space-around" className={classes.buttonsContainer}>
          <Grid item>
            <Button
              color="primary"
              variant={selectedCity === "S??o Carlos" ? "contained" : "outlined"}
              onClick={() => clickCityButtonHandle("S??o Carlos")}
            >
              S??o Carlos
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
              variant={selectedCity === "S??o Paulo" ? "contained" : "outlined"}
              onClick={() => clickCityButtonHandle("S??o Paulo")}
            >
              S??o Paulo
            </Button>
          </Grid>
        </Grid>

        <Grid justifyContent="center" container className={classes.weatherCardContainer}>
          <Grid item>
            {selectedCity && <CityWeatherCard {...weatherInformations[getSelectedCityKey()]} />}
          </Grid>
        </Grid>

        <Grid justifyContent="flex-end" container>
          <Grid item>
            <Button
              onClick={() => history.push(SCREEN_PAGE_2)}
              endIcon={<NavigateNextIcon />}
            >
              ??ltimas Consultas
            </Button>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}

const mapStateToProps = (store: IApplicationsState) => ({
  weatherInformations: store.weatherInformations.data,
  isQueryingAPI: store.weatherInformations.loading,
  errorAPI: store.weatherInformations.error,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(WeatherInformationsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page1);