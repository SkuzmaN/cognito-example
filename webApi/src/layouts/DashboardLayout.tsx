import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AuthenticationService } from "../services/AuthenticationService";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

interface DashboardLayoutProps {
  title: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  const styles = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    AuthenticationService.logout();
    history.push("/");
  };
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            {title}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </main>
  );
};
