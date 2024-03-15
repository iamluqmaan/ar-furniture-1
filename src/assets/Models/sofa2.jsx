

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCharacterAnimations } from "../../contexts/ModelControl";

export default function Model(props) {
  const group=useRef();
  const {  currentColor } = useCharacterAnimations();
  let scl=[1.5,1.5,1.5]
  let rots=[0,-3.1,0]
  let pos=[0,-1.3,0]
  if(props.sofa2)
  {
    rots=props.rotation;
    scl=props.scale
    pos=props.position
  }
  const { nodes, materials } = useGLTF('/model/sofa2-transformed.glb')
  return (
    <group ref={group} rotation={rots}  scale={scl} position={pos} {...props} dispose={null}>
      
      <mesh geometry={nodes.Object_3.geometry} material={materials['None_Base_Diffuse.png']} rotation={[-Math.PI / 2, 0, 0]} scale={0.304} 
        
      />
      <mesh geometry={nodes.Object_4.geometry} material={materials['None_Texture.jpg']} rotation={[-Math.PI / 2, 0, 0]} scale={0.304} 
        material-color={currentColor}
      />
    </group>
  )
}

useGLTF.preload('/model/sofa2-transformed.glb')
