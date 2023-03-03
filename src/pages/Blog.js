import React from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Blog
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Here are some of my latest blog posts:
      </motion.p>
      <ul>
        <li>Blog Post 1</li>
        <li>Blog Post 2</li>
        <li>Blog Post 3</li>
      </ul>
    </div>
  );
};

export default BlogPage;
