import { useInformationPanel } from '@/hooks/use-information-panel'
import { useSfx } from '@/hooks/use-sfx'
import { BUILDINGS } from '@/utils'
import clsx from 'clsx'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const panelMotion: Variants = {
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ease: [0.83, 0, 0.17, 1],
      duration: 1,
    },
  },
  hide: {
    opacity: 0,
    scale: 0.8,
    y: 60,
  },
}

export default function InformationPanel() {
  const [selected, opening, close, setSelected] = useInformationPanel((s) => [
    s.selected,
    s.opening,
    s.close,
    s.setSelected,
  ])
  const { playHover } = useSfx()

  const handleClose = () => {
    close()
    setSelected(undefined)
  }

  return (
    <AnimatePresence>
      {opening && selected && (
        <div className="select-none absolute z-20 right-0 w-[700px] h-full p-32">
          <motion.div
            variants={panelMotion}
            initial="hide"
            animate="show"
            exit="hide"
            className="relative w-full h-full rounded-3xl bg-white px-14 py-20"
          >
            <h2 className={clsx('font-extrabold text-6xl', `${selected}-gradient`)}>{BUILDINGS[selected].name}</h2>
            <p className="mt-8 text-slate-500 text-lg leading-6">{BUILDINGS[selected].description}</p>
            <div className="justify-center shine-effect absolute bottom-12 left-[50%] translate-x-[-50%]">
              <Image
                src={`icons/${selected}.svg`}
                className=""
                width={120}
                height={120}
                alt={'Atlantic Lander Building Icons'}
              />
            </div>
            <button
              className="absolute top-6 right-6 bg-slate-200 hover:bg-slate-500 transition-all h-10 w-10 hover:scale-110 rounded-full cursor-none p-3"
              onClick={handleClose}
              onMouseEnter={playHover}
            >
              <svg
                className="w-full h-full"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 8L40 40" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 40L40 8" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
