import Home from './pages/Home/Home.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Certificates from './pages/Certificates/Certificates.jsx'
import Services from './pages/Services/Services.jsx'
import ClientInquiry from './pages/ClientInquiry/ClientInquiry.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import Partners from './pages/Partners/Partners.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import './App.scss'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Certificates />
      <Services />
      <ClientInquiry />
      <Gallery />
      <Partners />
      <Contact />
    </>
  )
}

export default App
