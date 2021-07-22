import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    content: {
      width: '100%',
      padding: theme.spacing(1, 2, 2, 2),
    },
    title: {
      marginBottom: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(0),
      minWidth: 200,
    },
  }),
);

export default useStyles;