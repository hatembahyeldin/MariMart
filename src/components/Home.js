import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const wallpaper = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80";

  const backgroundStyle = {
    backgroundImage: `url("${wallpaper}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    zIndex: 1
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    padding: "0 20px"
  };

  const titleStyle = {
    fontSize: "4rem",
    marginBottom: "1rem",
    fontWeight: "bold",
    textShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)"
  };

  const subtitleStyle = {
    fontSize: "2rem",
    marginBottom: "2rem",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
  };

  const buttonStyle = {
    backgroundColor: "#FF6F61",
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1.5rem",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
    transition: "background-color 0.3s ease"
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Welcome to MariMart</h1>
        <p style={subtitleStyle}>Discover exclusive products at unbeatable prices.</p>
        <Link to="/products">
          <button
            style={buttonStyle}
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;