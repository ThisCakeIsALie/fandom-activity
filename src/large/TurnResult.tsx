import React from "react";
import { ClassProp } from "../CommonProps";
import { Grid } from "@material-ui/core";
import GuideText from "../small/GuideText";
import NavigationScreen from "../medium/NavigationScreen";
import ScoreInfo from "../medium/ScoreInfo";

const TurnResult: React.FC<ClassProp> = ({ className }) => {
  return (
    <NavigationScreen className={className} navigationHelp="Click to continue!">
        <ScoreInfo firstTeam={{
            name: "Blue",
            score: 5,
            color: "blue",
            deltaScore: 3
        }} secondTeam={{
            name: "Red",
            score: 7,
            color: "red"
        }}/>
    </NavigationScreen>
  );
};

export default TurnResult;
