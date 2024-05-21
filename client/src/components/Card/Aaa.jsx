import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationMenu() {
  const location = useLocation();

  // Function to determine if a given link is active
  const isActive = (link) => {
    return link === location.pathname;
  };

  return (
    <nav>
      <ul>
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive('/about') ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li className={isActive('/services') ? 'active' : ''}>
          <Link to="/services">Services</Link>
        </li>
        <li className={isActive('/contact') ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;