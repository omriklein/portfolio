import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard3D from '../three/ProjectCard3D'
import { projects } from '../../data/projects'

const ProjectsSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(14),
  },
}))

const CardContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}))

const AccentBar = styled(Box, {
  shouldForwardProp: (p) => p !== 'accentColor',
})(({ theme, accentColor }) => ({
  width: '36px',
  height: '3px',
  borderRadius: '2px',
  background: accentColor === 'purple' ? theme.palette.secondary.main : theme.palette.primary.main,
  boxShadow: accentColor === 'purple' ? theme.custom.neonShadowPurple : theme.custom.neonShadowCyan,
}))

const TechChip = styled(Chip)(({ theme }) => ({
  height: '22px',
  fontSize: '0.7rem',
  fontFamily: theme.custom.spaceGrotesk,
  fontWeight: 500,
  background: theme.custom.glassBackground,
  border: `1px solid ${theme.custom.glassBorder}`,
  color: theme.palette.text.secondary,
  '& .MuiChip-label': { padding: '0 8px' },
}))

const CardLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  fontSize: '0.85rem',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '&:hover': { color: theme.palette.primary.main },
}))

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  return (
    <ProjectsSection id="projects" component="section">
      <Container maxWidth="md">
        <SectionHeading
          overline="What I've Built"
          title="Projects"
          subtitle="A selection of projects I've worked on — products, experiments, and tools."
        />

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 3 }}>
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard3D glowColor={project.accentColor} accentColor={project.accentColor} image={project.image}>
                  <CardContent>
                    <AccentBar accentColor={project.accentColor} />
                    <Typography variant="h6" sx={{ fontSize: '1.05rem' }}>{project.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {project.tech.map((t) => <TechChip key={t} label={t} size="small" />)}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      {project.github && (
                        <CardLink href={project.github} target="_blank" rel="noopener noreferrer">
                          <FiGithub /> GitHub
                        </CardLink>
                      )}
                      {project.live && (
                        <CardLink href={project.live} target="_blank" rel="noopener noreferrer">
                          <FiExternalLink /> {project.liveLabel || 'Live'}
                        </CardLink>
                      )}
                    </Box>
                  </CardContent>
                </ProjectCard3D>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </ProjectsSection>
  )
}
