import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Settings, Favorite } from "@material-ui/icons";

const OtherControls: React.FC = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Favorite />
        </ListItemIcon>
        <ListItemText>Credits</ListItemText>
      </ListItem>
    </List>
  );
};

export default OtherControls;
