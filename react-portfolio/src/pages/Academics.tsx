import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '../components/AnimatedSection';

const Academics: React.FC = () => {
  const currentCourses = [
    'AP English Language and Composition',
    'AP Pre-Calculus with Trigonometry',
    'AP Computer Science/Programming',
    'Honors Chemistry I',
    'AP U.S. History',
    'AP Biology',
    'AP Physics I'
  ];

  const leadershipRoles = [
    {
      title: 'President, CVHS Coding Club',
      icon: 'terminal',
      image: '/img/cvcoding.png',
      description: 'Spearheading initiatives to build a vibrant, inclusive community of student coders. I organize and lead engaging workshops (covering Python, web development basics, and more), arrange insightful guest speaker events with tech industry professionals, and facilitate collaborative coding projects, empowering peers with valuable programming skills.',
      delay: 0.2
    },
    {
      title: 'FBLA & DECA Competitor',
      icon: 'briefcase',
      image: '/img/fbla.png',
      description: 'As an active member of Future Business Leaders of America (FBLA), I\'ve represented CVHS at the Pennsylvania State Leadership Conference. My engagement with DECA, preparing emerging leaders in marketing and finance, led to qualifying for and competing in the Pennsylvania DECA State Career Development Conference, honing my business acumen and presentation skills.',
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
      {/* Academic Excellence Section */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Academic Excellence</h1>
          </AnimatedSection>
          
          <div className="row align-items-center g-lg-5">
            <div className="col-lg-6">
              <AnimatedSection animation="slideLeft" delay={0.2}>
                <img 
                  src="/img/cv.jpeg" 
                  alt="Cumberland Valley High School Academics" 
                  className="img-fluid rounded-3 shadow-lg mb-4 mb-lg-0" 
                  style={{ border: '2px solid var(--border-dark)' }}
                />
              </AnimatedSection>
            </div>
            
            <div className="col-lg-6">
              <AnimatedSection animation="slideRight" delay={0.4}>
                <h2 className="mb-3 display-6">Cumberland Valley High School</h2>
                <p className="lead text-light-secondary">
                  As a dedicated <strong>11th-grade honors student</strong>, I am fully immersed in a rigorous and stimulating academic curriculum designed not only to impart deep subject-matter knowledge but also to cultivate critical thinking, analytical skills, and a lifelong passion for learning.
                </p>
                <p className="text-light-secondary">
                  My academic journey is characterized by a deliberate pursuit of challenging coursework, particularly in STEM fields, while maintaining a well-rounded educational foundation. I consistently strive for excellence, not merely for grades, but for the intellectual growth and preparation these courses provide for my future endeavors in engineering and technology.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Class Schedule */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">2025 Class Schedule (11th Grade)</h2>
            <p className="text-center lead mb-5 text-light-secondary">
              My current academic focus reflects my commitment to challenging myself with advanced coursework across multiple disciplines.
            </p>
          </AnimatedSection>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <AnimatedSection animation="slideUp" delay={0.2}>
                <div className="custom-card p-4">
                  <div className="card-body">
                    <h3 className="card-title text-center mb-4">
                      <FontAwesomeIcon icon="calendar-alt" className="me-2" />
                      Current Coursework
                    </h3>
                    <ul className="list-group details-list">
                      {currentCourses.map((course, index) => (
                        <motion.li
                          key={index}
                          className="list-group-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + (index * 0.1) }}
                        >
                          <strong>{course}</strong>
                        </motion.li>
                      ))}
                    </ul>
                    <p className="text-light-secondary mt-4 text-center">
                      This demanding schedule reflects my commitment to academic rigor and preparation for future STEM endeavors.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Roles */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Leadership & Extracurricular Excellence</h2>
          </AnimatedSection>
          
          <div className="row g-5">
            {leadershipRoles.map((role, index) => (
              <div key={index} className="col-md-6 d-flex align-items-stretch">
                <AnimatedSection 
                  className="w-100"
                  animation="zoomIn"
                  delay={role.delay}
                >
                  <div className="custom-card">
                    <div className="card-img-top-wrapper">
                      <img src={role.image} className="card-img-top" alt={role.title} />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <FontAwesomeIcon icon={role.icon as any} className="me-2" />
                        {role.title}
                      </h3>
                      <p className="card-text">{role.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          {/* Additional Achievements */}
          <div className="row mt-5">
            <div className="col-12">
              <AnimatedSection animation="slideUp" delay={0.5}>
                <div className="custom-card p-4">
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      <FontAwesomeIcon icon="trophy" className="me-2" />
                      Notable Achievement
                    </h3>
                    <p className="card-text lead">
                      <strong>🏅 Top 10 at FBLA Nationals for Introduction to Programming</strong>
                    </p>
                    <p className="card-text text-light-secondary">
                      This recognition at the national level demonstrates my technical proficiency and competitive programming skills, representing both my school and state with distinction.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Science Olympiad */}
          <div className="row mt-4">
            <div className="col-12">
              <AnimatedSection animation="fadeIn" delay={0.6}>
                <div className="text-center">
                  <h4 className="text-accent mb-3">
                    <FontAwesomeIcon icon="flask" className="me-2" />
                    Science Olympiad Junior Varsity
                  </h4>
                  <p className="text-light-secondary">
                    Competing in rigorous academic competitions that test scientific knowledge, analytical thinking, and teamwork across multiple STEM disciplines.
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

export default Academics;
