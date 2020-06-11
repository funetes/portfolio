import React from "react";
import { StyledMenu, StyledLink, SLink, SLinkWrapper } from "./styled";
import PropTypes from "prop-types";
const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <StyledLink
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        onClick={() => setOpen(!open)}
      >
        Home
      </StyledLink>
      <StyledLink
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        onClick={() => setOpen(!open)}
      >
        Projets
      </StyledLink>
      <StyledLink
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
        onClick={() => setOpen(!open)}
      >
        about
      </StyledLink>
      <StyledLink
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={2000}
        onClick={() => setOpen(!open)}
      >
        contact
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
