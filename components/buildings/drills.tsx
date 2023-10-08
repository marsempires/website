import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import Annotation from '../annotation'
import { useInformationPanel } from '@/hooks/use-information-panel'

type GLTFResult = GLTF & {
  nodes: {
    drill_structure: THREE.Mesh
    drill_structure001: THREE.Mesh
  }
  materials: {
    ['spacebits_texture.020']: THREE.MeshStandardMaterial
  }
}

export function Drills(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/drills.glb') as GLTFResult
  const setSelected = useInformationPanel((s) => s.setSelected)

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.drill_structure.geometry}
        material={materials['spacebits_texture.020']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.drill_structure001.geometry}
        material={materials['spacebits_texture.020']}
      />

      <Annotation text="Hyper Drill" position={[-0.9, 4, 0]} onClick={() => setSelected('drill')}>
        <svg width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_15_136)">
            <mask
              id="mask0_15_136"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="24"
              y="22"
              width="79"
              height="74"
            >
              <path
                d="M89.3464 85.6708L89.3459 85.6715L88.143 87.4238C88.1428 87.4241 88.1426 87.4243 88.1424 87.4246C88.1424 87.4246 88.1424 87.4247 88.1424 87.4247C86.6932 89.5262 84.7945 91.2791 82.5838 92.5554C80.3727 93.832 77.905 94.5999 75.36 94.804L73.2335 94.9736L73.2334 94.9736C66.6545 95.4992 60.0444 95.4992 53.4657 94.9735L51.3362 94.8025L51.3352 94.8025C48.7874 94.6027 46.3162 93.8378 44.1012 92.5627L43.8506 92.9979L44.1011 92.5627C41.8863 91.2879 39.9836 89.5349 38.5317 87.432L37.3186 85.6739C33.5717 80.2406 30.2667 74.516 27.4348 68.5547L26.5187 66.6249L26.5186 66.6245C25.4219 64.3186 24.8529 61.7972 24.8527 59.2437C24.8525 56.6903 25.4214 54.1688 26.5176 51.8626L26.5177 51.8625L27.4344 49.9328C27.4345 49.9327 27.4345 49.9326 27.4345 49.9326C30.2686 43.9725 33.5736 38.248 37.3182 32.8134L37.3182 32.8133L38.5283 31.0564C38.5284 31.0564 38.5284 31.0563 38.5285 31.0563C39.9776 28.9542 41.8765 27.2014 44.0876 25.9248C46.2986 24.6483 48.7661 23.8802 51.3111 23.6762C51.3111 23.6762 51.3112 23.6762 51.3113 23.6762L53.4378 23.5066L53.4379 23.5066C60.0166 22.9811 66.6267 22.9812 73.2054 23.5067C73.2055 23.5067 73.2055 23.5068 73.2056 23.5068L75.3352 23.6777L75.3353 23.6777C77.8806 23.8814 80.3486 24.6496 82.5599 25.9265C84.7712 27.2034 86.6702 28.9569 88.119 31.0595L88.1192 31.0598L89.3325 32.818C89.3325 32.8181 89.3325 32.8181 89.3326 32.8182C93.0792 38.2512 96.3843 43.9757 99.2162 49.9371C99.2162 49.9372 99.2162 49.9372 99.2163 49.9372L100.132 51.8671L100.132 51.8674C101.229 54.1733 101.798 56.6949 101.798 59.2483L102.315 59.2483L101.798 59.2483C101.798 61.8018 101.23 64.3231 100.133 66.6294L100.132 66.6314L99.2301 68.5514C99.2299 68.5519 99.2297 68.5524 99.2294 68.5529C96.3954 74.5126 93.0906 80.2366 89.3464 85.6708Z"
                fill="white"
                stroke="black"
                stroke-width="1.04808"
              />
            </mask>
            <g mask="url(#mask0_15_136)">
              <rect x="77.5503" y="6" width="78" height="78" transform="rotate(60 77.5503 6)" fill="white" />
            </g>
            <mask
              id="mask1_15_136"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="27"
              y="25"
              width="73"
              height="68"
            >
              <path
                d="M87.496 83.5337L87.4965 83.533C90.9522 78.5175 94.0024 73.2346 96.6181 67.734C96.6183 67.7336 96.6185 67.7332 96.6187 67.7328L97.4515 65.9606L97.4525 65.9586C98.4633 63.8319 98.9878 61.5069 98.9877 59.1523L99.4877 59.1523L98.9877 59.1523C98.9875 56.7977 98.4627 54.4725 97.4516 52.3461L97.4514 52.3458L96.6059 50.5644C96.6058 50.5644 96.6058 50.5644 96.6058 50.5643C93.9921 45.0622 90.9417 39.7789 87.4838 34.7645C87.4837 34.7644 87.4837 34.7644 87.4837 34.7644L86.3638 33.1414L86.3636 33.1411C85.0276 31.2022 83.2764 29.5852 81.2373 28.4078C79.1982 27.2303 76.9224 26.522 74.5753 26.3341L74.5752 26.3341L72.6094 26.1763C72.6094 26.1763 72.6093 26.1763 72.6092 26.1763C66.5375 25.6912 60.4367 25.6912 54.3649 26.1762L54.3648 26.1762L52.4019 26.3327C52.4018 26.3327 52.4017 26.3327 52.4017 26.3327C50.0549 26.5208 47.7795 27.2291 45.7407 28.4062C43.7018 29.5834 41.9507 31.1997 40.6145 33.1381C40.6144 33.1381 40.6144 33.1382 40.6143 33.1382L39.4973 34.76L39.4972 34.76C36.0412 39.776 32.9908 45.0594 30.3751 50.5603L29.5289 52.3416L29.5288 52.3417C28.518 54.4683 27.9934 56.7935 27.9936 59.1481C27.9937 61.5027 28.5184 63.8277 29.5297 65.9541L29.5298 65.9545L30.3754 67.7358C32.9891 73.2378 36.0395 78.5212 39.4976 83.5359L40.6175 85.1588C41.9563 87.0979 43.7108 88.7144 45.7532 89.8899L45.5055 90.3202L45.7532 89.8899C47.7958 91.0657 50.0745 91.7711 52.4239 91.9553L52.4248 91.9554L54.3906 92.1131C54.3907 92.1132 54.3907 92.1132 54.3908 92.1132C60.4625 92.5984 66.5632 92.5983 72.6351 92.1133L72.6352 92.1133L74.5981 91.9567C76.9449 91.7685 79.2205 91.0604 81.2594 89.8832C83.298 88.7063 85.0488 87.0899 86.3851 85.152L87.496 83.5337ZM87.496 83.5337L86.3857 85.1512L87.496 83.5337Z"
                fill="white"
                stroke="black"
              />
            </mask>
            <g mask="url(#mask1_15_136)">
              <rect
                x="76.6211"
                y="10"
                width="72"
                height="72"
                transform="rotate(60 76.6211 10)"
                fill="url(#paint0_linear_15_136)"
              />
            </g>
            <path
              d="M63.5 72.9167L77.375 65.9792L63.5 42.0833L49.625 65.9792L63.5 72.9167Z"
              stroke="white"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M63.5 72.9167L63.5 42.0833"
              stroke="white"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_15_136"
              x="0"
              y="0"
              width="126.55"
              height="126.55"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_136" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_136" result="shape" />
            </filter>
            <linearGradient
              id="paint0_linear_15_136"
              x1="112.621"
              y1="10"
              x2="112.621"
              y2="82"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9595B6" />
              <stop offset="1" stop-color="#706C97" />
            </linearGradient>
          </defs>
        </svg>
      </Annotation>
    </group>
  )
}

useGLTF.preload('/models/drills.glb')
