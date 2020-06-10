import React from "react";
import { StyledMenu, StyledLink, SLink, SLinkWrapper } from "./styled";
import PropTypes from "prop-types";

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
      <SLinkWrapper>
        <SLink
          href="https://github.com/funetes"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </SLink>
        <SLink
          href="https://artdev.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          blog
        </SLink>
      </SLinkWrapper>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Menu;
