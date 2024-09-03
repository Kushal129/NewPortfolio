import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "./styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import '../../src/index.css';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_preview_link,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='p-5 rounded-2xl w-full max-w-xs sm:max-w-md'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        className='relative w-full h-[230px]'
      >
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
          {live_preview_link && (
            <div
              onClick={() => window.open(live_preview_link, "_blank")}
              className='bg-red-700 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer'
            >
              <h2 className="text-[10px] text-white">Live</h2>
            </div>
          )}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </motion.div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-lg'>{name}</h3>
        <p className='mt-2 text-secondary text-sm'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-xs ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <section className="py-10 px-5 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='fade-up'
      >
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='w-full flex justify-center'
      >
        <p
          className='mt-3 text-secondary text-base max-w-3xl leading-[30px] text-center'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-5 justify-center'>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
