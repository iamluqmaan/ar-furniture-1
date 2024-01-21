import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR} from "@react-three/xr";
import { Fragment, useEffect, useRef, useState } from "react";
import Chair1 from '../../assets/Models/Chair1'
import Lamp1 from '../../assets/Models/Lamp1'
import Sofa1 from '../../assets/Models/Sofa1'
import Table1 from '../../assets/Models/Table1'
import Table2 from '../../assets/Models/Table2'
import {useCharacterAnimations} from '../../contexts/ModelControl'

const XrOverlay = (props) => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const { currentModelName} =useCharacterAnimations();
  const {setCurrentModelName}=useCharacterAnimations();
  useEffect(()=>{
    setCurrentModelName(props.Model)
  },[props.Model])
  const { isPresenting } = useXR();
  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id }]);
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => {
          return (
            <Fragment key={id}>
              {currentModelName === "chair1" && <Chair1 chair={true} position={position} />}
              {currentModelName === "table1" && (
                <Table1 position={position} />
              )}
              {currentModelName === "table2" && (
                <Table2 position={position} />
              )}
              {currentModelName === "sofa1" && (
                <Sofa1  position={position} />
              )}
              {currentModelName === "lamp1" && (
                <Lamp1 position={position} />
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

      {!isPresenting && currentModelName === "chair1" && <Chair1 chair={false} />}
      {!isPresenting && currentModelName === "table1" && (
                <Table1 />
      )}
      {!isPresenting && currentModelName === "table2" && (
                <Table2 />)}
      {!isPresenting && currentModelName === "sofa1" && (
                <Sofa1 />)}
      {!isPresenting && currentModelName === "lamp1" && (
                <Lamp1 />)}
    </>
  );
};

export default XrOverlay;
