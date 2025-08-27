import React from 'react';

function Placement() {

  return (
    <section className="section">
      <div className="container">
        <h2>Placement</h2>


        <h3>About Placement</h3>
        <p>
          SDM Polytechnic provides opportunities for students to enhance their employability skills.
          To nurture the capacity of candidates, we conduct pre-placement training. Several companies
          visit the college and hire students every academic year.
        </p>

        <h3>Attributes of The Placement Cell</h3>
        <ul className="list">
          <li>Training and Placement Cell fostering innovation and entrepreneurship.</li>
          <li>Exclusive campus and pooled campus opportunities in the Mangalore region.</li>
          <li>Placement training, communication classes, and career guidance programs.</li>
          <li>Industry interactions and personality development programs.</li>
        </ul>

        <h3>Preparing students for the professional zone</h3>
        <p>
          The institute has MoUs with reputed companies and trainers and offers career training for
          students at various levels of their course.
        </p>

        <h3>Student Preparations</h3>
        <ul className="list">
          <li>Practice aptitude questions consistently.</li>
          <li>Solve previous year exam questions and mock samples.</li>
          <li>Read interview experiences to understand hiring processes.</li>
          <li>Practice mock interviews to identify and improve weak areas.</li>
          <li>Improve communication skills.</li>
        </ul>

        <h3>Recruiting Companies</h3>
        <p>
          The institute supports visiting companies at every stage of the recruitment process and is
          equipped for pre-placement talks, written tests, group discussions, and interviews.
        </p>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Bosch Automotive Electronics India Pvt Ltd.</td><td>AO Smith</td></tr>
              <tr><td>TIEI</td><td>Centum Electronics</td></tr>
              <tr><td>Cosmic Circuits</td><td>Toyota kirloskar</td></tr>
              <tr><td>IWAVE</td><td>Tetcos</td></tr>
              <tr><td>HCL Infosystems</td><td>L&T</td></tr>
              <tr><td>Regen</td><td>TATA Motors</td></tr>
              <tr><td>JSW Steel</td><td>Bharathi Shipyard</td></tr>
              <tr><td>Aarbee Structures</td><td>Diya systems</td></tr>
              <tr><td>Winman Software</td><td>Qualcomm</td></tr>
              <tr><td>Mahindra Satyam</td><td>Bright Electronics</td></tr>
              <tr><td>Radiant Interconnect Solution</td><td>RS GLOBAL</td></tr>
              <tr><td>Hinduja Global Solution (HGS)</td><td>MAHLE Behr India Private Limited</td></tr>
              <tr><td>Smile Electronic, Bangalore</td><td>Toyoda Gosei South India Pvt Ltd</td></tr>
              <tr><td>ACE Micromatic Group</td><td>Mylan Laboratories Limited</td></tr>
              <tr><td>Geodesic Techniques</td><td>thyssenkrupp Elevator India Pvt Ltd</td></tr>
              <tr><td>TVM Signalling and Transportation Systems Pvt. Ltd.</td><td></td></tr>
            </tbody>
          </table>
        </div>

        <h3>Contact Details of Placement Officer</h3>
        <div className="officer">
          <img
            src="/Amaresh-Hebbar_EC-240x300.jpg"
            alt="Amaresha Hebbar A"
            onError={(e) => { e.currentTarget.src = '/logos/placeholder.svg'; }}
          />
          <div className="officer-details">
            <p>
              <strong>Amaresha Hebbar A</strong><br />
              Placement Officer, SDM Polytechnic, Ujire<br />
              Ph: 9741485608<br />
              Email: sdmti.placement@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Placement;


