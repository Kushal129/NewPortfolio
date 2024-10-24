import { FaLink, FaRegWindowClose, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';

const SocialLinks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleLinks = () => {
        setIsOpen(!isOpen);
    };

    const socialLinks = [
        { icon: <FaGithub />, name: "GitHub", link: "https://www.github.com/Kushal129" },
        { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/in/kushal-pipaliya" },
        { icon: <FaXTwitter />, name: "Twitter", link: "https://twitter.com/KushalPipaliya5" },
    ];

    return (
        <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'} z-50`}>
            <button
                onClick={toggleLinks}
                className={`bg-logo text-white rounded-full ${isMobile ? 'w-10 h-10' : 'w-14 h-14'} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-12`}
            >
                {isOpen ? <FaRegWindowClose size={isMobile ? 18 : 24} /> : <FaLink size={isMobile ? 18 : 24} />}
            </button>
            {isOpen && (
                <div className={`absolute ${isMobile ? 'bottom-12 right-0' : 'bottom-16 right-0'} bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white p-3 rounded-lg shadow-xl transition-all duration-300 transform translate-y-0 opacity-100 scale-100`}
                    style={{ backdropFilter: 'blur(10px)' }}
                >
                    <ul className={`flex ${isMobile ? 'flex-row space-x-4' : 'flex-col space-y-3'}`}>
                        {socialLinks.map((social, index) => (
                            <li key={index} className={`transform transition-all duration-300 ${isMobile ? 'hover:scale-110' : 'hover:translate-x-2'}`}>
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center ${isMobile ? 'flex-col' : 'space-x-3'} text-gray-300 hover:text-white`}
                                >
                                    <span className={`${isMobile ? 'text-2xl' : 'text-xl'}`}>{social.icon}</span>
                                    {!isMobile && <span className="font-medium">{social.name}</span>}
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
