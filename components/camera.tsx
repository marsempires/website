import { PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React from 'react'

export default function Camera() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [-1 + state.mouse.x / 2, 11 + state.mouse.y / 3, 32], 0.5, delta)
  })

  // return <PerspectiveCamera rotation={[-0.25, 0, 0]} makeDefault position={[0, 8, 30]} fov={30} />
  return <PerspectiveCamera rotation={[-0.3, 0, 0]} makeDefault position={[-1, 11, 32]} fov={30} />
}
