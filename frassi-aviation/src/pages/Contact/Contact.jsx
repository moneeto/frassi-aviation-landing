import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Row, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaUser, FaComments } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [modal, setModal] = useState({ show: false, message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('');
    setIsLoading(true);
    try {
      const formData = new FormData(form.current);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.get('full_name'),
          email: formData.get('email'),
          message: formData.get('message'),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      form.current.reset();
      setModal({ show: true, message: 'Your message has been sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setModal({ show: true, message: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

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
                <form ref={form} className="contact-form" onSubmit={sendEmail}>
                  <div className="form-group">
                    <input type="text" name="full_name" placeholder="Your Name *" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email *" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Tell us how we can help you..." className="form-textarea" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="submit-btn" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>SEND MESSAGE</>
                    )}
                  </button>
                  
                  {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
                  {status === 'error' && <p className="error-msg">An error occurred. Please try again.</p>}
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Modal isOpen={modal.show} toggle={() => setModal({ show: false, message: '' })} centered className="custom-modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className={`modal-icon ${modal.message.includes('successfully') ? 'success' : 'error'}`}>
              {modal.message.includes('successfully') ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22,4 12,14.01 9,11.01"></polyline>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              )}
            </div>
            <h3 className="modal-title">
              {modal.message.includes('successfully') ? 'Success!' : 'Error'}
            </h3>
            <button 
              className="modal-close" 
              onClick={() => setModal({ show: false, message: '' })}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <p>{modal.message}</p>
          </div>
          <div className="modal-footer">
            <button 
              className="modal-btn" 
              onClick={() => setModal({ show: false, message: '' })}
            >
              {modal.message.includes('successfully') ? 'Continue' : 'Try Again'}
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;