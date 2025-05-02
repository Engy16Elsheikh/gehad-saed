import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Envelope, Telephone, Facebook, Whatsapp, Linkedin, Behance } from 'react-bootstrap-icons';
 
import footerImage from '../assets/footer2.png';
import logoImage from '../assets/Logo.png';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#1E2F4B', 
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <Container>
        {/* Footer Image - Added before navigation */}
        <Row className="mb-4">
          <Col className="text-center">
            <img 
              src={footerImage} 
              alt="Footer decoration" 
              style={{ 
                width: '100%', 
                height: 'auto',
                display: 'block'
              }} 
            />
          </Col>
        </Row>

        {/* Navigation Links with Logo and Social Icons */}
        <Row className="mb-4 align-items-center">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <Nav className="flex-wrap" style={{ gap: '1.5rem' }}>
                <Navbar.Brand className="me-4">
                  <img 
                    src={logoImage} 
                    alt="Logo" 
                    style={{ 
                      height: '40px',
                      width: 'auto' 
                    }}
                  />
                </Navbar.Brand>
                <Nav.Link href="#" className="text-white px-0" style={{ fontSize: '1rem', fontWeight: 'normal' }}>Home</Nav.Link>
                <Nav.Link href="#" className="text-white px-0" style={{ fontSize: '1rem', fontWeight: 'normal' }}>About</Nav.Link>
                <Nav.Link href="#" className="text-white px-0" style={{ fontSize: '1rem', fontWeight: 'normal' }}>Projects</Nav.Link>
                <Nav.Link href="#" className="text-white px-0" style={{ fontSize: '1rem', fontWeight: 'normal' }}>Services</Nav.Link>
                <Nav.Link href="#" className="text-white px-0" style={{ fontSize: '1rem', fontWeight: 'normal' }}>Education & Internships</Nav.Link>
                <Nav.Link href="#" className="text-white px-0" style={{ fontSize: '1rem', fontWeight: 'normal' }}>Resume</Nav.Link>
              </Nav>
              
              {/* Social Media Icons - Right aligned */}
              <div className="d-flex" style={{ gap: '1rem' }}>
                <a href="https://www.facebook.com/gehad.saied.10" className="text-white">
                  <Facebook size={18} />
                </a>
                
                <a 
    href="https://wa.me/201151869605" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white"
  >
    <Whatsapp size={18} />  {/* Direct WhatsApp chat */}
  </a>
              <a 
                href="https://www.linkedin.com/in/gehad-saeid-812479282/"
                 target="_blank" 
                 rel="noopener noreferrer"
                className="text-white"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                href="https://www.behance.net/gehadsaied1" 
                 target="_blank" 
                 rel="noopener noreferrer"
                className="text-white"
                >
                       <Behance size={18} />  {/* Or <FaBehance /> if using react-icons */}
               </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Divider Line */}
        <Row className="mb-4">
          <Col>
            <hr style={{ 
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            }} />
          </Col>
        </Row>

        {/* Contact Information - Two Columns */}
        <Row className="mb-4">
          <Col md={6} className="mb-2 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ gap: '0.5rem' }}>
              <Envelope size={16} />
              <span>gehadsaied663@gmail.com</span>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex align-items-center justify-content-center justify-content-md-end" style={{ gap: '0.5rem' }}>
              <Telephone size={16} />
              <span>20+01151869605</span>
            </div>
          </Col>
        </Row>

        {/* Divider Line */}
        <Row className="mb-3">
          <Col>
            <hr style={{ 
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            }} />
          </Col>
        </Row>

        {/* Copyright and Policies - Two Columns */}
        <Row>
          <Col md={6} className="mb-2 mb-md-0 text-center text-md-start">
            <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              Copyright© 2025, gehad. All Rights Reserved
            </span>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div style={{ fontSize: '0.875rem' }}>
              <a href="#" className="text-white-50 me-2" style={{ textDecoration: 'none' }}>User Terms & Conditions</a>
              <span className="text-white-50 mx-1">|</span>
              <a href="#" className="text-white-50 ms-2" style={{ textDecoration: 'none' }}>Privacy Policy</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}