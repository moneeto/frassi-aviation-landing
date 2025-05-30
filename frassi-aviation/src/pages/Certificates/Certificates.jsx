import './Certificates.scss';
import { Row, Col, Button } from 'reactstrap';
import aboutUsImage_1 from '../../assets/aboutUsImage_1.png';
import aboutUsImage_2 from '../../assets/aboutUsImage_2.jpg';
import { FaPlane, FaUser, FaCertificate } from 'react-icons/fa';
import React from 'react';

const CertificateCard = ({ image, description, icon }) => (
  <div className="certificate-card">
    <div className="certificate-card-img-wrapper">
      <img src={image} alt="certificate" className="certificate-card-img" />
      <span className="certificate-card-icon">{icon}</span>
    </div>
    <p className="certificate-card-desc">{description}</p>
  </div>
);

const Certificates = () => {
    return (
        <section id="certificates" className="certificates-section" style={{ minHeight: '100vh' }}>
            <Row className="certificates-row">
                <Col md="7" style={{ flex: '0 0 60%', maxWidth: '60%' }}>
                    <h2 className="font-secondary">Quality is guaranteed by our</h2>
                    <h3 className="font-primary"><b>CERTIFICATES</b></h3>
                    <p>We dispose this certificates to guarantee the quality and confident of the services we provides</p>
                    <Row className="justify-content-center">
                        <Col xs="12" sm="6" md="4">
                          <CertificateCard
                            image={aboutUsImage_1}
                            description="Certificado de calidad internacional."
                            icon={<FaCertificate size={32} color="#005caa" />}
                          />
                        </Col>
                        <Col xs="12" sm="6" md="4">
                          <CertificateCard
                            image={aboutUsImage_2}
                            description="Certificado de seguridad aeronáutica."
                            icon={<FaCertificate size={32} color="#005caa" />}
                          />
                        </Col>
                        <Col xs="12" sm="6" md="4">
                          <CertificateCard
                            image={aboutUsImage_1}
                            description="Certificado de excelencia en servicio."
                            icon={<FaCertificate size={32} color="#005caa" />}
                          />
                        </Col>
                    </Row>
                </Col>
                <Col md="5" style={{ flex: '0 0 40%', maxWidth: '40%' }}>
                    <h2 className="font-secondary">The operative right hand</h2>
                    <h3 className="font-primary"><b>MACH X</b></h3>
                    <p>We work together in the smart and logistical integration with the hangars</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non ligula non sapien laoreet rhoncus vel vel arcu. Sed vel ex euismod, aliquet lorem a, varius turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                    <img src={aboutUsImage_1} alt="Ayrton fixing a airplane' swing" className="aboutus-image" />
                    <br />
                    <a href="https://www.machx.it/" target="_blank" rel="noopener noreferrer"><Button color="primary"><b>LEARN MORE ABOUT MACH X</b></Button></a>
                </Col>
            </Row>
        </section>
    );
};

export default Certificates; 