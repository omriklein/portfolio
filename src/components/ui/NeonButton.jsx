import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const NeonButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'variant2' && prop !== 'glowColor',
})(({ theme, variant2 = 'filled', glowColor = 'cyan' }) => {
  const color =
    glowColor === 'purple' ? theme.palette.secondary.main : theme.palette.primary.main
  const glow =
    glowColor === 'purple' ? theme.custom.neonShadowPurple : theme.custom.neonShadowCyan
  const glowStrong =
    glowColor === 'purple'
      ? theme.custom.neonShadowPurple
      : theme.custom.neonShadowCyanStrong

  if (variant2 === 'ghost') {
    return {
      color,
      background: 'transparent',
      border: `1px solid ${color}`,
      padding: '10px 28px',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: theme.palette.primary.glow,
        boxShadow: glow,
      },
    }
  }

  return {
    color: theme.palette.background.default,
    background: color,
    padding: '10px 28px',
    fontWeight: 700,
    transition: 'all 0.3s ease',
    '&:hover': {
      background: color,
      boxShadow: glowStrong,
      transform: 'translateY(-2px)',
    },
  }
})

export default NeonButton
