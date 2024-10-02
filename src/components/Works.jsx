import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { projects, cyberProjects } from "../constants";
import { styles } from "./styles";
import { github } from "../assets";
import { IoMdClose } from "react-icons/io";
import webbutonimg from '../assets/webbtn.jpg'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_preview_link }) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='p-5 rounded-2xl w-full max-w-xs'>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.5 }} className='relative w-full h-[230px]'>
        <img src={image} alt='project_image' className='w-full h-full object-cover rounded-2xl' />
        <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
          {live_preview_link && (
            <div onClick={() => window.open(live_preview_link, "_blank")} className='bg-red-700 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer'>
              <h2 className="text-[10px] text-white">Live</h2>
            </div>
          )}
          <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'>
            <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>
      </motion.div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-lg'>{name}</h3>
        <p className='mt-2 text-secondary text-sm'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-xs ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("web");
  const [showProjects, setShowProjects] = useState(false);

  const handleCategoryChange = (category) => {
    if (activeCategory === category) {
      setShowProjects(!showProjects);
    } else {
      setActiveCategory(category);
      setShowProjects(true);
    }
  };

  const handleCloseProjects = () => {
    setShowProjects(false);
  };

  const renderProjects = () => {
    const currentProjects = activeCategory === "web" ? projects : cyberProjects;
    return currentProjects.map((project, index) => (
      <ProjectCard key={`project-${index}`} index={index} {...project} />
    ));
  };

  return (
    <section className="py-5 sm:py-10 px-5 mb-10 sm:px-10">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className={`${styles.sectionSubText} text-center`}>
          Explore my work in web development and cybersecurity.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>


      <div className='flex flex-col sm:flex-row justify-center lg:mt-8 space-x-0 sm:space-x-4 mb-6'>
        <button
          onClick={() => handleCategoryChange("web")}
          className='relative inline-block m-2 p-8 lg:text-[10px] text-[13px] tracking-wide text-white bg-cover cursor-pointer transition-all duration-500 rounded-lg border-b border-logo shadow-[inset_0_0_0_0_#153010] perspective hover:translate-y-[-5px] hover:scale-105 hover:rotate-x-[10deg] hover:rotate-y-[10deg] active:scale-90'
          style={{ backgroundImage: `url(${webbutonimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          Web Development
        </button>

        <button
          onClick={() => handleCategoryChange("cyber")}
          className='relative inline-block m-2 p-5 lg:text-[15px] text-[16px] tracking-wide text-white bg-cover bg-center bg-no-repeat bg-black cursor-pointer transition-all duration-500 rounded-md border-b border-logo shadow-[inset_0_0_0_0_#153010] perspective hover:translate-y-[-5px] hover:scale-105 hover:rotate-x-[10deg] hover:rotate-y-[10deg] active:scale-90'
          style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_1280.jpg')" }}
        >
          Cybersecurity
        </button>


      </div>

      {showProjects && (
        <div className='mt-10'>
          <button onClick={handleCloseProjects} className='text-black-100 px-4 py-2 rounded-lg mb-4 flex items-center'>
            <IoMdClose className="text-lg mr-2" />
          </button>
          <div className='flex flex-wrap gap-5 justify-center'>
            {renderProjects()}
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionWrapper(Works, "projects");
