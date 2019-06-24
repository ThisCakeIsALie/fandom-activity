import React from "react";
import { ClassProp } from "../CommonProps";
import { FormControlLabel, Switch } from "@material-ui/core";

export interface SwitchListItemProps extends ClassProp {
  switchName: string;
  switchChecked: boolean;
  onChangeChecked?(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SwitchListItem: React.FC<SwitchListItemProps> = ({
  className,
  switchName,
  switchChecked,
  onChangeChecked
}) => {
  return (
    <FormControlLabel
      className={className}
      label={switchName}
      control={<Switch checked={switchChecked} onChange={onChangeChecked} />}
    />
  );
};

export default SwitchListItem;