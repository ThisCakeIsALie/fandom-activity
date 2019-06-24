import React from "react";
import { ClassProp } from "../CommonProps";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { VideogameAsset } from "@material-ui/icons";

interface GameButtonProps {
  name: string;
  onClick?(): void;
}

const GameButton: React.FC<GameButtonProps> = ({ name }) => (
  <ListItem button>
    <ListItemIcon>
      <VideogameAsset />
    </ListItemIcon>
    <ListItemText>{name}</ListItemText>
  </ListItem>
);

const GameControls: React.FC<ClassProp> = ({ className }) => {
  return (
    <List
      classes={{
        root: className
      }}
    >
      <GameButton name="Continue" />
      <GameButton name="New Game" />
      <GameButton name="Current Score" />
    </List>
  );
};

export default GameControls;
