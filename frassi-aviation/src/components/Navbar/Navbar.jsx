import './Navbar.scss';
import { useState } from 'react';
import { Button } from 'reactstrap';
import logo from '../../assets/FrassiLogo.jpeg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="FRASSI AVIATION" />
      </div>
      <div className={`navbar-burger${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links${open ? ' open' : ''}`}>
        <li><a href="home">Home</a></li>
        <li><a href="aboutus">About Us</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="clientinquiry">Client Inquiry</a></li>
        <li><a href="gallery">Gallery</a></li>
        <li><a href="partners">Partners</a></li>
        <li><a href="contact"><Button color='primary'>Contact</Button></a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 