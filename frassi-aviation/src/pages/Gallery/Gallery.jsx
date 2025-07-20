import React, { useState } from 'react';
import './Gallery.scss';

import img1 from '../../assets/galeria1.jpg';
import img2 from '../../assets/galeria2.jpg';
import img3 from '../../assets/galeria3.jpg';
import img4 from '../../assets/galeria4.jpg';
import img5 from '../../assets/galeria5.jpg';
import img6 from '../../assets/galeria6.jpg';
import img7 from '../../assets/galeria7.jpg';
import img8 from '../../assets/galeria8.jpg';
import img9 from '../../assets/galeria9.jpg';

const images = [
  { src: img1, desc: 'Tail building' },
  { src: img2, desc: 'Bottom installation and painting' },
  { src: img3, desc: 'Engine swapping' },
  { src: img4, desc: 'Our clothes' },
  { src: img5, desc: 'Bottom installation' },
  { src: img6, desc: 'Wing riveting' },
  { src: img7, desc: 'Technical inspection' },
  { src: img8, desc: 'Cargo transport' },
];

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [imageAspectRatios, setImageAspectRatios] = useState({});

  const handleImageLoad = (index, event) => {
    const img = event.target;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    
    // Determine aspect ratio class based on actual image dimensions
    let aspectClass = 'square';
    if (aspectRatio > 1.3) {
      aspectClass = 'landscape';
    } else if (aspectRatio < 0.8) {
      aspectClass = 'portrait';
    } else if (aspectRatio < 0.6) {
      aspectClass = 'tall';
    } else if (aspectRatio > 1.8) {
      aspectClass = 'wide';
    }
    
    setImageAspectRatios(prev => ({
      ...prev,
      [index]: aspectClass
    }));
    
    setLoadedImages(prev => ({
      ...prev,
      [index]: true
    }));
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-title">
          <h3 className="font-secondary">The quality proofs</h3>
          <h2 className="font-primary"><b>GALLERY</b></h2>
        </div>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div 
              className={`gallery-item ${imageAspectRatios[idx] || 'square'}`} 
              key={idx}
            >
              <div className="image-container">
                <img 
                  src={img.src} 
                  alt={img.desc} 
                  className={`gallery-image ${loadedImages[idx] ? 'loaded' : ''}`}
                  loading="lazy"
                  onLoad={(e) => handleImageLoad(idx, e)}
                />
                {!loadedImages[idx] && (
                  <div className="image-placeholder">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                <div className="image-overlay">
                  <div className="image-description">{img.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 