import React from "react";
import MenuButton from "./small/MenuButton";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import MainContent from "./large/MainContent";

const useStyle = makeStyles({
  menuButton: {
    position: "absolute",
    zIndex: 100
  },
  content: {
    width: "100%",
    height: "100vh"
  }
});
/*
      <SwipeableDrawer
        open={menuIsOpen}
        onOpen={() => setMenuOpen(true)}
        onClose={() => setMenuOpen(false)}
      >
        <Typography>Yeet</Typography>
      </SwipeableDrawer>
*/
const App: React.FC = () => {
  const classes = useStyle();

  return (
    <Container>
      <MenuButton className={classes.menuButton} />
      <MainContent className={classes.content} />
    </Container>
  );
};

export default App;
