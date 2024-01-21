

import  { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCharacterAnimations } from "../../contexts/ModelControl";
import { Vector3 } from 'three';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/model/chair1.glb')
  const {  Color } = useCharacterAnimations();
  const {  Rotate } = useCharacterAnimations();
  
  
  const group=useRef();
  return (
    <group ref={group} rotation={[0,Rotate.x,0]}  scale={[1.3,1.3,1.3]} position={props.position} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.Foregrou} 
         material-color={Color}

        />
        <mesh geometry={nodes.Object_7.geometry} material={materials.FrontCol} 
    material-color={Color}

        />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Silver_B} 
    material-color={Color}

        />
        <mesh geometry={nodes.Object_9.geometry} material={materials.wood} 
          material-color={Color}
        />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Silver_B} 
    material-color={Color}

        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/chair1.glb')
