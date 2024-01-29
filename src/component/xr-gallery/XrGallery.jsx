import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import {  Interactive, useHitTest, useXR } from "@react-three/xr";
import { Fragment, useEffect, useRef, useState } from "react";
import Chair1 from '../../assets/Models/Chair1'
import Lamp1 from '../../assets/Models/Lamp1'
import Sofa1 from '../../assets/Models/Sofa1'
import Table1 from '../../assets/Models/Table1'
import Table2 from '../../assets/Models/Table2'
import { useCharacterAnimations } from '../../contexts/ModelControl'
import { useGesture } from '@use-gesture/react'

const XrOverlay = (props) => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const { currentModelName, setCurrentModelName } = useCharacterAnimations();
  const { isPresenting } = useXR();
  const prevIsPresentingRef = useRef(null);

  useEffect(() => {
    if (prevIsPresentingRef.current && !isPresenting) {
      window.location.reload();
    }

    prevIsPresentingRef.current = isPresenting;
  }, [isPresenting]);
  
  let [rotation, setRotation] = useState([0, 0, 0]);
  const [zoom, setZoom] = useState(1);
  
  useEffect(() => {
    setCurrentModelName(props.Model);
  }, [props.Model]);

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


  const bind = useGesture(
    {
      
      onPinch: ({ delta  }) => {
        
        setZoom((prevZoom) => Math.max(0.1, prevZoom + delta[0]*10 ));
      
      },
      onDrag: ({ pinching, cancel,offset }) => {
        if (pinching) return cancel()
        const sensitivity = 0.015; 
        const rotationY = offset[0] * sensitivity;
        setRotation((prevRotation) => [
          prevRotation[0],
          prevRotation[1] + (rotationY),
          prevRotation[2],
        ]);
      },
    },
    { target: window }
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
                  scale={[zoom, zoom, zoom]}
                />
              )}
              {currentModelName === "table1" && (
                <Table1
                table1={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom, zoom, zoom]}
                />
              )}
              {currentModelName === "table2" && (
                <Table2
                table2={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom, zoom, zoom]}
                />
              )}
              {currentModelName === "sofa1" && (
                <Sofa1
                sofa1={isPresenting}
                  position={position}
                  rotation={rotation}
                  scale={[zoom, zoom, zoom]}
                />                       
              )}
              {currentModelName === "lamp1" && (
                <Lamp1
                lamp1={isPresenting}

                  position={position}
                  rotation={rotation}
                  scale={[zoom, zoom, zoom]}
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
      {!isPresenting && currentModelName === "table1" && (
        <Table1 table1={isPresenting} />
      )}
      {!isPresenting && currentModelName === "table2" && (
        <Table2 table2={isPresenting} />
      )}
      {!isPresenting && currentModelName === "sofa1" && (
        <Sofa1  sofa1={isPresenting}/>
      )}
      {!isPresenting && currentModelName === "lamp1" && (
        <Lamp1 lamp1={isPresenting} />
      )}

      {/* Gesture binding */}
      {isPresenting && <>{bind}</>}
    </>
  );
};

export default XrOverlay;
