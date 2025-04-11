import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src="/logo-transparent.png" alt="Logo" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/music" className="nav-link">Musique</Link>
          <Link to="/news" className="nav-link">News</Link>
          <Link to="/media" className="nav-link">Media</Link>
          <Link to="/about" className="nav-link">Bio</Link>
          <Link to="/contact" className="lets-talk-button">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
