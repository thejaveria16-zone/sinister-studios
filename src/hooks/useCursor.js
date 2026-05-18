import { useEffect, useState } from 'react'

export default function useCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY })
    const over = (e) => {
      if (e.target.closest('a, button, .hover-target, input, textarea')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return { position, hovering }
}
