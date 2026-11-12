const aiSkills = [
  { name: "Prompt Engineering", desc: "Structured prompts, chain-of-thought, few-shot, zero-shot, role-based techniques" },
  { name: "Claude AI Platform", desc: "Projects, Memory, Artifacts, deep research, web search, Claude Code CLI, Claude Cowork" },
  { name: "AI Workflow Automation", desc: "End-to-end AI workflows; MCP integrations (Jira, Canva, Gmail, Figma, Apollo)" },
  { name: "Generative AI for Business", desc: "AI-powered documents, research synthesis, stakeholder reports, interactive dashboards" },
  { name: "AI Project Management", desc: "AI product lifecycle (data→model→deploy→monitor); AI risk, governance & ethics frameworks" },
  { name: "Vibe Coding / Claude Code", desc: "Non-developer automation scripting; interactive web tools, games, dashboards via AI-assisted coding" },
  { name: "AI in Telecom", desc: "AIOps, network automation, predictive maintenance, AI-driven NOC workflows, capacity planning" },
  { name: "Agentic Systems", desc: "Building multi-step agentic task orchestration and intelligent automation pipelines" },
];

const coreSkills = [
  "AI Project Management",
  "Agile (Scrum / Kanban) & Waterfall",
  "Prompt Engineering & LLM Workflows",
  "PMI / PMBOK Framework",
  "Digital Transformation Strategy",
  "Telecom Infrastructure (2G/3G/4G/5G)",
  "Risk & Change Management",
  "Budget & Vendor Management",
  "Stakeholder & C-Level Engagement",
  "Cross-functional Team Leadership",
  "Claude AI / MCP Integrations",
  "Data Analysis & Reporting",
  "AI Automation & Agentic Systems",
  "Portfolio & Programme Management",
  "KPI Design & Performance Monitoring",
];

const bootcampModules = [
  "Foundations of Claude & AI Workspace Setup",
  "Smart Prompting & Prompt Engineering",
  "Projects & Memory",
  "Content Creation & Research with AI",
  "Artifacts & Interactive Content",
  "Web Search & Deep Research",
  "Automation & Advanced AI Workflows",
  "Claude Code (Vibe Coding)",
  "Claude Cowork & Advanced Integrations",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "rgba(99,102,241,0.03)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">AI Capabilities</span>{" "}
            <span style={{ color: "var(--foreground)" }}>&amp; Core Expertise</span>
          </h2>
        </div>

        {/* AI Skills Grid */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-6 opacity-80">AI Skills &amp; Bootcamp Training</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiSkills.map((s) => (
              <div key={s.name} className="card p-5 hover:border-indigo-500/40 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--accent)" }} />
                <h4 className="font-semibold text-sm mb-2">{s.name}</h4>
                <p className="text-xs opacity-50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Core Technical */}
          <div>
            <h3 className="text-lg font-semibold mb-6 opacity-80">Core Technical Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:border-indigo-500/50"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", opacity: 0.75 }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Bootcamp */}
          <div>
            <h3 className="text-lg font-semibold mb-6 opacity-80">AI Bootcamp Modules Completed</h3>
            <ul className="space-y-2">
              {bootcampModules.map((m, i) => (
                <li key={m} className="flex items-center gap-3 text-sm opacity-70">
                  <span className="text-xs font-mono opacity-40 w-4 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
