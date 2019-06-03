import React from "react";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { ClassProp } from "../CommonProps";

interface MenuButtonProps extends ClassProp {
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ className, onClick }) => {
  return (
    <IconButton className={className} onClick={onClick}>
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;
