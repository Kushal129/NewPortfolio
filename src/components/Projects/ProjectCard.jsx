import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, ArrowUpRight } from 'lucide-react';
import ProjectTags from './ProjectTags';
import ProjectLinks from './ProjectLinks';

const ProjectCard = ({ name, description, tags, image, source_code_link, live_preview_link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;

  const toggleDescription = () => setIsExpanded((prev) => !prev);

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="group relative bg-black/30 rounded-3xl p-1 backdrop-blur-lg"
    >
      <div className="h-full bg-black-200/10 rounded-3xl p-4 transition-all duration-300">
        {/* Project Image with Overlay */}
        <div className="relative overflow-hidden rounded-2xl aspect-video mb-6">
          <img 
            src={image} 
            alt={name}
            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60" />
          
          {/* Floating Links */}
          <ProjectLinks 
            sourceLink={source_code_link}
            previewLink={live_preview_link}
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <header className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-secondary transition-colors">
              {name}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
          </header>

          <p className="text-gray-200 text-sm leading-relaxed">
            {isExpanded ? description : truncatedDescription}
            {description.length > 60 && (
              <button 
                onClick={toggleDescription} 
                className="text-secondary hover:underline ml-2"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </p>

          <ProjectTags tags={tags} />
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
