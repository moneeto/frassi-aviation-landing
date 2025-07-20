import { useState, useEffect } from 'react';
import './Footer.scss';
import logo from '../assets/FRASSIESCUDO-SINFONDO.png';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'aboutus', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'clientinquiry', label: 'Client Inquiry' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact' },
  ];

  // Scroll suave personalizado
  const handleFooterClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección superior del footer */}
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="FRASSI AVIATION" loading="lazy" />
              <h3 className="font-primary">FRASSI AVIATION</h3>
            </div>
            <p>
              Professional aviation solutions with over 20 years of experience 
              in the aeronautical sector.
            </p>
            <hr className="footer-divider-small" />
            <p className="social-title">Follow us on social media!</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="font-primary">Navigation</h4>
            <ul className="footer-links">
              {sections.map((section) => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`}
                    onClick={(e) => handleFooterClick(e, section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="font-primary">Contact</h4>
            <div className="footer-contact">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Florida, United States
              </p>
              <p>
                <i className="fas fa-phone"></i>
                1-844-372-7744
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                info@frassiaviation.com
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="footer-divider"></div>

        {/* Sección inferior del footer */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Frassi Aviation. All rights reserved.
            </p>
            <p>
              Website created by{' '}
              <a 
                href="https://github.com/moneeto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="creator-link"
              >
                Joaquin Palmeyro
              </a>
            </p>
          </div>
          
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 