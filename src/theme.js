import { createTheme, alpha } from '@mui/material/styles'

const RAW = {
  cyan: '#00f5ff',
  purple: '#bf5af2',
  bgDefault: '#0a0a0f',
  bgPaper: '#111118',
  bgSurface: '#1a1a24',
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: RAW.cyan,
      light: alpha(RAW.cyan, 0.7),
      dark: '#00b8c0',
      glow: alpha(RAW.cyan, 0.3),
      glowStrong: alpha(RAW.cyan, 0.5),
    },
    secondary: {
      main: RAW.purple,
      light: alpha(RAW.purple, 0.7),
      dark: '#8b3fc4',
      glow: alpha(RAW.purple, 0.3),
    },
    background: {
      default: RAW.bgDefault,
      paper: RAW.bgPaper,
      surface: RAW.bgSurface,
    },
    text: {
      primary: '#ffffff',
      secondary: alpha('#ffffff', 0.6),
      disabled: alpha('#ffffff', 0.3),
    },
    divider: alpha('#ffffff', 0.08),
  },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 900,
      letterSpacing: '0.05em',
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.04em',
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.03em',
    },
    h4: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Space Grotesk", sans-serif',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Space Grotesk", sans-serif',
      lineHeight: 1.6,
    },
    caption: {
      fontFamily: '"Space Grotesk", sans-serif',
      letterSpacing: '0.08em',
    },
    overline: {
      fontFamily: '"Space Grotesk", sans-serif',
      letterSpacing: '0.12em',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  custom: {
    neonShadowCyan: `0 0 20px ${alpha(RAW.cyan, 0.4)}, 0 0 40px ${alpha(RAW.cyan, 0.1)}`,
    neonShadowCyanStrong: `0 0 30px ${alpha(RAW.cyan, 0.6)}, 0 0 60px ${alpha(RAW.cyan, 0.2)}`,
    neonShadowPurple: `0 0 20px ${alpha(RAW.purple, 0.4)}, 0 0 40px ${alpha(RAW.purple, 0.1)}`,
    glassShadow: `0 4px 24px ${alpha('#000000', 0.4)}`,
    cardHoverShadow: `0 8px 40px ${alpha(RAW.cyan, 0.15)}`,
    glassBorder: alpha('#ffffff', 0.08),
    glassBorderHover: alpha(RAW.cyan, 0.3),
    glassBackground: alpha(RAW.bgPaper, 0.8),
    heroGrid: `radial-gradient(${alpha(RAW.cyan, 0.06)} 1px, transparent 1px)`,
    gradientCyan: `linear-gradient(135deg, ${RAW.cyan}, ${RAW.purple})`,
    gradientCyanFade: `linear-gradient(180deg, ${alpha(RAW.cyan, 0.15)}, transparent)`,
    orbitronFont: '"Orbitron", sans-serif',
    spaceGrotesk: '"Space Grotesk", sans-serif',
    colors: RAW,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: RAW.bgDefault,
          overflowX: 'hidden',
        },
        '::-webkit-scrollbar': {
          width: '6px',
        },
        '::-webkit-scrollbar-track': {
          background: RAW.bgPaper,
        },
        '::-webkit-scrollbar-thumb': {
          background: alpha(RAW.cyan, 0.4),
          borderRadius: '3px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: alpha(RAW.cyan, 0.7),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'none',
          borderRadius: '6px',
        },
      },
    },
  },
})

export default theme
