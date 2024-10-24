import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { styles } from "./styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  let icon;
  if (experience.type === "web") {
    icon = <span className="text-4xl font-bold text-white">🚀</span>;
  } else if (experience.type === "security") {
    icon = <span className="text-4xl font-bold text-white">🔒</span>;
  } else {
    icon = <span className="text-4xl font-bold text-white">👨‍💻</span>;
  }

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#061204",
        color: "#fff",
        borderRadius: "8px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #3c3f41" }}
      iconStyle={{ background: "#161b22", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {icon}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] font-semibold">{experience.title}</h3>
        <p className="text-[16px] text-gray-300">{experience.subtitle}</p>
      </div>
      <ul className="mt-4 list-disc ml-4 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-[14px] text-gray-400">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Experience = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          What I Have Built
        </p>
        <h2 className={`${styles.sectionHeadText} `}>
          Self-Driven Experience.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "Work");
