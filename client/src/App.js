import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hook";
import { animateScroll as scroll } from "react-scroll";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Product from "./components/Product/Product";
import Burger from "./components/burger/Burger";
import Menu from "./components/menu/Menu";
import Temp from "./components/temp/Temp";
import Home from "./components/Home/Home";

import styled from "styled-components";

const UpButton = styled.button`
  cursor: pointer;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  border: none;
  opacity: 0.8;
  &:focus {
    outline: none;
  }
  @media (max-width: 480px) {
    bottom: 20px;
    right: 20px;
  }
  &:hover {
    opacity: 1;
    transition: all 0.3s linear;
  }
`;

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Home />
      <Product />
      <About />
      <Contact />
      <UpButton onClick={scrollToTop}>up</UpButton>
    </>
  );
}
export default App;
