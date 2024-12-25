import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./styles";
import { MdOutlinePlayCircleOutline, MdPauseCircleOutline } from "react-icons/md";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import soundFile from '../assets/sound.mp3';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audio] = useState(new Audio(soundFile));
  const [showModal, setShowModal] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    const firstVisit = localStorage.getItem("firstVisit");
    if (!firstVisit) {
      setShowModal(true);
      localStorage.setItem("firstVisit", "true");
    } else {
      const shouldPlayMusic = localStorage.getItem("playMusic");
      if (shouldPlayMusic === "true") {
        audio.play().catch((error) => {
          console.log("Autoplay blocked. You can manually start the audio.");
        });
        setIsPlaying(true); 
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      audio.pause();
    };
  }, [audio]);

  const handleMusicChoice = (choice) => {
    setUserChoice(choice);
    localStorage.setItem("playMusic", choice);

    if (choice === "yes") {
      audio.play().catch((error) => {
        console.log("Autoplay blocked. You can manually start the audio.");
      });
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }

    setShowModal(false);
  };

  const toggleMusic = () => {
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30 backdrop-blur-sm">
          <div className="bg-[#141414c9] p-6 rounded-lg text-center max-w-sm">
            <h2 className="text-lg text-gray-300 font-semibold mb-4">
              Welcome to my portfolio! Would you like to experience it with music or without?
            </h2>
            <button
              onClick={() => handleMusicChoice("yes")}
              className="bg-black-200 text-white py-2 px-4 rounded-md mr-4"
            >
              Yes, play music
            </button>
            <button
              onClick={() => handleMusicChoice("no")}
              className="bg-red-800 text-white py-2 px-4 rounded-md"
            >
              No, thanks
            </button>
          </div>
        </div>
      )}

      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
          }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' className='w-16 h-16 object-contain' />
            <p className='text-white text-xl font-bold cursor-pointer flex'>&nbsp;
              <span className='text-secondary hover:text-white hidden md:inline'>| Cybersecurity & Web Development</span>
              <span className='text-secondary hover:text-white inline md:hidden'>| Cyber & Web Dev</span>
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className={`hover:text-white text-[18px] font-medium cursor-pointer`}>
              <Link to="/blog" onClick={() => setActive("Blog")} className="text-secondary hover:text-white border-b-2 border-transparent transition duration-300">Blog</Link>
            </li>
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${!toggle ? "hidden" : "flex"
                } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                      }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li className={`font-poppins font-medium cursor-pointer text-[16px]`}>
                  <Link to="/blog" onClick={() => setActive("Blog")} className="text-secondary hover:text-white border-b-2 border-transparent transition duration-300">Blog</Link>
                </li>
              </ul>
            </div>
          </div>

          {!showModal && ( // Only show the button if the modal is not visible
            <button onClick={toggleMusic} className="text-white bg-secondary p-2 ml-2 rounded-md">
              {isPlaying ? <MdPauseCircleOutline /> : <MdOutlinePlayCircleOutline />}
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
