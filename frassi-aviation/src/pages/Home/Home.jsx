import './Home.scss';
import backgroundImage from '../../assets/avionHOME.jpg';
import { Button } from 'reactstrap';

const Home = () => {


  return (
    <section id="home" style={{ minHeight: '100vh' }}>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="home-box">
          <div className="home-box-content"> 
            <h3 className="font-secondary">Welcome to</h3>
            <h1 className="font-primary"><b>FRASSI AVIATION</b></h1>
            <br />
            <p>Precision. Commitment. Aviation Excellence</p>
          </div>
          <div className="home-buttons">
            <Button color="secondary" outline className="home-button" onClick={() => window.location.href = '#services'}>
              <b>SEARCH IN SERVICES</b>
            </Button>
            <Button color="primary"className="home-button" onClick={() => window.location.href = '#aboutus'}>
              <b>LEARN MORE</b>
            </Button>
          </div>
          <hr />
          <div className="home-box-content">
            <p>Do you need advice or want to start a inquiry?</p>
            <Button color="primary" className="home-button" onClick={() => window.location.href = '#clientinquiry'}>
              <b>REQUEST A QUOTE</b>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;