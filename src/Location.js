import React from "react";
import img from "../src/images/cyber.jpg";
function Location() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Finding location by using Python3</h3>

      <img
        src={img}
        alt="cyberspace"
        style={{
          display: "block",
          margin: "0 auto",
          height: "600px",
          width: "600px",
        }}
      />
    </div>
  );
}

export default Location;
