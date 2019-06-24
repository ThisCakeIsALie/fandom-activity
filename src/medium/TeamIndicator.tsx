import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { relative } from "path";
import { ClassProp } from "../CommonProps";

interface TeamIndicatorProps extends ClassProp {
  teamColor: string;
}

const TeamIndicator: React.FC<TeamIndicatorProps> = ({ teamColor, className }) => {
  return (
    <div
      className={className}
      style={{
        width: "10%",
        height: "10%",
        background: teamColor
      }}
    />
  );
};

export default TeamIndicator;

interface IndicatorLocation {
    x: "right" | "left";
    y: "top" | "bottom";
}

const useStyles = (location: IndicatorLocation) =>
  makeStyles({
    parent: {
      position: "relative"
    },
    indicator: {
      position: "absolute",
      [location.x]: 0,
      [location.y]: 0,
      right: 0
    }
  })();

export function usePositionedIndicator(
  location: IndicatorLocation,
  indicatorProps: TeamIndicatorProps
) {
  const classes = useStyles(location);
  return [
    classes.parent,
    <TeamIndicator className={classes.indicator} {...indicatorProps} />
  ];
}
