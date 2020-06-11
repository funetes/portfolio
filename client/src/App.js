import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Burger from "./components/burger/Burger";
import Menu from "./components/menu/Menu";
import Temp from "./components/temp/Temp";
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Router>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          {/* <Contact /> */}
          <Temp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
