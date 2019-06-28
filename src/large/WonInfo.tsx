import React from "react";
import { ClassProp } from "../CommonProps";
import { Typography, makeStyles } from "@material-ui/core";
import NavigationScreen from "../medium/NavigationScreen";

interface WonInfoProps extends ClassProp {
  teamName: string;
  teamColor: string;
}

const useStyles = (color: string) =>
  makeStyles({
    teamName: {
      color
    }
  })();

const WonInfo: React.FC<WonInfoProps> = ({
  className,
  teamName,
  teamColor
}) => {
  const classes = useStyles(teamColor);

  return (
    <NavigationScreen className={className} navigationHelp="Click to continue!">
      <Typography align="center" variant="h2">
        Team <span className={classes.teamName}>{teamName}</span> won!
      </Typography>
    </NavigationScreen>
  );
};

export default WonInfo;
