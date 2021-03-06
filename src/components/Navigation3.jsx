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
      <Link to="/">
       <p className="logo"></p>
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
        <i className="fas fa-bars"></i>
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    </header>
  );
}

export default Navigation;
