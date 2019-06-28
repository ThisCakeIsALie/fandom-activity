import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { ClassProp } from "../CommonProps";

interface TeamIndicatorProps extends ClassProp {
  teamColor: string;
  size?: "small" | "medium" | "large";
}

const useStyles = makeStyles((theme: Theme) => ({
  small: {
    [theme.breakpoints.up("md")]: {
      width: "5%"
    },
    width: "15%"
  },
  medium: {
    [theme.breakpoints.up("md")]: {
      width: "15%"
    },
    width: "25%"
  },
  large: {
    [theme.breakpoints.up("md")]: {
      width: "25%"
    },
    width: "35%"
  }
}));

const TeamIndicator: React.FC<TeamIndicatorProps> = ({
  teamColor,
  className,
  size = "medium"
}) => {
  const classes = useStyles();

  return (
    <div className={classes[size] + " " + className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M 0 0 L 500 1000 L 1000 0 H 0" fill={teamColor} />
      </svg>
    </div>
  );
  /*
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
  */
};

export default TeamIndicator;

interface IndicatorLocation {
  x: "right" | "left";
  y: "top" | "bottom";
}

const usePositionStyles = (location: IndicatorLocation) =>
  makeStyles({
    parent: {
      position: "relative"
    },
    indicator: {
      position: "absolute",
      [location.x]: 0,
      [location.y]: 0
    }
  })();

export function usePositionedIndicator(
  location: IndicatorLocation,
  indicatorProps: TeamIndicatorProps
) {
  const classes = usePositionStyles(location);
  return [
    classes.parent,
    <TeamIndicator className={classes.indicator} {...indicatorProps} />
  ];
}
