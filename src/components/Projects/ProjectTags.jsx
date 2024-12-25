import React from 'react';
import { motion } from 'framer-motion';

const ProjectTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <motion.span
          key={tag.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="px-3 py-1 text-xs font-medium text-secondary bg-black-200/10 
                     rounded-full ring-1 ring-secondary/20 hover:ring-secondary/40 
                     transition-all duration-300"
        >
          #{tag.name}
        </motion.span>
      ))}
    </div>
  );
};

export default ProjectTags;