import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutImage from '../assets/about.png'; // Your about photo
import arrowIcon from '../assets/Vector 1.png'; // Your arrow icon
import lineIcon from '../assets/Line 7.png'; // Your line/decorative icon

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#1F304C', color: 'white' }} className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Text Content */}
          <Col lg={6} className="mt-4 mt-lg-0">
            <img 
              src={aboutImage} 
              alt="About Gehad Saied" 
              style={{
                width: '90%',
                borderRadius: '10px',
                maxHeight: '500px',
                objectFit: 'cover'
              }}
            />
          </Col>
          <Col lg={6} className="pe-lg-5">
            <div className="d-flex align-items-center mb-4">
             
                
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold',
                margin: 0
              }}>
                About Me
              </h2>
              <img 
                src={arrowIcon} 
                alt=""
                style={{ width: '20px', marginLeft: '10px' }}
              />
            </div>
            <img 
                src={lineIcon} 
                alt=""
                style={{ width: '60px', marginLeft: '45px',marginBottom:"20px" }}
              />
            <p style={{ 
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontSize: '1.1rem'
            }}>
              I am a graduate of the Faculty of Education, Department of
              Psychology, combining my passion for psychology and
              design. My interest in understanding human behavior and
              user needs led me to the UI/UX field.
            </p>
            
            <p style={{ 
              lineHeight: '1.6',
              marginBottom: '2rem',
              fontSize: '1.1rem'
            }}>
              In UI/UX, I merge user empathy with visual aesthetics and
              design principles to create experiences that are both
              intuitive and visually appealing.
            </p>
            
            <div className="d-flex align-items-center">
              <Button 
                variant="light" 
                className="px-4 py-2 rounded-pill" 
                style={{ 
                  backgroundColor: '#315C9C', 
                  color: 'white',
                  fontWeight: 'bold',
                  border: 'none'
                }}
              >
                Hire Me
              </Button>
            
            </div>
          </Col>

          {/* Right Column - Image */}
      
        </Row>
      </Container>
    </section>
  );
}