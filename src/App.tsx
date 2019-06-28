import React from "react";
import MenuButton from "./small/MenuButton";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MainContent from "./large/MainContent";
import DrawerContent from "./medium/DrawerContent";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  menuButton: {
    position: "absolute",
    zIndex: 100
  },
  content: {
    width: "100%",
    height: "100vh"
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: "25%"
    },
    width: "60%"
  }
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <MenuButton className={classes.menuButton} />
      <MainContent className={classes.content} />
      <DrawerContent className={classes.drawer} />
    </Container>
  );
};

export default App;
