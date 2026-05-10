import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import FloatingShapes from './FloatingShapes'
import { useMousePosition } from '../../hooks/useMousePosition'

export default function HeroScene() {
  const mousePos = useMousePosition()

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <FloatingShapes mousePos={mousePos} />
      </Suspense>
    </Canvas>
  )
}
