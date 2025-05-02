import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './services.css';
import image1 from '../assets/service1.png';
import image2 from '../assets/service2.png';
import image3 from '../assets/service3.png';
import servicesArrowIcon from '../assets/Vector 1.png';
import servicesLineIcon from '../assets/Line 7.png';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "UX Research & Prototyping",
      image: image1
    },
    {
      id: 2,
      title: "UI Design",
      image: image2
    },
    {
      id: 3,
      title: "App & Website Design",
      image: image3
    }
  ];

  return (
    <section id="services" className="services-section">
      <Container>
        <div className="services-title-container">
          <div className="services-title-wrapper">
            <h2 className="services-main-title">services</h2>
            <img 
              src={servicesArrowIcon} 
              alt=""
              className="services-title-arrow"
            />
          </div>
          <img 
            src={servicesLineIcon} 
            alt=""
            className="services-title-line"
          />
        </div>
        <Row className="g-4 justify-content-center">
          {services.map((service) => (
            <Col md={4} key={service.id}>
              <div className="service-card">
                <div className="service-content-container">
                  <div className="service-curved-bar"></div>
                  <h3 className="service-card-title">{service.title}</h3>
                </div>
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-card-image"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;