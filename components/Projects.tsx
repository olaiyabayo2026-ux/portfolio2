const projects = [
  {
    title: "SeedMasters — Online Ayo/Oware Game (Live)",
    desc: "A full digital version of the West African seed-sowing game Ayo/Oware, live at seedsmasters.com. Three modes (vs AI, vs Player, Online), real-time online play with video and voice calling, an AI opponent, and two rule sets (Captured Rule and Flow Rule). Tested with real players, including international matches.",
    tags: ["PHP", "JavaScript", "WebRTC", "Game AI", "Live Product"],
    icon: "🌰",
    link: "https://seedsmasters.com",
  },
  {
    title: "Corporate Travel Prospecting Tool",
    desc: "Built an interactive B2B lead generation tool using Claude AI + Apollo MCP to identify and rank corporate travel prospects in Nigeria with automated outreach workflows.",
    tags: ["Claude AI", "Apollo MCP", "Lead Generation", "Automation"],
    icon: "✈️",
  },
  {
    title: "FlightDesk Nigeria — Corporate Travel Intelligence Dashboard",
    desc: "A corporate travel intelligence dashboard for the Nigerian market. Defined the requirements, used AI to gather and structure the data, and delivered a live interactive tool.",
    tags: ["Claude AI", "Data Viz", "Requirements", "Business Intelligence"],
    icon: "📈",
  },
  {
    title: "Pizza-Ordering AI Agent",
    desc: "Built a customer-facing conversational AI agent that takes food orders, covering conversation design and testing how the agent handles unexpected customer requests.",
    tags: ["AI Agent", "Conversation Design", "Customer Experience", "Testing"],
    icon: "🍕",
  },
  {
    title: "Nigeria Daily News Plugin",
    desc: "Created a Claude plugin that fetches the day's breaking news from Nigeria and presents it as a clickable news feed — a packaged, reusable AI workflow.",
    tags: ["Claude Plugin", "Agentic Workflow", "Automation"],
    icon: "📰",
  },
  {
    title: "Job Application Command Centre",
    desc: "AI-powered tracker that manages target companies, tailored cover letters, contact strategies and application status in one place.",
    tags: ["Claude AI", "MCP", "Workflow Automation"],
    icon: "🗂️",
  },
  {
    title: "AI-Powered Browser Games & Dashboards",
    desc: "Developed interactive browser games (Dino Runner, Snake) and a global inflation tracker dashboard using HTML/CSS/JS via Claude Code — zero prior frontend experience.",
    tags: ["Claude Code", "HTML/CSS/JS", "Vibe Coding", "Data Viz"],
    icon: "🎮",
  },
  {
    title: "AI-Enhanced Portfolio Website",
    desc: "Designed and deployed this dark-tech personal portfolio on Vercel, built entirely through AI-assisted development and updated as new projects ship.",
    tags: ["Next.js", "Tailwind CSS", "Claude Code", "Vercel"],
    icon: "🌐",
  },
  {
    title: "AI Presentation — Generative AI for Business",
    desc: "Designed a structured AI presentation for business stakeholders showcasing prompt engineering and generative AI for productivity across enterprise workflows.",
    tags: ["Prompt Engineering", "Generative AI", "Stakeholder Comms"],
    icon: "📊",
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
            AI Projects &amp; <span className="gradient-text">Builds</span>
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
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Play it live →
                </a>
              )}
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
