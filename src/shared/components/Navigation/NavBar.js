import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Backdrop from "../UIElements/Backdrop";
import NavLinks from "./NavLinks";

import "./NavBar.css";

const NavBar = () => {
  const [backDropShow, setBackDropShow] = useState(false);

  const backDropShowHandler = () => {
    setBackDropShow(true);
  };

  const backDropCloseHandler = () => {
    setBackDropShow(false);
  };

  return (
    <>
      {backDropShow && <Backdrop />}
      <Navbar className="navbar" expand="lg" collapseOnSelect>
        <Nav.Link as={NavLink} to="/">
          <h1>Spots</h1>
        </Nav.Link>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle"
          onClick={backDropShowHandler}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLinks clicked={backDropCloseHandler} />
        </Navbar.Collapse>
      </Navbar>
      )
    </>
  );
};

export default NavBar;
