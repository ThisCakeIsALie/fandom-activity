import React from "react";
import { ClassProp } from "../CommonProps";
import { Grid, Typography } from "@material-ui/core";
import ScoreTeamInfo from "../small/ScoreTeamInfo";

type TeamInfo = {
  name: string;
  color: string;
  score: number;
  deltaScore?: number;
};

interface ScoreInfoProps extends ClassProp {
  firstTeam: TeamInfo;
  secondTeam: TeamInfo;
}

const ScoreInfo: React.FC<ScoreInfoProps> = ({
  className,
  firstTeam,
  secondTeam
}) => {
  return (
    <Grid
      className={className}
      alignItems="center"
      justify="center"
      direction="column"
      wrap="nowrap"
      spacing={6}
      container
    >
      <Grid item xs={12}>
        <Typography align="center" variant="h3">
          And the new score is...
        </Typography>
      </Grid>
      <Grid
        alignItems="center"
        justify="center"
        direction="row"
        wrap="nowrap"
        container
        xs={12}
        md={6}
      >
        <Grid item xs={6}>
          <ScoreTeamInfo
            name={firstTeam.name}
            color={firstTeam.color}
            score={firstTeam.score}
            deltaScore={firstTeam.deltaScore}
          />
        </Grid>
        <Grid item xs={6}>
          <ScoreTeamInfo
            name={secondTeam.name}
            color={secondTeam.color}
            score={secondTeam.score}
            deltaScore={secondTeam.deltaScore}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ScoreInfo;
