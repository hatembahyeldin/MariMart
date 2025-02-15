import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#5A3E91",
    padding: "15px 30px",
    color: "#FFFFFF",
    textAlign: "center"
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} MariMart. All rights reserved. Hatem Almanzalawy.</p>
    </footer>
  );
};

export default Footer;