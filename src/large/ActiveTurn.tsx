import React from "react";
import { ClassProp } from "../CommonProps";
import { usePositionedIndicator } from "../medium/TeamIndicator";
import { Grid, Typography } from "@material-ui/core";
import ActivityType from "../small/ActivityType";
import { ChatBubble } from "@material-ui/icons";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ActiveTurnInfo from "../medium/ActiveTurnInfo";

interface ActiveTurnProps extends ClassProp {
  currentColor: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  activityType: {
    "& > *": {
      padding: theme.spacing(2)
    }
  }
}));

const ActiveTurn: React.FC<ActiveTurnProps> = ({ className, currentColor }) => {
  const classes = useStyles();

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
      justify="space-around"
      alignItems="center"
      direction="column"
      container
    >
      <ActivityType
        className={classes.activityType}
        activityName="Explain..."
        activityIcon={<ChatBubble fontSize="large" />}
      />
      <Typography variant="h1">OwO</Typography>
      <ActiveTurnInfo
        timeLeft={{
          minutes: 13,
          seconds: 37
        }}
      />
      {indicator}
    </Grid>
  );
};
export default ActiveTurn;
