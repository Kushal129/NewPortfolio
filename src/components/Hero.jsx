import { motion, useScroll, useTransform } from "framer-motion";
import heroimg from '../assets/2.png';
import resume from '../../public/KushalPipaliya_Resume.pdf';
import { styles } from "./styles";
import { useEffect, useState } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative w-full mx-auto">
      <div
        className={`main absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div
            className='w-5 h-5 rounded-full bg-[#158808]'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.div
            className='w-1 sm:h-80 h-40 green-gradient'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          />
        </div>

        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            Hi, I'm <span className='text-[#158808]'>Kushal</span>
          </motion.h1>

          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          >
            I focus on <span className='text-[#158808]'>Cybersecurity</span> <br className='sm:block hidden' />
            and <span className='text-[#158808]'>Web Development</span>
          </motion.p>

          <motion.div
            className={`${styles.heroSubText} ${isMobile ? 'flex lg:justify-center lg:items-center' : ''}`}
            style={{ y, opacity }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
          >
            <button className="ui-btn mt-4">
              <a href={resume} download="Kushal_Resume.pdf">
                <span>Download Resume</span>
              </a>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={heroimg}
          alt="Hero Image"
          loading="eager"
          className="lg:mt-[180px] lg:w-full lg:h-full m-[200px] w-full h-full object-cover lg:object-contain"
        />
      </div>

      <div className='absolute bottom-1 w-full flex justify-center items-center md:hidden'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
