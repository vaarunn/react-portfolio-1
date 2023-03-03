import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="about-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Hi, I'm [Your Name]! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque mi sit amet mauris pretium, et bibendum neque malesuada. Nullam gravida convallis dictum. Phasellus a purus vel ex faucibus tincidunt vel vitae odio. Donec et sem sed dolor pellentesque laoreet. Nullam fringilla quam id sem commodo, id suscipit mi pellentesque.
      </motion.p>
    </div>
  );
};

export default AboutPage;
