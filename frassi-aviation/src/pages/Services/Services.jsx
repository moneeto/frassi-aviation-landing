import { Row, Col } from 'reactstrap';
import './Services.scss';
import { FaTools, FaCog, FaWrench, FaPlane, FaClipboardCheck, FaOilCan, FaHammer, FaPuzzlePiece, FaTruck, FaHandshake, FaGraduationCap } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      category: "MAINTENANCE",
      icon: <FaTools />,
      items: [
        { text: "50/100 Hour Inspections", icon: <FaClipboardCheck /> },
        { text: "Annual Inspections", icon: <FaClipboardCheck /> },
        { text: "AD Compliance Checks", icon: <FaClipboardCheck /> },
        { text: "FA Documentation & IA Sign-off", icon: <FaClipboardCheck /> },
        { text: "Pre-Buy Inspections", icon: <FaClipboardCheck /> },
        { text: "Oil Change", icon: <FaOilCan /> }
      ]
    },
    {
      category: "SPECIALITIES",
      icon: <FaCog />,
      items: [
        { text: "Sheet Metal & Structural Repairs", icon: <FaHammer /> },
        { text: "Aircraft Modifications (FAA Form 337)", icon: <FaPuzzlePiece /> },
        { text: "Composite Work", icon: <FaWrench /> },
        { text: "Fabric Recovering", icon: <FaPlane /> }
      ]
    },
    {
      category: "ADDITIONALIES",
      icon: <FaHandshake />,
      items: [
        { text: "Mobile On-Site Service", icon: <FaTruck /> },
        { text: "Parts & Supplies (AirFrassi Repair as partner)", icon: <FaHandshake /> },
        { text: "Assistance for Aircraft Sales", icon: <FaHandshake /> },
        { text: "Operational Support for Schools / Operators", icon: <FaGraduationCap /> }
      ]
    }
  ];

  return (
    <section id="services">
      <div className="services-container">
        <Row>
          <div className="services-title">
            <h2 className="font-secondary">We offer these</h2>
            <h3 className="font-primary"><b>SERVICES</b></h3>
          </div>
        </Row>
        
        <Row>
          {servicesData.map((service, index) => (
            <Col lg="4" md="8" sm="12" key={index} className="service-card-col">
              <div className="service-card">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h4 className="service-category">{service.category}</h4>
                </div>
                
                <div className="service-card-body">
                  <ul className="service-list">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="service-item">
                        <div className="service-item-icon">
                          {item.icon}
                        </div>
                        <span className="service-item-text">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-card-footer">
                  <div className="service-card-accent"></div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Services; 