import React from 'react';
// react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Navbar.Brand href="#home">
        <i className="fas fa-microphone-alt" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            target="_blank"
            href="https://github.com/pjachimowski/my-artist-ranker">
            Repo
          </Nav.Link>
          <NavDropdown title="Author" id="basic-nav-dropdown">
            <NavDropdown.Item
              target="_blank"
              href="https://github.com/pjachimowski">
              <i className="fab fa-github" />
              {' '}
              github
            </NavDropdown.Item>
            <NavDropdown.Item
              target="_blank"
              href="https://www.linkedin.com/in/patryk-jachimowski/">
              <i className="fab fa-linkedin-in" />
              {' '}
              linkedin
            </NavDropdown.Item>
            <NavDropdown.Item
              target="_blank"
              href="https://dribbble.com/Jachimowski">
              <i className="fab fa-dribbble" />
              {' '}
              dribbble
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              target="_blank"
              href="https://jachimowski89.wixsite.com/patryk-jachimowski">
              <i className="fas fa-globe" />
              {' '}
              website
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar;
