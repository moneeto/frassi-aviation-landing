import { Row, Col, Table, Button } from 'reactstrap';
import './Services.scss';

const Services = () => {
  return (
    <section id="services" style={{ minHeight: '100vh' }}>
      <Row>
        <div className="services-title">
          <h2 className="font-secondary">We offer these</h2>
          <h3 className="font-primary"><b>SERVICES</b></h3>
        </div>
      </Row>
      <Row className="justify-content-center">
        <Col md="10">
          <Table bordered responsive className="text-center align-middle">
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
                    <li>Parts & Supplies (AirFrassi Repair como partner)</li>
                    <li>Assistance for Aircraft Sales</li>
                    <li>Operational Support for Schools / Operators</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="font-secondary">Check our projects and clients witnesses</h2>
            <Button color="primary"><b>SEE THE GALLERY</b></Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Services; 