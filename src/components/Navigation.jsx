import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <div>
      <Navbar className="wabi-custom-nav" expand="lg" variant="dark">
        
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">My Memories</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">ADD</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        <Navbar.Brand href="/">Huginn</Navbar.Brand>
        <Link className="btn-plus" to="/add">
          <i className="fas fa-plus"></i>
        </Link>
      </Navbar>
    </div>
  );
}

export default Navigation;
