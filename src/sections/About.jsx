import { motion } from 'framer-motion'
import { Film, Eye, Sparkles } from 'lucide-react'

const stats = [
  { value: '30+', label: 'Short Films' },
  { value: '2', label: 'Feature Productions' },
  { value: '2023', label: 'Founded' },
]

const pillars = [
  {
    icon: Film,
    title: 'Dark Drama',
    text: 'Stories that linger long after the credits fade. Tension over noise, emotion over spectacle.',
  },
  {
    icon: Eye,
    title: 'Psychological Storytelling',
    text: 'We chase the quiet horrors of the mind. The unsaid. The almost-seen. The just-felt.',
  },
  {
    icon: Sparkles,
    title: 'Science Fiction',
    text: 'Tomorrow rendered through todays anxieties. Worlds built to ask the questions we avoid.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative section-padding bg-matte-black overflow-hidden"
    >
      {/* Background red glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 bg-red-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs tracking-cinematic text-crimson-glow">
            01 / ABOUT
          </span>
          <span className="h-px flex-1 bg-soft-white/10" />
        </motion.div>

        {/* Asymmetric headline + body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight text-soft-white"
          >
            An independent
            <br />
            cinematic <span className="text-stroke">production</span>
            <br />
            <span className="text-crimson-glow">house.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="font-editorial text-lg md:text-xl leading-relaxed text-soft-white/70">
              Sinister Studios began with a single idea in <span className="text-soft-white">2023</span>{' '}
              — that the most haunting stories are the ones we almost recognise.
              Founded by <span className="text-crimson-glow italic">Dr Usmaan Ali</span>,
              the studio debuted with <em>Alter</em>, followed by <em>Ifrit</em> and over thirty short films
              screened across universities and theatres in Mirpur, Azad Kashmir.
            </p>

            <p className="font-body text-sm text-soft-white/50 mt-6 leading-relaxed">
              We work where unease meets art. Where silence carries the scene.
              Every frame chosen, every shadow earned.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-3 gap-6 mb-24 border-y border-soft-white/10 py-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="text-center md:text-left"
            >
              <div className="font-display text-4xl md:text-6xl text-soft-white text-glow-red">
                {s.value}
              </div>
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-cinematic text-soft-white/40 mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="hover-target group relative p-8 border border-soft-white/10 hover:border-crimson-glow/50 transition-all duration-500 bg-graphite/30 backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 w-12 h-px bg-crimson-glow group-hover:w-full transition-all duration-700" />
              <p.icon className="text-crimson-glow mb-6" size={28} strokeWidth={1.5} />
              <h3 className="font-display text-2xl tracking-wider-x text-soft-white mb-3">
                {p.title}
              </h3>
              <p className="font-body text-sm text-soft-white/60 leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
