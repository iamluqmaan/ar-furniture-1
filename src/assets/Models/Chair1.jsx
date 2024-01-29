

import  { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCharacterAnimations } from "../../contexts/ModelControl";

export default function Model(props) {
  const { nodes, materials } = useGLTF('/model/chair1.glb')
  const {  currentColor } = useCharacterAnimations();
  let scl=[2,2,2]
  let rots=[0,0,0]
  let pos=[0,-1.3,0]
  if(props.chair)
  {
    rots=props.rotation;
    scl=props.scale
    pos=props.position
  }
  const group=useRef();
  return (
    <group ref={group} rotation={rots}  scale={scl} position={pos} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.Foregrou} 
         material-color={currentColor}

        />
        <mesh geometry={nodes.Object_7.geometry} material={materials.FrontCol} 
    material-color={currentColor}

        />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Silver_B} 
    material-color={currentColor}

        />
        <mesh geometry={nodes.Object_9.geometry} material={materials.wood} 
          material-color={currentColor}
        />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Silver_B} 
    material-color={currentColor}

        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/chair1.glb')
