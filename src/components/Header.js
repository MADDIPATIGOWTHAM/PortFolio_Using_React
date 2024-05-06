import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header bg-greenishyellow text-greenishyellow">
      <div className="container">
        <h1 className="text-shadow-greenishyellow">Gowtham Maddipati</h1>
        <nav>
          <p>FULL STACK WEB DEVELOPER</p>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#footer">Contact</a></li>
            <li><a href="#exp">Experience</a></li>
            <li><a href="#edu">Education</a></li>
            
            <li><a href="#skills">Skills</a></li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;