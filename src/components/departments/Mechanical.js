import React from 'react';

function Mechanical() {
  return (
    <section className="section department">
      <div className="container">
        <h2>Mechanical Engineering</h2>
        <div
          className="dept-hero"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <img
            src="/images (1).jpg"
            alt="Mechanical Engineering"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
              objectFit: 'cover',
              minHeight: '320px',
              minWidth: '480px',
              background: '#eee',
            }}
          />
        </div>
        <p>
          The Mechanical Engineering Department covers manufacturing, design, thermodynamics,
          and maintenance with industry-oriented training and projects.
        </p>
      </div>
    </section>
  );
}

export default Mechanical;