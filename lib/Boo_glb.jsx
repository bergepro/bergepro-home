/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 boo_glb.glb
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/boo_glb.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane001.geometry} material={materials.Material__26} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/boo_glb.glb')
