import React from 'react';

function Sections() {
  return (
    <>
      <section id="about" className="section about">
        <div className="container">
          <h2>About the College</h2>
          <p>
            SDM Polytechnic was established in 2008 and offers 3-year, 6-semester Diploma
            courses in Civil Engineering, Computer Science, Electronics & Communication, and
            Mechanical Engineering.
          </p>
          <div className="cards">
            <div className="card">
              <h3>Unique Features</h3>
              <p>
                Steadfast commitment to innovation, critical thinking and global citizenship.
              </p>
            </div>
            <div className="card">
              <h3>Placement</h3>
              <p>
                Placement Cell enhances employability skills through pre-placement training.
              </p>
            </div>
            <div className="card">
              <h3>Library</h3>
              <p>
                The library plays a vital role in advancing knowledge and academic success.
              </p>
            </div>
            <div className="card">
              <h3>Alumni</h3>
              <p>
                Our alumni community forms an integral part of our institution's identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="campus" className="section campus">
        <div className="container">
          <h2>Campus Life</h2>
          <p>
            The journey is as important as the destination. Students explore dimensions of
            learning and experiences that are among our most unique features.
          </p>
          <a className="link" href="#">Read more</a>
        </div>
      </section>

      <section id="news" className="section news">
        <div className="container">
          <h2>Latest News</h2>
          <div className="news-grid">
            <article className="news-card">
              <h3>Industrial Visit to NITK Surathkal and GTTC Baikampady</h3>
              <span className="date">August 26, 2025</span>
              <p>The final-year Mechanical Engineering students visited NITK and GTTC.</p>
              <a className="link" href="#">Read More</a>
            </article>
            <article className="news-card">
              <h3>Industrial Visit to Siri Gramodyoga Samsthe</h3>
              <span className="date">August 26, 2025</span>
              <p>Final-year CSE students explored industry practices at Siri Gramodyoga.</p>
              <a className="link" href="#">Read More</a>
            </article>
            <article className="news-card">
              <h3>Hands-on Workshop on React JS</h3>
              <span className="date">August 23, 2025</span>
              <p>Two-day workshop on React JS and Modern Web Development.</p>
              <a className="link" href="#">Read More</a>
            </article>
          </div>
        </div>
      </section>

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


