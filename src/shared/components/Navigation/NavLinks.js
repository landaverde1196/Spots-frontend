import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <>
      <Nav className="mr-auto"></Nav>

      <Nav className="nav-links">
        <Nav.Link
          as={NavLink}
          to="/"
          exact
          eventKey="1"
          onClick={props.clicked}
        >
          ALL USERS
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/u1/places"
          eventKey="2"
          onClick={props.clicked}
        >
          MY PLACES
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/places/new"
          eventKey="3"
          onClick={props.clicked}
        >
          ADD PLACE
        </Nav.Link>
        <Nav.Link as={NavLink} to="/auth" eventKey="4" onClick={props.clicked}>
          AUTHENTICATE
        </Nav.Link>
      </Nav>
    </>
  );
};

export default NavLinks;
