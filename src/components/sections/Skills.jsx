import { Suspense, lazy } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import GlassCard from '../ui/GlassCard'
import { skills } from '../../data/skills'

const SkillsGlobe = lazy(() => import('../three/SkillsGlobe'))

const SkillsSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  background: theme.palette.background.paper,
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(14),
  },
}))

const SkillChip = styled(GlassCard)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  cursor: 'default',
  borderRadius: '999px',
}))

const GlobeFallback = styled(Box)({
  height: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export default function Skills() {
  return (
    <SkillsSection id="skills" component="section">
      <Container maxWidth="lg">
        <SectionHeading
          overline="What I Use"
          title="Tech Stack"
          subtitle="The tools and technologies I reach for to build products."
          align="center"
        />

        <ScrollReveal>
          <Suspense fallback={<GlobeFallback><Typography color="text.disabled">Loading...</Typography></GlobeFallback>}>
            <SkillsGlobe />
          </Suspense>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', mt: 4 }}>
            {skills.map((skill) => (
              <SkillChip key={skill.id} hoverable>
                <skill.Icon style={{ color: skill.color, fontSize: '18px', flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontWeight: 500, whiteSpace: 'nowrap', fontSize: '0.85rem' }}>
                  {skill.label}
                </Typography>
              </SkillChip>
            ))}
          </Box>
        </ScrollReveal>
      </Container>
    </SkillsSection>
  )
}
