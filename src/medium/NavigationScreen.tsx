import React from "react";
import { ClassProp } from "../CommonProps";
import { Grid } from "@material-ui/core";
import GuideText from "../small/GuideText";

interface NavigationScreenProps extends ClassProp {
  navigationHelp: string;
}

const NavigationScreen: React.FC<NavigationScreenProps> = ({
  className,
  navigationHelp,
  children
}) => {
  return (
    <Grid
      className={className}
      alignItems="center"
      justify="space-evenly"
      direction="column"
      container
    >
      {children}
      <Grid item xs="auto">
        <GuideText text={navigationHelp} />
      </Grid>
    </Grid>
  );
};

export default NavigationScreen;
