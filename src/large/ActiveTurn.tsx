import React from "react";
import { ClassProp } from "../CommonProps";
import { usePositionedIndicator } from "../medium/TeamIndicator";
import { Grid } from "@material-ui/core";

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
      teamColor: currentColor
    }
  );
  return (
    <Grid
      className={className + " " + indicatorParentClass}
      justify="center"
      alignItems="center"
      container
    >
      {indicator}
      <p>test</p>
    </Grid>
  );
};
export default ActiveTurn;
