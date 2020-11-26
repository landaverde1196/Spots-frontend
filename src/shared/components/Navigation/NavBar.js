import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <h1>Spots</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/places">
            <h6>Places</h6>
          </Nav.Link>
          <Nav.Link href="/users">
            <h6>Users</h6>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
