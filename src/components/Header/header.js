import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { GiSpellBook, GiWizardStaff, GiDragonHead, GiLockpicks } from "react-icons/gi";
import "./header.css";


function Header() {
    return (
      <div className="header-container">
        <div className="top-bar"></div>
        <nav className="nav-bar">
          <Nav.Link href="/" className="nav-link">
            <GiDragonHead className="icon" /> Home
          </Nav.Link>
          <Nav.Link href="#/CharacterCreate" className="nav-link">
            <GiWizardStaff className="icon" /> Create Character
          </Nav.Link>
          <Nav.Link href="#/ViewCharacters" className="nav-link">
            <GiSpellBook className="icon" /> View Characters
          </Nav.Link>
          <Nav.Link href="#/Tools" className="nav-link">
            <GiLockpicks className="icon" /> Game Tools
          </Nav.Link>
          <Nav.Link href="#/Login" className="nav-link">
            Login
          </Nav.Link>
        </nav>
    </div>
    );
}
    
export default Header;