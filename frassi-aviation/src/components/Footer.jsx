import { useState, useEffect } from 'react';
import './Footer.scss';
import logo from '../assets/FRASSIESCUDO-SINFONDO.png';
import LegalModal from './LegalModal';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'aboutus', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'clientinquiry', label: 'Client Inquiry' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact' },
  ];

  // Scroll suave personalizado
  const handleFooterClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Contenido de Términos y Condiciones
  const termsContent = (
    <div>
      <div className="legal-section">
        <h4>1. Acceptance of Terms</h4>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
      </div>

      <div className="legal-section">
        <h4>2. Use License</h4>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Frassi Aviation's website for personal, non-commercial transitory viewing only.</p>
        <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to reverse engineer any software contained on the website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
        </ul>
      </div>

      <div className="legal-section">
        <h4>3. Disclaimer</h4>
        <div className="legal-highlight">
          <p><strong>Frassi Aviation expressly disclaims all warranties and conditions of any kind, whether express or implied, including but not limited to the implied warranties and conditions of merchantability, fitness for a particular purpose, and non-infringement.</strong></p>
        </div>
        <p>Frassi Aviation does not warrant that the website will be uninterrupted or error-free, that defects will be corrected, or that the website or the server that makes it available are free of viruses or other harmful components.</p>
      </div>

      <div className="legal-section">
        <h4>4. Limitations</h4>
        <p>In no event shall Frassi Aviation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Frassi Aviation's website, even if Frassi Aviation or a Frassi Aviation authorized representative has been notified orally or in writing of the possibility of such damage.</p>
      </div>

      <div className="legal-section">
        <h4>5. Accuracy of Materials</h4>
        <p>The materials appearing on Frassi Aviation's website could include technical, typographical, or photographic errors. Frassi Aviation does not warrant that any of the materials on its website are accurate, complete, or current.</p>
      </div>

      <div className="legal-section">
        <h4>6. Links</h4>
        <p>Frassi Aviation has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Frassi Aviation of the site.</p>
      </div>

      <div className="legal-section">
        <h4>7. Modifications</h4>
        <p>Frassi Aviation may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
      </div>

      <div className="legal-section">
        <h4>8. Governing Law</h4>
        <p>These terms and conditions are governed by and construed in accordance with the laws of the State of Florida, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
      </div>
    </div>
  );

  // Contenido de Política de Privacidad
  const privacyContent = (
    <div>
      <div className="legal-section">
        <h4>1. Information We Collect</h4>
        <p>We collect information you provide directly to us, such as when you fill out contact forms, request information, or communicate with us.</p>
        <p>Types of information we may collect include:</p>
        <ul>
          <li>Name and contact information (email, phone number, address)</li>
          <li>Company information</li>
          <li>Inquiry details and preferences</li>
          <li>Communication history</li>
        </ul>
      </div>

      <div className="legal-section">
        <h4>2. How We Use Your Information</h4>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer service</li>
          <li>Send you information about our services</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>

      <div className="legal-section">
        <h4>3. Information Sharing</h4>
        <p>Frassi Aviation does not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this policy.</p>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li>With service providers who assist us in operating our website and conducting our business</li>
          <li>To comply with legal requirements or protect our rights</li>
          <li>In connection with a business transfer or merger</li>
        </ul>
      </div>

      <div className="legal-section">
        <h4>4. Data Security</h4>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        <div className="legal-highlight">
          <p><strong>However, no method of transmission over the internet or electronic storage is 100% secure, and Frassi Aviation cannot guarantee absolute security of your information.</strong></p>
        </div>
      </div>

      <div className="legal-section">
        <h4>5. Cookies and Tracking</h4>
        <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.</p>
        <p>You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.</p>
      </div>

      <div className="legal-section">
        <h4>6. Third-Party Links</h4>
        <p>Our website may contain links to third-party websites. Frassi Aviation is not responsible for the privacy practices or content of these external sites.</p>
      </div>

      <div className="legal-section">
        <h4>7. Children's Privacy</h4>
        <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
      </div>

      <div className="legal-section">
        <h4>8. Changes to This Policy</h4>
        <p>Frassi Aviation may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
      </div>

      <div className="legal-section">
        <h4>9. Contact Us</h4>
        <p>If you have any questions about this privacy policy or our data practices, please contact us at:</p>
        <p>Email: frassi@aviation.com<br />
        Phone: 1-844-372-7744<br />
        Address: 4089 NW 135 Street, Opa-locka, Florida 33054, United States</p>
      </div>
    </div>
  );

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección superior del footer */}
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="FRASSI AVIATION" loading="lazy" />
              <h3 className="font-primary">FRASSI AVIATION</h3>
            </div>
            <p>
              Professional aviation solutions with over 20 years of experience 
              in the aeronautical sector.
            </p>
            <hr className="footer-divider-small" />
            <p className="social-title">Follow us on social media!</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="font-primary">Navigation</h4>
            <ul className="footer-links">
              {sections.map((section) => (
                <li key={section.id}>
                  <a 
                    href={`#${section.id}`}
                    onClick={(e) => handleFooterClick(e, section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="font-primary">Contact</h4>
            <div className="footer-contact">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Florida, United States
              </p>
              <p>
                <i className="fas fa-phone"></i>
                1-844-372-7744
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                info@frassiaviation.com
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="footer-divider"></div>

        {/* Sección inferior del footer */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Frassi Aviation. All rights reserved.
            </p>
            <p>
              Website created by{' '}
              <a 
                href="https://github.com/moneeto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="creator-link"
              >
                Joaquin Palmeyro
              </a>
            </p>
          </div>
          
          <div className="footer-legal">
            <a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }}>
              Privacy Policy
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }}>
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
      
      {/* Modales Legales */}
      <LegalModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        title="Terms and Conditions"
        content={termsContent}
      />
      
      <LegalModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title="Privacy Policy"
        content={privacyContent}
      />
    </footer>
  );
};

export default Footer; 