import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const StartScreen: React.FC<{ className?: string }> = props => {
  return (
    <>
      <Grid
        className={props.className}
        justify="center"
        alignItems="center"
        direction="column"
        container
      >
        <Typography>Test</Typography>
        <Typography>Test2</Typography>
      </Grid>
    </>
  );
};

export default StartScreen;
