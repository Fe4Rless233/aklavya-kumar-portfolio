import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ImageGallery from '../components/ImageGallery';
import ParticleBackground from '../components/ParticleBackground';

const Stem: React.FC = () => {
  const stemImages = [
    { 
      src: '/img/biotech.jpg', 
      alt: 'Biotechnology Research', 
      category: 'research',
      title: 'Biotechnology Research',
      description: 'Exploring genetic engineering and biomedical applications'
    },
    { 
      src: '/img/ftc-team.jpg', 
      alt: 'FTC Robotics Team', 
      category: 'robotics',
      title: 'FTC Robotics',
      description: 'Leading competitive robotics teams to victory'
    },
    { 
      src: '/img/cvcoding.png', 
      alt: 'Programming Projects', 
      category: 'coding',
      title: 'Programming Excellence',
      description: 'Advanced coding and software development'
    },
    { 
      src: '/img/nasa.webp', 
      alt: 'Space Technology', 
      category: 'space',
      title: 'Space Technology',
      description: 'Aerospace engineering and space medicine research'
    },
    { 
      src: '/img/firstglobal.jpg', 
      alt: 'FIRST Global', 
      category: 'global',
      title: 'Global STEM Outreach',
      description: 'International mentorship and education initiatives'
    },
    { 
      src: '/img/nshss.jpg', 
      alt: 'NSHSS Recognition', 
      category: 'achievement',
      title: 'Academic Recognition',
      description: 'Honor society membership and achievements'
    }
  ];

  const projectCards = [
    {
      title: 'Biomedical Device Innovation',
      category: 'Biotechnology',
      image: '/img/biotech.jpg',
      description: 'Developing next-generation biomedical devices that integrate AI and biotechnology for personalized healthcare solutions.',
      technologies: ['Python', 'Machine Learning', 'Bioengineering', 'Data Analysis'],
      status: 'In Progress',
      color: '#8a2be2'
    },
    {
      title: 'FTC Robotics Championship',
      category: 'Robotics',
      image: '/img/ftc-team.jpg',
      description: 'Leading a competitive robotics team through multiple seasons, achieving state-level recognition and awards.',
      technologies: ['Java', 'Mechanical Design', 'Computer Vision', 'Autonomous Programming'],
      status: 'Ongoing',
      color: '#00d4ff'
    },
    {
      title: 'Genetic Algorithm Optimization',
      category: 'Computer Science',
      image: '/img/cvcoding.png',
      description: 'Implementing advanced genetic algorithms for solving complex optimization problems in biotechnology.',
      technologies: ['Python', 'Algorithms', 'Optimization', 'Scientific Computing'],
      status: 'Completed',
      color: '#4ecdc4'
    },
    {
      title: 'Space Medicine Research',
      category: 'Aerospace',
      image: '/img/nasa.webp',
      description: 'Investigating biotechnology applications for space exploration and human adaptation to extreme environments.',
      technologies: ['Research', 'Data Analysis', 'Biotechnology', 'Space Medicine'],
      status: 'Research Phase',
      color: '#ff6b6b'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'FTC Motivate Award',
      description: 'Recognized for outstanding outreach efforts and inspiring the STEM community',
      icon: 'trophy',
      color: '#FFD700'
    },
    {
      year: '2024',
      title: 'NSHSS Membership',
      description: 'Selected for academic excellence and leadership potential',
      icon: 'star',
      color: '#8a2be2'
    },
    {
      year: '2023',
      title: 'FIRST Global Mentor',
      description: 'Leading international robotics mentorship programs',
      icon: 'globe',
      color: '#00d4ff'
    },
    {
      year: '2022',
      title: 'Advanced Programming',
      description: 'Mastery in multiple programming languages and frameworks',
      icon: 'code',
      color: '#4ecdc4'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="stem-hero-section" style={{ position: 'relative' }}>
        <ParticleBackground />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <AnimatedSection animation="zoomIn">
                <h1 className="display-1 fw-bold mb-4">
                  <span className="gradient-text">STEM</span> Excellence
                </h1>
                <p className="lead mb-5">
                  Exploring the frontiers of Science, Technology, Engineering, and Mathematics 
                  through innovative research, competitive robotics, and global outreach initiatives.
                </p>
                <div className="stem-stats-grid">
                  <div className="stem-stat-item">
                    <h3>6+</h3>
                    <p>Years in Robotics</p>
                  </div>
                  <div className="stem-stat-item">
                    <h3>15+</h3>
                    <p>Programming Languages</p>
                  </div>
                  <div className="stem-stat-item">
                    <h3>3</h3>
                    <p>Countries Mentored</p>
                  </div>
                  <div className="stem-stat-item">
                    <h3>10+</h3>
                    <p>Projects Completed</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <AnimatedSection animation="slideUp">
            <h2 className="section-title">STEM Journey Gallery</h2>
            <p className="text-center text-light-secondary mb-5 lead">
              A visual showcase of my projects, achievements, and contributions to the STEM community
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="zoomIn" delay={0.2}>
            <ImageGallery images={stemImages} />
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection animation="slideUp">
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-center text-light-secondary mb-5 lead">
              Innovative solutions at the intersection of technology and real-world impact
            </p>
          </AnimatedSection>
          
          <div className="row g-4">
            {projectCards.map((project, index) => (
              <div key={index} className="col-lg-6">
                <AnimatedSection animation="slideUp" delay={index * 0.1}>
                  <div className="project-card">
                    <div className="project-image-container">
                      <img src={project.image} alt={project.title} className="project-image" />
                      <div className="project-overlay">
                        <span className="project-category">{project.category}</span>
                        <span className="project-status" style={{ backgroundColor: project.color }}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag" style={{ borderColor: project.color }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <AnimatedSection animation="slideUp">
            <h2 className="section-title">Key Achievements</h2>
            <p className="text-center text-light-secondary mb-5 lead">
              Recognition and milestones in my STEM journey
            </p>
          </AnimatedSection>
          
          <div className="achievements-timeline">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} animation="slideLeft" delay={index * 0.2}>
                <div className="achievement-item">
                  <div className="achievement-icon" style={{ backgroundColor: achievement.color }}>
                    <i className={`fas fa-${achievement.icon}`}></i>
                  </div>
                  <div className="achievement-content">
                    <div className="achievement-year">{achievement.year}</div>
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection animation="slideUp">
            <h2 className="section-title">Research Focus Areas</h2>
          </AnimatedSection>
          
          <div className="row g-5">
            <div className="col-lg-4">
              <AnimatedSection animation="slideLeft" delay={0.1}>
                <div className="research-focus-card">
                  <div className="research-icon">
                    <i className="fas fa-dna"></i>
                  </div>
                  <h3>Biotechnology</h3>
                  <p>
                    Genetic engineering, biomedical devices, and sustainable biotechnology 
                    solutions for global health challenges.
                  </p>
                  <ul className="research-topics">
                    <li>Gene Therapy</li>
                    <li>Biomedical Devices</li>
                    <li>Synthetic Biology</li>
                    <li>Personalized Medicine</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="col-lg-4">
              <AnimatedSection animation="slideUp" delay={0.2}>
                <div className="research-focus-card">
                  <div className="research-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h3>Space Medicine</h3>
                  <p>
                    Investigating how biotechnology can support human space exploration 
                    and adaptation to extreme environments.
                  </p>
                  <ul className="research-topics">
                    <li>Radiation Protection</li>
                    <li>Bone Density Loss</li>
                    <li>Psychological Health</li>
                    <li>Life Support Systems</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="col-lg-4">
              <AnimatedSection animation="slideRight" delay={0.3}>
                <div className="research-focus-card">
                  <div className="research-icon">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h3>AI & Robotics</h3>
                  <p>
                    Combining artificial intelligence with robotics to create 
                    autonomous systems for healthcare and space applications.
                  </p>
                  <ul className="research-topics">
                    <li>Computer Vision</li>
                    <li>Machine Learning</li>
                    <li>Autonomous Navigation</li>
                    <li>Human-Robot Interaction</li>
                  </ul>
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
                  <h2 className="display-4 mb-4">Collaborate on Innovation</h2>
                  <p className="lead mb-5 text-light-secondary">
                    Interested in STEM collaboration, research partnerships, or learning 
                    more about my projects? Let's explore the possibilities together.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/contact" className="btn-hero-primary btn-lg">
                      <i className="fas fa-flask"></i>
                      Start a Project
                    </Link>
                    <Link to="/academics" className="btn-hero-secondary btn-lg">
                      <i className="fas fa-graduation-cap"></i>
                      View Academic Work
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

export default Stem;
