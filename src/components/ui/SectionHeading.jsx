import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import ScrollReveal from './ScrollReveal'

const AccentLine = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '3px',
  background: theme.custom.gradientCyan,
  borderRadius: '2px',
  marginBottom: theme.spacing(2),
  boxShadow: theme.custom.neonShadowCyan,
}))

const Overline = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.custom.orbitronFont,
  fontSize: '0.75rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(1),
}))

const HeadingWrapper = styled(Box, {
  shouldForwardProp: (p) => p !== 'align',
})(({ align }) => ({
  textAlign: align,
  marginBottom: '48px',
}))

export default function SectionHeading({ overline, title, subtitle, align = 'left' }) {
  return (
    <ScrollReveal>
      <HeadingWrapper align={align}>
        <Box sx={{ display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          <AccentLine />
        </Box>
        {overline && <Overline variant="overline">{overline}</Overline>}
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 1 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: '560px', mx: align === 'center' ? 'auto' : 0 }}
          >
            {subtitle}
          </Typography>
        )}
      </HeadingWrapper>
    </ScrollReveal>
  )
}
