import React from 'react';
import ReactLogo from '../img/logo.svg';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav nav-logo-container">
          <img src={ReactLogo} className="nav-logo" />
          <h2>ReactFacts</h2>
        </div>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
