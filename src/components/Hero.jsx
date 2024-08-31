import { motion, useScroll, useTransform } from "framer-motion";
import heroimg from '../assets/2.png';
import { styles } from "./styles";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]); // Adjust the range and values as needed
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Adjust the range and values as needed

  return (
    <section className="relative w-full mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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
            style={{ y, opacity }}
            initial={{ y: 50, opacity: 0 }} // Start with initial state
            animate={{ y: 0, opacity: 1 }} // Animate to final state
            transition={{ duration: 1, ease: "easeOut" }} // Transition properties
          >
            Hi, I'm <span className='text-[#158808]'>Kushal</span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            style={{ y, opacity }}
            initial={{ y: 30, opacity: 0 }} // Start with initial state
            animate={{ y: 0, opacity: 1 }} // Animate to final state
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Transition properties
          >
            I develop web-dev and <br className='sm:block hidden' />
            ensure cyber security
          </motion.p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={heroimg}
          alt="Hero Image"
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
