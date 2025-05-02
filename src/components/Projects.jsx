import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './projects.css';
import arrowIcon from '../assets/Vector 1.png';
import lineIcon from '../assets/Line 7.png';
// Import all images
import restrictionsImage from '../assets/covr 2.png';
import ecommerceImage from '../assets/image 6.png';
import project3Image from '../assets/screen end or cover 2.png';
import project4Image from '../assets/B2 1.png';
import project5Image from '../assets/image 10.png';
import project6Image from '../assets/image 9.png';
import project7Image from '../assets/thumbnail 4 1.png';

const projects = [
  {
    id: 1,
    title: "Restrictions App - Real Estate",
    description: "A modern and user-friendly app for seamless property rentals and management",
    image: restrictionsImage,
    link: "https://www.behance.net/gallery/211353725/RentHaven-Project-Real-Estate-Mobile-App"
  },
  {
    id: 2,
    title: "Gehad Store - E-Commerce",
    description: "An E-Commerce Website for modest fashion with a seamless and modern experience",
    image: ecommerceImage,
    link: "https://www.behance.net/gallery/217923791/E-Commerce-Website-(Gehad-Store)"
  },
  {
    id: 3,
    title: "Admin dashboard-light&dark",
    description: "A modern and user-friendly interface for efficient site management",
    image: project3Image,
    link: "https://www.behance.net/gallery/217167443/Dashboard-Admin-Light-Dark"
  },
  {
    id: 4,
    title: "Mu'afa App - Mental Health",
    description: "A calming and intuitive app for mental health support and well-being",
    image: project4Image,
    link: "https://www.behance.net/gallery/218768431/-(Mental-Health-Mobile-App)"
  },
  {
    id: 5,
    title: "Booking Travel Trips-Responsive web design",
    description: "A seamless and modern website for booking travel adventures effortlessly",
    image: project5Image,
    link: "https://www.behance.net/gallery/215925691/Responsive-Web-Design-Booking-Travel-Trips"
  },
  {
    id: 6,
    title: "PetNest-Responsive Landing Page",
    description: "A modern and user-friendly landing page for pet care and adoption",
    image: project6Image,
     link: "https://www.behance.net/gallery/217172091/PetNest-(Responsive-Landing-Page)"
  },
  {
    id: 7,
    title: "Magic Book-Books App",
    description: "A modern and user-friendly app for reading and discovering books",
    image: project7Image,
     link: "https://www.behance.net/gallery/217865641/Books-Reading-App"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card focused
  const [fade, setFade] = useState(false);

  const getVisibleProjects = () => {
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    return [
      projects[prevIndex],
      projects[currentIndex],
      projects[nextIndex]
    ];
  };

  const navigate = (direction) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(prev => {
        if (direction === 'prev') {
          return prev === 0 ? projects.length - 1 : prev - 1;
        } else {
          return prev === projects.length - 1 ? 0 : prev + 1;
        }
      });
      setFade(false);
    }, 300);
  };

  const visibleProjects = getVisibleProjects();

  const handleCardClick = (project, index) => {
    if ((project.id === 1||project.id === 2||project.id === 3 || project.id === 4||project.id === 5|| project.id ===6 || project.id ===7 ) && index === 1) { // For both Admin Dashboard and Mental Health cards when centered
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
  
<div className="section-title">
  <div className="title-container">
    <h2>projects</h2>
    <img 
      src={arrowIcon} 
      alt=""
      className="title-arrow"
    />
  </div>
  <img 
    src={lineIcon} 
    alt=""
    className="title-line"
  />
</div>
        
        <div className="projects-container">
          <button className="nav-arrow prev-arrow" onClick={() => navigate('prev')}>
            &lt;
          </button>
          
          <div className="cards-wrapper">
            {visibleProjects.map((project, index) => (
              <div 
                key={`${project.id}-${currentIndex}`}
                className={`project-card ${index === 1 ? 'center-card' : 'side-card'} ${index === 1 && fade ? 'fade' : ''}`}
                onClick={() => handleCardClick(project, index)}
                style={{
                  cursor: (project.id === 1||project.id === 2||project.id === 3 || project.id === 4||project.id === 5|| project.id === 6|| project.id === 7) && index === 1 ? 'pointer' : 'default'
                }}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-text-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="nav-arrow next-arrow" onClick={() => navigate('next')}>
            &gt;
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Projects;