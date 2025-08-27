import React from 'react';

function Admission() {
  return (
    <section id="admission" className="section admission">
      <div className="container">
        <h2>Admission</h2>
        <p>
          SDM Polytechnic offers 3-year (6-semester) Diploma programs. Admissions are as per
          government and AICTE guidelines.
        </p>

        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Branch</th>
                <th>Duration</th>
                <th>Eligibility</th>
                <th>Intake</th>
              </tr>
            </thead>
            <tbody>
              <tr id="dept-civil">
                <td>Civil Engineering</td>
                <td>3 Years (6 Semesters)</td>
                <td>10th/SSLC or equivalent, as per DTE/AICTE norms</td>
                <td>As notified</td>
              </tr>
              <tr id="dept-cse">
                <td>Computer Science & Engineering</td>
                <td>3 Years (6 Semesters)</td>
                <td>10th/SSLC or equivalent, as per DTE/AICTE norms</td>
                <td>As notified</td>
              </tr>
              <tr id="dept-ece">
                <td>Electronics & Communication Engineering</td>
                <td>3 Years (6 Semesters)</td>
                <td>10th/SSLC or equivalent, as per DTE/AICTE norms</td>
                <td>As notified</td>
              </tr>
              <tr id="dept-mech">
                <td>Mechanical Engineering</td>
                <td>3 Years (6 Semesters)</td>
                <td>10th/SSLC or equivalent, as per DTE/AICTE norms</td>
                <td>As notified</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="admission-notes">
          <ul className="list">
            <li>Lateral entry to 2nd year for eligible ITI/PUC (Science) candidates.</li>
            <li>Reservations and fees as per Government/Institution norms.</li>
            <li>For detailed schedule and application forms, contact the office.</li>
          </ul>
        </div>

        <div style={{ marginTop: 16 }}>
          <a href="#contact" className="btn">Enquire / Apply</a>
        </div>
      </div>
    </section>
  );
}

export default Admission;


