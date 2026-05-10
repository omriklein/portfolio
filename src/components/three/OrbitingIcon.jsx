import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

export default function OrbitingIcon({ skill }) {
  const groupRef = useRef()
  const theme = useTheme()

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.elapsedTime * skill.orbitSpeed + skill.initialOffset
    const x = skill.orbitRadius * Math.cos(t) * Math.cos(skill.orbitTilt)
    const y = skill.orbitRadius * Math.sin(skill.orbitTilt) * Math.sin(t)
    const z = skill.orbitRadius * Math.sin(t) * Math.cos(skill.orbitTilt)
    groupRef.current.position.set(x, y, z)
  })

  return (
    <group ref={groupRef}>
      <Html
        center
        distanceFactor={8}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            background: `rgba(10, 10, 15, 0.85)`,
            border: `1px solid ${theme.custom.glassBorder}`,
            borderRadius: '6px',
            padding: '4px 8px',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
          }}
        >
          <skill.Icon style={{ color: skill.color, fontSize: '18px' }} />
          <Box
            component="span"
            sx={{
              fontSize: '9px',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: theme.custom.spaceGrotesk,
              letterSpacing: '0.05em',
            }}
          >
            {skill.label}
          </Box>
        </Box>
      </Html>
    </group>
  )
}
