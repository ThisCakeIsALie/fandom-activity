import React from "react";
import { ClassProp } from "../CommonProps";
import { usePositionedIndicator } from "../medium/TeamIndicator";
import { Grid, Typography } from "@material-ui/core";

interface ActiveTurnProps extends ClassProp {
  currentColor: string;
}

const ActiveTurn: React.FC<ActiveTurnProps> = ({ className, currentColor }) => {
  const [indicatorParentClass, indicator] = usePositionedIndicator(
    {
      x: "right",
      y: "top"
    },
    {
      teamColor: currentColor,
      size: "small"
    }
  );
  return (
    <Grid
      className={className + " " + indicatorParentClass}
      justify="space-evenly"
      alignItems="center"
      container
    >
      <Typography variant="h1">Explain</Typography>
      <Typography variant="h1">w</Typography>
      <Typography variant="h1">O</Typography>
      {indicator}
    </Grid>
  );
};
export default ActiveTurn;
