import React from "react";
import { ClassProp } from "../CommonProps";
import { Grid, Typography, makeStyles } from "@material-ui/core";

interface ScoreTeamInfoProps extends ClassProp {
  name: string;
  color: string;
  score: number;
  deltaScore?: number;
}

const useStyles = (color: string) =>
  makeStyles({
    teamName: {
      color
    }
  })();

const ScoreTeamInfo: React.FC<ScoreTeamInfoProps> = ({
  className,
  name,
  color,
  score,
  deltaScore
}) => {
  const classes = useStyles(color);

  return (
    <Grid
      className={className}
      alignItems="center"
      justify="center"
      direction="column"
      container
    >
      <Typography
        variant="h5"
        classes={{
          root: classes.teamName
        }}
      >
        {name}
      </Typography>
      <Typography variant="h5">{score}</Typography>
      {deltaScore && (
        <Typography variant="h5">
          {deltaScore >= 0 ? `(+${deltaScore})` : `(-${deltaScore})`}
        </Typography>
      )}
    </Grid>
  );
};

export default ScoreTeamInfo;
