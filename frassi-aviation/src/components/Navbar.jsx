import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">FRASSI AVIATION</div>
      <ul className="navbar-links">
        <li><a href="home">Home</a></li>
        <li><a href="aboutus">About Us</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="clientinquiry">Client Inquiry</a></li>
        <li><a href="gallery">Gallery</a></li>
        <li><a href="partners">Partners</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 