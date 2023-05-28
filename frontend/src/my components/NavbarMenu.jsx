import React from "react";
import '../assets/css/NavbarMenu.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarMenu = () => {
  return (
    <nav id="nav">
      <div class="nav left">
        <span class="gradient skew"><h1 class="logo un-skew"><a href="#home">VITcompanion</a></h1></span>
        <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
      </div>
      <div class="nav right">
        <a href="#about" class="nav-link"><span class="nav-link-span"><span class="u-nav">Events</span></span></a>
        <a href="#user" class="nav-link"><span class="nav-link-span"><span class="u-nav"><span class="material-symbols-outlined">account_circle</span></span></span></a>
      </div>
    </nav>
  );
};

export default NavbarMenu;