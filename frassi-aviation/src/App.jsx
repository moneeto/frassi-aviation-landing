import Home from './pages/Home/Home.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import CertificatesAndMachX from './pages/Certificates/Certificates.jsx'
import Services from './pages/Services/Services.jsx'
import ClientInquiry from './pages/ClientInquiry/ClientInquiry.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import Partners from './pages/Partners/Partners.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Footer from './components/Footer.jsx'
import './App.scss'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <CertificatesAndMachX />
      <Services />
      <Gallery />
      <ClientInquiry />
      <Partners />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
