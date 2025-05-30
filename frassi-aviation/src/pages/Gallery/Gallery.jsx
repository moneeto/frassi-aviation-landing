import React from 'react';
import Slider from 'react-slick';
import './Gallery.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../assets/aboutUsImage_1.png';
import img2 from '../../assets/aboutUsImage_2.jpg';
import img3 from '../../assets/avionHOME.jpg';

const images = [
  { src: img1, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: img2, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: img3, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: img1, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
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
          slidesToShow: 2,
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
            <img src={img.src} alt={`gallery-${idx}`} />
            <p>{img.desc}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery; 