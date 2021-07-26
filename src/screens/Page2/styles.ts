import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    content: {
      width: '100%',
      padding: theme.spacing(1, 2, 2, 2),
      marginTop: theme.spacing(2),
      minHeight: 400,
    },
    title: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    table: {
      minWidth: 700
    },
    mainContent: {
      minHeight: 450,
      marginTop: theme.spacing(5),
    }
  }),
);

export default useStyles;