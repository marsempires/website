import React, { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const position = useRef({
    distanceX: 0,
    distanceY: 0,
    distance: 0,
    pointerX: 0,
    pointerY: 0,
  })

  const root = document.body

  let previousPointerX = 0
  let previousPointerY = 0
  let angle = 0
  let previousAngle = 0
  let angleDisplace = 0
  let degrees = 57.296
  let cursorSize = 20

  let cursorStyle = {
    boxSizing: 'border-box',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2147483647',
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    transition: '250ms, transform 100ms',
    userSelect: 'none',
    pointerEvents: 'none',
  }

  useEffect(() => {
    if (!cursorRef.current) return

    Object.assign(cursorRef.current.style, cursorStyle)

    document.onmousemove = function (event) {
      move(event)
    }
  }, [])

  const move = (event: MouseEvent) => {
    if (!cursorRef.current) return

    previousPointerX = position.current.pointerX
    previousPointerY = position.current.pointerY
    position.current.pointerX = event.pageX + root.getBoundingClientRect().x
    position.current.pointerY = event.pageY + root.getBoundingClientRect().y
    position.current.distanceX = previousPointerX - position.current.pointerX
    position.current.distanceY = previousPointerY - position.current.pointerY
    const distance = Math.sqrt(position.current.distanceY ** 2 + position.current.distanceX ** 2)

    cursorRef.current.style.transform = `translate3d(${position.current.pointerX}px, ${position.current.pointerY}px, 0)`

    if (distance > 1) {
      rotate(position.current)
    } else {
      cursorRef.current.style.transform += ` rotate(${angleDisplace}deg)`
    }
  }

  const rotate = (position: any) => {
    if (!cursorRef.current) return

    let unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * degrees
    const style = cursorRef.current.style
    previousAngle = angle

    if (position.distanceX <= 0 && position.distanceY >= 0) {
      angle = 90 - unsortedAngle + 0
    } else if (position.distanceX < 0 && position.distanceY < 0) {
      angle = unsortedAngle + 90
    } else if (position.distanceX >= 0 && position.distanceY <= 0) {
      angle = 90 - unsortedAngle + 180
    } else if (position.distanceX > 0 && position.distanceY > 0) {
      angle = unsortedAngle + 270
    }

    if (isNaN(angle)) {
      angle = previousAngle
    } else {
      if (angle - previousAngle <= -270) {
        angleDisplace += 360 + angle - previousAngle
      } else if (angle - previousAngle >= 270) {
        angleDisplace += angle - previousAngle - 360
      } else {
        angleDisplace += angle - previousAngle
      }
    }
    style.left = `${-cursorSize / 2}px`
    style.top = `${0}px`
    style.transform += ` rotate(${angleDisplace}deg)`
  }

  return (
    <section className="absolute background-grid inset-0 container-cursor w-10 h-10">
      <div ref={cursorRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            className="inner"
            d="M25,30a5.82,5.82,0,0,1-1.09-.17l-.2-.07-7.36-3.48a.72.72,0,0,0-.35-.08.78.78,0,0,0-.33.07L8.24,29.54a.66.66,0,0,1-.2.06,5.17,5.17,0,0,1-1,.15,3.6,3.6,0,0,1-3.29-5L12.68,4.2a3.59,3.59,0,0,1,6.58,0l9,20.74A3.6,3.6,0,0,1,25,30Z"
            fill="#F2F5F8"
          />
          <path
            className="outer"
            d="M16,3A2.59,2.59,0,0,1,18.34,4.6l9,20.74A2.59,2.59,0,0,1,25,29a5.42,5.42,0,0,1-.86-.15l-7.37-3.48a1.84,1.84,0,0,0-.77-.17,1.69,1.69,0,0,0-.73.16l-7.4,3.31a5.89,5.89,0,0,1-.79.12,2.59,2.59,0,0,1-2.37-3.62L13.6,4.6A2.58,2.58,0,0,1,16,3m0-2h0A4.58,4.58,0,0,0,11.76,3.8L2.84,24.33A4.58,4.58,0,0,0,7,30.75a6.08,6.08,0,0,0,1.21-.17,1.87,1.87,0,0,0,.4-.13L16,27.18l7.29,3.44a1.64,1.64,0,0,0,.39.14A6.37,6.37,0,0,0,25,31a4.59,4.59,0,0,0,4.21-6.41l-9-20.75A4.62,4.62,0,0,0,16,1Z"
            fill="#111920"
          />
        </svg>
      </div>
    </section>
  )
}
