import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import GlassCard from '../components/ui/GlassCard'
import ScrollReveal from '../components/ui/ScrollReveal'
import { posts, CATEGORIES } from '../data/posts'

const CategoryButton = styled('button', {
  shouldForwardProp: (p) => p !== 'active',
})(({ theme, active }) => ({
  background: active ? theme.palette.primary.main : 'transparent',
  color: active ? theme.palette.background.default : theme.palette.text.secondary,
  border: `1px solid ${active ? theme.palette.primary.main : theme.custom.glassBorder}`,
  borderRadius: '999px',
  padding: '6px 18px',
  fontFamily: theme.custom.spaceGrotesk,
  fontWeight: 600,
  fontSize: '0.85rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    color: active ? theme.palette.background.default : theme.palette.primary.main,
  },
}))

const PostCard = styled(GlassCard)(({ theme }) => ({
  padding: theme.spacing(3),
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}))

const CategoryBadge = styled(Box, {
  shouldForwardProp: (p) => p !== 'category',
})(({ theme, category }) => {
  const colors = {
    Code: theme.palette.primary.main,
    'Pixel Art': '#ff79c6',
    '3D Design': theme.palette.secondary.main,
    Games: '#50fa7b',
  }
  return {
    display: 'inline-block',
    fontSize: '0.7rem',
    fontWeight: 700,
    fontFamily: theme.custom.spaceGrotesk,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: colors[category] || theme.palette.primary.main,
    background: `${colors[category] || theme.palette.primary.main}18`,
    border: `1px solid ${colors[category] || theme.palette.primary.main}40`,
    borderRadius: '4px',
    padding: '2px 8px',
  }
})

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory)

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          pt: '80px',
          pb: 10,
          background: (theme) => theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg" sx={{ pt: 8 }}>
          <ScrollReveal>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', letterSpacing: '0.2em', display: 'block', mb: 1 }}
              >
                Writing
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}>
                Blog
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Code, pixel art, 3D design, games — whatever I'm making and thinking about.
              </Typography>
            </Box>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 6 }}>
              {CATEGORIES.map((cat) => (
                <CategoryButton
                  key={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </CategoryButton>
              ))}
            </Box>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
                  gap: 3,
                }}
              >
                {filtered.map((post) => (
                  <PostCard key={post.id}>
                    <Box sx={{ fontSize: '2rem' }}>{post.emoji}</Box>
                    <CategoryBadge category={post.category}>{post.category}</CategoryBadge>
                    <Typography variant="h6" sx={{ fontSize: '1rem', lineHeight: 1.4 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, flexGrow: 1 }}>
                      {post.excerpt}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1 }}>
                      <Typography variant="caption" color="text.disabled">
                        {post.date}
                      </Typography>
                      <Typography variant="caption" color="text.disabled">
                        {post.readTime} read
                      </Typography>
                    </Box>
                  </PostCard>
                ))}
              </Box>
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 10 }}>
              <Typography variant="h4" sx={{ mb: 1 }}>✏️</Typography>
              <Typography color="text.secondary">No posts in this category yet.</Typography>
            </Box>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  )
}
