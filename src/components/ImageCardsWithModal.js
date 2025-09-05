import React, { useState } from 'react';

const cards = [
  {
    img: '/boyshostel.jpg',
    header: 'Accommodation',
    desc: 'Separate hostel facility for boys and girls, with bath attached rooms and hygienic food, is available within the campus. The hostel inmates are provided with a gym facility, playground, yoga/prayer hall, reading room, medical care, security, etc.'
  },
  {
    img: '/Cultural2 (1).jpg',
    header: 'Cultural',
    desc: 'At SDM Polytechnic we embrace cultural diversity as a cornerstone of learning, fastening global perspectives and intercultural understanding. Our campus is a vibrant mosaic of cultures, where every tradition and background finds a welcoming home.'
  },
  {
    img: '/planning.jpg',
    header: 'Clubs',
    desc: 'The students of SDM Polytechnic have hobby clubs, technical clubs and associations active at department levels. To name some: Coding club, ECE technical club, etc.'
  }
];

function ImageCardsWithModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const prevCard = () => setActiveIdx((activeIdx - 1 + cards.length) % cards.length);
  const nextCard = () => setActiveIdx((activeIdx + 1) % cards.length);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '3rem 0' }}>
      <button
        onClick={prevCard}
        style={{ background: 'none', border: 'none', fontSize: 32, color: '#888', cursor: 'pointer', marginRight: 16 }}
        aria-label="Previous"
      >
        &#60;
      </button>

      <div
        className="campuslife-card"
        style={{
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '2rem 1rem',
          maxWidth: '400px',
          textAlign: 'center',
          cursor: 'pointer',
          width: '400px'
        }}
      >
        <img
          src={cards[activeIdx].img}
          alt={cards[activeIdx].header}
          style={{
            width: '100%',
            height: '220px',
            objectFit: 'cover',
            borderRadius: '12px',
            marginBottom: '1.5rem'
          }}
          onClick={openModal}
        />
        <h2 style={{ color: '#4fc3f7', fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>
          {cards[activeIdx].header}
        </h2>
      </div>

      <button
        onClick={nextCard}
        style={{ background: 'none', border: 'none', fontSize: 32, color: '#888', cursor: 'pointer', marginLeft: 16 }}
        aria-label="Next"
      >
        &#62;
      </button>

      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '2rem',
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={cards[activeIdx].img}
              alt={cards[activeIdx].header}
              style={{
                width: '400px',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '1.5rem'
              }}
            />
            <h2
              style={{
                color: '#4fc3f7',
                fontWeight: 'bold',
                fontSize: '2rem',
                margin: '1.5rem 0 1rem 0',
                textAlign: 'center'
              }}
            >
              {cards[activeIdx].header}
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: '#333',
                fontSize: '1.1rem',
                marginBottom: '1rem',
                maxWidth: '500px'
              }}
            >
              {cards[activeIdx].desc}
            </p>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: '#e53935',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                fontSize: 20,
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageCardsWithModal;