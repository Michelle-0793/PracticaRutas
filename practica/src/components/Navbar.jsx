//Barra de navegación
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Archivo css

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/register" className="nav-link">Register</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  );
}

export default Navbar;