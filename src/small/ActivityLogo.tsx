import React from "react";
import icon from "../assets/activity-logo.jpg";
import { ClassProp } from "../CommonProps";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    rotateScaleUp: {
        animation: "$rotate-scale-up 1.5s linear infinite both"
    },
    "@keyframes rotate-scale-up": {
        "0%": {
            transform: "scale(1) rotateZ(0)"
        },
        "50%": {
            transform: "scale(0.75) rotateZ(180deg)"
        },
        "100%": {
            transform: "scale(1) rotateZ(360deg)"
        }
    }
});

const ActivityLogo: React.FC<ClassProp> = ({ className }) => {
    const classes = useStyles();

  return <img className={className + " " + classes.rotateScaleUp} src={icon} alt="Activity logo" />;
};

export default ActivityLogo;