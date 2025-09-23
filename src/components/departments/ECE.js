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
         Electronics and Communication Engineering is the study of electronic devices, circuits, communication systems, and signal processing. It blends hardware and software to enable technologies like smartphones, satellites, IoT, and wireless networks. ECE engineers design and optimize systems that transmit, receive, and process information efficiently.

        </p>
        <div class="ece-subjects">
  <h2> Core Subjects in Electronics and Communication Engineering</h2>
  <p>
    Whether you're diving into ECE or just exploring it, these foundational topics form the backbone of the discipline:
  </p>
  <ul>
    <li>
      <strong>Electronic Devices and Circuits</strong> – Understand semiconductors, diodes, transistors, and amplifiers to build and analyze basic electronic circuits.
    </li>
    <li>
      <strong>Digital Electronics</strong> – Learn logic gates, flip-flops, counters, and digital system design for modern computing and embedded systems.
    </li>
    <li>
      <strong>Analog Circuits</strong> – Explore operational amplifiers, filters, and signal conditioning for audio, instrumentation, and control applications.
    </li>
    <li>
      <strong>Signals and Systems</strong> – Analyze and process continuous and discrete signals for communication, control, and signal enhancement.
    </li>
    <li>
      <strong>Communication Systems</strong> – Study modulation techniques, transmission protocols, and signal reception for wired and wireless communication.
    </li>
    <li>
      <strong>Electromagnetic Fields</strong> – Dive into wave propagation, antenna design, and microwave engineering for high-frequency applications.
    </li>
    <li>
      <strong>Microprocessors and Microcontrollers</strong> – Program and interface embedded systems using low-level languages and hardware control.
    </li>
    <li>
      <strong>VLSI Design</strong> – Design integrated circuits and chip-level architecture for compact, high-performance electronics.
    </li>
    <li>
      <strong>Control Systems</strong> – Implement feedback mechanisms, analyze system stability, and automate dynamic processes.
    </li>
    <li>
      <strong>Wireless and Optical Communication</strong> – Explore mobile networks, fiber optics, and satellite communication for high-speed data transfer.
    </li>
  </ul>
</div>
      </div>
    </section>
  );
}

export default ECE;
