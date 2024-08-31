import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import heroimg from '../assets/hero.png';
import heroimg from '../../assets/2.png';

const Hero = () => {
  return (
    <section className="relative w-full mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#158808]' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#158808]'>Kushal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web-dev and <br className='sm:block hidden' />
            ensure cyber security
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={heroimg}
          alt="Hero Image"
          className="lg:mt-20 lg:w-full lg:h-full m-[200px] w-full h-full object-cover lg:object-contain"
        />
      </div>

      <div className='absolute w-full flex justify-center  items-center'>
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
