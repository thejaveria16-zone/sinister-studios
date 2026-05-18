import { motion } from 'framer-motion'
import { Calendar, Tag } from 'lucide-react'
import ifritPoster from '../assets/posters/ifrit.jpeg'
import ifritTeaser from '../assets/posters/ifrit-teaser.jpeg'
import rockTalkPoster from '../assets/posters/rock-talk.jpeg'
import backyardPoster from '../assets/posters/backyard.jpeg'

const films = [
  {
    title: 'Ifrit',
    year: '2024',
    tag: 'Horror · Feature',
    tagline: 'Evil never ends.',
    poster: ifritPoster,
    director: 'Dr Usmaan Ali',
    description: 'A haunting descent into ancestral terror, where the line between the seen and unseen begins to bleed.',
  },
  {
    title: 'Ifrit',
    year: '2024',
    tag: 'Official Teaser',
    tagline: 'Presented by Sinister Studios & Majestic Movies.',
    poster: ifritTeaser,
    director: 'Dr Usmaan Ali',
    description: 'Candles. Whispers. A ritual that should never have begun.',
  },
  {
    title: 'Rock Talk',
    year: '2024',
    tag: 'Short Film',
    tagline: 'Hussnain × Alishba.',
    poster: rockTalkPoster,
    director: 'Sinister Studios',
    description: 'A quiet conversation between two souls who never wanted to be alone.',
  },
  {
    title: 'Backyard',
    year: '2024',
    tag: 'Short Film',
    tagline: 'Some stories begin where the grass ends.',
    poster: backyardPoster,
    director: 'Sinister Studios',
    description: 'An unassuming portrait that unfolds into something unexpectedly tender.',
  },
]

export default function Films() {
  return (
    <section
      id="films"
      className="relative section-padding bg-graphite overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-glow opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs tracking-cinematic text-crimson-glow">
            02 / FILMOGRAPHY
          </span>
          <span className="h-px flex-1 bg-soft-white/10" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-soft-white">
            Featured
            <br />
            <span className="text-stroke-red">films.</span>
          </h2>
          <p className="font-editorial italic text-soft-white/50 text-lg max-w-md">
            A selection of work from the Sinister Studios filmography. Trailers and screenings on request.
          </p>
        </motion.div>

        {/* Films grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {films.map((film, i) => (
            <motion.article
              key={film.title + i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="poster-card hover-target group relative aspect-[16/10] bg-matte-black"
            >
              <img
                src={film.poster}
                alt={`${film.title} — ${film.tagline}`}
                className="poster-img absolute inset-0 w-full h-full object-cover"
              />

              {/* Red glow border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-crimson-glow/60 transition-colors duration-500 z-20 pointer-events-none" />

              {/* Content overlay */}
              <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-cinematic text-soft-white/60 bg-matte-black/60 backdrop-blur px-3 py-1.5 inline-flex items-center gap-2">
                    <Tag size={10} />
                    {film.tag}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-cinematic text-soft-white/60 bg-matte-black/60 backdrop-blur px-3 py-1.5 inline-flex items-center gap-2">
                    <Calendar size={10} />
                    {film.year}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-3xl md:text-5xl tracking-tight text-soft-white mb-2">
                    {film.title}
                  </h3>
                  <p className="font-editorial italic text-crimson-glow text-sm md:text-base mb-3">
                    {film.tagline}
                  </p>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-700">
                    <p className="font-body text-xs md:text-sm text-soft-white/70 leading-relaxed pt-2 border-t border-soft-white/10">
                      {film.description}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-cinematic text-soft-white/40 mt-3">
                      Dir. {film.director}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Marquee of additional titles */}
        <div className="mt-24 border-t border-soft-white/10 pt-16">
          <p className="font-mono text-xs tracking-cinematic text-soft-white/40 text-center mb-8 uppercase">
            also from the studio
          </p>
          <div className="marquee">
            <div className="marquee-track">
              {['Alter', 'Silent Patient', 'New Year', 'Sad Bin', 'Before I Recall', 'Alter', 'Silent Patient', 'New Year', 'Sad Bin', 'Before I Recall'].map((t, i) => (
                <span
                  key={i}
                  className="font-display text-3xl md:text-6xl tracking-cinematic text-soft-white/30 hover:text-crimson-glow transition-colors whitespace-nowrap"
                >
                  {t} <span className="text-crimson-glow">·</span>
                </span>
              ))}
            </div>
            <div className="marquee-track" aria-hidden="true">
              {['Alter', 'Silent Patient', 'New Year', 'Sad Bin', 'Before I Recall', 'Alter', 'Silent Patient', 'New Year', 'Sad Bin', 'Before I Recall'].map((t, i) => (
                <span
                  key={i}
                  className="font-display text-3xl md:text-6xl tracking-cinematic text-soft-white/30 whitespace-nowrap"
                >
                  {t} <span className="text-crimson-glow">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
