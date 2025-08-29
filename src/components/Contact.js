import React from 'react';

function Contact() {
  return (
    <section className="contact-section" style={{ background: '#f8fafc', minHeight: '100vh', padding: '3rem 0' }}>
      {/* Contact Section Content - no outer box */}
      <h2 style={{ color: '#e53935', fontWeight: 'bold', fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem', textShadow: '2px 2px 4px #ccc' }}>
        Contact Us
      </h2>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="35" stroke="#ffb300" strokeWidth="4" fill="none" />
          <path d="M40 55c-7-4-13-10-17-17 2-2 4-4 6-6 1-1 3-1 4 0l3 3c1 1 1 3 0 4-1 1-2 2-3 3 3 4 7 7 11 9 1-1 2-2 3-3 1-1 3-1 4 0l3 3c1 1 1 3 0 4-2 2-4 4-6 6z" fill="#ffb300" />
        </svg>
      </div>
      <div style={{ color: '#4fc3f7', fontWeight: 'bold', fontSize: '2rem', textAlign: 'center', marginBottom: '1rem' }}>
        Sri Dharmasthala Manjunatheshwara Polytechnic
      </div>
      {/* Contact Info Cards Section */}
      <div style={{ background: '#f3f4f3', padding: '3rem 0', margin: '2rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: '3rem', flexWrap: 'nowrap' }}>
          {/* Call Us Card */}
          <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '3rem 2.5rem', minWidth: '340px', maxWidth: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="28" fill="#ffb300" />
                <path d="M35 48c-6-4-11-9-15-15 2-2 4-4 6-6 1-1 3-1 4 0l3 3c1 1 1 3 0 4-1 1-2 2-3 3 3 4 7 7 11 9 1-1 2-2 3-3 1-1 3-1 4 0l3 3c1 1 1 3 0 4-2 2-4 4-6 6z" fill="#333" />
              </svg>
            </div>
            <h2 style={{ color: '#455a64', fontWeight: 'bold', fontSize: '2.2rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>Call Us</h2>
            <div style={{ color: '#757575', fontSize: '1.18rem', marginBottom: '0.5rem', lineHeight: '2rem' }}>08256-236600,<br />9845893731, 9880724085</div>
          </div>
          {/* Email Card */}
          <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '3rem 2.5rem', minWidth: '340px', maxWidth: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="28" fill="#ffb300" />
                <rect x="22" y="28" width="26" height="16" rx="3" fill="#fff" stroke="#333" strokeWidth="2" />
                <polyline points="24,30 35,40 46,30" fill="none" stroke="#333" strokeWidth="2" />
              </svg>
            </div>
            <h2 style={{ color: '#455a64', fontWeight: 'bold', fontSize: '2.2rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>Email</h2>
            <div style={{ color: '#757575', fontSize: '1.18rem', marginBottom: '0.5rem', lineHeight: '2rem' }}>principal@sdmpolytechnic.in</div>
          </div>
          {/* Office Card */}
          <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '3rem 2.5rem', minWidth: '340px', maxWidth: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="28" fill="#ffb300" />
                <path d="M35 25a10 10 0 0 1 10 10c0 7-10 18-10 18s-10-11-10-18a10 10 0 0 1 10-10zm0 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#333" />
              </svg>
            </div>
            <h2 style={{ color: '#455a64', fontWeight: 'bold', fontSize: '2.2rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>Office</h2>
            <div style={{ color: '#757575', fontSize: '1.18rem', marginBottom: '0.5rem', lineHeight: '2rem' }}>The Principal,<br />SDM Polytechnic<br />Ujire</div>
          </div>
        </div>
      </div>

      {/* Embedded Google Maps - moved above contact info box */}
      <div style={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e0e0e0',
        minHeight: '250px',
        margin: '2rem auto',
        maxWidth: '1400px',
      }}>
        <iframe
          src="https://www.google.com/maps?q=12.991028,75.342139&z=15&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map - Ujire, Karnataka"
        />
      </div>

      {/* Reference Design and Content Section */}
      <div style={{ background: '#18191b', color: '#fff', padding: '3rem 2rem', borderRadius: '12px', maxWidth: '1400px', margin: '2rem auto 0 auto', boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}>
        <h2 style={{ color: '#fff', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Connect us</h2>
        <div style={{ fontSize: '1.25rem', marginBottom: '2.5rem', lineHeight: '2.2rem' }}>
          SDM Educational Society,<br />
          Ujire – 574240, D.K., Karnataka, India<br />
          <span style={{ color: '#e53935', fontStyle: 'italic', fontWeight: 'bold' }}>Tel:</span> 08256 – 236225, 236488
          <span style={{ color: '#e53935', fontStyle: 'italic', fontWeight: 'bold', marginLeft: '1.5rem' }}>Fax:</span> 236220<br />
          <span style={{ color: '#e53935', fontStyle: 'italic', fontWeight: 'bold' }}>Website:</span> <span style={{ color: '#fff', textDecoration: 'underline' }}>sdmesociety.in</span>
        </div>
        <div style={{ fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: '2.2rem' }}>
          The Principal<br />
          Sri Dharmasthala Manjunatheshwara Polytechnic<br />
          Ujire – 574 240, D.K., Karnataka, India<br />
          <span style={{ color: '#e53935', fontStyle: 'italic', fontWeight: 'bold' }}>Phone :</span> 08256-236600, 9845893731, 9880724085<br />
          <span style={{ color: '#e53935', fontStyle: 'italic', fontWeight: 'bold' }}>Email :</span> principal@sdmpolytechnic.in<br />
          office@sdmpolytechnic.in
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', color: '#888', fontSize: '1rem' }}>
        &copy; SDM Polytechnic. All Rights Reserved.<br />
        Powered by <a href="https://www.sdmesociety.in/" style={{ color: '#4fc3f7', textDecoration: 'none', fontWeight: 'bold' }}>SDMES</a>
      </div>
    </section>
  );
}

export default Contact;
