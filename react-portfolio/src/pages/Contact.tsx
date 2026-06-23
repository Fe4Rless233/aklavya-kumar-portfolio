import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '../components/AnimatedSection';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: ['fab', 'linkedin'],
      url: 'https://www.linkedin.com/in/aklavya-kumar-a2a4a4342/',
      description: 'Professional networking and career updates'
    },
    {
      platform: 'Instagram',
      icon: ['fab', 'instagram'],
      url: 'https://www.instagram.com/aklavyakumr/',
      description: 'Personal updates and behind-the-scenes content'
    }
  ];

  const teamLinks = [
    {
      platform: 'Team Website',
      icon: 'globe',
      url: 'http://AI-Robotics.us',
      description: 'Official FTC Team 14464 BotBusters website'
    },
    {
      platform: 'Team Instagram',
      icon: ['fab', 'instagram'],
      url: 'https://www.instagram.com/botbusters_14464/',
      description: '@botbusters_14464 - Team updates and achievements'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Let's Connect</h1>
            <p className="lead text-light-secondary col-lg-8 mx-auto mb-5">
              I'm always enthusiastic about engaging in thoughtful discussions, exploring novel ideas, and identifying potential collaborations. Whether it's about STEM, innovative technology, leadership, or community initiatives, I welcome meaningful connections.
            </p>
          </AnimatedSection>

          <div className="row g-5 justify-content-center">
            {/* Personal Social Links */}
            <div className="col-lg-5 col-md-6">
              <AnimatedSection animation="slideLeft" delay={0.2}>
                <div className="custom-card p-4" style={{ height: 'auto' }}>
                  <h3 className="card-title text-center mb-4">
                    <FontAwesomeIcon icon="share-alt" className="me-2" />
                    Connect Online
                  </h3>
                  <ul className="icon-list">
                    {socialLinks.map((link, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                      >
                        <FontAwesomeIcon icon={link.icon as any} />
                        <div>
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fw-bold"
                          >
                            {link.platform}
                          </a>
                          <div className="small text-light-secondary">
                            {link.description}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-light-secondary mt-4 small text-center">
                    You can also find me at local STEM events, robotics competitions, or volunteering in the Mechanicsburg community.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Team Links */}
            <div className="col-lg-5 col-md-6">
              <AnimatedSection animation="slideRight" delay={0.4}>
                <div className="custom-card p-4" style={{ height: 'auto' }}>
                  <h3 className="card-title text-center mb-4">
                    <FontAwesomeIcon icon="robot" className="me-2" />
                    FTC Team 14464 BotBusters
                  </h3>
                  <ul className="icon-list">
                    {teamLinks.map((link, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (index * 0.1) }}
                      >
                        <FontAwesomeIcon icon={link.icon as any} />
                        <div>
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fw-bold"
                          >
                            {link.platform}
                          </a>
                          <div className="small text-light-secondary">
                            {link.description}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-light-secondary mt-4 small text-center">
                    For inquiries specifically about our robotics team, outreach, or sponsorships, please use these official channels.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Divider */}
          <AnimatedSection animation="zoomIn" delay={0.5}>
            <hr className="hr-custom my-5" />
          </AnimatedSection>

          {/* Contact Information Note */}
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <AnimatedSection animation="slideUp" delay={0.6}>
                <h3 className="h4 text-accent mb-3">
                  <FontAwesomeIcon icon="envelope" className="me-2" />
                  A Note on Direct Contact
                </h3>
                <p className="text-light-secondary">
                  For privacy and security, direct personal contact information such as a personal email or phone number is not listed publicly on this website. For formal opportunities, professional inquiries, or educational collaborations, communication can typically be facilitated through my school advisors at Cumberland Valley High School or official channels associated with my extracurricular programs.
                </p>
                
                <div className="mt-4 p-4 rounded-3" style={{ backgroundColor: 'var(--bg-dark-secondary)', border: '1px solid var(--border-dark)' }}>
                  <h4 className="text-light-primary mb-2">
                    <FontAwesomeIcon icon="paper-plane" className="me-2" />
                    Future Contact Form
                  </h4>
                  <p className="text-light-secondary mb-0">
                    A direct contact form may be implemented here in the future for streamlined communication. Thank you for your understanding!
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Connect Section */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <AnimatedSection animation="fadeIn">
                <h2 className="h3 text-accent mb-4">
                  <FontAwesomeIcon icon="handshake" className="me-2" />
                  Let's Build Something Amazing
                </h2>
                <p className="lead text-light-secondary mb-4">
                  Whether you're interested in discussing innovative projects, exploring collaboration opportunities, or simply connecting over shared interests in STEM and technology, I'd love to hear from you.
                </p>
                
                <div className="row g-3 mt-4">
                  <div className="col-md-4">
                    <div className="p-3 rounded-3" style={{ backgroundColor: 'var(--primary-dark)' }}>
                      <FontAwesomeIcon icon="lightbulb" className="fa-2x text-accent mb-2" />
                      <h5 className="text-light-primary">Innovation</h5>
                      <p className="small text-light-secondary mb-0">
                        Discussing cutting-edge technology and breakthrough ideas
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="p-3 rounded-3" style={{ backgroundColor: 'var(--primary-dark)' }}>
                      <FontAwesomeIcon icon="users" className="fa-2x text-accent mb-2" />
                      <h5 className="text-light-primary">Collaboration</h5>
                      <p className="small text-light-secondary mb-0">
                        Working together on meaningful projects and initiatives
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="p-3 rounded-3" style={{ backgroundColor: 'var(--primary-dark)' }}>
                      <FontAwesomeIcon icon="graduation-cap" className="fa-2x text-accent mb-2" />
                      <h5 className="text-light-primary">Mentorship</h5>
                      <p className="small text-light-secondary mb-0">
                        Sharing knowledge and learning from experienced professionals
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
