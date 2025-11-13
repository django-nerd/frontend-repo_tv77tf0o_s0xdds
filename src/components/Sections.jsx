import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">About me</h2>
            <p className="mt-6 text-slate-700 leading-7">
              I’m a product-focused developer who loves shaping ideas into polished experiences. My toolkit spans React, TypeScript, Node, and Python — with a keen eye for motion and micro-interactions.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="font-semibold text-slate-900">Frontend</p>
                <p className="mt-1 text-slate-600">React, Next.js, Tailwind, Framer Motion</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="font-semibold text-slate-900">Backend</p>
                <p className="mt-1 text-slate-600">FastAPI, Node, MongoDB</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="font-semibold text-slate-900">Design</p>
                <p className="mt-1 text-slate-600">Figma, Accessibility, Prototyping</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="font-semibold text-slate-900">DevOps</p>
                <p className="mt-1 text-slate-600">CI/CD, Docker, Cloud</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 border border-slate-200 p-6">
              <div className="h-full w-full rounded-xl bg-white/60 backdrop-blur-sm grid place-items-center text-slate-700">
                <p>Drop your photo here or we can add one later.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const items = [
    { title: 'Interactive Dashboard', desc: 'Data-rich, animated insights with elegant UX', tags: ['React', 'Tailwind', 'Chart.js'] },
    { title: 'AI Assistant', desc: 'Conversational bot with FastAPI backend', tags: ['FastAPI', 'OpenAI', 'MongoDB'] },
    { title: 'Design System', desc: 'Scalable components with accessibility baked in', tags: ['Storybook', 'TypeScript'] },
  ]

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Selected projects</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-slate-900/90">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full border border-slate-200 px-2 py-1 bg-slate-50 text-slate-700">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let’s build something great</h2>
        <p className="mt-4 text-slate-700">Tell me about your project or say hello. I’ll get back to you within 24 hours.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid grid-cols-1 gap-4 text-left">
          <input className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
          <input type="email" className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" />
          <textarea rows="5" className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Message" />
          <button className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-md">Send message</button>
        </form>
      </div>
    </section>
  )
}
