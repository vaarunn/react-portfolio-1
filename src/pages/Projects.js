import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Here are some of the projects I've worked on:
      </motion.p>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  );
};

export default ProjectsPage;
