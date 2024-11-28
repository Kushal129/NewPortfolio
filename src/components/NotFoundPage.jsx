import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

const NotFoundPage = () => {
  return (
    <div className="relative w-full h-screen mx-auto bg-primary overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-[100px] font-bold text-white">404</h1>
          <p className="text-secondary text-[20px] mb-8">
            Oops! The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-secondary transition-colors"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(NotFoundPage, "NotFoundPage");
