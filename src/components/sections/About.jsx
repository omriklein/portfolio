import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import GlassCard from '../ui/GlassCard'

const AboutSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(14),
  },
}))

const AvatarRing = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  padding: '3px',
  boxShadow: theme.custom.neonShadowCyan,
  flexShrink: 0,
}))

const AvatarInner = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  background: theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '4rem',
}))

const StatCard = styled(GlassCard)(({ theme }) => ({
  padding: theme.spacing(2.5),
  textAlign: 'center',
  flex: 1,
  minWidth: '120px',
}))

const StatValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2rem',
  fontWeight: 900,
  marginBottom: theme.spacing(0.5),
  textShadow: theme.custom.neonShadowCyan,
}))

const Highlight = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
}))

const STATS = [
  { value: '7+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '2', label: 'npm Packages Published' },
]

export default function About() {
  return (
    <AboutSection id="about" component="section">
      <Container maxWidth="lg">
        <SectionHeading overline="Who I Am" title="About Me" />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-start' }}>
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <AvatarRing>
                <AvatarInner>🧑‍💻</AvatarInner>
              </AvatarRing>
            </motion.div>
          </ScrollReveal>

          <Box>
            <ScrollReveal delay={0.1}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, fontSize: '1.05rem' }}>
                Hey, I'm <Highlight>Omri Klein</Highlight> — a full-stack and software engineer with 7+ years of
                experience building things across the entire stack. From web apps and CLI tools to Android games
                and Godot projects, I build whatever I find interesting.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.05rem' }}>
                I've contributed to open source projects like Vite and MUI, published npm packages, and worked
                across TypeScript, Go, C#, Python, and more. Outside of code, I'm into pixel art, 3D design,
                and game dev.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {STATS.map((stat) => (
                  <StatCard key={stat.label} hoverable={false}>
                    <StatValue variant="h3">{stat.value}</StatValue>
                    <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.08em' }}>
                      {stat.label}
                    </Typography>
                  </StatCard>
                ))}
              </Box>
            </ScrollReveal>
          </Box>
        </Box>
      </Container>
    </AboutSection>
  )
}
