import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon?: string;
}

interface SkillProgressProps {
  skills: Skill[];
  title?: string;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ skills, title }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="skill-progress-section">
      {title && (
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="skill-section-title"
        >
          {title}
        </motion.h3>
      )}
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="skill-header">
              {skill.icon && <span className="skill-icon">{skill.icon}</span>}
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            
            <div className="skill-bar">
              <motion.div
                className="skill-fill"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillProgress;
