import { useInformationPanel } from '@/hooks/use-information-panel'
import { useSfx } from '@/hooks/use-sfx'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import Annotation from './annotation'

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

  const { camera } = useThree()

  useFrame((_, delta) => {
    if (radar.current) radar.current.rotation.y += delta / 2

    // isFocus && easing.damp3(camera.position, [-0.5, 1, 14], 0.5, delta)
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

      <Annotation position={[-0.25, 1.45, -0.25]}>
        <svg width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_10_59)">
            <mask
              id="mask0_10_59"
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
            <g mask="url(#mask0_10_59)">
              <rect x="77.5498" y="6" width="78" height="78" transform="rotate(60 77.5498 6)" fill="white" />
            </g>
            <mask
              id="mask1_10_59"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="27"
              y="25"
              width="73"
              height="68"
            >
              <path
                d="M87.4956 83.5337L87.496 83.533C90.9517 78.5175 94.0019 73.2346 96.6176 67.734C96.6178 67.7336 96.618 67.7332 96.6182 67.7328L97.451 65.9606L97.452 65.9586C98.4628 63.8319 98.9873 61.5069 98.9872 59.1523L99.4872 59.1523L98.9872 59.1523C98.987 56.7977 98.4622 54.4725 97.4511 52.3461L97.451 52.3458L96.6054 50.5644C96.6054 50.5644 96.6053 50.5644 96.6053 50.5643C93.9916 45.0622 90.9412 39.7789 87.4833 34.7645C87.4833 34.7644 87.4832 34.7644 87.4832 34.7644L86.3633 33.1414L86.3631 33.1411C85.0271 31.2022 83.2759 29.5852 81.2368 28.4078C79.1977 27.2303 76.9219 26.522 74.5748 26.3341L74.5747 26.3341L72.6089 26.1763C72.6089 26.1763 72.6088 26.1763 72.6088 26.1763C66.537 25.6912 60.4362 25.6912 54.3644 26.1762L54.3644 26.1762L52.4014 26.3327C52.4013 26.3327 52.4012 26.3327 52.4012 26.3327C50.0544 26.5208 47.779 27.2291 45.7402 28.4062C43.7013 29.5834 41.9502 31.1997 40.614 33.1381C40.6139 33.1381 40.6139 33.1382 40.6139 33.1382L39.4968 34.76L39.4968 34.76C36.0407 39.776 32.9903 45.0594 30.3746 50.5603L29.5284 52.3416L29.5283 52.3417C28.5175 54.4683 27.9929 56.7935 27.9931 59.1481C27.9932 61.5027 28.5179 63.8277 29.5292 65.9541L29.5294 65.9545L30.3749 67.7358C32.9886 73.2378 36.039 78.5212 39.4971 83.5359L40.617 85.1588C41.9558 87.0979 43.7103 88.7144 45.7527 89.8899L45.505 90.3202L45.7527 89.8899C47.7953 91.0657 50.074 91.7711 52.4234 91.9553L52.4244 91.9554L54.3901 92.1131C54.3902 92.1132 54.3902 92.1132 54.3903 92.1132C60.462 92.5984 66.5627 92.5983 72.6346 92.1133L72.6347 92.1133L74.5976 91.9567C76.9444 91.7685 79.22 91.0604 81.2589 89.8832C83.2975 88.7063 85.0483 87.0899 86.3846 85.152L87.4956 83.5337ZM87.4956 83.5337L86.3852 85.1512L87.4956 83.5337Z"
                fill="white"
                stroke="black"
              />
            </mask>
            <g mask="url(#mask1_10_59)">
              <rect
                x="76.6211"
                y="10"
                width="72"
                height="72"
                transform="rotate(60 76.6211 10)"
                fill="url(#paint0_linear_10_59)"
              />
            </g>
            <g clip-path="url(#clip0_10_59)">
              <path
                d="M51 50.5038L63.0058 47L75 50.5038L75 57.6891C75 65.2415 70.1668 71.9463 63.0017 74.3337C55.8347 71.9463 51 65.24 51 57.6858L51 50.5038Z"
                stroke="white"
                stroke-width="3.5"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_10_59"
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
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_59" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_59" result="shape" />
            </filter>
            <linearGradient
              id="paint0_linear_10_59"
              x1="112.621"
              y1="10"
              x2="112.621"
              y2="82"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EF4C65" />
              <stop offset="1" stop-color="#F88FA7" />
            </linearGradient>
            <clipPath id="clip0_10_59">
              <rect width="32" height="32" fill="white" transform="translate(47 45)" />
            </clipPath>
          </defs>
        </svg>
      </Annotation>
    </group>
  )
}

useGLTF.preload('/models/lander.glb')
