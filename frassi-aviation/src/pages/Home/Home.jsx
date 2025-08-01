import './Home.scss';
import backgroundImage from '../../assets/avionHOME.jpg';
import { Button } from 'reactstrap';
import { FaRocket, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" style={{ minHeight: '100vh' }}>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="home-container">
          {/* Hero Section - Título principal prominente */}
          <div className="hero-section">
            <div className="hero-content">
              <div className="hero-badge">
                <FaRocket className="hero-icon" />
                <span>Welcome to</span>
              </div>
              <h1 className="hero-title">
                <span className="title-main">FRASSI AVIATION</span>
                <span className="title-subtitle">Precision. Commitment. Aviation Excellence</span>
              </h1>
              <p className="hero-description">
                Your trusted partner in aviation services, delivering exceptional quality and reliability in every project.
              </p>
            </div>
          </div>

          {/* Action Buttons - Diseño minimalista */}
          <div className="action-buttons">
            <Button 
              color="primary" 
              className="action-button primary"
              onClick={() => window.location.href = '#services'}
            >
              <span>Explore Services</span>
              <FaArrowRight className="button-icon" />
            </Button>
            
            <Button 
              outline 
              color="primary" 
              className="action-button secondary"
              onClick={() => window.location.href = '#clientinquiry'}
            >
              <span>Get Quote</span>
              <FaArrowRight className="button-icon" />
            </Button>
          </div>

          {/* Quick Stats - Minimalista */}
          <div className="quick-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;