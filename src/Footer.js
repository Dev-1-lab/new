import React from "react";

const Footer = () => {
  const footerStyle = {
    bottom: "0",
    width: "100%",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    padding: "10px 0",
    marginTop: "35px",
    position: "absolute",
  };
  return (
    <div style={{ minHeight: "80vh", position: "relative" }}>
      <main style={{ paddingBottom: "60px" }}>
        {/* Your page content here */}
      </main>
      <footer className="bg-light text-center py-3" style={footerStyle}>
        <p>&copy; 2024 Cyberspace by Iqboljon | All rights are reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
