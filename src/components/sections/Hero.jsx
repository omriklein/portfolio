import { Suspense, lazy } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'
import NeonButton from '../ui/NeonButton'
import TypewriterText from '../ui/TypewriterText'

const HeroScene = lazy(() => import('../three/HeroScene'))

const TYPEWRITER_TEXTS = [
  'Building full-stack systems.',
  'Crafting backend architectures.',
  'Shipping products end-to-end.',
  'Solving hard engineering problems.',
]
const NAME = 'OMRI KLEIN'

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: theme.palette.background.default,
}))

const GridOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  backgroundImage: theme.custom.heroGrid,
  backgroundSize: '32px 32px',
  opacity: 0.4,
  pointerEvents: 'none',
}))

const CanvasWrapper = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  '& canvas': { display: 'block' },
})

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  maxWidth: '900px',
  padding: theme.spacing(0, 3),
  [theme.breakpoints.up('md')]: { padding: theme.spacing(0, 6) },
}))

const NameLetter = styled(motion.span)(({ theme }) => ({
  display: 'inline-block',
  fontFamily: theme.custom.orbitronFont,
  fontWeight: 900,
  letterSpacing: '0.05em',
  background: theme.custom.gradientCyan,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}))

const Eyebrow = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  letterSpacing: '0.25em',
  marginBottom: theme.spacing(2),
  display: 'block',
}))

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '32px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  width: '24px',
  height: '40px',
  border: `2px solid ${theme.palette.primary.glow}`,
  borderRadius: '12px',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '6px',
}))

const ScrollDot = styled(Box)(({ theme }) => ({
  width: '4px',
  height: '8px',
  borderRadius: '2px',
  background: theme.palette.primary.main,
  boxShadow: theme.custom.neonShadowCyan,
}))

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } },
}
const letterVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <HeroWrapper id="hero" component="section">
      <GridOverlay />
      <CanvasWrapper>
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </CanvasWrapper>

      <ContentWrapper>
        <motion.div {...fadeUp(0.2)}>
          <Eyebrow variant="overline">Full-Stack &amp; Software Engineer</Eyebrow>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ marginBottom: '16px' }}>
          <Typography component="h1" sx={{ fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem' }, lineHeight: 1.05 }}>
            {NAME.split('').map((char, i) => (
              <NameLetter key={i} variants={letterVariants}>{char}</NameLetter>
            ))}
          </Typography>
        </motion.div>

        <motion.div {...fadeUp(1.2)}>
          <TypewriterText texts={TYPEWRITER_TEXTS} sx={{ color: 'text.secondary', mb: 4, minHeight: '2rem' }} />
        </motion.div>

        <motion.div {...fadeUp(1.6)}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <NeonButton variant2="filled" href="#projects" component="a">View Projects</NeonButton>
            <NeonButton variant2="ghost" href="#contact" component="a">Contact Me</NeonButton>
          </Box>
        </motion.div>
      </ContentWrapper>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
        <ScrollIndicator>
          <ScrollDot />
        </ScrollIndicator>
      </motion.div>
    </HeroWrapper>
  )
}
