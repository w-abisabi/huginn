import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {



  return (
    <header>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/new" className="add-btn">
        <i className="fas fa-plus"></i>
      </Link>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Logout</Nav.Link>
    </Nav>
  </Navbar>
    </header>
  );
}

export default Navigation;