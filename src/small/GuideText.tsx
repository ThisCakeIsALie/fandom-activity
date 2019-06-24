import React from "react";
import { Typography } from "@material-ui/core";
import { ClassProp } from "../CommonProps";

interface GuideTextProps extends ClassProp {
    text: string;
}

const GuideText: React.FC<GuideTextProps> = ({ text, className }) => {
    return <Typography variant="h5" className={className}>{text}</Typography>
}

export default GuideText;