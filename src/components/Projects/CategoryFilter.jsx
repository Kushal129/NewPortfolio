import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex justify-center mb-16">
      <div className="flex gap-2 p-1.5 bg-black/60 backdrop-blur-lg rounded-full">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileTap={{ scale: 0.97 }}
            onClick={() => onCategoryChange(category)}
            className={`
              relative px-6 py-2 text-sm font-medium rounded-full
              transition-all duration-300 
              ${activeCategory === category 
                ? 'text-white' 
                : 'text-slate-400 hover:text-white'
              }
            `}
          >
            {activeCategory === category && (
              <motion.span
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-black-100 to-tertiary rounded-full"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;