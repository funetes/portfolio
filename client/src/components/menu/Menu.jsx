import React from "react";
import { StyledMenu, StyledLink } from "./Menu.styled";
const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <StyledLink to="/" onClick={() => setOpen(!open)}>
        Project
      </StyledLink>
      <StyledLink to="/about" onClick={() => setOpen(!open)}>
        About
      </StyledLink>
      <StyledLink to="/contact" onClick={() => setOpen(!open)}>
        Contact
      </StyledLink>
    </StyledMenu>
  );
};
export default Menu;
