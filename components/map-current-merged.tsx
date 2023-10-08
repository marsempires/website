import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { Farm } from './buildings/farm'
import { Lander } from './buildings/lander'
import { TurbineShort } from './turbine-short'
import { TurbineTall } from './turbine-tall'

type GLTFResult = GLTF & {
  nodes: {
    terrain_low172: THREE.Mesh
    Cylinder034: THREE.Mesh
    Cylinder034_1: THREE.Mesh
    Cylinder034_2: THREE.Mesh
    Cylinder035: THREE.Mesh
    Cylinder035_1: THREE.Mesh
    Cylinder035_2: THREE.Mesh
    basemodule_E001: THREE.Mesh
    cargo_B_stacked005: THREE.Mesh
    Cylinder042: THREE.Mesh
    Cylinder042_1: THREE.Mesh
    lander_A001: THREE.Mesh
    Cylinder044: THREE.Mesh
    Cylinder044_1: THREE.Mesh
    Cylinder044_2: THREE.Mesh
    Cylinder044_3: THREE.Mesh
    Cylinder044_4: THREE.Mesh
    Cylinder046: THREE.Mesh
    Cylinder046_1: THREE.Mesh
    solarpanel012: THREE.Mesh
    solarpanel014: THREE.Mesh
    solarpanel015: THREE.Mesh
    Cylinder052: THREE.Mesh
    Cylinder052_1: THREE.Mesh
    Cube661: THREE.Mesh
    Cube661_1: THREE.Mesh
    Cube661_2: THREE.Mesh
    Cube661_3: THREE.Mesh
    Cube661_4: THREE.Mesh
    Cube661_5: THREE.Mesh
    structure_tall002: THREE.Mesh
    structure_tall003: THREE.Mesh
    tunnel_straight_A001: THREE.Mesh
    windturbine_tall001: THREE.Mesh
    lander_base002: THREE.Mesh
    cargo_B_packed: THREE.Mesh
    cargo_B_packed001: THREE.Mesh
    solarpanel008: THREE.Mesh
    mobile_base_cargo002: THREE.Mesh
    lights002: THREE.Mesh
    lights003: THREE.Mesh
    lights004: THREE.Mesh
    windturbine_tall002: THREE.Mesh
    Cylinder014: THREE.Mesh
    Cylinder014_1: THREE.Mesh
    Cylinder014_2: THREE.Mesh
    basemodule_garage: THREE.Mesh
    basemodule_B002: THREE.Mesh
    basemodule_B003: THREE.Mesh
    basemodule_C006: THREE.Mesh
    roofmodule_solarpanels: THREE.Mesh
    water_storage005: THREE.Mesh
    water_storage006: THREE.Mesh
    structure_tall004: THREE.Mesh
    Cylinder027: THREE.Mesh
    Cylinder027_1: THREE.Mesh
    Cylinder029: THREE.Mesh
    Cylinder029_1: THREE.Mesh
    Cylinder029_2: THREE.Mesh
    drill_structure001: THREE.Mesh
    structure_low: THREE.Mesh
    tunnel_diagonal_long_A: THREE.Mesh
    cargo_A_packed: THREE.Mesh
    cargo_A: THREE.Mesh
    containers_A003: THREE.Mesh
    containers_B002: THREE.Mesh
    Cylinder616: THREE.Mesh
    Cylinder616_1: THREE.Mesh
    rocks_A013: THREE.Mesh
    rocks_B009: THREE.Mesh
    windturbine_tall003: THREE.Mesh
    windturbine_low001: THREE.Mesh
    cargo_B_packed002: THREE.Mesh
    cargo_B: THREE.Mesh
  }
  materials: {
    ['spacebits_texture.035']: THREE.MeshStandardMaterial
    ['spacebits_texture.002']: THREE.MeshStandardMaterial
    ['spacebits_texture.027']: THREE.MeshStandardMaterial
    ['spacebits_texture.031']: THREE.MeshStandardMaterial
    ['spacebits_texture.003']: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
    ['spacebits_texture.046']: THREE.MeshStandardMaterial
    ['spacebits_texture.005']: THREE.MeshStandardMaterial
    ['spacebits_texture.017']: THREE.MeshStandardMaterial
    ['spacebits_texture.023']: THREE.MeshStandardMaterial
    ['Glass.001']: THREE.MeshStandardMaterial
    ['spacebits_texture.024']: THREE.MeshStandardMaterial
    ['spacebits_texture.026']: THREE.MeshStandardMaterial
    ['spacebits_texture.038']: THREE.MeshStandardMaterial
    ['spacebits_texture.067']: THREE.MeshStandardMaterial
    ['spacebits_texture.028']: THREE.MeshStandardMaterial
    ['spacebits_texture.021']: THREE.MeshStandardMaterial
    ['spacebits_texture.043']: THREE.MeshStandardMaterial
    ['spacebits_texture.044']: THREE.MeshStandardMaterial
    ['spacebits_texture.045']: THREE.MeshStandardMaterial
    ['spacebits_texture.047']: THREE.MeshStandardMaterial
    ['spacebits_texture.012']: THREE.MeshStandardMaterial
    ['spacebits_texture.016']: THREE.MeshStandardMaterial
    ['spacebits_texture.019']: THREE.MeshStandardMaterial
    ['spacebits_texture.049']: THREE.MeshStandardMaterial
    ['spacebits_texture.051']: THREE.MeshStandardMaterial
    ['spacebits_texture.064']: THREE.MeshStandardMaterial
    ['spacebits_texture.068']: THREE.MeshStandardMaterial
    ['spacebits_texture.011']: THREE.MeshStandardMaterial
    ['spacebits_texture.030']: THREE.MeshStandardMaterial
    ['spacebits_texture.029']: THREE.MeshStandardMaterial
    ['spacebits_texture.006']: THREE.MeshStandardMaterial
    ['spacebits_texture.042']: THREE.MeshStandardMaterial
    ['spacebits_texture.066']: THREE.MeshStandardMaterial
    ['spacebits_texture.040']: THREE.MeshStandardMaterial
    ['spacebits_texture.020']: THREE.MeshStandardMaterial
    ['spacebits_texture.050']: THREE.MeshStandardMaterial
    ['spacebits_texture.060']: THREE.MeshStandardMaterial
    ['spacebits_texture.008']: THREE.MeshStandardMaterial
    ['spacebits_texture.007']: THREE.MeshStandardMaterial
    ['spacebits_texture.033']: THREE.MeshStandardMaterial
    ['spacebits_texture.036']: THREE.MeshStandardMaterial
    ['spacebits_texture.037']: THREE.MeshStandardMaterial
    ['spacebits_texture.010']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/map-current-merged.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.terrain_low172.geometry}
        material={materials['spacebits_texture.035']}
        position={[0, 0.5, 0]}
      />
      <group position={[-5.191, 4.011, -13.046]} scale={1.071}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034.geometry}
          material={materials['spacebits_texture.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034_1.geometry}
          material={materials['spacebits_texture.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034_2.geometry}
          material={materials['spacebits_texture.031']}
        />
      </group>
      <group position={[-1.083, 3.083, -13.084]} scale={1.071}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={materials['spacebits_texture.003']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder035_1.geometry} material={materials.Glass} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_2.geometry}
          material={materials['spacebits_texture.046']}
        />
      </group>
      <group position={[7.123, 1, 12.227]} rotation={[0, -0.858, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={materials['spacebits_texture.003']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder035_1.geometry} material={materials.Glass} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_2.geometry}
          material={materials['spacebits_texture.046']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basemodule_E001.geometry}
        material={materials['spacebits_texture.005']}
        position={[-1.083, 4.101, -13.155]}
        rotation={[0, -0.788, 0]}
        scale={1.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cargo_B_stacked005.geometry}
        material={materials['spacebits_texture.017']}
        position={[10.523, 0.97, 9.524]}
        rotation={[0, 1.571, 0]}
        scale={1.572}
      />
      <group position={[-7.067, 2.002, -7.213]} scale={0.892}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={materials['spacebits_texture.023']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder042_1.geometry} material={materials['Glass.001']} />
      </group>
      <group position={[12.83, 4, -5.05]} scale={1.541}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={materials['spacebits_texture.023']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder042_1.geometry} material={materials['Glass.001']} />
      </group>

      <Lander position={[-2.44, 1, 10.645]} rotation={[0, 0.073, 0]} scale={2.365} />
      <group position={[0.987, 1, -3.051]} scale={1.308}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044.geometry}
          material={materials['spacebits_texture.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044_1.geometry}
          material={materials['spacebits_texture.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044_2.geometry}
          material={materials['spacebits_texture.027']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044_3.geometry}
          material={materials['spacebits_texture.038']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044_4.geometry}
          material={materials['spacebits_texture.067']}
        />
      </group>
      <group position={[3.523, 1, 4.717]} scale={[2.466, 1.254, 2.466]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046.geometry}
          material={materials['spacebits_texture.028']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_1.geometry}
          material={materials['spacebits_texture.021']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel012.geometry}
        material={materials['spacebits_texture.043']}
        position={[-16.65, 1, -1.41]}
        scale={3.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel014.geometry}
        material={materials['spacebits_texture.043']}
        position={[-10.254, 3, -15.156]}
        scale={2.879}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel015.geometry}
        material={materials['spacebits_texture.043']}
        position={[-10.38, 2, -13.652]}
        scale={2.429}
      />
      <group position={[2.5, 1, 14.294]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052.geometry}
          material={materials['spacebits_texture.044']}
        />
        <Farm position={[0, 0, -2]} />
        <mesh
          castShadow
          receiveShadow
          position={[0, -1, -2]}
          geometry={nodes.Cylinder035_1.geometry}
          material={materials.Glass}
        />
        <Farm position={[2, 0, -2]} />
        <mesh
          castShadow
          receiveShadow
          position={[2, -1, -2]}
          geometry={nodes.Cylinder035_1.geometry}
          material={materials.Glass}
        />
        <Farm position={[2, 0, 0]} />
        <mesh
          castShadow
          receiveShadow
          position={[2, -1, 0]}
          geometry={nodes.Cylinder035_1.geometry}
          material={materials.Glass}
        />
      </group>
      <group position={[-6.239, 1.146, 1.222]} rotation={[0, -1.179, 0]} scale={2.097}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube661.geometry}
          material={materials['spacebits_texture.047']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube661_1.geometry}
          material={materials['spacebits_texture.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube661_2.geometry}
          material={materials['spacebits_texture.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube661_3.geometry}
          material={materials['spacebits_texture.017']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube661_4.geometry}
          material={materials['spacebits_texture.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube661_5.geometry}
          material={materials['spacebits_texture.049']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.structure_tall002.geometry}
        material={materials['spacebits_texture.051']}
        position={[-1.083, 0.994, -12.974]}
        scale={1.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.structure_tall003.geometry}
        material={materials['spacebits_texture.051']}
        position={[7.676, 2.998, -18.318]}
        scale={[1, 0.891, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tunnel_straight_A001.geometry}
        material={materials['spacebits_texture.064']}
        position={[-3.134, 3.016, -13.044]}
        scale={1.071}
      />

      <TurbineShort position={[0.987, 3.25, -3.051]} scale={1.308} rotation={[0, 2.5, 0]} />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cargo_B_packed.geometry}
        material={materials['spacebits_texture.011']}
        position={[-10.545, 0.999, 15.704]}
        scale={4.251}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cargo_B_packed001.geometry}
        material={materials['spacebits_texture.011']}
        position={[7.515, 2.01, -4.437]}
        rotation={[0, 0.061, 0]}
        scale={1.507}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel008.geometry}
        material={materials['spacebits_texture.043']}
        position={[-20.404, 1, -14.606]}
        scale={3.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mobile_base_cargo002.geometry}
        material={materials['spacebits_texture.030']}
        position={[20.77, 1, -11.073]}
        scale={2.857}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lights002.geometry}
        material={materials['spacebits_texture.029']}
        position={[8.975, 3, -7.041]}
        scale={3.731}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lights003.geometry}
        material={materials['spacebits_texture.029']}
        position={[-7.013, 1, 13.421]}
        scale={3.301}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lights004.geometry}
        material={materials['spacebits_texture.029']}
        position={[-14.962, 2.064, -7.071]}
        scale={4.37}
      />
      <TurbineTall position={[9.773, 2, 2.856]} rotation={[0, 2.5, 0]} scale={1.13} />
      <TurbineTall position={[9.773, 2, 5.904]} rotation={[0, 2.5, 0]} scale={1.13} />
      <group position={[12.848, 7.035, -5.066]} rotation={[0, -0.858, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials['spacebits_texture.003']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder014_1.geometry} material={materials.Glass} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_2.geometry}
          material={materials['spacebits_texture.046']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basemodule_garage.geometry}
        material={materials['spacebits_texture.006']}
        position={[2.921, 0.987, -9.099]}
        scale={[1, 1.094, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basemodule_B002.geometry}
        material={materials['spacebits_texture.002']}
        position={[2.921, 3.503, -9.128]}
        scale={[1, 1.094, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basemodule_B003.geometry}
        material={materials['spacebits_texture.002']}
        position={[-5.185, 3, -13.035]}
        scale={1.058}
        rotation={[0, 1.55, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basemodule_C006.geometry}
        material={materials['spacebits_texture.003']}
        position={[2.92, 4.542, -9.211]}
        scale={[1, 1.094, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roofmodule_solarpanels.geometry}
        material={materials['spacebits_texture.042']}
        position={[2.92, 3.203, -9.2]}
        scale={[1.429, 1.562, 1.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.water_storage005.geometry}
        material={materials['spacebits_texture.066']}
        position={[7.642, 4.888, -18.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.water_storage006.geometry}
        material={materials['spacebits_texture.066']}
        position={[7.642, 5.889, -18.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.structure_tall004.geometry}
        material={materials['spacebits_texture.051']}
        position={[-13.589, 2.005, -17.097]}
        scale={[1.054, 0.94, 1.054]}
      />
      <group position={[-13.624, 3.908, -17.105]} scale={1.054}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027.geometry}
          material={materials['spacebits_texture.066']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027_1.geometry}
          material={materials['spacebits_texture.040']}
        />
      </group>
      <group position={[-7.07, 3.764, -7.248]} rotation={[0, 0.003, 0]} scale={0.535}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029.geometry}
          material={materials['spacebits_texture.003']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder029_1.geometry} material={materials.Glass} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029_2.geometry}
          material={materials['spacebits_texture.046']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.drill_structure001.geometry}
        material={materials['spacebits_texture.020']}
        position={[-10.392, 1, 0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.structure_low.geometry}
        material={materials['spacebits_texture.050']}
        position={[2.957, 2.026, -9.149]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tunnel_diagonal_long_A.geometry}
        material={materials['spacebits_texture.060']}
        position={[0.904, 4.237, -11.077]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cargo_A_packed.geometry}
        material={materials['spacebits_texture.008']}
        position={[-0.676, 1.01, 13.161]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cargo_A.geometry}
        material={materials['spacebits_texture.007']}
        position={[-1.278, 1, 12.98]}
        rotation={[0, -0.572, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.containers_A003.geometry}
        material={materials['spacebits_texture.016']}
        position={[-4.645, 2.002, 15.129]}
        scale={2.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.containers_B002.geometry}
        material={materials['spacebits_texture.017']}
        position={[-4.641, 2.422, 15.117]}
        scale={2.097}
      />
      <group position={[-7.897, 1, -2.498]} rotation={[0, 0.615, 0]} scale={0.978}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder616.geometry}
          material={materials['spacebits_texture.033']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder616_1.geometry}
          material={materials['spacebits_texture.031']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rocks_A013.geometry}
        material={materials['spacebits_texture.036']}
        position={[-10.56, 1, 3.032]}
        rotation={[0, 0.76, 0]}
        scale={0.613}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rocks_B009.geometry}
        material={materials['spacebits_texture.037']}
        position={[7.009, 1, 3.148]}
        rotation={[0, 0.775, 0]}
        scale={0.722}
      />

      <TurbineTall position={[-13.268, 1, -11.159]} rotation={[0, -2.6, 0]} scale={1.739} />

      <TurbineShort position={[-12.051, 2, 9.974]} rotation={[0, 0.404, 0]} scale={1.387} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cargo_B_packed002.geometry}
        material={materials['spacebits_texture.011']}
        position={[7.488, 2.01, -5.683]}
        rotation={[0, 0.715, 0]}
        scale={1.507}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cargo_B.geometry}
        material={materials['spacebits_texture.010']}
        position={[7.511, 2.779, -5.657]}
        rotation={[0, 0.715, 0]}
        scale={1.399}
      />
    </group>
  )
}

useGLTF.preload('/models/map-current-merged.glb')
