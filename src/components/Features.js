import React from 'react';

const features = [
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#2196f3" strokeWidth="2" viewBox="0 0 64 64">
        <path d="M32 8 L40 24 H24 L32 8 Z" />
        <rect x="20" y="24" width="24" height="24" rx="4" />
      </svg>
    ),
    title: "Unique Features",
    desc: "A standard feature of our college is the steadfast commitment to fastening innovation, critical thinking and global citizenship among our diverse student body."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#2196f3" strokeWidth="2" viewBox="0 0 64 64">
        <rect x="12" y="20" width="40" height="28" rx="4" />
        <circle cx="32" cy="34" r="6" />
        <path d="M32 40 V48" />
      </svg>
    ),
    title: "Placement",
    desc: "Placement Cell provides opportunity to enhance the employability skills and to nurture the capacity of candidates by doing pre-placement training."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#2196f3" strokeWidth="2" viewBox="0 0 64 64">
        <rect x="16" y="16" width="32" height="32" rx="4" />
        <path d="M24 32 L32 40 L40 32" />
        <circle cx="32" cy="28" r="4" />
      </svg>
    ),
    title: "Library",
    desc: "The college library plays a very important role in promoting the advancement of knowledge & acts as the backbone of a civilized society & the heart of the educational institution."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#2196f3" strokeWidth="2" viewBox="0 0 64 64">
        <rect x="12" y="20" width="40" height="24" rx="4" />
        <path d="M12 20 L32 36 L52 20" />
        <circle cx="32" cy="44" r="2" />
      </svg>
    ),
    title: "Alumni",
    desc: "Our alumni community forms an integral part of our institution's identity and success. We take immense pride in their accomplishments."
  }
];

function Features() {
  return (
    <section style={{ background: "#fafafa", padding: "2rem 0" }}>
      <div style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        gap: "1rem",
        maxWidth: "1100px",
        margin: "0 auto",
        overflowX: "auto",
        padding: "0 0.5rem"
      }}>
        {features.map((feature, idx) => (
          <div key={idx} style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            padding: "1.2rem 1rem",
            minWidth: "220px",
            maxWidth: "220px",
            textAlign: "center",
            minHeight: "260px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div style={{ marginBottom: "1rem" }}>{feature.icon}</div>
            <h3 style={{ fontWeight: "bold", fontSize: "1.1rem", marginBottom: "0.7rem" }}>{feature.title}</h3>
            <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.5" }}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;