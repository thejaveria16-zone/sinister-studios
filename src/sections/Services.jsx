import { motion } from 'framer-motion'
import { Camera, Scissors, Megaphone, Film, PenTool, Music, Plane, Aperture, BookOpen } from 'lucide-react'

const services = [
  { icon: Camera, title: 'Cinematic Film Production', text: 'Feature and short-form filmmaking, end to end.' },
  { icon: Film, title: 'Short Film Creation', text: 'Concept, write, shoot, finish — under one roof.' },
  { icon: Megaphone, title: 'Commercial Advertisements', text: 'Brand films that earn the attention they ask for.' },
  { icon: Scissors, title: 'Editing & Post Production', text: 'Color, sound, rhythm. Where stories find their pulse.' },
  { icon: PenTool, title: 'Screenwriting & Direction', text: 'Original scripts and direction for screen and stage.' },
  { icon: Music, title: 'Music Video Production', text: 'Visual records for sounds worth seeing.' },
  { icon: Plane, title: 'Drone Cinematography', text: 'Aerials that earn their place in the cut.' },
  { icon: Aperture, title: 'Photography', text: 'Stills, posters, and behind-the-scenes archive.' },
  { icon: BookOpen, title: 'Visual Storytelling', text: 'Mood films, brand documentaries, editorial work.' },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative section-padding bg-matte-black overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs tracking-cinematic text-crimson-glow">
            03 / SERVICES
          </span>
          <span className="h-px flex-1 bg-soft-white/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-20 max-w-4xl"
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-soft-white">
            What we
            <br />
            <span className="text-crimson-glow">make.</span>
          </h2>
          <p className="font-editorial italic text-soft-white/50 text-lg mt-6">
            A full-stack production house. Concept to final frame.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-soft-white/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="hover-target group relative p-8 md:p-10 bg-matte-black hover:bg-graphite transition-all duration-500"
            >
              <div className="absolute top-0 right-0 font-mono text-xs text-soft-white/20 p-4 group-hover:text-crimson-glow transition-colors duration-500">
                0{i + 1}
              </div>
              <s.icon
                className="text-soft-white/60 group-hover:text-crimson-glow transition-colors duration-500 mb-8"
                size={32}
                strokeWidth={1}
              />
              <h3 className="font-display text-2xl tracking-wider-x text-soft-white mb-4">
                {s.title}
              </h3>
              <p className="font-body text-sm text-soft-white/50 leading-relaxed">
                {s.text}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-crimson-glow group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
