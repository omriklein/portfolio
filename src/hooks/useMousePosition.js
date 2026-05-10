import { useEffect, useRef } from 'react'

export function useMousePosition() {
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      }
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return mousePos
}
