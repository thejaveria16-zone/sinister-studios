import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // mailto fallback — easy to wire to Netlify Forms or Formspree later
    const subject = encodeURIComponent(`New enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:sinisterstudiospcl74@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="relative section-padding bg-matte-black overflow-hidden"
    >
      {/* Bottom red glow */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-red-glow opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs tracking-cinematic text-crimson-glow">
            05 / CONTACT
          </span>
          <span className="h-px flex-1 bg-soft-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Headline + details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6"
          >
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-tight text-soft-white mb-8">
              Have a story
              <br />
              to <span className="text-crimson-glow">tell</span><span className="text-stroke-red">?</span>
            </h2>

            <p className="font-editorial italic text-lg text-soft-white/60 mb-12 max-w-md">
              Were always reading new scripts, hearing new pitches, and meeting collaborators for screen and stage.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+923346652913"
                className="hover-target group flex items-start gap-5 py-4 border-b border-soft-white/10 hover:border-crimson-glow/50 transition-colors"
              >
                <Phone size={20} className="text-crimson-glow mt-1" strokeWidth={1.5} />
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-cinematic text-soft-white/40 mb-1">
                    Phone · WhatsApp
                  </p>
                  <p className="font-display text-2xl tracking-wider-x text-soft-white">
                    0334 6652913
                  </p>
                </div>
                <ArrowUpRight size={18} className="text-soft-white/30 group-hover:text-crimson-glow group-hover:rotate-45 transition-all" />
              </a>

              <a
                href="mailto:sinisterstudiospcl74@gmail.com"
                className="hover-target group flex items-start gap-5 py-4 border-b border-soft-white/10 hover:border-crimson-glow/50 transition-colors"
              >
                <Mail size={20} className="text-crimson-glow mt-1" strokeWidth={1.5} />
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-cinematic text-soft-white/40 mb-1">
                    Email
                  </p>
                  <p className="font-display text-lg md:text-xl tracking-wider-x text-soft-white break-all">
                    sinisterstudiospcl74@gmail.com
                  </p>
                </div>
                <ArrowUpRight size={18} className="text-soft-white/30 group-hover:text-crimson-glow group-hover:rotate-45 transition-all" />
              </a>

              <div className="flex items-start gap-5 py-4 border-b border-soft-white/10">
                <MapPin size={20} className="text-crimson-glow mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-cinematic text-soft-white/40 mb-1">
                    Studio · HQ
                  </p>
                  <p className="font-display text-lg tracking-wider-x text-soft-white">
                    Sector E2, Total RK Plaza
                    <br />
                    Mirpur, Azad Kashmir
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="glass p-8 md:p-10 relative">
              {/* Frame markers */}
              <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-crimson-glow/60" />
              <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-crimson-glow/60" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-crimson-glow/60" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-crimson-glow/60" />

              <p className="font-mono text-[10px] uppercase tracking-cinematic text-crimson-glow mb-8">
                · Begin a conversation
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="block font-mono text-[10px] uppercase tracking-cinematic text-soft-white/40 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="hover-target w-full bg-transparent border-b border-soft-white/20 focus:border-crimson-glow py-3 text-soft-white font-body outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <label className="block font-mono text-[10px] uppercase tracking-cinematic text-soft-white/40 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="hover-target w-full bg-transparent border-b border-soft-white/20 focus:border-crimson-glow py-3 text-soft-white font-body outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <label className="block font-mono text-[10px] uppercase tracking-cinematic text-soft-white/40 mb-3">
                    Your Pitch
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="hover-target w-full bg-transparent border-b border-soft-white/20 focus:border-crimson-glow py-3 text-soft-white font-body outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="hover-target group relative w-full mt-4 inline-flex items-center justify-center gap-3 px-8 py-4 bg-crimson-glow text-soft-white font-body text-sm uppercase tracking-wider-x overflow-hidden"
                >
                  <span className="relative z-10">Send Transmission</span>
                  <ArrowUpRight size={16} className="relative z-10 group-hover:rotate-45 transition-transform" />
                  <span className="absolute inset-0 bg-blood-red translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
