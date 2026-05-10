import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useTheme } from '@mui/material/styles'
import GlobeCore from './GlobeCore'
import OrbitingIcon from './OrbitingIcon'
import { skills } from '../../data/skills'

export default function SkillsGlobe() {
  const theme = useTheme()

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      style={{ height: '500px', width: '100%' }}
    >
      <ambientLight intensity={0.3} color={theme.palette.primary.main} />
      <pointLight position={[10, 10, 10]} color={theme.palette.primary.main} intensity={1} />
      <pointLight position={[-10, -5, -5]} color={theme.palette.secondary.main} intensity={0.6} />
      <Suspense fallback={null}>
        <GlobeCore />
        {skills.map((skill) => (
          <OrbitingIcon key={skill.id} skill={skill} />
        ))}
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
      />
    </Canvas>
  )
}
