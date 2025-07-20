import './Certificates.scss';
import { Row, Col, Button } from 'reactstrap';
import aboutUsImage_1 from '../../assets/aboutUsImage_1.png';
import aboutUsImage_2 from '../../assets/aboutUsImage_2.jpg';
import { FaCertificate, FaTools, FaPlane, FaFileAlt } from 'react-icons/fa';
import React from 'react';
import machxlogo from '../../assets/MACHX.png';

// Datos de los certificados
const certificatesData = [
  {
    id: 1,
    title: "Certifications & FAA Authorizations",
    icon: <FaCertificate />,
    description: (
      <>FAA credentials and authorizations to perform high-standard maintenance, repairs, and airworthiness documentation. Full compliance, safety, and professionalism.</>
    )
  },
  {
    id: 2,
    title: "FAA-Certified Maintenance",
    icon: <FaCertificate />,
    description: (
      <>A&P and IA certified. Annuals, 100-hour inspections, major repairs, troubleshooting, and AD compliance for a wide range of aircraft.</>
    )
  },
  {
    id: 3,
    title: "Operational Scope",
    icon: <FaCertificate />,
    description: (
      <>Single & multi-engine, high-performance, twins, turboprops, experimentals. Full support for general aviation and special airworthiness.</>
    )
  },
  {
    id: 4,
    title: "Structural & Documentation",
    icon: <FaCertificate />,
    description: (
      <>Sheet metal repairs, custom fabrication, logbook entries, FAA Form 337, and digital/physical compliance tracking.</>
    )
  }
];

// Componente para la tarjeta de certificado (vista desktop)
const CertificateCard = ({ image, description, icon }) => (
  <div className="certificate-card">
    <div className="certificate-card-img-wrapper">
      <img src={image} alt="certificate" className="certificate-card-img" loading="lazy" />
      <span className="certificate-card-icon">{React.cloneElement(icon, { size: 32, color: "#005caa" })}</span>
    </div>
    <p className="certificate-card-desc">{description}</p>
  </div>
);

// Componente para el ítem de certificado minimalista (vista mobile)
const MinimalCertificateItem = ({ description, icon }) => (
  <div className="minimal-certificate-item">
    <span className="minimal-certificate-icon">{React.cloneElement(icon, { size: 24, color: "white" })}</span>
    <p className="minimal-certificate-text">{description}</p>
  </div>
);

// Nuevo formato de card simple con icono, título y descripción
const SimpleCertificateCard = ({ title, description, icon }) => (
  <div className="simple-certificate-card d-flex flex-column align-items-center justify-content-center p-4 mb-4">
    <span className="simple-certificate-icon mb-2">{React.cloneElement(icon, { size: 40, color: "#005caa" })}</span>
    <h5 className="simple-certificate-title mb-2 text-center">{title}</h5>
    <p className="simple-certificate-desc text-center">{description}</p>
  </div>
);

// Componente para la sección de certificados (lado izquierdo)
const CertificatesSection = () => {
  return (
    <div className="certificates-section">
      <h2 className="font-secondary">Quality is guaranteed by our</h2>
      <h3 className="font-primary"><b>CERTIFICATES</b></h3>
      <p>We dispose these certificates to guarantee the quality and confidence of the services we provide</p>
      
      {/* Certificados en fila: dos arriba, dos abajo */}
      <Row className="justify-content-center">
        {/* Primera fila: dos certificados */}
        <Col xs="12" md="6" className="mb-4 d-flex justify-content-end">
          <SimpleCertificateCard 
            title={certificatesData[0].title}
            description={certificatesData[0].description}
            icon={certificatesData[0].icon}
          />
        </Col>
        <Col xs="12" md="6" className="mb-4 d-flex justify-content-start">
          <SimpleCertificateCard 
            title={certificatesData[1].title}
            description={certificatesData[1].description}
            icon={certificatesData[1].icon}
          />
        </Col>
        <Col xs="12" md="6" className="mb-4 d-flex justify-content-end">
          <SimpleCertificateCard 
            title={certificatesData[2].title}
            description={certificatesData[2].description}
            icon={certificatesData[2].icon}
          />
        </Col>
        <Col xs="12" md="6" className="mb-4 d-flex justify-content-start">
          <SimpleCertificateCard 
            title={certificatesData[3].title}
            description={certificatesData[3].description}
            icon={certificatesData[3].icon}
          />
        </Col>
      </Row>
    </div>
  );
};

// Componente para la sección de Mach X (lado derecho)
const MachXSection = () => (
  <div className="machx-section">
    <h2 className="font-secondary">The operative right hand</h2>
    <h3 className="font-primary"><b>MACH X</b></h3>
    <p className="text-justify">
      We work together in the smart and logistical integration with the hangars. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div className="machx-logo-container">
      <img src={machxlogo} alt="Mach X integration" className="machx-logo" loading="lazy" />
    </div>
    <div className="machx-button-container">
      <a href="https://www.machx.it/" target="_blank" rel="noopener noreferrer">
        <Button color="primary"><b>LEARN MORE ABOUT MACH X</b></Button>
      </a>
    </div>
  </div>
);

// Componente principal que combina ambas secciones
const CertificatesAndMachX = () => {
  return (
    <section id="certificates" className="certificates-machx-section">
      <Row className="align-items-start justify-content-center" style={{ minHeight: '500px' }}>
        <Col xs="12" md="11" lg="10" className="d-flex align-items-start justify-content-center">
          <Row className="w-100">
            <Col md="6" className="d-flex align-items-start justify-content-center">
              <CertificatesSection />
            </Col>
            <Col md="6" className="d-flex align-items-start justify-content-center">
              <MachXSection />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default CertificatesAndMachX; 