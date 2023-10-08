import { useInformationPanel } from '@/hooks/use-information-panel'
import { useSfx } from '@/hooks/use-sfx'
import { Html } from '@react-three/drei'
import { Variants, motion } from 'framer-motion'
import React, { ReactNode, useState } from 'react'

interface AnnotationProps {
  position: [number, number, number]
  children: ReactNode
  text: string
  onClick?: () => void
}

const annotationMotion: Variants = {
  show: {
    scale: 1,
    transition: {
      delay: 0.5,
    },
  },
  hide: {
    scale: 0,
  },
}

const nameMotion: Variants = {
  show: {
    opacity: 1,
    transition: {
      delay: 0.1,
    },
    y: -10,
  },
  hide: {
    opacity: 0,
    y: 0,
  },
}

const buttonMotion: Variants = {
  normal: {
    y: 0,
    scale: 1,
  },
  up: {
    y: -10,
    scale: 1.1,
  },
}

export default function Annotation(props: AnnotationProps) {
  const { playHover } = useSfx()
  const [isFocus, setIsFocus] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [opening, open, close] = useInformationPanel((s) => [s.opening, s.open, s.close])

  const handleClicked = () => {
    setIsFocus(!isFocus)
    open()

    props.onClick && props.onClick()
  }

  const handleHover = () => {
    playHover()
    setHovered(true)
  }

  return (
    <Html position={props.position}>
      <motion.div
        variants={annotationMotion}
        initial="show"
        animate={opening ? 'hide' : 'show'}
        className="select-none flex flex-col items-center"
      >
        <motion.button
          variants={buttonMotion}
          initial="normal"
          animate={hovered ? 'up' : 'normal'}
          onMouseEnter={handleHover}
          onMouseLeave={() => setHovered(false)}
          onClick={handleClicked}
          className="w-24 h-24 rounded-full cursor-none flex justify-center items-center"
        >
          {props.children}
        </motion.button>
        <motion.div
          variants={nameMotion}
          initial="hide"
          animate={hovered ? 'show' : 'hide'}
          className="w-fit p-4 py-1.5 bg-white rounded-3xl flex absolute -bottom-1.5 -z-10"
        >
          <span className="text-slate-500 font-semibold whitespace-nowrap">{props.text}</span>
        </motion.div>
      </motion.div>
    </Html>
  )
}
