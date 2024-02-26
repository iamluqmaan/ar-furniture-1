import { OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { Fragment, useEffect, useRef, useState } from "react";
import Chair1 from '../../assets/Models/Chair1'
import Chair2 from '../../assets/Models/Chair2'
import Lamp1 from '../../assets/Models/Lamp1'
import Lamp2 from '../../assets/Models/Lamp2'
import Sofa1 from '../../assets/Models/Sofa1'
import Sofa2 from '../../assets/Models/sofa2'
import Table1 from '../../assets/Models/Table1'
import Table2 from '../../assets/Models/Table2'
import { useCharacterAnimations } from '../../contexts/ModelControl'
import { useGesture } from '@use-gesture/react'
import Model from "../../assets/Models/Table2";

const XrOverlay = () => {
  const reticleRef = useRef();
  const [isModelPresent,SetModelPresent]=useState(false);
  const [CurrentDrag,SetCurrentDrag]=useState(0);
  const [models, setModels] = useState([]);
  const { currentModelName } = useCharacterAnimations();
  const { isPresenting } = useXR();
  const prevIsPresentingRef = useRef(null);
  useEffect(() => {
    if (prevIsPresentingRef.current && !isPresenting) {
      window.location.reload();
    }

    prevIsPresentingRef.current = isPresenting;
  }, [isPresenting]);

  const [rotation, setRotation] = useState([0, 0, 0]);
  const [zoom, setZoom] = useState(1);

  const prevOffsetRef = useRef(0);
  const { camera } = useThree();

  useEffect(() => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  }, [isPresenting, camera]);

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
    reticleRef.current.matrixWorldAutoUpdate = true;
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id }]);
  };
  // const takesnap = () => {
  //   const canvas = document.querySelector('canvas');
    
  //   if (!canvas) return;
  
  //   // Introduce a slight delay before capturing the canvas content
  //   setTimeout(() => {
  //     requestAnimationFrame(() => {
  //       const img = canvas.toDataURL("image/jpeg");
  //       const a = document.createElement("a");
  //       a.href = img;
  //       a.download = "cavas.jpeg";
  //       a.click();
  //     });
  //   }, 100); // Adjust the delay as needed
  // };
  

  const bind = useGesture(
    {
      onPinch: ({ delta }) => {
        setZoom((prevZoom) => Math.max(0.1, prevZoom + delta[0] * 9));
      },
      onDrag: ({ pinching, cancel, offset }) => {
        if (pinching) return cancel();
        const sensitivity = 0.01;
        const diffOffset = offset[0] - prevOffsetRef.current;
        if (Math.abs(diffOffset) > 0.001) {
          const rotationY = Math.abs(diffOffset) * sensitivity;
          setRotation((prevRotation) => [
            prevRotation[0],
            prevRotation[1] + (diffOffset > 0 ? rotationY : -rotationY),
            prevRotation[2],
          ]);
          prevOffsetRef.current = offset[0];
        }
        // const dragValue=Math.abs(offset[1])-CurrentDrag;
        // if(Math.abs(dragValue)>200 && models.length)
        // {
        //   SetCurrentDrag(0);
        //   takesnap()

        // }
        // else
        // {
        //   SetCurrentDrag(0);
        // }
        // console.log("x=", offset[0], "y=", offset[1]);
      },
      // onTap: ({ event }) => {
      //   console.log(event)
      // }
    },
    {
      target: window,
      eventOptions: { passive: false },
    }
  );


  return (
    <>
      {!isPresenting && <OrbitControls />}
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => {
          return (
            <Fragment key={id}>
              {currentModelName === "chair1" && (
                <Chair1
                  chair={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.85, zoom * 0.85, zoom * 0.85]}
                />
              )}
              {currentModelName === "chair2" && (
                <Chair2
                  chair2={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.007, zoom * 0.007, zoom * 0.007]}
                />
              )}
              {currentModelName === "table1" && (
                <Table1
                  table1={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.85, zoom * 0.85, zoom * 0.85]}
                />
              )}
              {currentModelName === "table2" && (
                <Table2
                  table2={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.7, zoom * 0.7, zoom * 0.7]}
                />
              )}
              {currentModelName === "sofa1" && (
                <Sofa1
                  sofa1={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.5, zoom * 0.5, zoom * 0.5]}
                />
              )}
              {currentModelName === "sofa2" && (
                <Sofa2
                  sofa2={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.5, zoom * 0.5, zoom * 0.5]}
                />
              )}
              {currentModelName === "lamp1" && (
                <Lamp1
                  lamp1={isPresenting}

                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.7, zoom * 0.7, zoom * 0.7]}
                />
              )}
              {currentModelName === "lamp2" && (
                <Lamp2
                  lamp2={isPresenting}

                  position={position}
                  rotation={rotation}
                  scale={[zoom * 0.0075, zoom * 0.0075, zoom * 0.0075]}
                />
              )}
            </Fragment>
          );
        })}

      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && currentModelName === "chair1" && (
        <Chair1 chair={isPresenting} />
      )}
      {!isPresenting && currentModelName === "chair2" && (
        <Chair2 chair2={isPresenting} />
      )}
      {!isPresenting && currentModelName === "table1" && (
        <Table1 table1={isPresenting} />
      )}
      {!isPresenting && currentModelName === "table2" && (
        <Table2 table2={isPresenting} />
      )}
      {!isPresenting && currentModelName === "sofa1" && (
        <Sofa1 sofa1={isPresenting} />
      )}
      {!isPresenting && currentModelName === "sofa2" && (
        <Sofa2 sofa2={isPresenting} />
      )}
      {!isPresenting && currentModelName === "lamp1" && (
        <Lamp1 lamp1={isPresenting} />
      )}
      {!isPresenting && currentModelName === "lamp2" && (
        <Lamp2 lamp2={isPresenting} />
      )}

      {/* Gesture binding */}
      {isPresenting && <>{bind}</>}
    </>
  );
};

export default XrOverlay;
