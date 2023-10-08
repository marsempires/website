import { useLoading } from '@/hooks/use-loading'
import { useProgress } from '@react-three/drei'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import React, { useEffect } from 'react'

const pageMotion: Variants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 1,
    },
    zIndex: -1,
  },
}

export function LoadingManager() {
  const { progress } = useProgress()
  const setLoaded = useLoading((s) => s.setLoaded)

  useEffect(() => {
    if (progress >= 100) setLoaded(true)
  }, [progress])

  return <></>
}

export default function Loading() {
  const loaded = useLoading((s) => s.loaded)

  return (
    <AnimatePresence>
      <motion.div
        variants={pageMotion}
        initial="show"
        animate={loaded ? 'hide' : 'show'}
        className="w-screen cursor-none absolute z-20 h-screen bg-white"
      ></motion.div>
    </AnimatePresence>
  )
}
