import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import Annotation from './annotation'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder035: THREE.Mesh
    structure_tall002: THREE.Mesh
    basemodule_E001: THREE.Mesh
    Cylinder034: THREE.Mesh
    Cylinder034_1: THREE.Mesh
    Cylinder034_2: THREE.Mesh
    tunnel_straight_A001: THREE.Mesh
    tunnel_diagonal_long_A: THREE.Mesh
    basemodule_garage: THREE.Mesh
    basemodule_B002: THREE.Mesh
    basemodule_B003: THREE.Mesh
    basemodule_C006: THREE.Mesh
    roofmodule_solarpanels: THREE.Mesh
    structure_low: THREE.Mesh
  }
  materials: {
    Glass: THREE.MeshStandardMaterial
    ['spacebits_texture.010']: THREE.MeshStandardMaterial
  }
}

export default function Basement() {
  const { nodes, materials } = useGLTF('/models/map-current-merged.glb') as GLTFResult

  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder035.geometry}
        material={materials['spacebits_texture.010']}
        position={[-1.083, 3.083, -13.084]}
        scale={1.071}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.structure_tall002.geometry}
        material={materials['spacebits_texture.010']}
        position={[-1.083, 0.994, -12.974]}
        scale={1.071}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basemodule_E001.geometry}
        material={materials['spacebits_texture.010']}
        position={[-1.083, 4.101, -13.155]}
        rotation={[0, -0.788, 0]}
        scale={1.071}
      />

      <Annotation position={[-2.1, 8.8, -3]}>
        <svg
          className="w-20 h-20"
          width="107"
          height="107"
          viewBox="0 0 107 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_10_67"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="14"
            y="16"
            width="79"
            height="74"
          >
            <path
              d="M79.3464 79.6708L79.3459 79.6715L78.143 81.4238C78.1428 81.4241 78.1426 81.4243 78.1424 81.4246C78.1424 81.4246 78.1424 81.4247 78.1424 81.4247C76.6932 83.5262 74.7945 85.2791 72.5838 86.5554C70.3727 87.832 67.905 88.5999 65.36 88.804L63.2335 88.9736L63.2334 88.9736C56.6545 89.4992 50.0444 89.4992 43.4657 88.9735L41.3362 88.8025L41.3352 88.8025C38.7874 88.6027 36.3162 87.8378 34.1012 86.5627L33.8506 86.9979L34.1011 86.5627C31.8863 85.2879 29.9836 83.5349 28.5317 81.432L27.3186 79.6739C23.5717 74.2406 20.2667 68.516 17.4348 62.5547L16.5187 60.6249L16.5186 60.6245C15.4219 58.3186 14.8529 55.7972 14.8527 53.2437C14.8525 50.6903 15.4214 48.1688 16.5176 45.8626L16.5177 45.8625L17.4344 43.9328C17.4345 43.9327 17.4345 43.9326 17.4345 43.9326C20.2686 37.9725 23.5736 32.248 27.3182 26.8134L27.3182 26.8133L28.5283 25.0564C28.5284 25.0564 28.5284 25.0563 28.5285 25.0563C29.9776 22.9542 31.8765 21.2014 34.0876 19.9248C36.2986 18.6483 38.7661 17.8802 41.3111 17.6762C41.3111 17.6762 41.3112 17.6762 41.3113 17.6762L43.4378 17.5066L43.4379 17.5066C50.0166 16.9811 56.6267 16.9812 63.2054 17.5067C63.2055 17.5067 63.2055 17.5068 63.2056 17.5068L65.3352 17.6777L65.3353 17.6777C67.8806 17.8814 70.3486 18.6496 72.5599 19.9265C74.7712 21.2034 76.6702 22.9569 78.119 25.0595L78.1192 25.0598L79.3325 26.818C79.3325 26.8181 79.3325 26.8181 79.3326 26.8182C83.0792 32.2512 86.3843 37.9757 89.2162 43.9371C89.2162 43.9372 89.2162 43.9372 89.2163 43.9372L90.1323 45.8671L90.1325 45.8674C91.2289 48.1733 91.7981 50.6949 91.7982 53.2483L92.3146 53.2483L91.7982 53.2483C91.7984 55.8018 91.2296 58.3231 90.1334 60.6294L90.1324 60.6314L89.2301 62.5514C89.2299 62.5519 89.2297 62.5524 89.2294 62.5529C86.3954 68.5126 83.0906 74.2366 79.3464 79.6708Z"
              fill="white"
              stroke="black"
              stroke-width="1.04808"
            />
          </mask>
          <g mask="url(#mask0_10_67)">
            <rect x="67.5498" width="78" height="78" transform="rotate(60 67.5498 0)" fill="white" />
          </g>
          <mask
            id="mask1_10_67"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="17"
            y="19"
            width="73"
            height="68"
          >
            <path
              d="M77.4956 77.5337L77.496 77.533C80.9517 72.5175 84.0019 67.2346 86.6176 61.734C86.6178 61.7336 86.618 61.7332 86.6182 61.7328L87.451 59.9606L87.452 59.9586C88.4628 57.8319 88.9873 55.5069 88.9872 53.1523L89.4872 53.1523L88.9872 53.1523C88.987 50.7977 88.4622 48.4725 87.4511 46.3461L87.451 46.3458L86.6054 44.5644C86.6054 44.5644 86.6053 44.5644 86.6053 44.5643C83.9916 39.0622 80.9412 33.7789 77.4833 28.7645C77.4833 28.7644 77.4832 28.7644 77.4832 28.7644L76.3633 27.1414L76.3631 27.1411C75.0271 25.2022 73.2759 23.5852 71.2368 22.4078C69.1977 21.2303 66.9219 20.522 64.5748 20.3341L64.5747 20.3341L62.6089 20.1763C62.6089 20.1763 62.6088 20.1763 62.6088 20.1763C56.537 19.6912 50.4362 19.6912 44.3644 20.1762L44.3644 20.1762L42.4014 20.3327C42.4013 20.3327 42.4012 20.3327 42.4012 20.3327C40.0544 20.5208 37.779 21.2291 35.7402 22.4062C33.7013 23.5834 31.9502 25.1997 30.614 27.1381C30.6139 27.1381 30.6139 27.1382 30.6139 27.1382L29.4968 28.76L29.4968 28.76C26.0407 33.776 22.9903 39.0594 20.3746 44.5603L19.5284 46.3416L19.5283 46.3417C18.5175 48.4683 17.9929 50.7935 17.9931 53.1481C17.9932 55.5027 18.5179 57.8277 19.5292 59.9541L19.5294 59.9545L20.3749 61.7358C22.9886 67.2378 26.039 72.5212 29.4971 77.5359L30.617 79.1588C31.9558 81.0979 33.7103 82.7144 35.7527 83.8899L35.505 84.3202L35.7527 83.8899C37.7953 85.0657 40.074 85.7711 42.4234 85.9553L42.4244 85.9554L44.3901 86.1131C44.3902 86.1132 44.3902 86.1132 44.3903 86.1132C50.462 86.5984 56.5627 86.5983 62.6346 86.1133L62.6347 86.1133L64.5976 85.9567C66.9444 85.7685 69.22 85.0604 71.2589 83.8832C73.2975 82.7063 75.0483 81.0899 76.3846 79.152L77.4956 77.5337ZM77.4956 77.5337L76.3852 79.1512L77.4956 77.5337Z"
              fill="white"
              stroke="black"
            />
          </mask>
          <g mask="url(#mask1_10_67)">
            <rect
              x="66.6211"
              y="4"
              width="72"
              height="72"
              transform="rotate(60 66.6211 4)"
              fill="url(#paint0_linear_10_67)"
            />
          </g>
          <path
            d="M48.5246 41.9166L44.4805 55.0937L51.5577 56.1073L48.5246 68.2708L61.668 53.0665L53.5797 51.0392L59.6459 41.9166H48.5246Z"
            stroke="white"
            stroke-width="3.5"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_67"
              x1="102.621"
              y1="4"
              x2="102.621"
              y2="76"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ED777C" />
              <stop offset="1" stop-color="#ED7C36" />
            </linearGradient>
          </defs>
        </svg>
      </Annotation>

      <group position={[-5.191, 4.011, -13.046]} scale={1.071}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034.geometry}
          material={materials['spacebits_texture.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034_1.geometry}
          material={materials['spacebits_texture.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034_2.geometry}
          material={materials['spacebits_texture.010']}
        />
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tunnel_straight_A001.geometry}
        material={materials['spacebits_texture.010']}
        position={[-3.134, 3.016, -13.044]}
        scale={1.071}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tunnel_diagonal_long_A.geometry}
        material={materials['spacebits_texture.010']}
        position={[0.904, 4.237, -11.077]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basemodule_garage.geometry}
        material={materials['spacebits_texture.010']}
        position={[2.921, 0.987, -9.099]}
        scale={[1, 1.094, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basemodule_B002.geometry}
        material={materials['spacebits_texture.010']}
        position={[2.921, 3.503, -9.128]}
        scale={[1, 1.094, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basemodule_B003.geometry}
        material={materials['spacebits_texture.010']}
        position={[-5.185, 3, -13.035]}
        scale={1.058}
        rotation={[0, 1.55, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basemodule_C006.geometry}
        material={materials['spacebits_texture.010']}
        position={[2.92, 4.542, -9.211]}
        scale={[1, 1.094, 1]}
      />
      <mesh
        geometry={nodes.roofmodule_solarpanels.geometry}
        material={materials['spacebits_texture.010']}
        position={[2.92, 3.203, -9.2]}
        scale={[1.429, 1.562, 1.429]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.structure_low.geometry}
        material={materials['spacebits_texture.010']}
        position={[2.957, 2.026, -9.149]}
      />
    </group>
  )
}
