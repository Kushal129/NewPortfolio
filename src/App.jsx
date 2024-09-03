import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/WebLoading';
import ErrorBoundary from './components/ErrorBoundary';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
// const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const App = () => {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <div className="relative z-0 bg-primary">
              <div className=" bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              {/* <Feedbacks /> */}
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

export default App;
