import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    content: {
      width: '100%',
      padding: theme.spacing(1, 2, 2, 2),
      minHeight: 400,
    },
    title: {
      marginBottom: theme.spacing(4),
    },
    formControl: {
      margin: theme.spacing(0),
      minWidth: 200,
    },
    buttonsContainer: {
      marginBottom: theme.spacing(6),
    },
    weatherCardContainer: {
      minHeight: 300
    },
  }),
);

export default useStyles;