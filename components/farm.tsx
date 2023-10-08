import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    space_farm_large_sprinkler: THREE.Mesh
    space_farm_large_sprinkler001: THREE.Mesh
  }
  materials: {
    ['spacebits_texture.045']: THREE.MeshStandardMaterial
  }
}

export function Farm(props: JSX.IntrinsicElements['group']) {
  const propeller = useRef<THREE.Mesh>(null)
  const { nodes, materials } = useGLTF('/models/farm.glb') as GLTFResult

  useFrame((_, delta) => {
    if (propeller.current) propeller.current.rotation.y += delta / 2
  })

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.space_farm_large_sprinkler.geometry} material={materials['spacebits_texture.045']} />
      <mesh
        ref={propeller}
        geometry={nodes.space_farm_large_sprinkler001.geometry}
        material={materials['spacebits_texture.045']}
        position={[-0.006, 0.385, -0.023]}
      />
    </group>
  )
}

useGLTF.preload('/models/farm.glb')
