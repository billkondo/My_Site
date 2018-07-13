import React from 'react';

const Logo = () => (
  <div id="logo">
    BK
  </div>
);

const Theme = ({ theme }) => (
  <div id="theme-button">
    {theme && <i className="fas fa-lightbulb" />}
    {!theme && <i className="far fa-lightbulb" />}
  </div>
);

const Github = () => (
  <div id="github-link">
    <a href="https://github.com/billkondo" target="_blank"> <i className="fab fa-github" /> </a>
  </div>
);

const Header = () => (
  <div id="header">
    <Logo />
    <Theme />  
    <Github /> 
  </div>
);

export default Header;