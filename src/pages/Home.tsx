import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ParticleBackground from '../components/ParticleBackground';
import ImageGallery from '../components/ImageGallery';

const Home: React.FC = () => {
  const heroImages = [
    { src: '/img/aklavya.jpg', alt: 'Aklavya Kumar', category: 'profile', title: 'Aklavya Kumar', description: 'Student & Innovator' },
    { src: '/img/biotech.jpg', alt: 'Biotechnology', category: 'stem', title: 'Biotechnology', description: 'Science & Innovation' },
    { src: '/img/nasa.webp', alt: 'Space & Innovation', category: 'innovation', title: 'Space Exploration', description: 'Future Goals' }
  ];

  return (
    <>
      {/* Hero Section with Particle Background */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticleBackground />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 text-center text-lg-start">
              <AnimatedSection animation="slideLeft">
                <h1 className="display-1 fw-bold mb-4">
                  <span className="gradient-text">Aklavya</span><br />
                  <span className="text-accent">Kumar</span>
                </h1>
                <p className="lead mb-4">
                  <span className="hero-typed-text">Biotechnology Innovator</span><br />
                  <span className="text-light-secondary">Shaping the Future Through Science & Technology</span>
                </p>
                <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
                  <Link to="/about" className="btn-hero-primary">
                    <i className="fas fa-rocket"></i>
                    Explore My Journey
                  </Link>
                  <Link to="/stem" className="btn-hero-secondary">
                    <i className="fas fa-flask"></i>
                    View Projects
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="zoomIn" delay={0.3}>
                <div className="hero-image-container">
                  <div className="floating-image-wrapper">
                    <img 
                      src="/img/aklavya.jpg" 
                      alt="Aklavya Kumar" 
                      className="hero-profile-image"
                    />
                    <div className="floating-orb orb-1"></div>
                    <div className="floating-orb orb-2"></div>
                    <div className="floating-orb orb-3"></div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <AnimatedSection animation="slideUp">
            <h2 className="section-title">My World in Images</h2>
            <p className="text-center text-light-secondary mb-5 lead">
              A visual journey through my passions, achievements, and aspirations
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="zoomIn" delay={0.2}>
            <ImageGallery images={heroImages} />
          </AnimatedSection>
        </div>
      </section>

      {/* Innovation Cards with Hover Effects */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection animation="slideUp">
            <h2 className="section-title">Innovation Areas</h2>
          </AnimatedSection>
          
          <div className="row g-5">
            <div className="col-lg-4">
              <AnimatedSection animation="slideLeft" delay={0.1}>
                <div className="innovation-card">
                  <div className="innovation-icon">
                    <i className="fas fa-dna"></i>
                  </div>
                  <div className="innovation-image">
                    <img src="/img/biotech.jpg" alt="Biotechnology" />
                  </div>
                  <div className="innovation-content">
                    <h3>Biotechnology</h3>
                    <p>Exploring genetic engineering, biomedical devices, and sustainable solutions for global challenges.</p>
                    <Link to="/stem" className="innovation-link">
                      Learn More <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="col-lg-4">
              <AnimatedSection animation="slideUp" delay={0.2}>
                <div className="innovation-card">
                  <div className="innovation-icon">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="innovation-image">
                    <img src="/img/ftc-team.jpg" alt="Robotics" />
                  </div>
                  <div className="innovation-content">
                    <h3>Robotics & AI</h3>
                    <p>Building autonomous systems and leading competitive robotics teams to victory.</p>
                    <Link to="/community" className="innovation-link">
                      Discover More <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="col-lg-4">
              <AnimatedSection animation="slideRight" delay={0.3}>
                <div className="innovation-card">
                  <div className="innovation-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="innovation-image">
                    <img src="/img/nasa.webp" alt="Space Technology" />
                  </div>
                  <div className="innovation-content">
                    <h3>Space Medicine</h3>
                    <p>Researching biotechnology applications for space exploration and human adaptation.</p>
                    <Link to="/aspirations" className="innovation-link">
                      Explore Vision <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Background */}
      <section className="cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <AnimatedSection animation="zoomIn">
                <div className="cta-content">
                  <h2 className="display-4 mb-4">Let's Create the Future Together</h2>
                  <p className="lead mb-5 text-light-secondary">
                    Whether it's discussing cutting-edge biotechnology, collaborating on innovative projects, 
                    or exploring new frontiers in science and technology.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/contact" className="btn-hero-primary btn-lg">
                      <i className="fas fa-paper-plane"></i>
                      Start a Conversation
                    </Link>
                    <Link to="/academics" className="btn-hero-secondary btn-lg">
                      <i className="fas fa-graduation-cap"></i>
                      View Achievements
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
