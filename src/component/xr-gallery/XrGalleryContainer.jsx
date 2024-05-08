import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useCallback, useState } from "react";
import { CharacterAnimationsProvider } from "../../contexts/ModelControl";
import XrGallery from "./XrGallery";
import { Environment } from "@react-three/drei";
import Interface from "./Interface";
import { Link } from 'react-router-dom'
import { Suspense } from "react";
const XrGalleryContainer = () => {

  const [overlayContent, setOverlayContent] = useState(null);
  let interfaceRef = useCallback((node) => {
    if (node !== null) {
      setOverlayContent(node);
    }
  });


  return (
    <CharacterAnimationsProvider >
      <Interface colapsed={close} arMode={true} ref={interfaceRef} />
      <ARButton
        className="ar-button"
        sessionInit={{
          requiredFeatures: ["hit-test"],
          optionalFeatures: ["dom-overlay", "bounded-floor", "plane-detection"],
          domOverlay: { root: overlayContent },
        }}
      />

      <Canvas style={{ touchAction: "none" }}>
        <ambientLight intensity={1} />

        <XR>
          <Suspense fallback={null}>
            <XrGallery />
          </Suspense>
        </XR>
        <Environment preset="sunset" />
      </Canvas>
      <Link to='/'>
       <button className="back-btn" style={{ position: 'relative' }}>Back</button>
      </Link>
    </CharacterAnimationsProvider>
  );
};

export default XrGalleryContainer;
