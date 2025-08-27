import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">SDM Polytechnic, Ujire</div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="hamburger" aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </label>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/admission">Admission</Link></li>
          <li className="has-sub">
            <a href="#departments">Departments</a>
            <ul className="submenu">
              <li><Link to="/departments/civil">Civil Engineering</Link></li>
              <li><Link to="/departments/cse">Computer Science & Engineering</Link></li>
              <li><Link to="/departments/ece">Electronics & Communication</Link></li>
              <li><Link to="/departments/mechanical">Mechanical Engineering</Link></li>
            </ul>
          </li>
          <li><Link to="/placement">Placement</Link></li>
          <li><a href="#campus">Campus Life</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


