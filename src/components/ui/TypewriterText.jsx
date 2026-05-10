import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'

export default function TypewriterText({ texts, typingSpeed = 60, pauseDuration = 2000, sx }) {
  const [displayed, setDisplayed] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500)
    return () => clearInterval(blink)
  }, [])

  useEffect(() => {
    const current = texts[textIndex]

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseDuration)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), typingSpeed / 2)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex((i) => (i + 1) % texts.length)
    }
  }, [charIndex, deleting, textIndex, texts, typingSpeed, pauseDuration])

  useEffect(() => {
    setDisplayed(texts[textIndex].slice(0, charIndex))
  }, [charIndex, textIndex, texts])

  return (
    <Typography variant="h5" sx={{ fontWeight: 400, ...sx }}>
      {displayed}
      <span style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
    </Typography>
  )
}
