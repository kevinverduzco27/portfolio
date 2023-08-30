import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/aboutme">| About Me |</Link></li>
        <li><Link to="/portfolio">| Portfolio |</Link></li>
        <li><Link to="/contact">| Contact Me |</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
