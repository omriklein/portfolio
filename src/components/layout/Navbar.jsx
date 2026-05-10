import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { useNavigate, useLocation } from 'react-router-dom'
import { useScrollProgress } from '../../hooks/useScrollProgress'

const SECTION_LINKS = [
  { label: 'About', sectionId: 'about' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Contact', sectionId: 'contact' },
]

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.custom.orbitronFont,
  fontWeight: 900,
  fontSize: '1.4rem',
  background: theme.custom.gradientCyan,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '0.08em',
  cursor: 'pointer',
  border: 'none',
  background: theme.custom.gradientCyan,
  WebkitBackgroundClip: 'text',
}))

const NavLink = styled('button', {
  shouldForwardProp: (p) => p !== 'active',
})(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  background: 'none',
  border: 'none',
  fontFamily: theme.custom.spaceGrotesk,
  fontWeight: 500,
  fontSize: '0.9rem',
  letterSpacing: '0.05em',
  padding: '6px 0',
  cursor: 'pointer',
  position: 'relative',
  transition: 'color 0.25s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: active ? '100%' : '0%',
    height: '1px',
    background: theme.palette.primary.main,
    boxShadow: theme.custom.neonShadowCyan,
    transition: 'width 0.25s ease',
  },
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&:hover::after': {
    width: '100%',
  },
}))

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (p) => p !== 'scrolled',
})(({ theme, scrolled }) => ({
  background: scrolled
    ? `rgba(10, 10, 15, 0.92)`
    : `rgba(10, 10, 15, 0.5)`,
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderBottom: `1px solid ${scrolled ? `rgba(0, 245, 255, 0.15)` : 'transparent'}`,
  boxShadow: 'none',
  transition: 'background 0.3s ease, border-color 0.3s ease',
}))

export default function Navbar() {
  const { scrollY } = useScrollProgress()
  const navigate = useNavigate()
  const location = useLocation()
  const isOnBlog = location.pathname === '/blog'

  const scrollToSection = (sectionId) => {
    if (isOnBlog) {
      navigate('/')
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <StyledAppBar position="fixed" elevation={0} scrolled={scrollY > 80}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 }, py: 1 }}>
        <Logo component="button" onClick={() => navigate('/')}>OK.</Logo>
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {SECTION_LINKS.map((link) => (
            <NavLink key={link.label} onClick={() => scrollToSection(link.sectionId)}>
              {link.label}
            </NavLink>
          ))}
          <NavLink active={isOnBlog} onClick={() => navigate('/blog')}>Blog</NavLink>
        </Box>
      </Toolbar>
    </StyledAppBar>
  )
}
