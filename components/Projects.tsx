const projects = [
  {
    title: "Corporate Travel Prospecting Tool",
    desc: "Built an interactive B2B lead generation tool using Claude AI + Apollo MCP to identify and rank corporate travel prospects in Nigeria with automated outreach workflows.",
    tags: ["Claude AI", "Apollo MCP", "Lead Generation", "Automation"],
    icon: "✈️",
  },
  {
    title: "AI-Powered Browser Games & Dashboards",
    desc: "Developed interactive browser games (Dino Runner, Oware/Mancala) and a global inflation tracker dashboard using HTML/CSS/JS via Claude Code — zero prior frontend experience.",
    tags: ["Claude Code", "HTML/CSS/JS", "Vibe Coding", "Data Viz"],
    icon: "🎮",
  },
  {
    title: "AI-Enhanced Portfolio Website",
    desc: "Designed and deployed a dark-tech aesthetic personal portfolio on GitHub Pages to support AI job search positioning, built entirely through AI-assisted development.",
    tags: ["Next.js", "Tailwind CSS", "Claude AI", "GitHub Pages"],
    icon: "🌐",
  },
  {
    title: "AI Presentation — Generative AI for Business",
    desc: "Designed a structured AI presentation for business stakeholders showcasing prompt engineering and generative AI for productivity across enterprise workflows.",
    tags: ["Prompt Engineering", "Generative AI", "Stakeholder Comms"],
    icon: "📊",
  },
  {
    title: "AI Document Workflow Automation",
    desc: "Built AI-assisted document workflows for formal legal/immigration correspondence, applying structured prompt chains to complex multi-step real-world tasks.",
    tags: ["Prompt Chains", "Claude AI", "Document Automation"],
    icon: "📄",
  },
  {
    title: "Cross-Domain AI Content Generation",
    desc: "Developed an AI sermon script for a diaspora congregation incorporating Nigerian cultural frameworks — demonstrating advanced cross-domain AI content generation capabilities.",
    tags: ["Generative AI", "Cultural Context", "Content Strategy"],
    icon: "✍️",
  },
];

const targetRoles = [
  "AI Project Manager",
  "AI Solutions Analyst",
  "AI Product Associate",
  "AI Operations Specialist",
  "Prompt Engineer / AI Workflow Designer",
  "Digital Transformation Consultant",
  "Telecom Programme Manager",
  "IT Project Manager (AI-Augmented)",
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: "rgba(99,102,241,0.03)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
            AI Projects &amp; <span className="gradient-text">Bootcamp Work</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card p-6 flex flex-col gap-3 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="text-3xl">{p.icon}</div>
              <h3 className="font-semibold text-sm leading-tight">{p.title}</h3>
              <p className="text-xs opacity-55 leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(99,102,241,0.1)", color: "var(--accent-2)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Target Roles */}
        <div className="card p-8">
          <h3 className="font-bold text-lg mb-2">
            Target Roles &amp; Industries{" "}
            <span className="gradient-text">— EU / Portugal</span>
          </h3>
          <p className="text-sm opacity-50 mb-6">
            Authorised to work in Portugal / EU · Available immediately · Open to hybrid and remote
          </p>
          <div className="flex flex-wrap gap-3">
            {targetRoles.map((r) => (
              <span
                key={r}
                className="text-sm px-4 py-2 rounded-full border transition-colors hover:border-indigo-500/50"
                style={{ borderColor: "var(--border)", color: "var(--foreground)", opacity: 0.8 }}
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
