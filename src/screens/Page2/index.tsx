import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  Typography,
  Grid,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import useStyles from './styles';
import { SCREEN_PAGE_1 } from '../../globals/endpoints';

import { IApplicationsState } from '../../store';
import * as WeatherInformationsActions from '../../store/ducks/weatherInformations/actions';
import { IWeatherInformations } from '../../store/ducks/weatherInformations/types';

// Essas duas funções sobrescrevem as configurações das células e linhas do Material-UI
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

interface IStateProps {
  weatherInformations: Array<IWeatherInformations>;
}

interface IDispatchProps {
  loadRequest(city: string): void;
  loadUpdate(data: Array<IWeatherInformations>): void;
}

type IPage2Props = IStateProps & IDispatchProps;

const Page2: React.FC<IPage2Props> = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const {
    weatherInformations,
  } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.content} elevation={0} square>
        <Typography variant='h4' className={classes.title}>Notas de Serviço Tomado</Typography>

        {
          weatherInformations.length !== 0
            ?
            <Grid justifyContent="center" className={classes.mainContent} container>
              <Grid item>

                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Cidade</StyledTableCell>
                        <StyledTableCell align="right">Temperatura mínima (ºC)</StyledTableCell>
                        <StyledTableCell align="right">Temperatura máxima (ºC)</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {weatherInformations.map((row: IWeatherInformations) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.temp_min}</StyledTableCell>
                          <StyledTableCell align="right">{row.temp_max}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

              </Grid>
            </Grid>
            :
            <Grid justifyContent="center" className={classes.mainContent} container>
              <Grid item>
                <Typography variant="body2">
                  Não há dados para mostrar!
                </Typography>
              </Grid>
            </Grid>
        }

        <Grid justifyContent="flex-start" container>
          <Grid item>
            <Button onClick={() => history.push(SCREEN_PAGE_1)}>Voltar</Button>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}

const mapStateToProps = (store: IApplicationsState) => ({
  weatherInformations: store.weatherInformations.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(WeatherInformationsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page2);