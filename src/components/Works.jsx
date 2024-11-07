import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { projects, cyberProjects, funProjects } from "../constants";
import { styles } from "./styles";
import { github } from "../assets";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ name, description, tags, image, source_code_link, live_preview_link }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = (e) => {
    e.stopPropagation();
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = description.length > 100 
    ? `${description.substring(0, 100)}...` 
    : description;

  return (
    <div className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full min-h-[390px] overflow-hidden relative shadow-card">
      <img src={image} alt={name} className="w-full h-[200px] object-cover rounded-xl" />
      <h3 className="mt-4 text-white font-bold text-[22px] truncate">{name}</h3>
      
      <div className="mt-4">
        <p className="text-cardtext text-[14px] mb-2 overflow-y-auto custom-scrollbar">
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
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <p key={tag.name} className="text-[12px] text-white px-2 py-1 rounded-full bg-black-200 shadow-sm">
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="flex space-x-4">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>

          {live_preview_link && (
            <a
              href={live_preview_link}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaGlobe className="text-white text-lg" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("web");

  const filteredProjects = activeCategory === "web"
    ? projects
    : activeCategory === "cyber"
    ? cyberProjects
    : funProjects;

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="flex justify-center mt-10 mb-6 sm:mt-12 sm:mb-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-tertiary p-2 rounded-full">
          {["web", "cyber", "fun"].map((category) => (
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
          <ProjectCard key={`project-${index}`} {...project} />
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

export default SectionWrapper(Works, "Projects");
