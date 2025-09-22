import React from 'react';
import { Link } from 'react-router-dom'; // Optional: Only if you're using React Router

function Sections() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="section about">
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: "2rem"
          }}
        >
          <div style={{ flex: "2 1 350px", minWidth: "300px" }}>
            <h2
              style={{
                letterSpacing: "2px",
                color: "#888",
                fontWeight: "bold",
                fontSize: "1rem"
              }}
            >
              ABOUT
            </h2>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem"
              }}
            >
              SDM Polytechnic
            </h1>
            <p
              style={{
                color: "#444",
                fontSize: "1.15rem",
                lineHeight: "1.8"
              }}
            >
              Dharmaadhikari, Reformer, Educationist, Philosopher and Philanthropist,
              Dr. D. Veerendra Heggade is a multidimensional personality. What truly
              defines Dr. Heggade’s contribution is his determined and consistent
              service to the nation. As the president of the SDME Society, he is the
              guiding spirit and driving force behind the institution. Most
              importantly, he has shown that one individual has the potential to change
              and evolve himself as a social reformer in a nation of one billion. And
              rightfully, Dr. Veerendra Heggade was awarded the second highest civilian
              award of India, Padma Vibhushan in 2015.
            </p>
                      <Link to="/about" >read more</Link>
            
          </div>
          <div
            style={{
              flex: "1 1 300px",
              minWidth: "260px",
              textAlign: "center"
            }}
          >
                    <div style={{ flex: "1 1 350px", minWidth: "320px", textAlign: "center" }}>

            <img
              src="/carousel-1-1024x576.jpg"
              alt="SDM Polytechnic Building"
              style={{
                width: "100%",
                maxWidth: "420px",
                borderRadius: "10px",
                objectFit: "cover"
              }}
            />
                          </div>

          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section id="campus" className="section campus">
        <div className="container">
          <h2>Campus Life</h2>
          <p>
            The journey is as important as the destination. Students explore dimensions
            of learning and experiences that are among our most unique features.
          </p>
          
          <Link to="/campus-life" >read more</Link>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="section news">
        <div className="container">
          <h2>Latest News</h2>
          <div className="news-grid">
            <article className="news-card">
              <h3>Industrial Visit to NITK Surathkal and GTTC Baikampady</h3>
              <span className="date">August 26, 2025</span>
              <p>
                The final-year Mechanical Engineering students visited NITK and GTTC.
              </p>
            </article>
            <article className="news-card">
              <h3>Industrial Visit to Siri Gramodyoga Samsthe</h3>
              <span className="date">August 26, 2025</span>
              <p>
                Final-year CSE students explored industry practices at Siri Gramodyoga.
              </p>
            </article>
            <article className="news-card">
              <h3>Hands-on Workshop on React JS</h3>
              <span className="date">August 23, 2025</span>
              <p>Two-day workshop on React JS and Modern Web Development.</p>
             
            </article>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section achievements">
        <div className="container">
          <h2>Achievements</h2>
          <ul className="list">
            <li>Shaheer Anas clinches Gold in State-Level Karate Competition</li>
            <li>Plastic Roofing Tiles project won 3rd prize in South India Exhibition</li>
            <li>Interlocks using Waste Plastic and Sand won State Level 1st Prize</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Sections;