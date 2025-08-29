import React from 'react';

function ECE() {
  return (
    <section className="section department">
      <div className="container">
        <h2>Electronics & Communication Engineering</h2>
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
            src="/electrical-power-system-studies.jpg"
            alt="Electronics and Communication"
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
          The ECE Department blends electronics, communication systems, and embedded technologies,
          preparing students for careers in modern electronics industries.
        </p>
      </div>
    </section>
  );
}

export default ECE;
