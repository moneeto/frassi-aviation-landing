import { Row, Col } from 'reactstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-main-content">
          <Row>
            <Col lg="4" md="12" className="contact-info-sidebar">
              <div className="contact-info-card">
                <h3 className="font-primary">Contact Information</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div className="contact-text">
                      <span className="contact-label">Address</span>
                      <span className="contact-value">4089 NW 135 Street<br />Opa-locka, Florida 33054<br />United States</span>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <div className="contact-text">
                      <span className="contact-label">Phone</span>
                      <span className="contact-value">1-844-FRASSI<br />(1-844-372-7744)</span>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <div className="contact-text">
                      <span className="contact-label">Email</span>
                      <span className="contact-value">frassi@aviation.com</span>
                    </div>
                  </div>
                </div>

                <hr className="contact-divider" />
                
                <div className="business-hours">
                  <h4 className="hours-title">Our Business Hours</h4>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span className="day">Monday - Friday</span>
                      <span className="time">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Saturday</span>
                      <span className="time">9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Sunday</span>
                      <span className="time">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg="8" md="12" className="contact-form-sidebar">
              <div className="contact-form-card">
                <h3 className="font-primary">Send us a Message</h3>
                <div className="form-divider"></div>
                <p className="form-subtitle font-secondary">We'd love to hear from you!</p>
                
                <div className="contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" className="form-input" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" className="form-input" />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Tell us how we can help you..." className="form-textarea" rows="4"></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Contact;