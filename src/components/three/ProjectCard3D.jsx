import { useRef, useCallback } from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const Perspective = styled(Box)({ perspective: '900px', width: '100%' })

const Card = styled(Box)(({ theme, glowColor }) => {
  const glow = glowColor === 'purple' ? theme.palette.secondary.glow : theme.palette.primary.glow
  return {
    position: 'relative',
    transformStyle: 'preserve-3d',
    borderRadius: theme.shape.borderRadius * 2,
    border: `1px solid ${theme.custom.glassBorder}`,
    background: theme.custom.glassBackground,
    backdropFilter: 'blur(12px)',
    boxShadow: theme.custom.glassShadow,
    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
    overflow: 'hidden',
    '&:hover': {
      boxShadow: `${theme.custom.cardHoverShadow}, 0 0 30px ${glow}`,
      borderColor: glow,
    },
  }
})

const ImageArea = styled(Box, {
  shouldForwardProp: (p) => p !== 'accentColor',
})(({ theme, accentColor }) => {
  const color = accentColor === 'purple' ? theme.palette.secondary.main : theme.palette.primary.main
  const glow = accentColor === 'purple' ? theme.palette.secondary.glow : theme.palette.primary.glow
  return {
    height: '160px',
    background: `linear-gradient(135deg, ${theme.palette.background.surface} 0%, ${glow} 100%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${theme.custom.glassBorder}`,
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: color,
      boxShadow: `0 0 12px ${color}`,
    },
  }
})

const Shine = styled(Box)({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 10,
})

export default function ProjectCard3D({ children, glowColor = 'cyan', image, accentColor }) {
  const cardRef = useRef(null)
  const shineRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    cardRef.current.style.transform = `rotateX(${(y - 0.5) * -12}deg) rotateY(${(x - 0.5) * 12}deg) scale3d(1.01,1.01,1.01)`
    cardRef.current.style.transition = 'transform 0.1s ease'
    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.06) 0%, transparent 55%)`
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    cardRef.current.style.transform = 'rotateX(0) rotateY(0) scale3d(1,1,1)'
    cardRef.current.style.transition = 'transform 0.5s ease'
    if (shineRef.current) shineRef.current.style.background = 'none'
  }, [])

  return (
    <Perspective>
      <Card ref={cardRef} glowColor={glowColor} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <Shine ref={shineRef} />
        <ImageArea accentColor={accentColor || glowColor}>
          {image
            ? <Box component="img" src={image} alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <Box sx={{ fontSize: '3rem', opacity: 0.4 }}>{'</>'}</Box>
          }
        </ImageArea>
        <Box sx={{ position: 'relative', zIndex: 1 }}>{children}</Box>
      </Card>
    </Perspective>
  )
}
