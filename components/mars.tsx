import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { Farm } from './farm'
import { Lander } from './lander'
import { TurbineShort } from './turbine-short'
import { TurbineTall } from './turbine-tall'

type GLTFResult = GLTF & {
  nodes: {
    Cube641: THREE.Mesh
    Cube641_1: THREE.Mesh
    Cube641_2: THREE.Mesh
    Cube641_3: THREE.Mesh
    Cube641_4: THREE.Mesh
    Cube641_5: THREE.Mesh
    Cube641_6: THREE.Mesh
    Cube641_7: THREE.Mesh
    Cube641_8: THREE.Mesh
    Cube641_9: THREE.Mesh
    Cylinder034: THREE.Mesh
    Cylinder034_1: THREE.Mesh
    Cylinder034_2: THREE.Mesh
    Cylinder035: THREE.Mesh
    Cylinder035_1: THREE.Mesh
    Cylinder035_2: THREE.Mesh
    basemodule_E001: THREE.Mesh
    Cube651: THREE.Mesh
    Cube651_1: THREE.Mesh
    Cube651_2: THREE.Mesh
    Cylinder041: THREE.Mesh
    Cylinder041_1: THREE.Mesh
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
    lights001: THREE.Mesh
    mobile_base_cargo001: THREE.Mesh
    solarpanel012: THREE.Mesh
    solarpanel014: THREE.Mesh
    solarpanel015: THREE.Mesh
    Cylinder052: THREE.Mesh
    Cylinder052_1: THREE.Mesh
    space_farm_large_sprinkler004: THREE.Mesh
    Cube661: THREE.Mesh
    Cube661_1: THREE.Mesh
    Cube661_2: THREE.Mesh
    Cube661_3: THREE.Mesh
    Cube661_4: THREE.Mesh
    Cube661_5: THREE.Mesh
    structure_tall002: THREE.Mesh
    structure_tall003: THREE.Mesh
    tunnel_straight_A001: THREE.Mesh
    water_storage007: THREE.Mesh
    windturbine_tall001: THREE.Mesh
  }
  materials: {
    ['spacebits_texture.052']: THREE.MeshStandardMaterial
    ['spacebits_texture.055']: THREE.MeshStandardMaterial
    ['spacebits_texture.057']: THREE.MeshStandardMaterial
    ['spacebits_texture.056']: THREE.MeshStandardMaterial
    ['spacebits_texture.058']: THREE.MeshStandardMaterial
    ['spacebits_texture.053']: THREE.MeshStandardMaterial
    ['spacebits_texture.036']: THREE.MeshStandardMaterial
    ['spacebits_texture.037']: THREE.MeshStandardMaterial
    ['spacebits_texture.034']: THREE.MeshStandardMaterial
    ['spacebits_texture.035']: THREE.MeshStandardMaterial
    ['spacebits_texture.002']: THREE.MeshStandardMaterial
    ['spacebits_texture.027']: THREE.MeshStandardMaterial
    ['spacebits_texture.031']: THREE.MeshStandardMaterial
    ['spacebits_texture.003']: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
    ['spacebits_texture.046']: THREE.MeshStandardMaterial
    ['spacebits_texture.005']: THREE.MeshStandardMaterial
    ['spacebits_texture.012']: THREE.MeshStandardMaterial
    ['spacebits_texture.016']: THREE.MeshStandardMaterial
    ['spacebits_texture.017']: THREE.MeshStandardMaterial
    ['spacebits_texture.020']: THREE.MeshStandardMaterial
    ['spacebits_texture.066']: THREE.MeshStandardMaterial
    ['spacebits_texture.023']: THREE.MeshStandardMaterial
    ['Glass.001']: THREE.MeshStandardMaterial
    ['spacebits_texture.024']: THREE.MeshStandardMaterial
    ['spacebits_texture.026']: THREE.MeshStandardMaterial
    ['spacebits_texture.038']: THREE.MeshStandardMaterial
    ['spacebits_texture.067']: THREE.MeshStandardMaterial
    ['spacebits_texture.028']: THREE.MeshStandardMaterial
    ['spacebits_texture.021']: THREE.MeshStandardMaterial
    ['spacebits_texture.029']: THREE.MeshStandardMaterial
    ['spacebits_texture.030']: THREE.MeshStandardMaterial
    ['spacebits_texture.043']: THREE.MeshStandardMaterial
    ['spacebits_texture.044']: THREE.MeshStandardMaterial
    ['spacebits_texture.045']: THREE.MeshStandardMaterial
    ['spacebits_texture.047']: THREE.MeshStandardMaterial
    ['spacebits_texture.019']: THREE.MeshStandardMaterial
    ['spacebits_texture.049']: THREE.MeshStandardMaterial
    ['spacebits_texture.051']: THREE.MeshStandardMaterial
    ['spacebits_texture.064']: THREE.MeshStandardMaterial
    ['spacebits_texture.068']: THREE.MeshStandardMaterial
  }
}

export function Mars(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/mars-empires.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube641.geometry}
          material={materials['spacebits_texture.052']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube641_1.geometry}
          material={materials['spacebits_texture.055']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube641_2.geometry}
          material={materials['spacebits_texture.057']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube641_3.geometry}
          material={materials['spacebits_texture.056']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube641_4.geometry}
          material={materials['spacebits_texture.058']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube641_5.geometry}
          material={materials['spacebits_texture.053']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube641_6.geometry}
          material={materials['spacebits_texture.036']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube641_7.geometry}
          material={materials['spacebits_texture.037']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube641_8.geometry}
          material={materials['spacebits_texture.034']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube641_9.geometry}
          material={materials['spacebits_texture.035']}
        />
      </group>
      <group position={[-5, 3, -13.047]}>
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
      <group position={[-1.165, 2.95, -13.082]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={materials['spacebits_texture.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_2.geometry}
          material={materials['spacebits_texture.046']}
        />
      </group>
      <group position={[1.709, 1, 16.01]} rotation={[0, -0.771, 0]}>
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
        position={[-1.165, 3.9, -13.149]}
        rotation={[0, -0.788, 0]}
      />
      <group position={[-3, 2, -19]} scale={1.949}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube651.geometry}
          material={materials['spacebits_texture.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube651_1.geometry}
          material={materials['spacebits_texture.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube651_2.geometry}
          material={materials['spacebits_texture.017']}
        />
      </group>
      <group position={[-13.105, 2, -16.993]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041.geometry}
          material={materials['spacebits_texture.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041_1.geometry}
          material={materials['spacebits_texture.066']}
        />
      </group>
      <group position={[-7.001, 2, -6.978]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={materials['spacebits_texture.023']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder042_1.geometry} material={materials['Glass.001']} />
      </group>
      <group position={[12.25, 4, -4]} scale={1.541}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={materials['spacebits_texture.023']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder042_1.geometry} material={materials['Glass.001']} />
      </group>

      <Lander position={[-3, 1, 13]} scale={1.313} />
      <group position={[4.099, 1, -8.946]} scale={1.308}>
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
      <group position={[4.572, 1, 4.848]} scale={[2.466, 1.254, 2.466]}>
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
        geometry={nodes.lights001.geometry}
        material={materials['spacebits_texture.029']}
        position={[-5, 2, 15]}
        scale={2.408}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mobile_base_cargo001.geometry}
        material={materials['spacebits_texture.030']}
        position={[9, 3, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel012.geometry}
        material={materials['spacebits_texture.043']}
        position={[-10.1, 1, -1.5]}
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
      <group position={[4, 1, 14]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052.geometry}
          material={materials['spacebits_texture.044']}
        />
        <Farm position={[0, 0, -2]} />
        <mesh
          position={[0, -1, -2]}
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_1.geometry}
          material={materials.Glass}
        />
        <Farm position={[2, 0, -2]} />
        <mesh
          position={[2, -1, -2]}
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_1.geometry}
          material={materials.Glass}
        />
        <Farm position={[2, 0, 0]} />
        <mesh
          position={[2, -1, 0]}
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_1.geometry}
          material={materials.Glass}
        />
      </group>

      <Farm position={[-7.016, 2, 14.988]} />
      <group position={[-6, 1.146, 4]} rotation={[0, -1.179, 0]} scale={1.919}>
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
        position={[-1.165, 1, -12.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.structure_tall003.geometry}
        material={materials['spacebits_texture.051']}
        position={[4.953, 3, -19.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tunnel_straight_A001.geometry}
        material={materials['spacebits_texture.064']}
        position={[-3.08, 3, -13.045]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.water_storage007.geometry}
        material={materials['spacebits_texture.066']}
        position={[4.942, 5.9, -19.114]}
      />
      <TurbineShort position={[4.099, 3.2, -8.946]} rotation={[0, 2.5, 0]} scale={1.308} />
      <TurbineTall position={[10, 2, 1.491]} rotation={[0, 2.5, 0]} scale={1.13} />
      <TurbineTall position={[-9.862, 1.001, 5.583]} rotation={[0, 10, 0]} scale={1.13} />
    </group>
  )
}

useGLTF.preload('/models/mars-empires.glb')
