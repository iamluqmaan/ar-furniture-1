import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCharacterAnimations } from "../../contexts/ModelControl";

export default function Model(props) {
  const group=useRef();
  const {  Color } = useCharacterAnimations();
  const {  Rotate } = useCharacterAnimations();
  const { nodes, materials } = useGLTF('/model/table2.glb')
  return (
    <group ref={group} rotation={[0,Rotate.x,0]} {...props} dispose={null}>
      <mesh geometry={nodes.Coffee_table.geometry} material={materials.Материал} rotation={[0, 0, 0]} 
        material-color={Color}
      />
    </group>
  )
}

useGLTF.preload('/table2.glb')
