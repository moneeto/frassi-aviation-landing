import React from 'react';
import Slider from 'react-slick';
import './Gallery.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  { src: img9, desc: 'Glass renewal' },
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    draggable: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="gallery" style={{ minHeight: '100vh' }}>
      <div className="gallery-title">
        <h3 className="font-secondary">The quality proofs</h3>
        <h2 className="font-primary"><b>GALLERY</b></h2>
      </div>
      <Slider {...settings} className="gallery-slider">
        {images.map((img, idx) => (
          <div className="gallery-slide" key={idx}>
            <img src={img.src} alt={`gallery-${idx}`} className="gallery-big-img" loading="lazy" />
            <p>{img.desc}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery; 