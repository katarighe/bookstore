import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav_container">
      <ul className="nav_links">
        <h2>Bookstore CMS</h2>
        <Link to="/">
          <li>BOOKS</li>
        </Link>
        <Link to="Categories">
          <li>CATEGORIES</li>
        </Link>
      </ul>
    </div>
  );
}
