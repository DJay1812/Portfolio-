// app/page.tsx
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Download, Sparkles } from "lucide-react";

const PROFILE = {
  name: "Jayanth Dondeti",
  headline:
    "Product-focused Software Engineer building scalable web apps, real-time systems, and AI-powered features.",
  location: "Atlanta, GA (Open to Remote/US)",
  email: "jayanthdondeti@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/your-link/",
    github: "https://github.com/your-handle",
    resume: "/Jayanth_Dondeti_Resume.pdf", // put your PDF in /public
  },
  highlights: [
    { k: "1,000+", v: "concurrent users supported", sub: "Browser-based Maze platform" },
    { k: "75%", v: "coordination efficiency gain", sub: "Custom protocol (multi-robot)" },
    { k: "90%", v: "conflict reduction", sub: "Data-driven optimizations" },
    { k: "AI", v: "LLM features shipped", sub: "OpenAI API integrations" },
  ],
};

const PROJECTS = [
  {
    title: "Browser-Based Maze Simulation Platform",
    tagline: "High-performance platform + IDE + analytics dashboard (1,000+ concurrent users).",
    bullets: [
      "Architected full-stack system designed for scale and reliability.",
      "Built an IDE-like experience with real-time analytics + customizable KPIs.",
      "Optimized coordination with a custom communication protocol.",
    ],
    stack: ["TypeScript", "React", "FastAPI/Node", "WebSockets/Realtime", "MongoDB"],
    links: {
      demo: "#",
      code: "#",
      caseStudy: "#maze",
    },
    featured: true,
  },
  {
    title: "AI Product Features (Reality AI – Marvel AI / Sky AI)",
    tagline: "AI-powered UX: LLM insights + automation via OpenAI API and REST integrations.",
    bullets: [
      "Shipped production UI components and integrated REST + LLM workflows.",
      "Translated ambiguous requirements into user-centric features quickly.",
      "Iterated with user feedback to improve adoption and experience.",
    ],
    stack: ["React", "JavaScript/TypeScript", "REST APIs", "OpenAI API"],
    links: {
      demo: "#",
      code: "#",
      caseStudy: "#ai",
    },
  },
  {
    title: "Real-time Data Visualization (Zensar)",
    tagline: "Realtime dashboards with Socket.IO for operational monitoring.",
    bullets: [
      "Built real-time visualization tools and improved monitoring capabilities.",
      "Hardened cross-browser behavior and improved engineering quality via reviews.",
    ],
    stack: ["React", "Socket.IO", "Web UI"],
    links: { demo: "#", code: "#", caseStudy: "#realtime" },
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Reality AI Inc",
    time: "Apr 2025 – Present",
    points: [
      "Built responsive React UI and integrated REST + OpenAI API for AI-powered experiences.",
      "Delivered end-to-end LLM features for insights + automation.",
      "Collaborated cross-functionally, prototyped fast, and iterated with user feedback.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Zensar Technologies",
    time: "Aug 2022 – Nov 2022",
    points: [
      "Built real-time dashboards using React + Socket.IO.",
      "Established peer code review habits to improve quality and reduce defects.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Zensar Technologies",
    time: "Jan 2022 – Jun 2022",
    points: [
      "Automated workflows with Python scripts; improved throughput and reduced manual effort.",
      "Wrote unit tests and participated in reviews to reduce production bugs.",
    ],
  },
];

const SKILLS = {
  "Languages": ["Python", "TypeScript", "JavaScript", "C"],
  "Frontend": ["React", "Responsive UI", "UX optimization", "HTML/CSS"],
  "Backend": ["FastAPI", "Node.js", "Flask", "REST APIs"],
  "Data/DB": ["MongoDB", "MySQL", "Pipelines"],
  "Infra/Tools": ["Git", "Docker (familiar)", "Socket.IO", "Real-time processing"],
  "AI": ["OpenAI API", "LLM integration", "Data-driven features"],
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:shadow-white/20"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function GhostButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-48 right-[-120px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Sparkles className="h-4 w-4 text-white/80" />
            </span>
            <span className="hidden sm:block">{PROFILE.name}</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.links.github}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.links.linkedin}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-5 pb-10 pt-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge>Open to SDE / Full-stack / AI product roles</Badge>
              <Badge>Real-time + scalable systems</Badge>
              <Badge>LLM integration</Badge>
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              I build <span className="text-white/80">fast</span>, <span className="text-white/80">reliable</span> web products
              with <span className="text-white/80">real-time</span> and <span className="text-white/80">AI</span>.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70">
              {PROFILE.headline} Based in {PROFILE.location}.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href="#projects">View flagship work</PrimaryButton>
              <GhostButton href={PROFILE.links.resume}>
                <Download className="h-4 w-4" /> Download Resume
              </GhostButton>
              <GhostButton href="#contact">
                <ExternalLink className="h-4 w-4" /> Hire me / Contact
              </GhostButton>
            </div>

            {/* Recruiter “quick scan” */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-white/90">Recruiter Quick Scan</p>
              <p className="mt-1 text-sm text-white/70">
                If you only read one thing: I ship measurable product impact—scalable systems, real-time UX,
                and AI features users actually want.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                  <p className="text-xs text-white/60">Strength</p>
                  <p className="mt-1 font-semibold">Ownership end-to-end</p>
                  <p className="mt-1 text-sm text-white/70">From UX → APIs → deployment.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                  <p className="text-xs text-white/60">Edge</p>
                  <p className="mt-1 font-semibold">Real-time + AI</p>
                  <p className="mt-1 text-sm text-white/70">Socket.IO/WebSockets + OpenAI workflows.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold text-white/90">Impact snapshot</p>
            <div className="mt-5 grid gap-3">
              {PROFILE.highlights.map((h) => (
                <div key={h.k} className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                  <div className="flex items-end justify-between gap-4">
                    <p className="text-3xl font-semibold tracking-tight">{h.k}</p>
                    <p className="text-sm text-white/70">{h.v}</p>
                  </div>
                  <p className="mt-1 text-xs text-white/55">{h.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
              <p className="text-sm font-semibold">What I’m looking for</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                <li>Full-stack roles (React + Python/Node)</li>
                <li>Real-time / distributed systems exposure</li>
                <li>AI product engineering (LLM integrations)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Flagship Projects</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Built to be skimmable: problem → approach → impact. Add links when ready.
            </p>
          </div>
          <a
            href={PROFILE.links.resume}
            className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 md:inline-flex"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10",
                p.featured && "md:col-span-2"
              )}
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  {p.featured && <Badge>Recruiter Favorite</Badge>}
                </div>

                <p className="mt-2 text-sm text-white/70">{p.tagline}</p>

                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs text-white/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.links.caseStudy}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    Read case study <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={p.links.demo}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
                  >
                    Demo <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={p.links.code}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
                  >
                    Code <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Case study anchors */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <CaseStudy
            id="maze"
            title="Case Study: Maze Platform"
            subtitle="How I designed for 1,000+ concurrent users"
            points={[
              "Goal: scalable simulation + IDE experience.",
              "Approach: real-time messaging, efficient state updates, UX-first workflows.",
              "Impact: measurable productivity gains with analytics dashboard.",
            ]}
          />
          <CaseStudy
            id="ai"
            title="Case Study: AI Features"
            subtitle="Shipping LLM features that feel instant"
            points={[
              "Goal: AI insights + automation that reduces user effort.",
              "Approach: stable API contracts, guardrails, fast UI feedback loops.",
              "Impact: improved product experience through iteration + user feedback.",
            ]}
          />
          <CaseStudy
            id="realtime"
            title="Case Study: Realtime Dashboards"
            subtitle="Operational monitoring with Socket.IO"
            points={[
              "Goal: visualize system status live.",
              "Approach: event-driven updates, resilient UI states, cross-browser checks.",
              "Impact: improved monitoring and engineering workflow quality.",
            ]}
          />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          Emphasis on outcomes, ownership, and product thinking.
        </p>

        <div className="mt-8 grid gap-6">
          {EXPERIENCE.map((e) => (
            <div key={e.role + e.company} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-lg font-semibold">{e.role}</p>
                <p className="text-sm text-white/60">{e.time}</p>
              </div>
              <p className="mt-1 text-sm text-white/80">{e.company}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Skills that map to job descriptions</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          Recruiters search by keywords — but hiring managers care about proof. Pair this with the case studies above.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Object.entries(SKILLS).map(([k, vals]) => (
            <div key={k} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-white/90">{k}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {vals.map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs text-white/75"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 pb-16 pt-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold tracking-tight">Let’s talk</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            If you’re hiring for full-stack, real-time systems, or AI product engineering, I’ll respond fast.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton href={`mailto:${PROFILE.email}`}>Email me</PrimaryButton>
            <GhostButton href={PROFILE.links.linkedin}>
              <Linkedin className="h-4 w-4" /> LinkedIn
            </GhostButton>
            <GhostButton href={PROFILE.links.github}>
              <Github className="h-4 w-4" /> GitHub
            </GhostButton>
            <GhostButton href={PROFILE.links.resume}>
              <Download className="h-4 w-4" /> Resume PDF
            </GhostButton>
          </div>
        </div>

        <footer className="mt-10 pb-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js + Tailwind.
        </footer>
      </section>
    </main>
  );
}

function CaseStudy({
  id,
  title,
  subtitle,
  points,
}: {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
}) {
  return (
    <div id={id} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <p className="text-sm font-semibold text-white/90">{title}</p>
      <p className="mt-1 text-sm text-white/60">{subtitle}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
