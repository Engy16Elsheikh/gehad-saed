import { Container, Row, Col } from 'react-bootstrap';
import { Book, Briefcase } from 'react-bootstrap-icons';
import educationArrowIcon from '../assets/Vector 1.png';

export default function Education() {
  return (
    <section id="education" style={{ backgroundColor: '#1F304C', color: 'white' }} className="py-5">
      <Container>
        {/* Header Section */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <h2 style={{ 
              textAlign: 'center',
              fontWeight: '700',
              fontSize: '2.5rem',
              color: 'white',
              textTransform: 'lowercase',
              margin: 0,
              display: 'inline-block'
            }}>
              education & internships
            </h2>
            <img 
              src={educationArrowIcon} 
              alt=""
              style={{ 
                width: '20px',
                position: 'absolute',
                top: 0,
                right: '-25px',
                transform: 'rotate(-45deg)'
              }}
            />
          </div>
        </div>
        
        {/* Content Boxes */}
        <Row className="g-4 justify-content-center">
          {/* Education Box */}
          <Col md={5}>
            <div className="p-4 rounded" style={{ 
              backgroundColor: '#315C9C', 
              minHeight: '300px',
              position: 'relative',
              paddingLeft: '2rem', // Add space for the vertical line
              borderLeft: '4px solid white', // Vertical white line
              borderTopLeftRadius: '0.5rem',
              borderBottomLeftRadius: '0.5rem'
            }}>
              <div className="d-flex align-items-center mb-4">
                <Book size={18} className="me-2" />
                <h3 className="fw-bold mb-0">Education</h3>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold" style={{ color: '#B8C7D8' }}>Sep 2025 – Jun 2023</span>
                </div>
                <h4 className="fw-bold mb-1">Professional Diploma in Psychological Counseling</h4>
                <p className="mb-0" style={{ color: '#B8C7D8' }}>Dinamihar University</p>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold" style={{ color: '#B8C7D8' }}>Sep 2018 – Jul 2022</span>
                </div>
                <h4 className="fw-bold mb-1">Bachelor's Degree in Psychology</h4>
                <p className="mb-0" style={{ color: '#B8C7D8' }}>Dinamihar University</p>
              </div>
            </div>
          </Col>

          {/* Internships Box */}
          <Col md={5}>
            <div className="p-4 rounded" style={{ 
              backgroundColor: '#315C9C', 
              minHeight: '300px',
              position: 'relative',
              paddingLeft: '2rem', // Add space for the vertical line
              borderLeft: '4px solid white', // Vertical white line
              borderTopLeftRadius: '0.5rem',
              borderBottomLeftRadius: '0.5rem'
            }}>
              <div className="d-flex align-items-center mb-4">
                <Briefcase size={18} className="me-2" />
                <h3 className="fw-bold mb-0">Internships</h3>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold" style={{ color: '#B8C7D8' }}>Dec 2026 – Apr 2025</span>
                </div>
                <h4 className="fw-bold mb-1">UI/UX Design Intensive Training Program</h4>
                <p className="mb-0" style={{ color: '#B8C7D8' }}>Information Technology Institute (ITI)</p>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold" style={{ color: '#B8C7D8' }}>Apr 2026 – Oct 2026</span>
                </div>
                <h4 className="fw-bold mb-1">UI/UX Web Designer</h4>
                <p className="mb-0" style={{ color: '#B8C7D8' }}>Digital Expert Process Initiative (CEPI)</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}