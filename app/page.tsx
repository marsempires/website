'use client'

import Camera from '@/components/camera'
import Cursor from '@/components/cursor'
import Dust from '@/components/dust'
import Galaxy from '@/components/galaxy'
import InformationPanel from '@/components/information-panel'
import Loading, { LoadingManager } from '@/components/loading'
import { Mars } from '@/components/mars'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import { Suspense } from 'react'
import { Color } from 'three'

export default function Home() {
  return (
    <>
      <Loading />
      <main className="relative w-screen h-screen p-6 pt-10 bg-white">
        <div className="background-grid"></div>
        <Cursor />

        <div className="absolute z-10 left-[50%] translate-x-[-50%] w-fit h-fit overflow-hidden rounded-xl top-4 shine-effect">
          <Image src={'/logo.webp'} alt="Mars Empires Logo" className="shine-effect" width={100} height={100} />
        </div>

        <div className="relative h-full rounded-[32px] overflow-hidden">
          <Galaxy />
          <InformationPanel />

          <Canvas shadows>
            <Scene />
          </Canvas>
        </div>
      </main>
    </>
  )
}

function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <LoadingManager />
        <Camera />

        <Dust count={30} radius={80} colors={['white']} />

        <Mars />

        <directionalLight color={new Color('#7E30D8')} position={[0, 7, 10]} intensity={4} castShadow />
        <directionalLight position={[-5, 7, 10]} intensity={2} castShadow />
        <directionalLight color={new Color('#7E30D8')} position={[-5, 7, -10]} intensity={0.5} castShadow />
        <directionalLight color={new Color('#3C0779')} position={[5, 10, -10]} intensity={3} castShadow />

        <ambientLight intensity={1.5} />
      </Suspense>
    </>
  )
}
