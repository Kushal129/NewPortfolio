import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-cover bg-center">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="flex flex-col items-center justify-center p-4 border border-black-200 rounded-lg bg-primary shadow-card hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-20 h-20 object-contain mb-2"
          />
          <p className="text-lg font-semibold text-white-100">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
