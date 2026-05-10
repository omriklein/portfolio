import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)} 0`,
  textAlign: 'center',
  borderTop: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
}))

const FooterName = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}))

export default function Footer() {
  return (
    <FooterWrapper component="footer">
      <Typography variant="caption" color="text.disabled" sx={{ letterSpacing: '0.1em' }}>
        Built by <FooterName>Omri Klein</FooterName> · {new Date().getFullYear()} · React + Three.js
      </Typography>
    </FooterWrapper>
  )
}
