import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const location = useLocation();

  const handleDepartmentsToggle = (e) => {
    e.preventDefault();
    setDepartmentsOpen(!departmentsOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <img src="/logo.jpg" alt="SDM Logo" className="logo" />
          <span>SDM Polytechnic, Ujire</span>
        </div>

        <ul className="menu">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={location.pathname === '/admission' ? 'active' : ''}>
            <Link to="/admission">Admission</Link>
          </li>
          <li className="has-sub">
            <a href="#departments" onClick={handleDepartmentsToggle}>Departments</a>
            <ul className={`submenu ${departmentsOpen ? 'open' : ''}`}>
              <li><Link to="/departments/civil">Civil Engineering</Link></li>
              <li><Link to="/departments/cse">Computer Science & Engineering</Link></li>
              <li><Link to="/departments/ece">Electronics & Communication</Link></li>
              <li><Link to="/departments/mechanical">Mechanical Engineering</Link></li>
            </ul>
          </li>
          <li className={location.pathname === '/campus-life' ? 'active' : ''}>
            <Link to="/campus-life">Campus Life</Link>
          </li>
          <li className={location.pathname === '/placement' ? 'active' : ''}>
            <Link to="/placement">Placement</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;