import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import Loading from './components/WebLoading';
import ErrorBoundary from './components/ErrorBoundary';
import SocialLinks from './components/SocialLinks';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));
const Certification = lazy(() => import('./components/Certification'));

const App = () => {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <AnimatedCursor
              innerSize={10}
              outerSize={40}
              color="21, 136, 8"
              outerAlpha={0.2}
              innerScale={2}
              outerScale={1.5}
              hasBlendMode={true}
              outerStyle={{
                mixBlendMode: "difference",
              }}
              innerStyle={{
                backgroundColor: "rgb(63, 140, 0, 0.22)",
              }}
              clickables={[
                'a', 'button', '.link'
              ]}
            />
            <div className="relative z-0 bg-primary">
              <div className="bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Certification />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
              <SocialLinks />
            </div>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default App;
