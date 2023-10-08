import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    lander_A: THREE.Mesh
    lander_A001: THREE.Mesh
  }
  materials: {
    ['spacebits_texture.024']: THREE.MeshStandardMaterial
  }
}

export function Lander(props: JSX.IntrinsicElements['group']) {
  const radar = useRef<THREE.Mesh>(null)
  const { nodes, materials } = useGLTF('/models/lander.glb') as GLTFResult

  useFrame((_, delta) => {
    if (radar.current) radar.current.rotation.y += delta / 2
  })

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.lander_A.geometry} material={materials['spacebits_texture.024']} />
      <mesh
        ref={radar}
        geometry={nodes.lander_A001.geometry}
        material={materials['spacebits_texture.024']}
        position={[0.107, 0.831, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/lander.glb')
