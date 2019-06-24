import React from "react";
import { ClassProp } from "../CommonProps";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Switch
} from "@material-ui/core";

export interface SwitchListSettingProps extends ClassProp {
  switchListName: string;
}

const SwitchListSetting: React.FC<SwitchListSettingProps> = ({
  className,
  switchListName,
  children
}) => {
  return (
    <FormControl className={className}>
      <FormLabel>{switchListName}</FormLabel>
      {children}
    </FormControl>
  );
};

export default SwitchListSetting;
