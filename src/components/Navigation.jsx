import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <Navbar variant="dark" className="nav-general" expand="lg">
      <Navbar.Brand>
        {' '}
        <Link to="/new" className="add-btn">
          <i className="fas fa-plus"></i>
        </Link>
      </Navbar.Brand>
      <Link to="/">
        <p className="logo"></p>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">home</Nav.Link>
          <Nav.Link href="/new">add memory</Nav.Link>
          <Nav.Link href="/about">about</Nav.Link>
          <Nav.Link href="/login">logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
