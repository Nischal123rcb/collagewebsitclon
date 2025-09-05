import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">SDM Polytechnic, Ujire</div>
        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle"
          checked={menuOpen}
          onChange={handleMenuToggle}
        />
        <label htmlFor="nav-toggle" className="hamburger" aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </label>
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={handleMenuClose}>Home</Link></li>
          <li><Link to="/about" onClick={handleMenuClose}>About Us</Link></li>
          <li><Link to="/admission" onClick={handleMenuClose}>Admission</Link></li>
          <li className="has-sub">
            <a href="#departments">Departments</a>
            <ul className="submenu">
              <li><Link to="/departments/civil" onClick={handleMenuClose}>Civil Engineering</Link></li>
              <li><Link to="/departments/cse" onClick={handleMenuClose}>Computer Science & Engineering</Link></li>
              <li><Link to="/departments/ece" onClick={handleMenuClose}>Electronics & Communication</Link></li>
              <li><Link to="/departments/mechanical" onClick={handleMenuClose}>Mechanical Engineering</Link></li>
            </ul>
          </li>
          <li><Link to="/placement" onClick={handleMenuClose}>Placement</Link></li>
          <li><Link to="/campus-life" onClick={handleMenuClose}>Campus Life</Link></li>
          <li><Link to="/contact" onClick={handleMenuClose}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;