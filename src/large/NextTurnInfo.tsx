import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ClassProp } from "../CommonProps";
import GuideText from "../small/GuideText";
import { usePositionedIndicator } from "../medium/TeamIndicator";

interface NextTurnInfoProps extends ClassProp {
  nextTeam: string;
  nextActivity: string;
  nextColor: string;
}

const NextTurnInfo: React.FC<NextTurnInfoProps> = ({
  className,
  nextTeam,
  nextActivity,
  nextColor
}) => {
  const [indicatorParentClass, indicator] = usePositionedIndicator(
    {
      x: "right",
      y: "top"
    },
    {
      teamColor: nextColor
    }
  );

  return (
    <Grid
      className={className + " " + indicatorParentClass}
      justify="space-evenly"
      alignItems="center"
      direction="column"
      container
    >
      {indicator}
      <Typography variant="h4" align="center">
        It's team {nextTeam}'s turn with...
      </Typography>
      <Typography variant="h2">{nextActivity}</Typography>
      <GuideText text="Click to start!" />
    </Grid>
  );
};

export default NextTurnInfo;
