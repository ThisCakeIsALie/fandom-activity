import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { ClassProp } from "../CommonProps";
import ActivityLogo from "../small/ActivityLogo";
import GuideText from "../small/GuideText";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  logo: {
    width: "50%"
  }
});

const NewGame: React.FC<ClassProp> = ({ className }) => {
  const classes = useStyles();

  return (
    <Grid
      className={className}
      justify="space-evenly"
      alignItems="center"
      direction="column"
      container
    >
      <ActivityLogo className={classes.logo} />
      <GuideText text="Click to continue!" />
    </Grid>
  );
};

export default NewGame;
