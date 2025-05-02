import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import heroImage from '../assets/hero.png';
import vectorImage from '../assets/Vector 2.png';
import vector_Image from '../assets/Vector 1.png';
import logoImage from '../assets/Logo.png';

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: '#1F304C', 
      color: 'white',
      padding: '2rem 0'
    }}>
      <Container>
        {/* Top Navigation */}
        <Navbar expand="lg" className="justify-content-center mb-4">
          <Nav className="gap-4">
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500} 
              style={{ 
                color: 'white', 
                fontWeight: '500',
                cursor: 'pointer'
              }}
              className="nav-link"
            >
              Home
            </ScrollLink>
            
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={100} 
              style={{ 
                color: 'white', 
                fontWeight: '500',
                cursor: 'pointer'
              }}
              className="nav-link"
            >
              About
            </ScrollLink>
            
            <ScrollLink 
              to="projects" 
              smooth={true} 
              duration={100} 
              style={{ 
                color: 'white', 
                fontWeight: '500',
                cursor: 'pointer'
              }}
              className="nav-link"
            >
              Projects
            </ScrollLink>
            
            <Navbar.Brand className="mx-4">
              <img 
                src={logoImage} 
                alt="Logo" 
                style={{ 
                  height: '40px',
                  width: 'auto' 
                }}
              />
            </Navbar.Brand>
            
            <ScrollLink 
              to="services" 
              smooth={true} 
              duration={100} 
              style={{ 
                color: 'white', 
                fontWeight: '500',
                cursor: 'pointer'
              }}
              className="nav-link"
            >
              Services
            </ScrollLink>
            
            <ScrollLink 
              to="education" 
              smooth={true} 
              duration={100} 
              style={{ 
                color: 'white', 
                fontWeight: '500',
                cursor: 'pointer'
              }}
              className="nav-link"
            >
              Education & Internships
            </ScrollLink>
            
          <Nav.Link 
           href="https://drive.google.com/file/d/1PDWumoVHKXWhy8YCA3_z8wtAT9gytfZY/view?usp=drive_link" 
            target="_blank" 
           rel="noopener noreferrer"
          style={{ color: 'white', fontWeight: '500' }}
          >
               Resume
          </Nav.Link>
          </Nav>
        </Navbar>

        {/* Main Content */}
        <Row className="align-items-center">
          {/* Left Column - Text Content */}
          <Col lg={6} className="pe-lg-5">
        {/* Hello! section with positioned vector */}
<div style={{ position: 'relative', display: 'inline-block' }}>
  <p style={{ 
    fontSize: '1.25rem',
    color: '#FFFFFF',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50px',
    padding: '0.5rem 1.5rem',
    marginBottom: '0.5rem',
  }}>
    Hello!
  </p>
  <img 
    src={vector_Image} 
    alt=""
    style={{
      position: 'absolute',
      top: '-20px',    // Adjust to position vertically
      right: '-10px',  // Adjust to position horizontally
      width: '30px',   // Adjust size as needed
      height: '20px',   // Adjust size as needed
    }}
  />
</div>
            
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>I am Gehad Saied, UI/UX Designer</h1>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#B8C7D8',
              marginBottom: '2rem',
              maxWidth: '500px'
            }}>I believe simplicity is beauty. I bring this to my digital designs with a style that is clear and elegant.</p>
      <div style={{ 
  position: 'relative', 
  display: 'inline-block',
  marginBottom: '2rem'
}}>
  {/* Vector positioned centered above the button */}
  <img 
    src={vectorImage} 
    alt=""
    style={{
      position: 'absolute',
      top: '-30px',    // Half outside the button
      left: '50%',     // Center horizontally
      transform: 'translateX(-50%)', // Perfect centering
      width: '40px',
      height: '30px',
      zIndex: 1       // Ensure it appears above
    }}
  />
  
  {/* Contact Me Button */}
  <Button 
    variant="light" 
    style={{
      backgroundColor: '#315C9C',
      color: 'white',
      fontWeight: '600',
      padding: '0.85rem 3.5rem', // Slightly larger button
      borderRadius: '50px',
      border: 'none',
      position: 'relative'
    }}
  >
    Contact Me
  </Button>
</div>

            {/* Bottom Navigation */}
             

            {/* Profession Title */}
             
          </Col>

          {/* Right Column - Image */}
          <Col lg={6} className="d-flex justify-content-center mt-4 mt-lg-0">
            <img 
              src={heroImage} 
              alt="Gehad Saied UI/UX Designer" 
              style={{
                maxHeight: '500px',
                width: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
}