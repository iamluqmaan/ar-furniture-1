

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCharacterAnimations } from "../../contexts/ModelControl";

export default function Model(props) {
  const { nodes, materials } = useGLTF('/model/chair2.gltf')
  const group=useRef();
  const {  currentColor } = useCharacterAnimations();
  let scl=[0.02,0.02,0.02]
  let rots=[0,0,0]
  let pos=[0,-1.5,0]
  if(props.chair2)
  {
    rots=props.rotation;
    scl=props.scale
    pos=props.position
  }
  return (
    <group ref={group} {...props} rotation={rots}  scale={scl} position={pos} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.OfficeChair_OfficeChairMetal_0.geometry} material={materials.OfficeChairMetal} />
        <mesh geometry={nodes.OfficeChair_OfficeChairPlastic_0.geometry} material={materials.OfficeChairPlastic} />
        <mesh geometry={nodes.OfficeChair_OfficeChairCloth_0.geometry} material={materials.OfficeChairCloth} 
           material-color={currentColor}
        />
        <mesh geometry={nodes.OfficeChair_OfficeChairLeather_0.geometry} material={materials.OfficeChairLeather} 
           material-color={currentColor}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/chair2.gltf')
