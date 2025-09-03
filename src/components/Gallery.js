import React, { useState } from 'react';

const galleryImages = [
  'gallary/Accommodation-400x400.jpg',
  'gallary/Arboretum-scaled-1-400x400.jpg',
  'gallary/Arboretum2-scaled-1-400x400.jpg',
  'gallary/carousel-1-400x400.jpg',
  'gallary/civil-400x396.jpg',
  'gallary/IMG_5108-1024x683-1-400x400.jpg',
  'gallary/IMG-20220625-WA0002-400x400.jpg',
  'gallary/IMG-20221103-WA0027-400x400.jpg',
  'gallary/me-project_1-scaled-1-400x400.jpg',
  'gallary/me-project_2-400x400.jpg',
  'gallary/SPC_7206-copy-scaled-1-400x400.jpg',
  'gallary/SPC_7229-copy-scaled-1-400x400.jpg',
  'gallary/VOLLEYBALL-400x400.jpeg'
];

export default function Gallery() {
  const [openIdx, setOpenIdx] = useState(null);

  const handleOpen = idx => setOpenIdx(idx);
  const handleClose = () => setOpenIdx(null);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Photo Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="gallery-item" onClick={() => handleOpen(idx)}>
            <img
              src={process.env.PUBLIC_URL + '/' + img}
              alt={`Gallery ${idx + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
      {openIdx !== null && (
        <div className="gallery-modal" onClick={handleClose}>
          <img
            src={process.env.PUBLIC_URL + '/' + galleryImages[openIdx]}
            alt={`Gallery ${openIdx + 1}`}
            className="modal-image"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
