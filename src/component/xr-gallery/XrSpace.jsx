import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { XR, useXR } from '@react-three/xr';

const ARScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <XR>
        <ARContent />
      </XR>
    </Canvas>
  );
};

const ARContent = () => {
  const xr = useXR();
  const contentRef = useRef();

  useEffect(() => {
    if (xr.isPresenting) {
      // Access XR session and configure absolute scale
      const xrSession = xr.getSession();
      if (xrSession && xrSession.requestReferenceSpace) {
        xrSession.requestReferenceSpace('local').then((referenceSpace) => {
          // Assume 1 unit in your scene represents 1 meter in the real world
          const scale = 0.1; // Adjust this value based on your real-world scale
          contentRef.current.scale.set(scale, scale, scale);

          xrSession.updateRenderState({ baseLayer: new XRWebGLLayer(xrSession, contentRef.current) });
          xrSession.requestAnimationFrame((time, frame) => {
            xrSession.updateRenderState({ depthNear: 0.1, depthFar: 1000 });
            xrSession.requestAnimationFrame(() => {});
          });
          xrSession.requestAnimationFrame(() => {});
        });
      }
    }
  }, [xr.isPresenting]);

  return (
    <group ref={contentRef}>
      {/* Your AR content goes here */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </group>
  );
};

export default ARScene;
