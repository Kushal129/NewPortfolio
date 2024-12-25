import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const certifications = [
  { title: "Cyber Security & Ethical Hacking", source: "Boston Institute of Analytics (BIA)" },
  { title: "Cyber Threat Intelligence 101", source: "arcX" },
  { title: "Cybersecurity Job Simulation", source: "Mastercard" },
  { title: "SQL Basic", source: "HackerRank" },
  { title: "Python Intermediate", source: "HackerRank" },
  { title: "React Basic", source: "HackerRank" },
  { title: "Problem Solving Basic", source: "HackerRank" },
  { title: "Problem Solving Intermediate", source: "HackerRank" },
  { title: "CSS Basic", source: "HackerRank" },
  { title: ".NET", source: "LinkedIn Skill Assessment" },
  { title: "C#", source: "LinkedIn Skill Assessment" },
  { title: "HTML", source: "LinkedIn Skill Assessment" },
  { title: "CSS", source: "LinkedIn Skill Assessment" },
  { title: "Python", source: "LinkedIn Skill Assessment" },
  { title: "JavaScript", source: "LinkedIn Skill Assessment" },
  { title: "MySQL", source: "LinkedIn Skill Assessment" },
  { title: "React", source: "LinkedIn Skill Assessment" },
  { title: "React Native", source: "LinkedIn Skill Assessment" },
  { title: "Git", source: "LinkedIn Skill Assessment" },
  { title: "GitHub", source: "LinkedIn Skill Assessment" },
  { title: "AWS", source: "LinkedIn Skill Assessment" },
  { title: "Python Fundamentals", source: "Great Learning" },
  { title: "Automation Level 1", source: "Certification" },
  { title: "Hackathon Participation", source: "Event" },
  { title: "Hackathon Runner Up", source: "Event" },
];

const CertificationCard = ({ title, source, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
    className="p-6 bg-tertiary/40 border border-secondary border-r-black border-b-black backdrop-blur-sm rounded-lg transition-all duration-300 transform hover:scale-110"
  >
    <h3 className="text-white font-semibold text-[16px] mb-2">{title}</h3>
    <p className="text-secondary text-[12px]">{source}</p>
  </motion.div>
);

const Certification = () => {
  return (
    <motion.div 
      variants={staggerContainer()} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.25 }}
      className="my-20"
    >
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My Achievements</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10">Certifications</h2>
      </motion.div>

      <motion.div 
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center"
        variants={fadeIn('up', 'spring', 0.5, 0.75)}
      >
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`certification-${index}`}
            index={index}
            {...certification}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Certification, "certifications");
