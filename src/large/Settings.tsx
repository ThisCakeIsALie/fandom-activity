import React from "react";
import { ClassProp } from "../CommonProps";
import SwitchListSetting from "../medium/SwitchListSetting";
import { Typography, Grid } from "@material-ui/core";
import SwitchListItem from "../small/SwitchListItem";
import { makeStyles } from "@material-ui/styles";

interface SettingsProps extends ClassProp {}

const useStyles = makeStyles({
  content: {
    padding: "50px",
    "& > *": {
      margin: "10px"
    }
  }
});

const Settings: React.FC<SettingsProps> = ({ className }) => {
  const classes = useStyles();

  return (
    <Grid
      className={className + " " + classes.content}
      alignItems="baseline"
      xs="auto"
      container
    >
      <SwitchListSetting switchListName="Topkekasdsadasdsadas">
        <SwitchListItem switchName="kek" switchChecked={true} />
        <SwitchListItem switchName="kek" switchChecked={true} />
        <SwitchListItem switchName="kek" switchChecked={true} />
        <SwitchListItem switchName="kek" switchChecked={true} />
      </SwitchListSetting>
      <SwitchListSetting switchListName="Topkekasdsadasdsadas">
        <SwitchListItem switchName="kek" switchChecked={true} />
        <SwitchListItem switchName="kek" switchChecked={true} />
        <SwitchListItem switchName="kek" switchChecked={true} />
        <SwitchListItem switchName="kek" switchChecked={true} />
      </SwitchListSetting>
      <SwitchListSetting switchListName="Topkekasdsadasdsadas">
        <SwitchListItem switchName="kek" switchChecked={true} />
        <SwitchListItem switchName="kek" switchChecked={true} />
        <SwitchListItem switchName="kek" switchChecked={true} />
        <SwitchListItem switchName="kek" switchChecked={true} />
      </SwitchListSetting>
    </Grid>
  );
};

export default Settings;
