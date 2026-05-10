import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import NeonButton from '../ui/NeonButton'
import GlassCard from '../ui/GlassCard'
import ScrollReveal from '../ui/ScrollReveal'

const ContactSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  background: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(14),
  },
}))

const ContactCard = styled(GlassCard)(({ theme }) => ({
  padding: theme.spacing(5),
  maxWidth: '640px',
  margin: '0 auto',
  textAlign: 'center',
}))

const EmojiAvatar = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  background: theme.custom.gradientCyan,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(3),
  boxShadow: theme.custom.neonShadowCyan,
  fontSize: '1.8rem',
}))

const CONTACT_LINKS = [
  { label: 'GitHub', Icon: FiGithub, href: 'https://github.com/omriklein', glowColor: 'cyan' },
  { label: 'LinkedIn', Icon: FiLinkedin, href: 'https://linkedin.com/in/omriklein', glowColor: 'purple' },
  { label: 'Email', Icon: FiMail, href: 'mailto:shirlesh021@gmail.com', glowColor: 'cyan' },
]

export default function Contact() {
  return (
    <ContactSection id="contact" component="section">
      <Container maxWidth="lg">
        <SectionHeading
          overline="Let's Talk"
          title="Get In Touch"
          subtitle="Open to new opportunities, collaborations, and interesting conversations."
          align="center"
        />
        <ScrollReveal>
          <ContactCard>
            <EmojiAvatar>👋</EmojiAvatar>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.05rem' }}>
              Whether you have a role in mind, a project idea, or just want to say hi — my inbox is always open.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
              {CONTACT_LINKS.map(({ label, Icon, href, glowColor }) => (
                <NeonButton
                  key={label}
                  variant2="ghost"
                  glowColor={glowColor}
                  component="a"
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  startIcon={<Icon />}
                >
                  {label}
                </NeonButton>
              ))}
            </Box>
            <Typography variant="caption" color="text.disabled">Usually respond within 24 hours.</Typography>
          </ContactCard>
        </ScrollReveal>
      </Container>
    </ContactSection>
  )
}
