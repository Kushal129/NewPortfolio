import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import Loading from './components/WebLoading';
import ErrorBoundary from './components/ErrorBoundary';
import IndexPage from './components/IndexPage';
import Blog from './components/Blog/Blog';

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
                backgroundColor: "rgba(63, 140, 0, 0.22)",
              }}
              clickables={['a', 'button', '.link']}
            />
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path='*' element={<IndexPage />}/>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default App;