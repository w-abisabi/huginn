import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import $ from 'jquery';

function Navigation() {
  useEffect(() => {
    $(document).ready(function () {
      $('.menu-toggle').click(function () {
        $('nav').toggleClass('active');
      });
    });
    $(document).ready(function () {
      $('#close').click(function () {
        $('nav').removeClass('active');
      });
    });
  });

  return (
    <header>
      <Link to="/new" className="add-btn">
        <i className="fas fa-plus"></i>
      </Link>
      <Link to="/" className="logo">
        Huginn
      </Link>
      <nav id="close">
        <ul>
          <li>
            <Link to="/about" className="a-link">
              about
            </Link>
          </li>
          <li>
            <Link className="a-link" to="/logout">
              logout
            </Link>
          </li>
          <li>
            <Link className="a-link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="a-link" to="/new">
              add
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle">
        <i className="fas fa-ellipsis-v"></i>
      </div>
      {/* <Navbar className="wabi-custom-nav" expand="lg" variant="dark">
  
  
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
</Navbar> */}
      <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    </header>
  );
}

export default Navigation;
