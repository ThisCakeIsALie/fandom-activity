import React from "react";
import { ClassProp } from "../CommonProps";
import { makeStyles } from "@material-ui/styles";
import StartScreen from "./StartScreen";
import NewGame from "./NewGame";
import Credits from "./Credits";
import { Typography } from "@material-ui/core";

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
            <Credits className={classes.content}>
                <p>Cthulu</p>
                <p>Ruby Rose</p>
                <p>Mods are Gay</p>
            </Credits>
        </div>
    );
};

export default MainContent;