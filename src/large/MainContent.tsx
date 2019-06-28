import React from "react";
import { ClassProp } from "../CommonProps";
import { makeStyles } from "@material-ui/styles";
import StartScreen from "./StartScreen";
import NewGame from "./NewGame";
import Credits from "./Credits";
import { Typography } from "@material-ui/core";
import Settings from "./Settings";
import NextTurnInfo from "./NextTurnInfo";
import ActiveTurn from "./ActiveTurn";
import TurnResult from "./TurnResult";
import WonInfo from "./WonInfo";

const useStyles = makeStyles({
  content: {
    height: "100%",
    width: "100%"
  }
});

const MainContent: React.FC<ClassProp> = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={className}>
      <WonInfo className={classes.content} teamName="Blue" teamColor="blue" />
    </div>
  );
};

export default MainContent;
