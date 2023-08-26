import React from 'react';
import Navigation from './Navigation';
import logo from '../assets/KV.png';
import './Header.css';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="kv logo" />
      <Navigation />
    </header>
  );
}

export default Header;
