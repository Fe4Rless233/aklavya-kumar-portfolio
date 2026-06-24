import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '../components/AnimatedSection';

const Community: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dedication to Service Section */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Dedication to Service</h1>
            <p className="lead text-light-secondary col-lg-8 mx-auto mb-5">
              A deep-seated commitment to community service is a cornerstone of my identity. I believe in giving back, actively contributing to the well-being of others, and leveraging my skills to support vital local initiatives.
            </p>
          </AnimatedSection>

          {/* Central PA Food Bank */}
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-5">
              <AnimatedSection animation="slideLeft" delay={0.2}>
                <img 
                  src="/img/food.webp" 
                  alt="Central Pennsylvania Food Bank Support" 
                  className="img-fluid rounded-3 shadow-lg" 
                  style={{ border: '2px solid var(--border-dark)' }}
                />
              </AnimatedSection>
            </div>
            
            <div className="col-lg-7">
              <AnimatedSection animation="slideRight" delay={0.4}>
                <h2 className="h3 text-accent">
                  <FontAwesomeIcon icon="hands-helping" className="me-2" />
                  Central Pennsylvania Food Bank
                </h2>
                <h4 className="text-light-primary mb-3">10+ Years of Dedicated Fundraising</h4>
                <p className="text-light-secondary">
                  For over a decade, I have been passionately committed to supporting the Central Pennsylvania Food Bank through consistent fundraising efforts. This long-term dedication reflects my deep belief in addressing food insecurity within our community and ensuring that no neighbor goes hungry.
                </p>
                <p className="text-light-secondary">
                  My approach to this cause goes beyond simple donations; I actively engage in organizing fundraising initiatives, raising awareness about food insecurity issues, and encouraging others in my community to join this vital mission. Through persistent effort and community engagement, I've helped channel resources toward this critical cause, contributing to the food bank's ability to serve thousands of families across Central Pennsylvania.
                </p>
                <div className="mt-4 p-3 rounded-3" style={{ backgroundColor: 'var(--bg-dark-secondary)', border: '1px solid var(--border-dark)' }}>
                  <p className="text-light-primary mb-2">
                    <FontAwesomeIcon icon="heart" className="me-2 text-accent" />
                    <strong>Impact Through Consistency</strong>
                  </p>
                  <p className="text-light-secondary mb-0">
                    A decade of sustained commitment demonstrates that meaningful change happens through persistent, dedicated action.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Robotics Coaching */}
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-7 order-lg-1">
              <AnimatedSection animation="slideLeft" delay={0.2}>
                <h2 className="h3 text-accent">
                  <FontAwesomeIcon icon="robot" className="me-2" />
                  Local Robotics Mentorship & Coaching
                </h2>
                <h4 className="text-light-primary mb-3">2+ Years of STEM Education Leadership</h4>
                <p className="text-light-secondary">
                  As a mentor and coach for local school robotics teams, I have dedicated over two years to fostering the next generation of STEM innovators. My coaching philosophy centers on hands-on learning, creative problem-solving, and building confidence in young minds who are just discovering their potential in technology and engineering.
                </p>
                <p className="text-light-secondary">
                  Working with younger students has been particularly rewarding, as I guide them through the fundamentals of programming, mechanical design, and teamwork. I focus on creating an inclusive environment where every student feels empowered to contribute their ideas and learn from both successes and setbacks.
                </p>
                <ul className="list-group details-list mt-4">
                  <li className="list-group-item">
                    <strong>Programming Fundamentals:</strong> Teaching basic coding concepts and robot control systems
                  </li>
                  <li className="list-group-item">
                    <strong>Design Thinking:</strong> Guiding students through the engineering design process
                  </li>
                  <li className="list-group-item">
                    <strong>Team Leadership:</strong> Developing collaboration and communication skills
                  </li>
                  <li className="list-group-item">
                    <strong>Competitive Strategy:</strong> Preparing teams for local and regional competitions
                  </li>
                </ul>
              </AnimatedSection>
            </div>
            
            <div className="col-lg-5 order-lg-2">
              <AnimatedSection animation="slideRight" delay={0.4}>
                <div className="custom-card p-4 text-center">
                  <FontAwesomeIcon icon="chalkboard-teacher" className="fa-4x text-accent mb-3" />
                  <h4 className="card-title">Mentoring Impact</h4>
                  <p className="card-text">
                    Empowering young minds to discover their potential in STEM through hands-on robotics education and competitive programming.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Cultural Heritage & Community</h2>
          </AnimatedSection>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <AnimatedSection animation="zoomIn" delay={0.2}>
                <div className="custom-card">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="card-img-top-wrapper h-100">
                        <img 
                          src="/img/abha.jpg" 
                          className="card-img-top h-100" 
                          alt="Association of Bengalis in Harrisburg Area" 
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h3 className="card-title">
                          <FontAwesomeIcon icon="landmark" className="me-2" />
                          Association of Bengalis in Harrisburg Area (ABHA)
                        </h3>
                        <h5 className="text-light-primary mb-3">Junior Patron & Cultural Ambassador</h5>
                        <p className="card-text">
                          As a Junior Patron of ABHA, I play an active role in supporting vibrant annual cultural events that celebrate Bengali traditions, music, dance, and cuisine. These events also serve as important platforms for community outreach and fundraising, successfully raising <strong>over $300 each year</strong> for cultural programs and charitable initiatives.
                        </p>
                        <p className="card-text">
                          My involvement, including co-hosting responsibilities, has been deeply enriching, allowing me to contribute to preserving our heritage while fostering a spirit of community and generosity. Through these cultural celebrations, we create bridges between communities and promote understanding of diverse traditions.
                        </p>
                        <p className="card-text mt-3">
                          <small className="text-light-secondary">
                            <FontAwesomeIcon icon="hands-heart" className="me-2" />
                            Promoting diversity and fostering cross-cultural understanding through shared celebration.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <AnimatedSection animation="fadeIn">
                <h2 className="h3 text-accent mb-4">
                  <FontAwesomeIcon icon="compass" className="me-2" />
                  Guided by Purpose
                </h2>
                <p className="lead text-light-secondary">
                  My community involvement reflects a core belief that we have a responsibility to uplift others and contribute to the collective well-being of our society. Whether through sustained philanthropic efforts, educational mentorship, or cultural preservation, I am committed to making a positive, lasting impact.
                </p>
                <div className="mt-4 p-4 rounded-3" style={{ backgroundColor: 'var(--bg-dark-secondary)', border: '1px solid var(--border-dark)' }}>
                  <p className="text-light-primary mb-2">
                    <FontAwesomeIcon icon="quote-left" className="me-2 text-accent" />
                    <em>"Service to others is the rent you pay for your room here on earth."</em>
                  </p>
                  <p className="text-light-secondary mb-0">
                    This philosophy drives my commitment to community service and cultural engagement.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Community;
