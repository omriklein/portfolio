import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const GlassCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'glowColor' && prop !== 'hoverable',
})(({ theme, glowColor = 'cyan', hoverable = true }) => {
  const glowShadow =
    glowColor === 'purple'
      ? theme.custom.neonShadowPurple
      : theme.custom.neonShadowCyan
  const borderHover =
    glowColor === 'purple'
      ? theme.palette.secondary.glow
      : theme.custom.glassBorderHover

  return {
    background: theme.custom.glassBackground,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: `1px solid ${theme.custom.glassBorder}`,
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.custom.glassShadow,
    transition: 'all 0.3s ease',
    ...(hoverable && {
      '&:hover': {
        borderColor: borderHover,
        boxShadow: `${theme.custom.cardHoverShadow}, ${glowShadow}`,
        transform: 'translateY(-2px)',
      },
    }),
  }
})

export default GlassCard
