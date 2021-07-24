import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import BackDrop from '../../ui/components/BackDrop';
import AlertDialog from '../../ui/components/AlertDialog';
import CityWeatherCard from './components/CityWeatherCard';

import useStyles from './styles';
import useStates from './states';

import { SCREEN_PAGE_2 } from '../../globals/endpoints';
import { IApplicationsState } from '../../store';

import * as WeatherInformationsActions from '../../store/ducks/weatherInformations/actions';
import { IWeatherInformations } from '../../store/ducks/weatherInformations/types';

interface IStateProps {
  weatherInformations: Array<IWeatherInformations>;
}

interface IDispatchProps {
  loadDispatch: () => void;
}

interface IOwnProps {

}

type IPage1Props = IStateProps & IDispatchProps & IOwnProps;

const Page1: React.FC<IPage1Props> = (props) => {
  const classes = useStyles();
  const states = useStates();
  // const apis = useAPIs(states);
  // const effects = useEffects(apis);
  const history = useHistory();

  const {
    isQueryingAPI,
    hasErrorMessage,
    errorMessage,
    setHasErrorMessage,

    selectedCity,
    setSelectedCity,
    cityInfo
  } = states;

  // Adiciona efeitos
  // effects.useComponentDidMount();
  // effects.useChangeSelectedCity(states);
  // effects.useChangeCityInfo({newCityArray, addNewCity, states});

  const clickCityButtonHandle = (city: string) => {
    setSelectedCity(city);
  }

  const {
    loadDispatch,
  } = props;

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

        <Grid justifyContent="flex-end" container>
          <Grid item>
            <Button onClick={() => history.push(SCREEN_PAGE_2)}>Mostrar Min/Max</Button>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}

const mapStateToProps = (store: IApplicationsState) => ({
  weaterInformations: store.weatherInformations.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(WeatherInformationsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page1);