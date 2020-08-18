import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <p>Dropdown menu </p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bucket-list">Bucket Lisrt</Link></li>
        <li><Link to="/my-places">My Places</Link></li>
      </ul>
      <h1>Huginn</h1>
      <li><Link to="/add">Add Country</Link></li>
    </div>
  );
}

export default Navigation;
