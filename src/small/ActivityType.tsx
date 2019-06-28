import React from "react";
import { ClassProp } from "../CommonProps";
import { Typography, Grid } from "@material-ui/core";

interface ActivityTypeProps extends ClassProp {
  activityName: string;
  activityIcon: React.ReactElement;
}

const ActivityType: React.FC<ActivityTypeProps> = ({
  className,
  activityName,
  activityIcon
}) => {

  return (
    <Grid
      className={className}
      alignItems="center"
      justify="center"
      direction="row"
      wrap="nowrap"
      container
    >
      {activityIcon}
      <Typography variant="h2">{activityName}</Typography>
    </Grid>
  );
};

export default ActivityType;
