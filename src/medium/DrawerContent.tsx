import React from "react";
import { ClassProp } from "../CommonProps";
import { SwipeableDrawer, Grid, Typography, Divider } from "@material-ui/core";
import ActivityLogo from "../small/ActivityLogo";
import { makeStyles } from "@material-ui/core/styles";
import GameControls from "../small/GameControls";
import OtherControls from "../small/OtherControls";

const useStyles = makeStyles({
  logo: {
    width: "25%"
  },
  contentGrid: {
    width: "60%"
  },
  divider: {
    width: "100%"
  },
  mainGrid: {
    height: "100%"
  }
});

const DrawerContent: React.FC<ClassProp> = ({ className }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      classes={{
        paper: className
      }}
      open={false}
      onOpen={() => null}
      onClose={() => null}
    >
      <Grid
        className={classes.mainGrid}
        alignItems="center"
        justify="space-around"
        direction="column"
        container
      >
        <Grid alignItems="center" direction="column" container>
          <ActivityLogo className={classes.logo} />
          <Typography variant="h3" paragraph>
            Activity!
          </Typography>
          <Divider
            classes={{
              root: classes.divider
            }}
          />
          <GameControls />
        </Grid>
        <OtherControls />
      </Grid>
    </SwipeableDrawer>
  );
};

export default DrawerContent;
