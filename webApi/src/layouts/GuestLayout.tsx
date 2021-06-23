import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: theme.spacing(6, 8),
  },
}));

export const GuestLayout: React.FC = ({ children }): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.container}>
        {children}
      </Paper>
    </div>
  );
};