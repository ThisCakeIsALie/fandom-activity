import React from "react";
import { ClassProp } from "../CommonProps";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { Close, Check } from "@material-ui/icons";

interface ActiveTurnInfoProps extends ClassProp {
  timeLeft: {
    minutes: number;
    seconds: number;
  };
}

const ActiveTurnInfo: React.FC<ActiveTurnInfoProps> = ({
  className,
  timeLeft
}) => {
  const largeIcon: { fontSize: "large" } = {
    fontSize: "large"
  };

  return (
    <Grid
      className={className}
      alignItems="center"
      justify="space-evenly"
      container
    >
      <IconButton>
        <Close {...largeIcon} />
      </IconButton>
      <Typography variant="h2">
        {timeLeft.minutes}:{timeLeft.seconds}
      </Typography>
      <IconButton>
        <Check {...largeIcon} />
      </IconButton>
    </Grid>
  );
};

export default ActiveTurnInfo;
