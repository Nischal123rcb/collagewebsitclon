import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Contact Us</h3>
          <p>
            The Principal<br />
            SDM Polytechnic,<br />
            Ujire – 574 240, Belthangady Taluk, D.K., Karnataka, India
          </p>
          <p>
            <strong>Phone</strong> : 08256-236600, 9845893731, 9880724085
          </p>
          <p>
            <strong>Email</strong> : principal@sdmpolytechnic.in / office@sdmpolytechnic.in
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="list">
            <li><Link to="/gallery">Photo Gallery</Link></li>
            <li><Link to="https://app.sdmes.in/EERPV3.0/EAM/login.jsp?ConsID=SDMTI">Student Space</Link></li> {/* Link to Student component */}
            <li>
              <a 
                href="https://sdmpolytechnic.in/wp-content/uploads/2024/01/Mandatory-Disclosure.pdf" // Replace with actual URL
                target="_blank" 
                rel="noopener noreferrer"
              >
                AICTE Mandatory Disclosure
              </a>
            </li>
            <li>
              <a 
                href="https://sdmpolytechnic.in/wp-content/uploads/2025/03/EOA-Report-2025-2026.pdf" // Replace with actual URL
                target="_blank" 
                rel="noopener noreferrer"
              >
                EOA report 2025-26
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        © SDM Polytechnic. All Rights Reserved. | Powered by SDMES
      </div>
    </footer>
  );
}

export default Footer;


