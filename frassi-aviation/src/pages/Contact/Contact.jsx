import { Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" style={{ minHeight: '100vh' }}>
      <h2 className="contact-title font-primary"><b>CONTACT</b></h2>
      <Row className="contact-row">
        <Col md="6" className="contact-info-col">
          <div className="contact-info-box">
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <b>Our location</b>
                <div>4089 NW 135 Street Opa-locka,<br />Florida 33054 United States</div>
              </div>
            </div>
            <div className="contact-info-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <b>Phone number</b>
                <div>1844 - FRASSI</div>
              </div>
            </div>
            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <b>Email address</b>
                <div>frassi@aviation.com</div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6" className="contact-form-col">
          <div className="contact-form-box">
            <h3 className="contact-form-subtitle">Get your</h3>
            <h2 className="contact-form-title font-primary"><b>QUOTE</b></h2>
            <Form className="contact-form">
              <FormGroup>
                <Label for="name">Full name</Label>
                <Input type="text" name="name" id="name" required />
              </FormGroup>
              <Row className="form-row">
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input type="text" name="phone" id="phone" required />
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" required />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input type="text" name="subject" id="subject" required />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" name="message" id="message" rows="3" required />
              </FormGroup>
              <Button color="primary" type="submit" className="contact-submit-btn"><b>SUBMIT</b></Button>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;