import { Row, Col } from 'reactstrap';
import './Partners.scss';
import machxLogo from '../../assets/MX.png';
import dragonLogo from '../../assets/dragonflight.png';

const Partners = () => {
  return (
    <section id="partners" style={{ minHeight: '100vh' }}>
      <div className="partners-title">
        <h3 className="font-secondary">In us, they trust</h3>
        <h2 className="font-primary"><b>PARTNERS</b></h2>
        <p className="partners-desc">
          Praesent libero ligula, dapibus ac sapien dapibus, luctus placerat tellus. Suspendisse molestie ex nec ante porttitor posuere.
        </p>
      </div>
      <Row className="justify-content-center align-items-start partners-row">
        <Col md="5" className="d-flex flex-column align-items-center partner-block">
          <img src={machxLogo} alt="Mach X" className="partner-logo" loading="lazy" />
          <h3 className="partner-name">MACH X</h3>
          <p className="partner-text">
            "Frassi Aviation provides all technical support and maintenance services for the operational fleet of Mach X Aviation."
          </p>
        </Col>
        <Col md="5" className="d-flex flex-column align-items-center partner-block">
          <img src={dragonLogo} alt="Dragon Flight" className="partner-logo" loading="lazy" />
          <h3 className="partner-name">DRAGON FLIGHT</h3>
          <p className="partner-text">
            "Frassi Aviation provides all technical support and maintenance services for the operational fleet of Dragon Flight Aviation."
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Partners;