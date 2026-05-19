import { motion } from 'framer-motion'
import logoImg from '../assets/logo/sinister-logo.png'

export default function Footer() {
  return (
    <footer className="relative bg-matte-black border-t border-soft-white/10 py-12 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex justify-center mb-8"
        >
          <img
            src={logoImg}
            alt="Sinister Studios"
            className="w-32 md:w-40 object-contain"
            style={{ filter: 'drop-shadow(0 0 20px rgba(193, 18, 31, 0.3))' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[clamp(3rem,16vw,16rem)] leading-[0.85] tracking-tight text-stroke-red opacity-50 select-none">
            SINISTER
          </h2>
          <p className="font-editorial italic text-crimson-glow text-lg -mt-4">
            film your imaginations.
          </p>
        </motion.div>

        <div className="border-t border-soft-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-mono text-xs tracking-cinematic text-soft-white/60">
            © {new Date().getFullYear()} SINISTER STUDIOS · ALL RIGHTS RESERVED
          </span>

          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-cinematic text-soft-white/40">
            <span>EST. 2023</span>
            <span className="w-1 h-1 bg-crimson-glow rounded-full" />
            <span>Mirpur · Azad Kashmir</span>
            <span className="w-1 h-1 bg-crimson-glow rounded-full" />
            <span>PAKISTAN</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
