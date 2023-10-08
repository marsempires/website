import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    windturbine_low: THREE.Mesh
    windturbine_low001: THREE.Mesh
  }
  materials: {
    ['spacebits_texture.067']: THREE.MeshStandardMaterial
  }
}

export function TurbineShort(props: JSX.IntrinsicElements['group']) {
  const propeller = useRef<THREE.Mesh>(null)
  const { nodes, materials } = useGLTF('/models/turbine-short.glb') as GLTFResult

  useFrame((_, delta) => {
    if (propeller.current) propeller.current.rotation.z += delta * 10
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.windturbine_low.geometry}
        material={materials['spacebits_texture.067']}
      />
      <mesh
        ref={propeller}
        receiveShadow
        castShadow
        geometry={nodes.windturbine_low001.geometry}
        material={materials['spacebits_texture.067']}
        position={[0, 0.89, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/turbine-short.glb')
