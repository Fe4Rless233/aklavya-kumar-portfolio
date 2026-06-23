import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
  category: 'academic' | 'stem' | 'community' | 'achievement';
  color: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic': return '🎓';
      case 'stem': return '🔬';
      case 'community': return '🤝';
      case 'achievement': return '🏆';
      default: return '⭐';
    }
  };

  return (
    <div ref={ref} className="timeline-container">
      <motion.div
        className="timeline-line"
        initial={{ height: 0 }}
        animate={inView ? { height: '100%' } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.div
            className="timeline-marker"
            style={{ backgroundColor: event.color }}
            whileHover={{ scale: 1.2 }}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
          >
            <span className="timeline-icon">{getCategoryIcon(event.category)}</span>
          </motion.div>
          
          <motion.div
            className="timeline-content"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="timeline-date">{event.date}</div>
            <h4 className="timeline-title">{event.title}</h4>
            <p className="timeline-description">{event.description}</p>
            {event.image && (
              <motion.img
                src={event.image}
                alt={event.title}
                className="timeline-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
