import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '../components/AnimatedSection';

const Stem: React.FC = () => {
  const seasons = [
    '2019: SKYSTONE',
    '2020: ULTIMATE GOAL', 
    '2021: FREIGHT FRENZY',
    '2022: POWERPLAY',
    '2023: CENTERSTAGE',
    '2024: INTO THE DEEP'
  ];

  const awards = [
    {
      title: 'Motivate Award (2024)',
      icon: 'award',
      description: 'Recognized at the Greyhound Sprint Qualifier for our team\'s outstanding outreach efforts, embodiment of FIRST core values, and ability to inspire others within the STEM community.',
      delay: 0.2
    },
    {
      title: 'Connect Award (Feb 2025)',
      icon: 'link',
      description: 'Celebrated at the Eastern Pennsylvania Qualifier for successfully engaging with the local and broader STEM community, connecting with engineers and business professionals to share knowledge and foster industry partnerships.',
      delay: 0.3
    }
  ];

  const globalOutreach = [
    {
      title: 'FIRST Global Mentorship',
      icon: 'globe',
      image: '/img/firstglobal.jpg',
      description: 'As a mentor and outreach volunteer, I\'ve had the privilege of supporting international student teams in an "Olympics-style" robotics challenge. This involves providing virtual technical support, sharing resources, and fostering innovation with teams from diverse regions like Niger, Canada, and Bolivia, promoting cross-cultural understanding through a shared passion for STEM.',
      delay: 0.2
    },
    {
      title: 'National Society of High School Scholars (NSHSS)',
      icon: 'user-graduate',
      image: '/img/nshss.jpg',
      description: 'My NSHSS membership connects me with a distinguished global network of high-achieving peers and educators. It provides access to valuable resources, scholarship opportunities, and a platform for engagement with future leaders dedicated to academic excellence and social change, further fueling my aspirations.',
      delay: 0.3
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* FTC Team Section */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">FTC Team 14464 BotBusters</h1>
            <p className="lead text-light-secondary col-lg-8 mx-auto mb-5">
              My passion for STEM finds its most dynamic expression in my role with FTC Team 14464 "BotBusters." Since joining in our rookie year (2018), I've grown as a Lead Programmer, architecting solutions that drive our competitive edge.
            </p>
          </AnimatedSection>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="slideLeft" delay={0.2}>
                <img 
                  src="/img/ftc-team.jpg" 
                  alt="FTC Team 14464 BotBusters" 
                  className="img-fluid rounded-3 shadow-lg mb-4 mb-lg-0" 
                  style={{ border: '2px solid var(--border-dark)' }}
                />
                <div className="text-center mt-3">
                  <a 
                    href="http://AI-Robotics.us" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-hero-secondary btn-sm me-2"
                  >
                    <FontAwesomeIcon icon="globe" className="me-2" />
                    Team Website
                  </a>
                  <a 
                    href="https://www.instagram.com/botbusters_14464/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-hero-secondary btn-sm"
                  >
                    <FontAwesomeIcon icon={['fab', 'instagram']} className="me-2" />
                    Team Instagram
                  </a>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="col-lg-6">
              <AnimatedSection animation="slideRight" delay={0.4}>
                <h2 className="h3 text-accent mb-3">
                  <FontAwesomeIcon icon="cogs" className="me-2" />
                  Lead Programmer & Innovator
                </h2>
                <p className="text-light-secondary">
                  As Lead Programmer, I spearhead the development of sophisticated autonomous and tele-operated control systems. My responsibilities span the entire software development lifecycle, from initial algorithm design to final implementation and testing.
                </p>
                <ul className="list-group details-list">
                  <li className="list-group-item">
                    <strong>Autonomous Programming:</strong> Designing complex navigation algorithms using sensors, computer vision, and path planning.
                  </li>
                  <li className="list-group-item">
                    <strong>Hardware Integration:</strong> Seamlessly connecting software with mechanical systems, motors, and sensors.
                  </li>
                  <li className="list-group-item">
                    <strong>Team Leadership:</strong> Mentoring junior programmers and coordinating with mechanical and electrical sub-teams.
                  </li>
                  <li className="list-group-item">
                    <strong>Technical Portfolio & Presentation:</strong> Articulating our design process, innovations, and outreach efforts to judges.
                  </li>
                </ul>
              </AnimatedSection>
            </div>
          </div>

          {/* Seasons & Achievements */}
          <AnimatedSection className="mt-5">
            <hr className="hr-custom my-5" />
            <h3 className="text-center text-light-primary mb-4">
              <FontAwesomeIcon icon="calendar-alt" className="me-2 text-accent" />
              Competitive Seasons & Achievements
            </h3>
            <p className="text-center text-light-secondary mb-4">
              We've embraced the unique challenges of each FTC season, consistently growing and evolving:
            </p>
            <div className="row g-3 justify-content-center text-center">
              {seasons.map((season, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <motion.span
                    className="badge bg-dark-secondary text-light-primary p-2 w-100 shadow-sm border border-secondary"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {season}
                  </motion.span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Awards */}
          <div className="row g-4 mt-4 justify-content-center">
            {awards.map((award, index) => (
              <div key={index} className="col-md-6 col-lg-5 d-flex align-items-stretch">
                <AnimatedSection 
                  className="w-100"
                  animation="slideUp"
                  delay={award.delay}
                >
                  <div className="custom-card p-3">
                    <div className="card-body text-center">
                      <FontAwesomeIcon 
                        icon={award.icon as any} 
                        className="fa-3x mb-3 text-accent" 
                      />
                      <h4 className="card-title">{award.title}</h4>
                      <p className="card-text">{award.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global STEM Outreach */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Global STEM Outreach</h2>
          </AnimatedSection>
          
          <div className="row g-4">
            {globalOutreach.map((item, index) => (
              <div key={index} className="col-md-6 d-flex align-items-stretch">
                <AnimatedSection 
                  className="w-100"
                  animation="zoomIn"
                  delay={item.delay}
                >
                  <div className="custom-card">
                    <div className="card-img-top-wrapper">
                      <img src={item.image} className="card-img-top" alt={item.title} />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <FontAwesomeIcon icon={item.icon as any} className="me-2" />
                        {item.title}
                      </h3>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Stem;
