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
      <ActiveTurn className={classes.content} currentColor="blue" />
    </div>
  );
};

export default MainContent;
