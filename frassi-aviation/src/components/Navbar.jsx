import { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../assets/FrassiLogo.jpeg';
import { Button } from 'reactstrap';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'aboutus', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'clientinquiry', label: 'Client Inquiry' },
  { id: 'partners', label: 'Partners' },
  { id: 'contact', label: 'Contact', isButton: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 90; // 90px para compensar el navbar
      let currentSection = 'home';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave personalizado
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80; // 80px navbar
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home"><img src={logo} alt="FRASSI AVIATION" loading="lazy" /></a>
      </div>
      <div className={`navbar-burger${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links${open ? ' open' : ''}`}>
        {sections.map((section) => (
          <li key={section.id}>
            {section.isButton ? (
              <a
                href={`#${section.id}`}
                className={`contact-button-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={e => handleNavClick(e, section.id)}
              >
                <Button color='primary'>Contact</Button>
              </a>
            ) : (
              <a
                href={`#${section.id}`}
                className={activeSection === section.id ? 'active' : ''}
                onClick={e => handleNavClick(e, section.id)}
              >
                {section.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar; 