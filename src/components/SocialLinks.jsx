import { FaLink, FaRegWindowClose, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from 'react';

const SocialLinks = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLinks = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={toggleLinks}
                className="bg-logo text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform duration-200 transform hover:scale-110"
            >
                {isOpen ? <FaRegWindowClose /> : <FaLink />}
            </button>
            {isOpen && (
                <div className="mt-2 lg:bg-transparent backdrop-blur-md bg-[#ffffff1b] text-secondary p-4 rounded-lg shadow-lg transition-transform duration-300 transform translate-y-0 opacity-100 scale-100"
                    style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
                >
                    <ul className="flex flex-col space-y-2">
                        {[
                            { icon: <FaGithub />, name: "GitHub", link: "https://www.github.com/Kushal129" },
                            { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/in/kushal-pipaliya" },
                            { icon: <FaXTwitter />, name: "Twitter", link: "https://twitter.com/KushalPipaliya5" },
                            { icon: <FaFacebook />, name: "Facebook", link: "https://www.facebook.com/kushal.pipaliya.12?mibextid=JRoKGi" },
                        ].map((social, index) => (
                            <li key={index} className="transform transition-transform duration-300 hover:scale-105">
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 hover:text-secondary"
                                >
                                    {social.icon}
                                    <span>{social.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SocialLinks;
