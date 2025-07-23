import React, { useState } from 'react';
import Profile from './Profile';
function Github() {
  const [hovered, setHovered] = useState(null);

  const links = ["Home", "Experience", "Blogs", "Projects", "Connect"];

  return (
    <div style={{ height: "130dvh", width: "100dvw", backgroundColor: "black", overflowX: "hidden" }}>
      <br />
      <br />
      <div style={{ height: "5vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ color: "#00ff99" }}>would you like to collab with me or hire me</h1>
      </div>
      <br />
      <div style={{
        height: "1px",
        width: "90%",
        borderTop: "1px solid gray",
        margin: "0 auto",
        boxShadow: "0 10px 40px 2px #00ff99"
      }}></div>

      <div style={{
        height: "4%",
        width: "50%",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        position: "relative",
        left: "25%",
        top: "3vh",
        alignItems: "center"
      }}>
        {links.map((item, index) => (
          <h4
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              cursor: "pointer",
              textDecoration: hovered === index ? "underline" : "none",
              transition: "text-decoration 0.2s ease"
            }}
          >
            {item}
          </h4>
        ))}
      </div>
      <div style={{
        height: "100dvh",
        width: "50%",
        color: "white",
        position: "relative",
        left: "25%",
        top: "3vh",
        border:"1px solid gray",
        borderRadius:"2vh",
        
      }}>
        <Profile />
      </div>
    </div>
  );
}

export default Github;