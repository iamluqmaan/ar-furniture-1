

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCharacterAnimations } from "../../contexts/ModelControl";

export default function Model(props) {
  const group=useRef();
  const {  currentColor } = useCharacterAnimations();
  let scl=[0.8,0.8,0.8 ]
  let rots=[0,-1.5,0]
  let pos=[0,-0.5,0]
  if(props.sofa5)
  {
    rots=props.rotation;
    scl=props.scale
    pos=props.position
  }
  const { nodes, materials } = useGLTF('/model/sofa5.glb')
  return (
    <group ref={group} rotation={rots}  scale={scl} position={pos} {...props} dispose={null}>
   <mesh geometry={nodes.defaultMaterial.geometry} material={materials.DefaultMaterial} scale={1.301} 

   />
      <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Material} scale={1.301} 
            material-color={currentColor}

      />
    </group>
  )
}

useGLTF.preload('/model/sofa5.glb')
