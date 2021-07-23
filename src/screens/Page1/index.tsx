import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNewCity } from '../../actions';
import { NewCityInfo } from '../../reducers/addNewCity';

import BackDrop from '../../ui/components/BackDrop';
import AlertDialog from '../../ui/components/AlertDialog';
import CityWeatherCard from './components/CityWeatherCard';

import useStyles from './styles';
import useStates from './states';
import useAPIs from './apis';
import { SCREEN_PAGE_2 } from '../../globals/endpoints';

interface IPage1Props {
  addNewCity: (value: Array<NewCityInfo>) => void;
  newCityArray: Array<NewCityInfo>;
}

const Page1: React.FC<IPage1Props> = (props) => {
  const classes = useStyles();
  const states = useStates();
  const apis = useAPIs(states);
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

  const {
    newCityArray,
    addNewCity,
  } = props;

  React.useEffect(() => {
    // Simplesmente consulta a api para buscar dados da cidade
    if(selectedCity !== undefined) apis.fetchCityWheaterInfo();

  }, [selectedCity]);

  React.useEffect(() => {
    let arrayToInsert: Array<NewCityInfo> = newCityArray;

    // Para evitarmos inserção de cidades repetidas temos que determinar o valor do comprimento máximo
    // do vetor igual a 3. Essa verificação é desnecessária do ponto de vista lógico (pois a segunda verificação 
    // bastaria) porém, ela evita percorrer o vetor toda vez, tornando o processamento mais rápido
    if (newCityArray.length >= 3) return;

    // Também temos que determinar se determinada cidade já está inserida, pois o usuário pode selecionar uma cidade,
    // selecionar outra e voltar para a primeira seleção
    if (arrayToInsert.filter((item: NewCityInfo) => {return item.cityName === cityInfo.name}).length !== 0) return;

    // Evita adicionar quando monta o componente
    if (cityInfo.name !== '' && cityInfo.temp_min !== '' && cityInfo.temp_max !== '') {
      arrayToInsert.push({
        cityName: cityInfo.name,
        temp_min: cityInfo.temp_min,
        temp_max: cityInfo.temp_max,
      });
  
      addNewCity(arrayToInsert);
    }

    console.log(props);
  }, [cityInfo]);

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

        <Grid justifyContent="flex-end" container>
          <Grid item>
          <Button onClick={() => history.push(SCREEN_PAGE_2)}>Mostrar Min/Max</Button>
          </Grid>
        </Grid>
        
      </Paper>
    </div>
  );
}

const mapStateToProps = (store: any) => ({
  newCityArray: store.newCityInfoState.newCityArray
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ addNewCity }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page1);