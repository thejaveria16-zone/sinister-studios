import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import founderImg from '../assets/founder/usmaan-ali.jpeg'

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative section-padding bg-graphite overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-glow opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs tracking-cinematic text-crimson-glow">
            04 / FOUNDER
          </span>
          <span className="h-px flex-1 bg-soft-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Founder image with cinematic treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Image with grayscale + red treatment */}
              <img
                src={founderImg}
                alt="Dr Usmaan Ali, Founder of Sinister Studios"
                className="w-full h-full object-cover"
                style={{
                  filter: 'grayscale(70%) contrast(1.15) brightness(0.85)',
                }}
              />
              {/* Red ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blood-red/30 via-transparent to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-matte-black/60" />

              {/* Frame markers */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-crimson-glow" />
              <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-crimson-glow" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-crimson-glow" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-crimson-glow" />
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-cinematic text-soft-white/40">
                Portrait · Mirpur, 2024
              </span>
              <span className="font-mono text-[10px] uppercase tracking-cinematic text-crimson-glow">
                ISO 800 · F2.8
              </span>
            </div>
          </motion.div>

          {/* Founder bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs uppercase tracking-cinematic text-crimson-glow">
              Founder · Director
            </span>

            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight text-soft-white mt-4 mb-8">
              Dr Usmaan
              <br />
              <span className="text-stroke-red">Ali.</span>
            </h2>

            <div className="relative pl-6 border-l border-crimson-glow/60 mb-8">
              <Quote className="absolute -left-3 -top-2 text-crimson-glow bg-graphite" size={20} fill="currentColor" />
              <p className="font-editorial italic text-lg md:text-xl text-soft-white/80 leading-relaxed">
                I dont chase the bright moments. I chase the ones you almost forget — the half-seconds where something changes,
                and you cant quite say what.
              </p>
            </div>

            <p className="font-body text-base text-soft-white/60 leading-relaxed mb-6">
              Director, writer, and founder of Sinister Studios. Dr Usmaan Ali launched the studio in 2023 with the debut film
              <em className="text-soft-white"> Alter</em>, and has since produced <em className="text-soft-white">Ifrit</em> alongside thirty short works
              spanning horror, psychological drama, and experimental fiction.
            </p>

            <p className="font-body text-sm text-soft-white/50 leading-relaxed mb-10">
              His work has screened across universities and independent theatres in Mirpur, Azad Kashmir, building a body of
              storytelling that favours patience, atmosphere, and the quiet weight of restraint.
            </p>

            {/* Credits chips */}
            <div className="flex flex-wrap gap-3">
              {['Director', 'Writer', 'Producer', 'Founder'].map((c) => (
                <span
                  key={c}
                  className="font-mono text-[10px] uppercase tracking-cinematic text-soft-white/60 border border-soft-white/15 px-4 py-2"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
