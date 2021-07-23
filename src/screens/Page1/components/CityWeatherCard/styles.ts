import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    date: {
      fontSize: 14,
    },
    city: {

    },
    iconContainer: {
      margin: theme.spacing(1, 0),
      marginLeft: -10
    },
    icon: {
      
    },
    currentTemp: {
      fontSize: 40
    },
    maxMinTempContainer: {

    },
    indicatorIcon: {
      width: 25
    },
    titleIndicatorTemp: {
      fontSize: 18,
      marginLeft: 3
    },
    valueIndicatorTemp: {
      fontSize: 18,
      marginLeft: 6
    },
    pos: {
      marginBottom: 12,
    },
  }),
);

export default useStyles;