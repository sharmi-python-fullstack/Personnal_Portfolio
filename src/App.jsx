import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useInView, animate } from 'framer-motion'
import {
  FileText, Download, Mail, ExternalLink, GraduationCap, Briefcase, Award, PlayCircle,
  Heart, ShoppingCart, Building2, Utensils, Menu, X, ArrowDown, Sparkles, CheckCircle2, Code2, BookOpen,
} from 'lucide-react'
import {
  RESUME_URL, PHOTO_URL, profile, stats, skills, experience, projects, education,
  certifications, papers, academicProjects, highlights,
} from './data.js'

const icons = { heart: Heart, cart: ShoppingCart, building: Building2, utensils: Utensils }

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' } }),
}

function Reveal({ children, i = 0, className = '' }) {
  return (
    <motion.div className={className} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
      {children}
    </motion.div>
  )
}

function SectionTitle({ eyebrow, title }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">{eyebrow}</p>
      <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brand-400 to-emerald-400" />
    </Reveal>
  )
}

function Typewriter({ words }) {
  const [text, setText] = useState('')
  const [w, setW] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const word = words[w]
    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1200)
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length - 1 === 0) { setDel(false); setW((w + 1) % words.length) }
      }
    }, del ? 35 : 75)
    return () => clearTimeout(t)
  }, [text, del, w, words])
  return <span className="gradient-text animate-shimmer">{text}<span className="animate-blink text-brand-300">|</span></span>
}

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{n}{suffix}</span>
}

const links = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']]

function ResumeButton({ className = '' }) {
  return (
    <a href={RESUME_URL} target="_blank" rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:scale-105 hover:shadow-brand-500/50 ${className}`}>
      <FileText size={16} /> Resume
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20)
    f(); window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'glass shadow-lg shadow-black/20' : ''}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-xl font-bold text-white">Sharmila<span className="text-brand-300">.</span></a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} className="text-sm text-slate-300 transition hover:text-brand-300">{l}</a></li>
          ))}
          <li><ResumeButton /></li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="glass mx-4 mb-3 flex flex-col gap-3 rounded-2xl p-5 md:hidden">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="text-slate-200">{l}</a>)}
          <ResumeButton className="self-start" />
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-96 w-96 animate-float rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-[28rem] w-[28rem] animate-float rounded-full bg-emerald-600/25 blur-3xl [animation-delay:2s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-brand-200">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            Open to remote opportunities
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text animate-shimmer">Sharmila Banu</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-5 min-h-[2.5rem] text-xl font-medium sm:text-2xl">
            <Typewriter words={profile.roles} />
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            14+ years of turning complex Computer Science concepts into confident exam results. Founder of Sha Curriculum Spot, with a <strong className="text-white">98%+ pass rate</strong>.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-8 flex flex-wrap items-center gap-4">
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-emerald-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:scale-105">
              <FileText size={18} /> View Resume
            </a>
            <a href={RESUME_URL} download className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
              <Download size={18} /> Download PDF
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 font-semibold text-brand-200 transition hover:text-white">
              See my projects <ArrowDown size={16} className="animate-bounce" />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-8 flex flex-wrap gap-5 text-sm text-slate-400">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-brand-200"><Mail size={15} className="text-brand-300" /> {profile.email}</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative mx-auto w-72 sm:w-80">
          <div className="absolute -inset-3 animate-spin rounded-[2.5rem] bg-[conic-gradient(from_0deg,#9a2340,#10b981,#be123c,#9a2340)] opacity-70 blur-md [animation-duration:8s]" />
          <div className="relative animate-float overflow-hidden rounded-[2.2rem] border-2 border-white/20 bg-forest-900">
            <img src={PHOTO_URL} alt="Sharmila Banu J.H." className="aspect-[4/5] w-full object-cover object-[50%_35%]" />
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="glass absolute -bottom-4 -left-6 flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-white shadow-xl">
            <Code2 size={16} className="text-brand-300" /> Python · MySQL
          </motion.div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="glass absolute -right-4 top-8 flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-white shadow-xl">
            <Sparkles size={16} className="text-amber-300" /> 98%+ pass rate
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="px-5 pb-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} i={i}>
            <div className="glass rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:border-brand-400/50">
              <div className="font-display text-4xl font-bold text-white sm:text-5xl"><Counter to={s.value} suffix={s.suffix} /></div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="About me" title="Educator by passion, engineer by training" />
        <Reveal><p className="text-center text-lg leading-8 text-slate-300">{profile.summary}</p></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h} i={i}>
              <div className="glass h-full rounded-2xl p-5 text-sm leading-6 text-slate-300">
                <CheckCircle2 className="mb-3 text-brand-300" size={20} />{h}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm"><span className="text-slate-200">{name}</span><span className="text-slate-400">{level}%</span></div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-emerald-400" initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="What I know" title="Skills & Technologies" />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((g, i) => (
            <Reveal key={g.group} i={i}>
              <div className="glass h-full rounded-3xl p-6">
                <h3 className="mb-5 font-display text-xl font-semibold text-white">{g.group}</h3>
                {g.ongoing ? (
                  <div className="flex flex-wrap gap-3">
                    {g.items.map(([n]) => (
                      <span key={n} className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100 transition hover:-translate-y-0.5 hover:bg-amber-300/20">
                        <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" /></span>
                        {n}
                      </span>
                    ))}
                    <p className="mt-2 w-full text-xs text-slate-400">Currently learning and building projects with these.</p>
                  </div>
                ) : (
                  <div className="space-y-4">{g.items.map(([n, l]) => <SkillBar key={n} name={n} level={l} />)}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const e = experience
  return (
    <section id="experience" className="px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Career" title="Professional Experience" />
        <Reveal>
          <div className="relative border-l-2 border-brand-500/40 pl-8">
            <span className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 ring-4 ring-forest-950"><span className="h-2 w-2 animate-ping rounded-full bg-white" /></span>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-white"><Briefcase size={22} className="text-brand-300" /> {e.role}</h3>
                  <p className="mt-1 text-brand-200">{e.org} · <span className="text-slate-400">{e.type}</span></p>
                </div>
                <span className="rounded-full bg-brand-500/20 px-4 py-1 text-sm font-medium text-brand-200">{e.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {e.points.map((p, i) => (
                  <motion.li key={p} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-3 text-slate-300">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-400" /> <span>{p}</span>
                  </motion.li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-500/15 px-4 py-2 text-sm font-medium text-red-300">
                <PlayCircle size={16} /> Creator of the TechBox 247 YouTube channel
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Portfolio" title="Live Web Projects" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = icons[p.icon]
            return (
              <Reveal key={p.title} i={i}>
                <motion.a href={p.url} target="_blank" rel="noreferrer" whileHover={{ y: -8 }} className="group glass block overflow-hidden rounded-3xl">
                  <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${p.gradient}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:20px_20px]" />
                    <Icon size={64} className="relative text-white drop-shadow-lg transition duration-500 group-hover:scale-125 group-hover:rotate-6" />
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-brand-200">{p.tag}</span>
                    <h3 className="mt-3 font-display text-2xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{p.desc}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 font-semibold text-brand-300 transition group-hover:gap-3">View live project <ExternalLink size={16} /></span>
                    </div>
                    <p className="mt-3 truncate text-xs text-slate-500">{p.url}</p>
                  </div>
                </motion.a>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-16">
          <h3 className="mb-6 text-center font-display text-2xl font-semibold text-white">Academic Projects</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {academicProjects.map(([t, d]) => (
              <div key={t} className="glass rounded-2xl p-5">
                <BookOpen size={20} className="mb-2 text-brand-300" />
                <h4 className="font-semibold text-white">{t}</h4>
                <p className="mt-1 text-sm text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Learning" title="Education & Achievements" />
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="glass h-full rounded-3xl p-6">
              <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-semibold text-white"><GraduationCap className="text-brand-300" /> Education</h3>
              <div className="space-y-5">
                {education.map((e) => (
                  <div key={e.title} className="border-l-2 border-brand-500/50 pl-4">
                    <p className="font-semibold text-white">{e.title}</p>
                    <p className="text-sm text-slate-400">{e.place}</p>
                    <p className="mt-1 text-sm text-brand-200">{e.year} · {e.score}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal i={1}>
            <div className="glass h-full rounded-3xl p-6">
              <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-semibold text-white"><Award className="text-brand-300" /> Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-start justify-between gap-3 text-sm">
                    <span className="text-slate-300">{c.name}</span>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs ${c.status === 'In Progress' ? 'bg-amber-400/20 text-amber-300' : 'bg-white/10 text-slate-300'}`}>{c.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal i={2}>
            <div className="glass h-full rounded-3xl p-6">
              <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-semibold text-white"><FileText className="text-brand-300" /> Papers Presented</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {papers.map((p) => <li key={p} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />{p}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <Reveal>
        <div className="glass relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] p-10 text-center">
          <div className="absolute -top-20 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" />
          <h2 className="relative font-display text-4xl font-bold text-white sm:text-5xl">Let's work together</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-300">Looking for a remote role in education, curriculum development, EdTech or the private sector? I'd love to hear from you.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-emerald-500 px-7 py-3.5 font-semibold text-white transition hover:scale-105"><Mail size={18} /> Email me</a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"><FileText size={18} /> Resume</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })
  return (
    <>
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-400 to-emerald-400" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sharmila Banu J.H. · Built with React & Tailwind CSS
      </footer>
    </>
  )
}
