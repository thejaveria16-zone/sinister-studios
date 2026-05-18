import { motion } from 'framer-motion'
import { Play, ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const onMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-matte-black flex items-center justify-center"
    >
      {/* Ambient red lighting follows mouse */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(193, 18, 31, 0.18) 0%, transparent 50%)`,
        }}
      />

      {/* Static red glow bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blood-red/10 to-transparent pointer-events-none" />

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-matte-black to-transparent pointer-events-none" />

      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 80px, rgba(245,245,245,0.5) 80px, rgba(245,245,245,0.5) 81px)'
        }} />
      </div>

      {/* Floating embers */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-crimson-glow"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 20,
              opacity: 0,
            }}
            animate={{
              y: -50,
              opacity: [0, 0.8, 0],
              x: `+=${Math.random() * 100 - 50}`,
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'linear',
            }}
            style={{
              boxShadow: '0 0 8px rgba(193, 18, 31, 0.8)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="h-px w-12 bg-crimson-glow/60" />
          <span className="font-mono text-xs tracking-cinematic text-crimson-glow uppercase">
            EST. 2023 · Mirpur, Azad Kashmir
          </span>
          <span className="h-px w-12 bg-crimson-glow/60" />
        </motion.div>

        {/* Main title with stagger */}
        <motion.h1
          className="font-display text-soft-white leading-[0.85] tracking-tight"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.7 } },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="glitch block text-[clamp(3.5rem,12vw,11rem)] tracking-tight"
            data-text="SINISTER"
          >
            SINISTER
          </motion.span>

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="block text-[clamp(3.5rem,12vw,11rem)] tracking-tight text-stroke-red"
          >
            STUDIOS
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="font-editorial italic text-soft-white/60 text-xl md:text-2xl mt-10 tracking-wide"
        >
          film your imaginations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mt-14"
        >
          <a
            href="#showreel"
            className="hover-target group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-crimson-glow text-soft-white font-body text-sm uppercase tracking-wider-x overflow-hidden red-pulse"
          >
            <Play size={16} fill="currentColor" />
            <span className="relative z-10">Watch Showreel</span>
            <span className="absolute inset-0 bg-blood-red translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>

          <a
            href="#films"
            className="hover-target group relative inline-flex items-center justify-center gap-3 px-8 py-4 border border-soft-white/30 text-soft-white font-body text-sm uppercase tracking-wider-x hover:border-crimson-glow transition-colors duration-500"
          >
            <span>Explore Films</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom corners — cinematic frame markers */}
      <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-3 text-xs font-mono text-soft-white/40 tracking-wider-x z-10">
        <span className="w-2 h-2 bg-crimson-glow rounded-full animate-pulse" />
      </div>

    
    </section>
  )
}
