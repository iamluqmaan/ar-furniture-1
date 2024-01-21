import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "./Ar-hit";
import { Environment, OrbitControls } from "@react-three/drei";

const XrHitModelContainer = (props) => {
  return (
    <>
      <ARButton className="ar-button"
       sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
      <ambientLight/>
      <OrbitControls/>
        <XR>
          <XrHitModel Model={props.comp} />
        </XR>
        <Environment preset="sunset"/>
      </Canvas>
    </>
  );
};

export default XrHitModelContainer;
