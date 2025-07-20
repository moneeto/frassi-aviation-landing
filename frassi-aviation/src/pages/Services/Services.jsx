import { Row, Col, Table, Button } from 'reactstrap';
import './Services.scss';
import img1 from '../../assets/services1.jpg';
import img2 from '../../assets/services2.jpg';
import img3 from '../../assets/services3.jpg';


const Services = () => {
  return (
    <section id="services">
      <Row>
        <div className="services-title">
          <h2 className="font-secondary">We offer these</h2>
          <h3 className="font-primary"><b>SERVICES</b></h3>
        </div>
      </Row>
      <Row className="justify-content-center">
        <Col md="10">
          <Table bordered responsive className="text-center align-middle services-table-fixed">
            <thead>
              <tr className="services-table-header">
                <th style={{backgroundColor: '#005caa', color: '#ffffff', fontSize: '1.2rem', fontWeight: '600'}}>MAINTENANCE</th>
                <th style={{backgroundColor: '#005caa', color: '#ffffff', fontSize: '1.2rem', fontWeight: '600'}}>SPECIALITIES</th>
                <th style={{backgroundColor: '#005caa', color: '#ffffff', fontSize: '1.2rem', fontWeight: '600'}}>ADDITIONALIES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul className="list-unstyled mb-0">
                    <li>50/100 Hour Inspections</li>
                    <li>Annual Inspections</li>
                    <li>AD Compliance Checks</li>
                    <li>FA Documentation & IA Sign-off</li>
                    <li>Pre-Buy Inspections</li>
                    <li>Oil Change</li>
                  </ul>
                </td>
                <td>
                  <ul className="list-unstyled mb-0">
                    <li>Sheet Metal & Structural Repairs</li>
                    <li>Aircraft Modifications (FAA Form 337)</li>
                    <li>Composite Work</li>
                    <li>Fabric Recovering</li>
                  </ul>
                </td>
                <td>
                  <ul className="list-unstyled mb-0">
                    <li>Mobile On-Site Service</li>
                    <li>Parts & Supplies (AirFrassi Repair as partner)</li>
                    <li>Assistance for Aircraft Sales</li>
                    <li>Operational Support for Schools / Operators</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </section>
  );
};

export default Services; 