import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SkillProgress from '../components/SkillProgress';
import Timeline from '../components/Timeline';
import ImageGallery from '../components/ImageGallery';

const About: React.FC = () => {
  const skills = [
    { name: 'Biotechnology Research', level: 92, color: '#8a2be2' },
    { name: 'Python Programming', level: 88, color: '#00d4ff' },
    { name: 'Data Analysis', level: 85, color: '#ff6b6b' },
    { name: 'Leadership', level: 95, color: '#4ecdc4' },
    { name: 'Scientific Writing', level: 87, color: '#ffe66d' },
    { name: 'Project Management', level: 90, color: '#ff8c42' }
  ];

  const timelineEvents = [
    {
      date: '2023-Present',
      title: '11th Grade - Advanced Studies',
      description: 'Pursuing rigorous AP coursework while maintaining academic excellence and leading multiple STEM initiatives.',
      category: 'academic' as const,
      color: '#8a2be2'
    },
    {
      date: '2022',
      title: 'DECA State Qualifier',
      description: 'Achieved state-level qualification in business competition, demonstrating leadership and strategic thinking.',
      category: 'achievement' as const,
      color: '#4ecdc4'
    },
    {
      date: '2021-Present',
      title: 'Global STEM Mentor',
      description: 'Leading international mentorship programs supporting STEM education in underserved communities.',
      category: 'stem' as const,
      color: '#00d4ff'
    },
    {
      date: '2020-Present',
      title: 'Community Service Leader',
      description: 'Over a decade of dedicated service to Central PA Food Bank and cultural community organizations.',
      category: 'community' as const,
      color: '#ff6b6b'
    }
  ];

  const personalImages = [
    { 
      src: '/img/aklavya.jpg', 
      alt: 'Aklavya Kumar', 
      category: 'personal',
      title: 'About Me',
      description: 'Passionate student and innovator'
    },
    { 
      src: '/img/abha.jpg', 
      alt: 'ABHA Community', 
      category: 'community',
      title: 'Cultural Heritage',
      description: 'Proud member of Bengali community'
    },
    { 
      src: '/img/cv.jpeg', 
      alt: 'Cumberland Valley', 
      category: 'academic',
      title: 'Academic Excellence',
      description: 'Honor student at Cumberland Valley HS'
    }
  ];

  return (
    <>
      {/* Hero Section with Centered Image */}
      <section className="about-hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 order-lg-2">
              <AnimatedSection animation="zoomIn">
                <div className="about-image-container">
                  <div className="about-main-image">
                    <img 
                      src="/img/aklavya.jpg" 
                      alt="Aklavya Kumar" 
                      className="profile-image-large"
                    />
                    <div className="image-border-effect"></div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6 order-lg-1">
              <AnimatedSection animation="slideLeft">
                <h1 className="display-2 fw-bold mb-4">
                  About <span className="gradient-text">Me</span>
                </h1>
                <p className="lead mb-4">
                  A passionate 11th-grade student at Cumberland Valley High School, 
                  dedicated to pushing the boundaries of biotechnology and making a 
                  meaningful impact through science and innovation.
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <h3 className="stat-number">10+</h3>
                    <p className="stat-label">Years Community Service</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">5+</h3>
                    <p className="stat-label">Leadership Roles</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">15+</h3>
                    <p className="stat-label">Projects Completed</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Gallery */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <AnimatedSection animation="slideUp">
            <h2 className="section-title">My Journey in Pictures</h2>
            <p className="text-center text-light-secondary mb-5 lead">
              Moments that define my path and passion
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="zoomIn" delay={0.2}>
            <ImageGallery images={personalImages} />
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <AnimatedSection animation="slideLeft">
                <h2 className="section-title text-start">Core Competencies</h2>
                <p className="text-light-secondary mb-4 lead">
                  Areas where I excel and continue to grow, combining technical expertise 
                  with leadership capabilities.
                </p>
                <div className="competency-highlights">
                  <div className="competency-item">
                    <i className="fas fa-dna"></i>
                    <div>
                      <h4>Scientific Research</h4>
                      <p>Biotechnology, data analysis, and experimental design</p>
                    </div>
                  </div>
                  <div className="competency-item">
                    <i className="fas fa-users"></i>
                    <div>
                      <h4>Team Leadership</h4>
                      <p>Leading diverse teams in academic and community settings</p>
                    </div>
                  </div>
                  <div className="competency-item">
                    <i className="fas fa-globe"></i>
                    <div>
                      <h4>Global Impact</h4>
                      <p>International mentorship and community outreach</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="slideRight" delay={0.2}>
                <SkillProgress skills={skills} />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <AnimatedSection animation="slideUp">
            <h2 className="section-title">My Timeline</h2>
            <p className="text-center text-light-secondary mb-5 lead">
              Key milestones and achievements that have shaped my journey
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeIn" delay={0.3}>
            <Timeline events={timelineEvents} />
          </AnimatedSection>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection animation="slideUp">
            <h2 className="section-title">My Philosophy</h2>
          </AnimatedSection>
          
          <div className="row g-5">
            <div className="col-lg-4">
              <AnimatedSection animation="slideLeft" delay={0.1}>
                <div className="philosophy-card">
                  <div className="philosophy-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h3>Innovation</h3>
                  <p>
                    I believe in the power of creative thinking to solve complex problems. 
                    Every challenge is an opportunity to innovate and create meaningful solutions.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="col-lg-4">
              <AnimatedSection animation="slideUp" delay={0.2}>
                <div className="philosophy-card">
                  <div className="philosophy-icon">
                    <i className="fas fa-hands-helping"></i>
                  </div>
                  <h3>Service</h3>
                  <p>
                    True success comes from lifting others up. Through community service 
                    and mentorship, I strive to make a positive impact in people's lives.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="col-lg-4">
              <AnimatedSection animation="slideRight" delay={0.3}>
                <div className="philosophy-card">
                  <div className="philosophy-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h3>Excellence</h3>
                  <p>
                    I am committed to continuous learning and growth, always pushing 
                    myself to achieve higher standards in academics, leadership, and personal development.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <AnimatedSection animation="zoomIn">
                <div className="cta-content">
                  <h2 className="display-4 mb-4">Want to Learn More?</h2>
                  <p className="lead mb-5 text-light-secondary">
                    Explore my academic achievements, STEM projects, and community involvement 
                    to get a complete picture of my journey and aspirations.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/academics" className="btn-hero-primary btn-lg">
                      <i className="fas fa-graduation-cap"></i>
                      Academic Excellence
                    </Link>
                    <Link to="/stem" className="btn-hero-secondary btn-lg">
                      <i className="fas fa-flask"></i>
                      STEM Projects
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

export default About;
