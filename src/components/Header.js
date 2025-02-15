import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    backgroundColor: "#6C4AB6",
    padding: "15px 30px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
    listStyle: "none"
  };

  return (
    <header style={headerStyle}>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          MariMart
        </Link>
      </div>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>Home</Link>
          </li>
          <li>
            <Link to="/products" style={{ textDecoration: "none", color: "#fff" }}>Products</Link>
          </li>
          <li>
            <Link to="/cart" style={{ textDecoration: "none", color: "#fff" }}>Cart</Link>
          </li>
          <li>
            <Link to="/favorites" style={{ textDecoration: "none", color: "#fff" }}>Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;