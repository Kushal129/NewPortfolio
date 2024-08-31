import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal, setDecal] = useState(null);
  const [loadingError, setLoadingError] = useState(false);

  // Load texture from the provided image URL
  const [texture] = useTexture([imgUrl]);

  useEffect(() => {
    if (texture) {
      setDecal(texture);
      setLoadingError(false);
    } else {
      setLoadingError(true);
    }
  }, [texture]);

  if (loadingError) {
    return <div>Error loading texture</div>;
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#9fcf9b'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>  
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]} // Device pixel ratio for higher quality
      gl={{ preserveDrawingBuffer: true }} // Ensures canvas data is preserved
      style={{ height: '100%', width: '100%' }} // Ensure canvas takes full container space
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
