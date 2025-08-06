import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ClientInquiry.scss';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { FaUser, FaBuilding, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCamera, FaComments } from 'react-icons/fa';

const ClientInquiry = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [modal, setModal] = useState({ show: false, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getTotalFileSize = () => {
    return selectedFiles.reduce((total, file) => total + file.size, 0);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    return data.data.url;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('');
    setIsLoading(true);
    try {
      const formData = new FormData(form.current);
      const files = formData.getAll('photos');
      const imageUrls = [];

      for (const file of files) {
        if (file.size > 0) {
          const url = await uploadImage(file);
          imageUrls.push(url);
        }
      }

      const messageWithImages = `${formData.get('message') || ''}\n\nPhotos:\n${imageUrls.join('\n')}`;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.get('full_name'),
          company: formData.get('company'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          location: formData.get('location'),
          message: messageWithImages,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      form.current.reset();
      setSelectedFiles([]);
      setModal({ show: true, message: 'The message has been sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setModal({ show: true, message: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="clientinquiry" className="clientinquiry-section">
      <div className="container">        
        <div className="clientinquiry-main-content">
          <Row className="clientinquiry-row">
            <Col lg="4" md="12" className="clientinquiry-info-sidebar">
              <div className="clientinquiry-info-card">
                <h3 className="font-primary">What We Need</h3>
                <div className="info-details">
                  <div className="info-item">
                    <FaUser className="info-icon" />
                    <div className="info-text">
                      <span className="info-label">Personal Information</span>
                      <span className="info-value">Full name, phone number and email</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <FaBuilding className="info-icon" />
                    <div className="info-text">
                      <span className="info-label">Company</span>
                      <span className="info-value">Your company or business name</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <div className="info-text">
                      <span className="info-label">Aircraft Location</span>
                      <span className="info-value">Where the aircraft is located (hangar or address)</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <FaCamera className="info-icon" />
                    <div className="info-text">
                      <span className="info-label">Photos (Optional)</span>
                      <span className="info-value">Upload relevant images (It can be more than one)</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <FaComments className="info-icon" />
                    <div className="info-text">
                      <span className="info-label">Message</span>
                      <span className="info-value">Tell us about your needs and requirements</span>
                    </div>
                  </div>
                </div>
                
                <div className="inquiry-note">
                  <h4 className="font-secondary">Quick Response</h4>
                  <p>We typically respond within 24 hours during business days</p>
                </div>
              </div>
            </Col>
            
            <Col lg="8" md="12" className="clientinquiry-form-sidebar">
              <div className="clientinquiry-form-card">
                <h3 className="font-primary">Get Your Quote</h3>
                <div className="form-divider"></div>
                <p className="form-subtitle font-secondary">Please provide the following information</p>
                
                <form ref={form} className="clientinquiry-form" onSubmit={sendEmail}>
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="full_name" placeholder="Full name *" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="company" placeholder="Company" className="form-input" />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="phone" placeholder="Phone *" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email *" className="form-input" required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <input type="text" name="location" placeholder="Aircraft location (hangar or address) *" className="form-input" required />
                  </div>
                  
                  <div className="form-group">
                    <div className="file-upload-wrapper">
                      <input type="file" name="photos" multiple className="file-input" id="file-input" onChange={handleFileChange} />
                      <label htmlFor="file-input" className="file-label">
                        <FaCamera className="file-icon" />
                        <span>Upload Photos (Optional)</span>
                      </label>
                      {selectedFiles.length > 0 && (
                        <span className="file-count">
                          {selectedFiles.length} {selectedFiles.length === 1 ? 'file' : 'files'} selected ({formatFileSize(getTotalFileSize())})
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <textarea name="message" placeholder="Describe your needs and requirements..." className="form-textarea" rows="4"></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn font-primary" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <b>SUBMIT INQUIRY</b>
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

export default ClientInquiry;
