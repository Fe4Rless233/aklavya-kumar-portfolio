import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '../components/AnimatedSection';

const Aspirations: React.FC = () => {
  const technicalSkills = [
    'Programming Languages: Advanced proficiency in Python, Java, C++, and JavaScript; developing expertise in autonomous systems programming.',
    'Web Development: Full-stack capabilities including React, Node.js, HTML5, CSS3, and modern frameworks like Tailwind CSS and Bootstrap.',
    'Database Management: Experience with SQLite3, MySQL, and database design principles for scalable applications.',
    'Mobile Development: Kivy-based Android app development with focus on clean UI/UX design and cross-platform compatibility.',
    'Robotics & Automation: Specialized in FTC programming, autonomous navigation systems, sensor integration, and control algorithms.',
    'AI & Machine Learning: Exploring autonomous systems, working with AI models, and developing innovative research ideas for real-world applications.',
    'Areas of Expertise: Specialized in Autonomous Programming (designing complex independent robot operations), Algorithm Design & Optimization (for competitive programming and robotics), and applied Control Systems theory.'
  ];

  const softSkills = [
    'Leadership & Team Management: Demonstrated as Coding Club President and FTC Lead Programmer, effectively guiding peers and managing projects.',
    'Problem-Solving & Critical Thinking: Consistently applied in competitive robotics, USACO challenges, and rigorous academic pursuits to analyze issues and devise innovative solutions.',
    'Communication & Presentation: Articulate in English with experience presenting technical concepts effectively to diverse audiences, from peers to industry professionals.',
    'Project Management: Skilled in coordinating complex, multi-faceted projects from conception to completion, balancing technical requirements with timeline constraints.',
    'Mentorship & Teaching: Proven ability to guide and inspire younger students in STEM fields, demonstrated through 2+ years of robotics coaching.',
    'Adaptability & Innovation: Thriving in dynamic environments, consistently embracing new technologies and methodologies to stay at the forefront of technological advancement.'
  ];

  const careerGoals = [
    {
      title: 'Aerospace Engineering',
      icon: 'space-shuttle',
      image: '/img/nasa.webp',
      description: 'I dream of contributing to groundbreaking advancements in aerospace, potentially with organizations like NASA. The allure of tackling the immense challenges of space exploration, advancing aeronautical innovation, and developing technologies that expand our understanding of the universe is a powerful motivator.',
      delay: 0.2
    },
    {
      title: 'Biotechnology Innovation',
      icon: 'dna',
      image: '/img/biotech.jpg',
      description: 'The intersection of technology and biology presents incredible opportunities to address global health challenges, develop life-saving treatments, and push the boundaries of what\'s possible in medicine. I\'m particularly drawn to the potential of biotechnology to create solutions that directly improve quality of life.',
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
      {/* Skills Section */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">My Dynamic Skillset</h1>
            <p className="lead text-light-secondary col-lg-8 mx-auto mb-5">
              A fusion of robust technical proficiencies and essential soft skills, honed through diverse academic, extracurricular, and personal projects, empowering me to tackle complex challenges and innovate effectively.
            </p>
          </AnimatedSection>

          <div className="row g-5">
            {/* Technical Skills */}
            <div className="col-lg-6">
              <AnimatedSection animation="slideLeft" delay={0.2}>
                <h2 className="h3 mb-4 text-accent">
                  <FontAwesomeIcon icon="code" className="me-2" />
                  Technical Proficiencies
                </h2>
                <ul className="list-group details-list">
                  {technicalSkills.map((skill, index) => (
                    <motion.li
                      key={index}
                      className="list-group-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                      <strong>{skill.split(':')[0]}:</strong> {skill.split(':')[1]}
                    </motion.li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Soft Skills */}
            <div className="col-lg-6">
              <AnimatedSection animation="slideRight" delay={0.4}>
                <h2 className="h3 mb-4 text-accent">
                  <FontAwesomeIcon icon="users-cog" className="me-2" />
                  Key Strengths & Soft Skills
                </h2>
                <ul className="list-group details-list">
                  {softSkills.map((skill, index) => (
                    <motion.li
                      key={index}
                      className="list-group-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                      <strong>{skill.split(':')[0]}:</strong> {skill.split(':')[1]}
                    </motion.li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Career Aspirations */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Vision for the Future</h2>
            <p className="text-center lead mb-5 text-light-secondary col-lg-8 mx-auto">
              My ambitions are firmly rooted at the dynamic intersection of cutting-edge technology and impactful, real-world applications. I am driven to contribute to fields that promise to reshape our future for the better.
            </p>
          </AnimatedSection>

          <div className="row g-4 justify-content-center">
            {careerGoals.map((goal, index) => (
              <div key={index} className="col-md-6 col-lg-5 d-flex align-items-stretch">
                <AnimatedSection 
                  className="w-100"
                  animation="zoomIn"
                  delay={goal.delay}
                >
                  <div className="custom-card">
                    <div className="card-img-top-wrapper">
                      <img src={goal.image} className="card-img-top" alt={`${goal.title} Aspirations`} />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <FontAwesomeIcon icon={goal.icon as any} className="me-2" />
                        {goal.title}
                      </h3>
                      <p className="card-text">{goal.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Technical Projects & Innovation</h2>
            <p className="text-center lead mb-5 text-light-secondary">
              A portfolio of impactful projects that demonstrate my technical capabilities and problem-solving approach.
            </p>
          </AnimatedSection>

          <div className="row g-4">
            {/* Project Cards */}
            <div className="col-md-6 col-lg-4">
              <AnimatedSection animation="slideUp" delay={0.1}>
                <div className="custom-card p-4">
                  <div className="card-body text-center">
                    <FontAwesomeIcon icon="leaf" className="fa-3x mb-3 text-accent" />
                    <h4 className="card-title">Carbon Tracking App</h4>
                    <p className="card-text">Full-stack application with user authentication, SQLite3 backend, interactive charting, environmental quizzes, and responsive Tailwind CSS UI.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-md-6 col-lg-4">
              <AnimatedSection animation="slideUp" delay={0.2}>
                <div className="custom-card p-4">
                  <div className="card-body text-center">
                    <FontAwesomeIcon icon="theater-masks" className="fa-3x mb-3 text-accent" />
                    <h4 className="card-title">Macbeth Soliloquy Translator</h4>
                    <p className="card-text">Educational tool featuring original Shakespearean text, modern English translations, humorous interpretations, and psychological analysis.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-md-6 col-lg-4">
              <AnimatedSection animation="slideUp" delay={0.3}>
                <div className="custom-card p-4">
                  <div className="card-body text-center">
                    <FontAwesomeIcon icon="mobile-alt" className="fa-3x mb-3 text-accent" />
                    <h4 className="card-title">Kivy Expense Tracker</h4>
                    <p className="card-text">Cross-platform mobile application with clean UI optimized for small screens, featuring multiple entry support and persistent data storage.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-md-6 col-lg-4">
              <AnimatedSection animation="slideUp" delay={0.4}>
                <div className="custom-card p-4">
                  <div className="card-body text-center">
                    <FontAwesomeIcon icon="robot" className="fa-3x mb-3 text-accent" />
                    <h4 className="card-title">FTC Road Runner Robot</h4>
                    <p className="card-text">Advanced autonomous navigation system programming for competitive robotics, implementing complex path planning and sensor fusion algorithms.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-md-6 col-lg-4">
              <AnimatedSection animation="slideUp" delay={0.5}>
                <div className="custom-card p-4">
                  <div className="card-body text-center">
                    <FontAwesomeIcon icon="globe" className="fa-3x mb-3 text-accent" />
                    <h4 className="card-title">Coding Club Website</h4>
                    <p className="card-text">Modern web platform with Bootstrap styling, integrated event calendar, member portal, and responsive design for school coding community.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-md-6 col-lg-4">
              <AnimatedSection animation="slideUp" delay={0.6}>
                <div className="custom-card p-4">
                  <div className="card-body text-center">
                    <FontAwesomeIcon icon="brain" className="fa-3x mb-3 text-accent" />
                    <h4 className="card-title">CodeMentor AI Platform</h4>
                    <p className="card-text">AI-powered educational platform providing automated code reviews, progress tracking, and personalized learning path recommendations for student developers.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <AnimatedSection animation="fadeIn">
                <h2 className="h3 text-accent mb-4">
                  <FontAwesomeIcon icon="rocket" className="me-2" />
                  Committed to Innovation
                </h2>
                <p className="lead text-light-secondary">
                  My vision extends beyond personal achievement to creating technologies and solutions that address real-world challenges, support communities, and contribute to human progress. Whether in aerospace, biotechnology, or emerging fields, I am committed to making a meaningful impact through innovation and dedicated service.
                </p>
                <div className="mt-4 p-4 rounded-3" style={{ backgroundColor: 'var(--bg-dark-secondary)', border: '1px solid var(--border-dark)' }}>
                  <p className="text-light-primary mb-2">
                    <FontAwesomeIcon icon="lightbulb" className="me-2 text-accent" />
                    <strong>Innovation with Purpose</strong>
                  </p>
                  <p className="text-light-secondary mb-0">
                    Technology's greatest value lies in its ability to solve meaningful problems and improve lives across communities and cultures.
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

export default Aspirations;
