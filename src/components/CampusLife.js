import React from 'react';
import ImageCardsWithModal from './ImageCardsWithModal';
function CampusLife() {
  return (
    <div>
      <section className="campus-life" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Campus Life</h2>

        {/*  Hostel */}
        <div className="section-row">
          <img src="/boyshostel.jpg" alt="Boys Hostel" className="section-img" />
          <div className="section-text">
            <h3> Hostel</h3>
            <p>
              At SDM Polytechnic, we understand that the college experience extends far beyond the classroom. Our campus is not just a place of learning; it’s a vibrant community where lifelong memories are forged, friendships are made, and futures take shape. We take immense pride in our diverse and inclusive campus life, offering students a rich tapestry of opportunities to grow, explore, and connect.With state-of-the-art facilities, green spaces, and a host of support services, we’ve created an environment where you can thrive academically, socially, and personally. Our commitment to your holistic development is unwavering, ensuring that you leave SDMP not only with an education but also with a treasure trove of experiences and life skills.
            </p>
          </div>
        </div>

        {/* Library */}
        <div className="section-row reverse">
          <img src="/library.png" alt="Library" className="section-img" />
          <div className="section-text">
            <h3>Library</h3>
            <p>
              Library is a Centre and storehouse of knowledge. A library plays a very important role in promoting the progress of knowledge. Libraries are backbone of any civilized society and heart of any academic institutions. The collection of SDM Polytechnic library is more than 6,000 books including general reference books, donated books, literature books, text books, reference books, encyclopedias, and general knowledge books, which are available for students to access throughout the year.
            </p>
            <e>Library is fully automated by EERPMS, in house developed software for the purpose of data entry, information storage, retrieval, circulation, stock verification, OPAC, report generation, student’s ID scanning, bar coding of books, etc. The library follows closed access system. Books are classified according to the Dewey decimal classification and arranged on the shelves according to class number. Seating capacity of library is for 120 students at a time. The library is kept open from 8.30 A.M. to 5.30 P.M.</e>
          </div>
        </div>

        {/* Accommodation, Cultural, Clubs - Three Column Card Layout */}
          {/** Accommodation, Cultural, Clubs - Three Column Card Layout with Modal and Carousel **/}
          <ImageCardsWithModal />

        {/* Sports */}
        <div className="section-stack">
          <h3>Sports</h3>
          <img
            src="/SDM-Sports-24-scaled-1-1024x682.jpg"
            alt="Sports"
            className="section-img-wide"
          />
          <ul>
            <li>The Institute has Outdoor and Indoor stadiums apart from regular sports utilities.</li>
            <li>Students are provided with physical trainers in sports, games and athletics.</li>
            <li>The college teams and students regularly participate in various National, State and University Level competitions.</li>
            <li>Inter-class and Inter-departmental sports events are regularly conducted in the college.</li>
            <li>Sports and Fitness facilities, Football/Basketball courts, Gymnasium and Swimming pool are also available in the campus.</li>
            <li>There is a sports special hour for students in the academic time table to encourage students in sports activities.</li>
          </ul>
        </div>

        {/* Anti-Ragging */}
        <div className="section-stack">
          <h3>Anti Ragging</h3>
          <img
            src="/Anti-Ragging-copy-r1tg0kzji4nc47iwviuy8ohrqovwg13qmcxc892k40.jpg"
            alt="Anti Ragging"
            className="section-img-wide"
          />
          <p>
            The institute has zero tolerance towards ragging. In accordance with the regulations of the competent authority...
          </p>
          <h4>Anti-ragging committee</h4>
          <ul>
            <li>Abraham M Kl – Chairman</li>
            <li>M Narayana Rao – Agriculturist</li>
            <li>Dr. Ashok Kumar T – Teaching</li>
            <li>Santhosha – Teaching</li>
            <li>Shreyank Jain – Teaching</li>
            <li>Mary Smitha – Teaching</li>
            <li>Amaresh Hebbar – Teaching</li>
            <li>Varadaraj A S – Teaching</li>
            <li>Yashashwini – Student</li>
            <li>Yukthesh – Student</li>
          </ul>
        </div>
        {/* Anti-ragging Helpline Section */}
        <div className="helpline-section" style={{ textAlign: 'center', margin: '5rem 0 2rem 0' }}>
          <h2 style={{
            color: '#e53935',
            fontWeight: 'bold',
            fontSize: '3rem',
            textShadow: '3px 3px 8px #bbb',
            marginBottom: '2.5rem',
            letterSpacing: '1px',
          }}>
            Anti-ragging Helpline
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="45" cy="45" r="38" stroke="#ffb300" strokeWidth="4" fill="none" />
              <path d="M45 62c-8-5-15-12-20-20 2-2 5-5 7-7 1-1 4-1 5 0l3 3c1 1 1 4 0 5-1 1-2 2-3 3 4 5 8 8 13 11 1-1 2-2 3-3 1-1 4-1 5 0l3 3c1 1 1 4 0 5-2 2-5 5-7 7z" fill="#ffb300" />
            </svg>
          </div>
          <div style={{
            color: '#4fc3f7',
            fontWeight: 'bold',
            fontSize: '2.2rem',
            marginBottom: '1.2rem',
            letterSpacing: '0.5px',
          }}>
            Institute
          </div>
          <div style={{
            color: '#757575',
            fontSize: '1.3rem',
            marginBottom: '1.5rem',
            letterSpacing: '0.5px',
          }}>
            08256-236600 / 9845893731
          </div>
        </div>
      </section>
    </div>
  );
}

export default CampusLife;