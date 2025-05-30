import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ClientInquiry.scss';

const ClientInquiry = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('');
    emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form.current, 'TU_USER_ID')
      .then((result) => {
        setStatus('success');
        form.current.reset();
      }, (error) => {
        setStatus('error');
      });
  };

  return (
    <section id="clientinquiry" style={{ minHeight: '100vh' }}>
      <div className="clientinquiry-title">
        <h3 className="font-secondary">Need to contact us?</h3>
        <h2 className="font-primary"><b>CLIENT INQUIRY</b></h2>
      </div>
      <form ref={form} className="clientinquiry-form" onSubmit={sendEmail}>
        <div className="form-row">
          <div className="form-group">
            <label>Full name (*)</label>
            <input type="text" name="full_name" required />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input type="text" name="company" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Phone (*)</label>
            <input type="text" name="phone" required />
          </div>
          <div className="form-group">
            <label>Email (*)</label>
            <input type="email" name="email" required />
          </div>
        </div>
        <div className="form-group">
          <label>Aircraft location (hangar or address) (*)</label>
          <input type="text" name="location" required />
        </div>
        <div className="form-group">
          <label>Photos (optional)</label>
          <input type="file" name="photos" multiple />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="3" />
        </div>
        <button type="submit" className="submit-btn">SUBMIT</button>
        {status === 'success' && <p className="success-msg">¡Mensaje enviado correctamente!</p>}
        {status === 'error' && <p className="error-msg">Ocurrió un error. Intenta nuevamente.</p>}
      </form>
    </section>
  );
};

export default ClientInquiry; 