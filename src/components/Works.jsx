  import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects, cyberProjects } from "../constants";
import { styles } from "./styles";
import { github } from "../assets";
import { FaGlobe } from "react-icons/fa";
import { textVariant, fadeIn } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, live_preview_link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = (e) => {
    e.stopPropagation();
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = description.length > 100 
    ? `${description.substring(0, 100)}...` 
    : description;

  return (
    <motion.div
      className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full min-h-[390px] overflow-hidden relative shadow-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={name} className="w-full h-[200px] object-cover rounded-xl" />
      <h3 className="mt-4 text-white font-bold text-[22px] truncate">{name}</h3>
      
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-85 backdrop-filter backdrop-blur-sm flex flex-col justify-start items-center p-6 rounded-2xl overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white font-bold text-[22px] mb-3">{name}</h3>
        <p className="text-cardtext text-[14px] text-center mb-2 overflow-y-auto custom-scrollbar">
          {showFullDescription ? description : truncatedDescription}
        </p>
        {description.length > 100 && (
          <button 
            onClick={toggleDescription} 
            className="text-secondary hover:text-white text-sm mb-3"
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
        )}
        
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {tags.map((tag) => (
            <p key={tag.name} className="text-[12px] text-white px-2 py-1 rounded-full bg-black-200 shadow-sm">
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </motion.div>

          {live_preview_link && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={live_preview_link}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaGlobe className="text-white text-lg" />
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? [...projects, ...cyberProjects]
    : activeCategory === "web"
    ? projects
    : cyberProjects;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="flex justify-center mt-10 mb-6 sm:mt-12 sm:mb-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-tertiary p-2 rounded-full">
          {["all", "web", "cyber"].map((category) => (
            <button
              key={category}
              className={`py-2 px-4 sm:px-6 rounded-full text-[13px] sm:text-[15px] font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "text-secondary hover:bg-black-200 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-7">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000000;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3f8c00;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #377405;
        }
      `}</style>
    </>
  );
};

export default SectionWrapper(Works, "projects");
