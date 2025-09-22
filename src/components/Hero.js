import React from 'react';

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: "url('/carousel-1-1024x576.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="hero-content"
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "2rem 3rem",
          borderRadius: "12px",
          color: "#fff",
          textAlign: "center",
          width: "100%",
          maxWidth: "900px"
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>SDM Polytechnic, Ujire</h1>
        <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
          Fostering innovation, critical thinking, and global citizenship.
        </p>
      </div>
    </section>
  );
}

export default Hero;


