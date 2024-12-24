import React, { useEffect, useState } from 'react';
import { Terminal, Cpu, Shield, Wifi } from 'lucide-react';

const BlogHeader = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`mb-16 text-center relative transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-setext-secondary/10 via-setext-secondary/5 to-transparent blur-3xl -z-10" />

      <div className="flex items-center justify-center gap-3 mb-6">
        <Terminal className="text-secondary w-8 h-8" />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-200">
          My<span className="text-secondary">Blog</span>
        </h1>
      </div>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
        Dive into the latest innovations, digital threats, and evolving tools shaping the online world. Learn how new technologies are enhancing security and transforming digital experiences.
      </p>

      {/* <div className="flex flex-wrap justify-center gap-4">
        <CategoryPill icon={<Cpu />} label="Cloud Tech" />
        <CategoryPill icon={<Shield />} label="Security" />
        <CategoryPill icon={<Wifi />} label="Networks" />
      </div> */}
    </header>
  );
};

const CategoryPill = ({ icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer group">
    <span className="text-secondary group-hover:scale-110 transition-transform">
      {icon}
    </span>
    <span className="text-gray-300">{label}</span>
  </div>
);

export default BlogHeader;  