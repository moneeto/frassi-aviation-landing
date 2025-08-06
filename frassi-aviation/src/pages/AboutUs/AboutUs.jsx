import './AboutUs.scss';
import { Row, Col, Button } from 'reactstrap';
import aboutUsImage_1 from '../../assets/aboutUsImage_1.png';
import aboutUsImage_2 from '../../assets/aboutUsImage_2.jpg';
import { FaPlane, FaUser } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="aboutus">
      <Row className="align-items-center justify-content-center" style={{ minHeight: '350px' }}>
        <Col md="4" className="d-flex justify-content-center">
          <img src={aboutUsImage_1} alt="Ayrton fixing a airplane' swing" className="aboutus-image" loading="lazy" />
        </Col>
        <Col md="6" className="d-flex align-items-center justify-content-center">
          <div className="aboutus-box-content">
            <h2 className="font-secondary">Who are we?</h2>
            <h3 className="font-primary"><b>FRASSI AVIATION</b></h3>
            <p style={{ textAlign: 'justify' }}>
              Frassi Aviation is a company dedicated to aircraft mechanics and maintenance, founded and led by Ayrton, a mechanic with over 10 years of experience in the industry. We specialize in providing comprehensive solutions for the care, repair, and improvement of airplanes, ensuring maximum safety and efficiency on every flight. Our commitment is to support our clients at every stage, from diagnosis to delivery, with professionalism and a true passion for aviation.
            </p>
          </div>
        </Col>
      </Row>
      <br />
      <Row className="align-items-center justify-content-center" style={{ minHeight: '350px' }}>
        <Col md="6" className="d-flex align-items-center justify-content-center">
          <div className="aboutus-box-content">
            <h2 className="font-secondary">Our purpose</h2>
            <h3 className="font-primary"><b>MISSION & VISION</b></h3>
            <div className="mission-vision-grid">
              <div className="mission-vision-item">
                <FaPlane className="mission-vision-icon" />
                <div className="mission-vision-content">
                  <h4>Mission</h4>
                  <p>Our mission is to ensure that every aircraft that passes through our hands flies with the highest safety and performance, exceeding industry standards.</p>
                </div>
              </div>
              <div className="mission-vision-item">
                <FaUser className="mission-vision-icon" />
                <div className="mission-vision-content">
                  <h4>Client Focus</h4>
                  <p>We are driven by our clients' trust and a passion for technical excellence, building long-lasting relationships based on transparency and commitment.</p>
                </div>
              </div>
              <div className="mission-vision-item">
                <FaPlane className="mission-vision-icon" />
                <div className="mission-vision-content">
                  <h4>Vision</h4>
                  <p>To be the leading reference workshop in aeronautical maintenance in the region, recognized for quality, innovation, and personalized attention.</p>
                </div>
              </div>
              <div className="mission-vision-item">
                <FaUser className="mission-vision-icon" />
                <div className="mission-vision-content">
                  <h4>Values</h4>
                  <p>Integrity, dedication, continuous improvement, and a deep respect for safety and human life.</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="4" className="d-flex justify-content-center">
          <img src={aboutUsImage_2} alt="Ayrton fixing a airplane' swing" className="aboutus-image" loading="lazy" />
        </Col>
      </Row>
    </section>
  );
};

export default AboutUs; 