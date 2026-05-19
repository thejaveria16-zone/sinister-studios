import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoImg from '../assets/logo/sinister-logo.png'

const navItems = [
  { label: 'Films', href: '#films' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-5 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 hover-target group">
          <img
            src={logoImg}
            alt="Sinister Studios"
            className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-500 group-hover:scale-110"
            style={{ filter: 'drop-shadow(0 0 8px rgba(193, 18, 31, 0.4))' }}
          />
          <span className="font-display text-xl tracking-cinematic text-soft-white hidden sm:block">
            SINISTER<span className="text-crimson-glow ml-1">/</span>STUDIOS
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover-target relative font-body text-sm uppercase tracking-wider-x text-soft-white/70 hover:text-soft-white transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-crimson-glow group-hover:w-full transition-all duration-500" />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden hover-target text-soft-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-3 mx-6 py-8 px-6 border-t border-crimson-glow/20"
        >
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl tracking-cinematic text-soft-white/90"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
