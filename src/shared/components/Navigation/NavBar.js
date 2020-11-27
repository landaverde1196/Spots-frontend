import React from "react";

import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <h1>Spots</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" />
      <Navbar.Collapse id="responsive-navbar-nav" collapseOnSelect>
        <Nav className="mr-auto"></Nav>

        <Nav className="nav-links">
          <NavLink to="/" exact>
            ALL USERS
          </NavLink>
          <NavLink to="/u1/places">MY PLACES</NavLink>
          <NavLink to="/places/new">ADD PLACE</NavLink>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
