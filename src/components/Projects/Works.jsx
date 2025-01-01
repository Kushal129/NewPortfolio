import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { projects, cyberProjects, funProjects } from '../../constants';
import ProjectCard from './ProjectCard';
import CategoryFilter from './CategoryFilter';

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('web');
  const categories = ['web', 'cyber', 'fun'];

  const getProjectsByCategory = (category) => {
    switch (category) {
      case 'web': return projects;
      case 'cyber': return cyberProjects;
      case 'fun': return funProjects;
      default: return projects;
    }
  };

  return (
    <section className="relative py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black-200/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black-200/90 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Explore my latest work showcasing innovative solutions and technical expertise
              across different domains and technologies.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {getProjectsByCategory(activeCategory).map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "Projects");