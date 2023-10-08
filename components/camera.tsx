import { useInformationPanel } from '@/hooks/use-information-panel'
import { Building } from '@/types'
import { PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { EffectComposer, DepthOfField, N8AO } from '@react-three/postprocessing'

const focusCameraPosition: Record<Building, THREE.Vector3> = {
  lander: new Vector3(0.25, 5.5, 24),
  ship: new Vector3(5.5, 5.2, 16),
  drill: new Vector3(-9, 5, 10),
  basement: new Vector3(2, 9, 8),
  ranch: new Vector3(6.5, 4.6, 24),
}

const defaultCameraPosition = new Vector3(-1, 11, 32)

export default function Camera() {
  const selected = useInformationPanel((s) => s.selected)
  const selectedCameraPosition = useRef<THREE.Vector3>(defaultCameraPosition)

  useEffect(() => {
    if (selected === undefined) selectedCameraPosition.current = defaultCameraPosition
    else selectedCameraPosition.current = focusCameraPosition[selected]
  }, [selected])

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        selectedCameraPosition.current.x + state.mouse.x / 2,
        selectedCameraPosition.current.y + state.mouse.y / 3,
        selectedCameraPosition.current.z,
      ],
      0.7,
      delta
    )
  })

  return <PerspectiveCamera rotation={[-0.3, 0, 0]} makeDefault position={[-1, 11, 32]} fov={30} />
}
