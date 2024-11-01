import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="header">
    <h1>LibroHub</h1>
    <input type="text" placeholder="Buscar" className="search-bar" />
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/carrito">🛒</Link>
    </nav>
  </header>
);

export default Header;
