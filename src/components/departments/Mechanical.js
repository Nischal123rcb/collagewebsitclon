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
          Mechanical Engineering is the branch of engineering that focuses on the design, analysis, manufacturing, and maintenance of mechanical systems. It’s one of the broadest and oldest engineering disciplines, combining physics, mathematics, and material science to create everything from engines and robots to HVAC systems and industrial machinery.
        </p>
        <div class="me-subjects">
  <h2>Core Subjects in Mechanical Engineering</h2>
  <p>
    Whether you're studying ME or just exploring it, these foundational topics form the backbone of the discipline:
  </p>
  <ul>
    <li>
      <strong>Engineering Mechanics</strong> – Understand forces, motion, and equilibrium in physical systems to analyze mechanical behavior.
    </li>
    <li>
      <strong>Thermodynamics</strong> – Explore heat, energy conversion, and power generation in engines, turbines, and thermal systems.
    </li>
    <li>
      <strong>Fluid Mechanics</strong> – Study the behavior of liquids and gases in motion, essential for designing pumps, turbines, and hydraulic systems.
    </li>
    <li>
      <strong>Strength of Materials</strong> – Learn how materials respond to stress and strain, ensuring safe and efficient structural design.
    </li>
    <li>
      <strong>Machine Design</strong> – Design mechanical components and assemblies with considerations for strength, durability, and functionality.
    </li>
    <li>
      <strong>Manufacturing Technology</strong> – Dive into processes like casting, welding, machining, and modern techniques like 3D printing.
    </li>
    <li>
      <strong>Heat Transfer</strong> – Analyze conduction, convection, and radiation to optimize thermal systems and energy efficiency.
    </li>
    <li>
      <strong>Dynamics and Vibrations</strong> – Examine motion and oscillations in mechanical systems to improve performance and reduce wear.
    </li>
    <li>
      <strong>CAD/CAM</strong> – Use computer-aided design and manufacturing tools like AutoCAD and SolidWorks to model and produce components.
    </li>
    <li>
      <strong>Mechatronics</strong> – Integrate mechanical systems with electronics, sensors, and control systems for automation and robotics.
    </li>
  </ul>
</div>
      </div>
    </section>
  );
}

export default Mechanical;