import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "../../src/index.css";

const Tech = () => {
  const techRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          // Optionally unobserve the element if you only want the animation once
          observer.unobserve(entry.target);
        }
      });
    });

    // Observe each element if it's a valid DOM element
    techRefs.current.forEach((tech) => {
      if (tech) {
        observer.observe(tech);
      }
    });

    return () => {
      // Unobserve each element if it's a valid DOM element
      techRefs.current.forEach((tech) => {
        if (tech) {
          observer.unobserve(tech);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-cover bg-center">
      {technologies.map((technology, index) => (
        <div
          key={technology.name}
          ref={(el) => (techRefs.current[index] = el)}
          className="flex flex-col items-center justify-center p-4 border border-black-200 rounded-lg bg-primary shadow-card hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-20 h-20 object-contain mb-2"
          />
          <p className="text-lg font-semibold text-secondary">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
