import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  const hobbies = [
    {
      icon: 'laptop-code',
      title: 'Competitive Coding',
      description: 'Actively participating in USACO contests, I relish the intellectual stimulation of algorithmic problem-solving, optimizing code for efficiency, and competing with talented peers nationwide.',
      delay: 0.2
    },
    {
      icon: 'cogs',
      title: 'Robotics Design',
      description: 'Constantly envisioning new robot mechanisms and programming strategies for FTC. I embrace the entire engineering design process, from initial concept and prototyping to execution and iterative refinement.',
      delay: 0.3
    },
    {
      icon: 'microchip',
      title: 'System Automation',
      description: 'Fascinated by creating efficiencies through automated apps and systems. I find great satisfaction in streamlining processes and making technology work smarter to solve complex tasks.',
      delay: 0.4
    },
    {
      icon: 'language',
      title: 'Languages & Cultures',
      description: 'My role with the Association of Bengalis in Harrisburg Area (ABHA) allows me to connect with my heritage and support community programs, fostering cross-cultural understanding.',
      delay: 0.5
    },
    {
      icon: 'plane-departure',
      title: 'Travel & Exploration',
      description: 'Eager to explore diverse cultures and global perspectives. I believe each journey offers invaluable lessons that contribute to personal and intellectual growth, broadening my understanding of our interconnected world.',
      delay: 0.6
    },
    {
      icon: 'book-reader',
      title: 'Continuous Learning',
      description: 'Beyond formal education, I am an avid reader and self-learner, constantly seeking new knowledge in emerging technologies, history, and science. Learning is a lifelong adventure I embrace wholeheartedly.',
      delay: 0.7
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Discover My Story</h1>
          </AnimatedSection>
          
          <div className="row align-items-center g-5">
            <div className="col-lg-4 text-center">
              <AnimatedSection animation="slideLeft" delay={0.2}>
                <div className="profile-img-container">
                  <img src="/img/aklavya.jpg" alt="Aklavya Kumar - Profile Picture" className="img-fluid" />
                </div>
              </AnimatedSection>
            </div>
            
            <div className="col-lg-8">
              <AnimatedSection animation="slideRight" delay={0.4}>
                <h2 className="mb-3 display-6 text-light-primary">
                  Getting to Know <span className="text-accent">Aklavya</span>
                </h2>
                <p>
                  My journey is propelled by an insatiable intellectual curiosity, one that finds its greatest excitement in the dynamic and ever-evolving realms of <strong>technology, biotechnology, and engineering</strong>. I don't just face challenges; I actively seek them out. Whether it's unraveling the logical intricacies of a complex USACO coding problem, architecting and programming an autonomous robot for demanding FTC competitions, or exploring innovative solutions to real-world problems, I embrace each task as a unique and valuable opportunity for growth. I firmly believe that every experience, whether a triumph or a setback, offers profound lessons. With this mindset, I approach new ventures with unwavering enthusiasm and a deep-seated belief in the transformative power of a collaborative spirit.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Passions & Hobbies */}
      <section className="section-padding bg-dark-secondary">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Passions & Hobbies</h2>
            <p className="text-center lead mb-5 text-light-secondary">
              Beyond the classroom and the lab, I cultivate a range of interests that enrich my perspective, fuel my creativity, and provide essential balance to my focused pursuits.
            </p>
          </AnimatedSection>
          
          <div className="row g-4 row-cards">
            {hobbies.map((hobby, index) => (
              <div key={index} className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <AnimatedSection 
                  className="w-100"
                  animation="zoomIn"
                  delay={hobby.delay}
                >
                  <div className="custom-card p-3">
                    <div className="card-body text-center">
                      <FontAwesomeIcon 
                        icon={hobby.icon as any} 
                        className="fa-3x mb-3 text-accent" 
                      />
                      <h4 className="card-title">{hobby.title}</h4>
                      <p className="card-text">{hobby.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driven by Impact */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Driven by Impact</h2>
          </AnimatedSection>
          
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <AnimatedSection animation="slideUp" delay={0.2}>
                <FontAwesomeIcon 
                  icon="bullseye" 
                  className="fa-4x text-accent mb-4" 
                />
                <p className="lead text-light-secondary">
                  At my core, I am motivated by the profound potential to create innovative solutions that not only address complex problems but also tangibly improve lives and expand opportunities for others globally.
                </p>
                <p className="mt-4">
                  This driving philosophy shapes everything I do, from my academic pursuits and extracurricular leadership to my volunteer work and personal projects. I believe that technology and engineering, when guided by empathy and purpose, possess unparalleled power to create positive change.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
