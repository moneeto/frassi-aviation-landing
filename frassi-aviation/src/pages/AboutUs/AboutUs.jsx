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
          <img src={aboutUsImage_1} alt="Ayrton fixing a airplane' swing" className="aboutus-image" />
        </Col>
        <Col md="6" className="d-flex align-items-center justify-content-center">
          <div className="aboutus-box-content">
            <h2 className="font-secondary">Who are we?</h2>
            <h3 className="font-primary"><b>FRASSI AVIATION</b></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non ligula non sapien laoreet rhoncus vel vel arcu. Sed vel ex euismod, aliquet lorem a, varius turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </Col>
      </Row>
      <br />
      <Row className="align-items-center justify-content-center" style={{ minHeight: '350px' }}>
        <Col md="6" className="d-flex align-items-center justify-content-center">
          <div className="aboutus-box-2">
            <div className="aboutus-box-content">
              <h2 className="font-secondary">Our purpose</h2>
              <h3 className="font-primary"><b>MISSION & VISION</b></h3>
              <div className="aboutus-box2-icons">
                <Row>
                  <Col md="6">
                    <p>
                      <FaPlane /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p>
                      <FaUser /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Col>
                  <Col md="6">
                    <p>
                      <FaPlane /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p>
                      <FaUser /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
        <Col md="4" className="d-flex justify-content-center">
          <img src={aboutUsImage_2} alt="Ayrton fixing a airplane' swing" className="aboutus-image aboutus-image-large" />
        </Col>
      </Row>
    </section>
  );
};

export default AboutUs; 