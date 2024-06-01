import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const excludedPaths = ["not-found", "path2", "path3"]; // Add your excluded paths here

  // Check if the current pathname matches any excluded path
  if (excludedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <>
      <Navbar
        expand="lg"
        className="p-2 shadow navbar-bg"
        expanded={expanded}
        onSelect={() => setExpanded(false)}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h3 className="logo-text text-uppercase text-light fw-bold">
              News<span>Hub</span>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
            onClick={() => setExpanded((prevState) => !prevState)}
          >
            {expanded ? <FaTimes /> : <FaBars />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className="nav-link text-uppercase text-light fw-bold mx-2"
                href="/"
                onClick={() => setExpanded(false)} // Close navbar on link click
              >
                Home
              </Link>
              <Link
                className="nav-link text-uppercase text-light fw-bold mx-2"
                to="/services"
                onClick={() => setExpanded(false)} // Close navbar on link click
              >
                Services
              </Link>
              <Link
                className="nav-link text-uppercase text-light fw-bold mx-2"
                to="/about"
                onClick={() => setExpanded(false)} // Close navbar on link click
              >
                About Us
              </Link>
              <Link
                className="nav-link text-uppercase text-light fw-bold mx-2"
                to="/contact"
                onClick={() => setExpanded(false)} // Close navbar on link click
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
