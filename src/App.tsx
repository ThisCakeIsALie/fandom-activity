import React, { useState } from "react";
import { Typography, IconButton, SwipeableDrawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import { Switch, Route } from "react-router-dom";
import { StartScreen } from "./views/StartScreen";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  menuButton: {
    position: "absolute"
  },
  content: {
    height: "100vh"
  }
});

const App: React.FC = () => {
  const [menuIsOpen, setMenuOpen] = useState(false);
  const classes = useStyle();

  return (
    <Container maxWidth="xl">
      <IconButton
        className={classes.menuButton}
        onClick={() => setMenuOpen(!menuIsOpen)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={menuIsOpen}
        onOpen={() => setMenuOpen(true)}
        onClose={() => setMenuOpen(false)}
      >
        <Typography>Yeet</Typography>
      </SwipeableDrawer>
      <StartScreen className={classes.content} />
    </Container>
  );
};

export default App;
