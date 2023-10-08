import { Howl, Howler } from 'howler'
import { useMemo } from 'react'

export function useSfx() {
  const hover = useMemo(
    () =>
      new Howl({
        src: ['sfx/hover.mp3'],
        volume: 2,
      }),
    []
  )

  const playHover = () => hover.play()

  return { playHover }
}
