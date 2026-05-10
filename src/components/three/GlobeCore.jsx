import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTheme } from '@mui/material/styles'
import * as THREE from 'three'

const ORBIT_TILTS = [0.26, -0.4, 0.7, -0.1]

function OrbitRing({ tilt, color }) {
  return (
    <mesh rotation={[tilt, 0, 0]}>
      <torusGeometry args={[3.3, 0.008, 6, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  )
}

export default function GlobeCore() {
  const groupRef = useRef()
  const theme = useTheme()
  const cyanColor = theme.palette.primary.main
  const purpleColor = theme.palette.secondary.main

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.002
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhysicalMaterial
          color={theme.palette.background.default}
          roughness={0.1}
          metalness={0.8}
          wireframe
          emissive={cyanColor}
          emissiveIntensity={0.06}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial
          color={cyanColor}
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>
      {ORBIT_TILTS.map((tilt, i) => (
        <OrbitRing key={i} tilt={tilt} color={i % 2 === 0 ? cyanColor : purpleColor} />
      ))}
      <pointLight position={[0, 0, 0]} color={cyanColor} intensity={0.5} distance={6} />
    </group>
  )
}
