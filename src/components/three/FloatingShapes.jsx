import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTheme } from '@mui/material/styles'
import * as THREE from 'three'

const SHAPE_DEFS = [
  { type: 'icosahedron', args: [0.6, 1], pos: [-3, 1.5, -2], speed: 0.8, parallax: 0.4, phase: 0 },
  { type: 'octahedron', args: [0.5, 0], pos: [3, -1, -3], speed: 0.5, parallax: 0.6, phase: 1.5 },
  { type: 'torus', args: [0.5, 0.15, 8, 16], pos: [-2, -2, -1], speed: 1.0, parallax: 0.3, phase: 3.0 },
  { type: 'icosahedron', args: [0.35, 1], pos: [2.5, 2, -4], speed: 0.7, parallax: 0.8, phase: 0.8 },
  { type: 'octahedron', args: [0.7, 0], pos: [0.5, -1.5, -5], speed: 0.4, parallax: 1.0, phase: 2.2 },
  { type: 'torus', args: [0.3, 0.1, 6, 12], pos: [-3.5, 0.5, -3], speed: 1.2, parallax: 0.5, phase: 4.1 },
  { type: 'icosahedron', args: [0.45, 1], pos: [3.5, 0, -2], speed: 0.6, parallax: 0.7, phase: 1.0 },
  { type: 'octahedron', args: [0.3, 0], pos: [-1, 2.5, -4], speed: 0.9, parallax: 0.9, phase: 5.0 },
]

function Shape({ def, mousePos, colorCyan, colorPurple }) {
  const meshRef = useRef()
  const color = def.phase % 2 > 1 ? colorPurple : colorCyan
  const basePos = useMemo(() => new THREE.Vector3(...def.pos), [def.pos])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.elapsedTime
    meshRef.current.rotation.x += 0.003 * def.speed
    meshRef.current.rotation.y += 0.005 * def.speed
    meshRef.current.position.x = basePos.x + mousePos.current.x * def.parallax
    meshRef.current.position.y =
      basePos.y + Math.sin(t * 0.5 + def.phase) * 0.3 + mousePos.current.y * def.parallax * 0.5
    meshRef.current.position.z = basePos.z
  })

  const geometry = useMemo(() => {
    if (def.type === 'icosahedron') return new THREE.IcosahedronGeometry(...def.args)
    if (def.type === 'octahedron') return new THREE.OctahedronGeometry(...def.args)
    if (def.type === 'torus') return new THREE.TorusGeometry(...def.args)
  }, [def])

  return (
    <mesh ref={meshRef} position={def.pos} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

export default function FloatingShapes({ mousePos }) {
  const theme = useTheme()
  const colorCyan = theme.palette.primary.main
  const colorPurple = theme.palette.secondary.main

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color={colorCyan} intensity={1.5} />
      <pointLight position={[-5, -3, -2]} color={colorPurple} intensity={0.8} />
      {SHAPE_DEFS.map((def, i) => (
        <Shape
          key={i}
          def={def}
          mousePos={mousePos}
          colorCyan={colorCyan}
          colorPurple={colorPurple}
        />
      ))}
    </>
  )
}
