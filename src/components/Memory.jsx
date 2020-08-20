import React from 'react';
import { Link } from 'react-router-dom';

const Memory = () => (
	<div className="memory">
		<p>Memory!!</p>
		{/* <p>{username}</p>
		<p>{city}</p>
		<p>{description}</p>
		<p>{title}</p> */}
		<li><Link to="/">Back</Link></li>
	</div>
);

export default Memory;