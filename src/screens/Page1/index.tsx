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

import { database } from '../../features/firebase/';

interface IStateProps {
  weatherInformations: Array<IWeatherInformations>;
  isQueryingAPI: boolean;
  errorAPI: {
    hasError: boolean;
    errorMessage: string;
  }

}

interface IDispatchProps {
  loadRequest(city: string): void;
  loadUpdate(data: Array<IWeatherInformations>): void;
}

type IPage1Props = IStateProps & IDispatchProps;

const Page1: React.FC<IPage1Props> = (props) => {
  const classes = useStyles();
  const states = useStates();
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
    loadUpdate,
  } = props;

  // React.useEffect(() => {
  //   const currentTempRef = database.ref('current_temp');
  //   currentTempRef.on('value', (snapshot: any) => {
  //     const data = snapshot.val();
  //     console.log('currentTempData', data);

  //     loadUpdate(data);
  //   });
  // }, []);

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

      {/* <AlertDialog
        id="error-alert-dialog"
        open={errorAPI.hasError}
        title="Erro"
        content={errorAPI.errorMessage}
        onClose={() => setHasErrorMessage(false)}
      /> */}

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
            {selectedCity && <CityWeatherCard {...weatherInformations[getSelectedCityKey()]} />}
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
  weatherInformations: store.weatherInformations.data,
  isQueryingAPI: store.weatherInformations.loading,
  errorAPI: store.weatherInformations.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(WeatherInformationsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page1);