import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";

const Navegation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Pokemon</Navbar.Brand>
        <Nav className="navbar-nav ml-auto">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/list">
            Pokemon List
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navegation;
