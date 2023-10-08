import { useSfx } from '@/hooks/use-sfx'
import { Html } from '@react-three/drei'
import React, { ReactNode, useState } from 'react'

interface AnnotationProps {
  position: [number, number, number]
  children: ReactNode
}

export default function Annotation(props: AnnotationProps) {
  const { playHover } = useSfx()
  const [isFocus, setIsFocus] = useState(false)

  const handleClicked = () => {
    setIsFocus(!isFocus)
    // open()
  }

  return (
    <Html position={props.position}>
      <button
        onMouseEnter={playHover}
        onClick={handleClicked}
        className=" active:scale-100 w-24 h-24 rounded-full cursor-none hover:scale-110 transition-transform flex justify-center items-center"
      >
        {props.children}
      </button>
    </Html>
  )
}
