import './Certificates.scss';
import { Row, Col, Button } from 'reactstrap';
import aboutUsImage_1 from '../../assets/aboutUsImage_1.png';
import aboutUsImage_2 from '../../assets/aboutUsImage_2.jpg';
import { FaCertificate } from 'react-icons/fa';
import React from 'react';
import machxlogo from '../../assets/MACHX.png';
// Datos de los certificados
const certificatesData = [
  {
    id: 1,
    image: aboutUsImage_1,
    description: "Certificado de calidad internacional.",
    icon: <FaCertificate />
  },
  {
    id: 2,
    image: aboutUsImage_2,
    description: "Certificado de seguridad aeronáutica.",
    icon: <FaCertificate />
  },
  {
    id: 3,
    image: aboutUsImage_1, // Re-usando imagen como en el original
    description: "Certificado de excelencia en servicio.",
    icon: <FaCertificate />
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

const Certificates = () => {
    return (
        <section id="certificates" className="certificates-section">
            <Row className="certificates-row">
                {/* Columna de Certificados */}
                <Col xs="12" md="7" className="certificates-content-col" order={{ xs: 1, md: 1 }}>
                    <h2 className="font-secondary">Quality is guaranteed by our</h2>
                    <h3 className="font-primary"><b>CERTIFICATES</b></h3>
                    <p>We dispose this certificates to guarantee the quality and confident of the services we provides</p>
                    
                    {/* Vista Desktop: Tarjetas */}
                    <Row className="justify-content-center d-none d-md-flex">
                        {certificatesData.map(cert => (
                            <Col sm="6" lg="4" key={cert.id} className="mb-4">
                                <CertificateCard 
                                    image={cert.image} 
                                    description={cert.description} 
                                    icon={cert.icon} 
                                />
                            </Col>
                        ))}
                    </Row>

                    {/* Vista Mobile: Lista Minimalista */}
                    <div className="d-md-none mt-4">
                        {certificatesData.map(cert => (
                            <MinimalCertificateItem 
                                key={cert.id} 
                                description={cert.description} 
                                icon={cert.icon} 
                            />
                        ))}
                    </div>
                </Col>

                {/* Columna de MACH X */}
                <Col xs="12" md="5" className="machx-content-col" order={{ xs: 2, md: 2 }}>
                    <h2 className="font-secondary">The operative right hand</h2>
                    <h3 className="font-primary"><b>MACH X</b></h3>
                    <p>We work together in the smart and logistical integration with the hangars</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non ligula non sapien laoreet rhoncus vel vel arcu. Sed vel ex euismod, aliquet lorem a, varius turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                    <img src={machxlogo} alt="Mach X integration" className="aboutus-image img-fluid" loading="lazy" />
                    <br />
                    <a href="https://www.machx.it/" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center">
                        <Button color="primary"><b>LEARN MORE ABOUT MACH X</b></Button>
                    </a>
                </Col>
            </Row>
        </section>
    );
};

export default Certificates; 