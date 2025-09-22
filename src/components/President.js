import React from 'react';

function President() {
  return (
    <section style={{ background: "#fff", padding: "4rem 0" }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "3rem"
      }}>
        <div style={{ flex: "1 1 350px", minWidth: "320px", textAlign: "center" }}>
          <img
            src="/president.jpg" // Place your image as public/president.jpg
            alt="President Dr. D.Veerendra Heggade"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "10px",
              objectFit: "cover"
            }}
          />
        </div>
        <div style={{ flex: "2 1 400px", minWidth: "320px" }}>
          <p style={{
            letterSpacing: "2px",
            color: "#888",
            fontWeight: "bold",
            marginBottom: "0.5rem"
          }}>PRESIDENT</p>
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem"
          }}>Dr. D.Veerendra Heggade</h2>
          <p style={{ color: "#444", fontSize: "1.15rem", lineHeight: "1.8" }}>
            Dharmaadhikari, Reformer, Educationist, Philosopher and Philanthropist, Dr. D. VeerendraHeggade is a multidimensional personality. What truly defines Dr. Heggade’s contribution is his determined and consistent service to the nation. As the president of the SDME Society, he is the guiding spirit and driving force behind the institution. Most importantly, he has shown that one individual has the potential to change and evolve himself as a social reformer in a nation of one billion. And rightfully, Dr. VeerendraHeggade was awarded the second highest civilian award of India, Padma Vibhushan in 2015.
          </p>
        </div>
      </div>
    </section>
  );
}

export default President;