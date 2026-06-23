import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://www.instagram.com/aklavyakumr/',
      icon: ['fab', 'instagram'],
      label: "Aklavya Kumar's Instagram Profile"
    },
    {
      href: 'https://www.linkedin.com/in/aklavya-kumar-a2a4a4342/',
      icon: ['fab', 'linkedin-in'],
      label: "Aklavya Kumar's LinkedIn Profile"
    }
  ];

  return (
    <motion.footer
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="social-icons mb-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={social.icon as any} />
            </motion.a>
          ))}
        </div>
        <p className="footer-brand mb-2">
          Aklavya <strong>Kumar</strong>
        </p>
        <p className="mb-1">
          &copy; {currentYear} | Mechanicsburg, PA
        </p>
        <p className="text-light-secondary small">
          Driven by Innovation, Guided by Purpose.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
