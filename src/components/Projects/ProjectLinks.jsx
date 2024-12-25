import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

const ProjectLinks = ({ sourceLink, previewLink }) => {
  const linkVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -2 }
  };

  return (
    <div className="absolute top-4 right-4 flex gap-3 opacity-0 bg-black/40 rounded-xl p-1 group-hover:opacity-100 transition-opacity duration-300">
      <motion.a
        href={sourceLink}
        target="_blank"
        rel="noopener noreferrer"
        variants={linkVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="p-2 bg-black/60 backdrop-blur-md rounded-full transition-colors duration-300"
      >
        <Github className="w-5 h-5 text-white" />
      </motion.a>
      {previewLink && (
        <motion.a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          variants={linkVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="p-2 bg-black/60 backdrop-blur-md rounded-full transition-colors duration-300"
        >
          <Globe className="w-5 h-5 text-white" />
        </motion.a>
      )}
    </div>
  );
};

export default ProjectLinks;