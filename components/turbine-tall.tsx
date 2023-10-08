import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    windturbine_tall001: THREE.Mesh
    windturbine_tall002: THREE.Mesh
  }
  materials: {
    ['spacebits_texture.068']: THREE.MeshStandardMaterial
  }
}

export function TurbineTall(props: JSX.IntrinsicElements['group']) {
  const propeller = useRef<THREE.Mesh>(null)
  const { nodes, materials } = useGLTF('/models/turbine-tall.glb') as GLTFResult

  useFrame((_, delta) => {
    if (propeller.current) propeller.current.rotation.z += delta * 1.5
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.windturbine_tall001.geometry}
        material={materials['spacebits_texture.068']}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.13}
      />
      <mesh
        ref={propeller}
        receiveShadow
        castShadow
        geometry={nodes.windturbine_tall002.geometry}
        material={materials['spacebits_texture.068']}
        rotation={[-Math.PI, 0, -Math.PI]}
        position={[0, 2.316, -0.175]}
        scale={1.13}
      />
    </group>
  )
}

useGLTF.preload('/models/turbine-tall.glb')
