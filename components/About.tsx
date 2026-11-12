export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
            Where Project Excellence Meets{" "}
            <span className="gradient-text">AI Innovation</span>
          </h2>
          <p className="leading-relaxed mb-4 opacity-70">
            I&apos;m a PMP®-certified AI-Enabled Project Manager with over 15 years of progressive
            experience delivering telecommunications, IT infrastructure, and digital transformation
            projects across West Africa and beyond.
          </p>
          <p className="leading-relaxed mb-4 opacity-70">
            I have completed a 9-module Claude AI Bootcamp and several Codecademy professional
            certifications in 2026, covering prompt engineering, generative AI workflows, intelligent
            automation, agentic systems, AI for product managers and data science with AI. I now combine deep
            project management expertise with emerging AI capabilities to design smarter workflows,
            accelerate delivery, and embed AI solutions into enterprise operations.
          </p>
          <p className="leading-relaxed opacity-70">
            I&apos;m based in Porto, Portugal and actively targeting AI-forward roles across Portugal
            and Europe — including AI Project Manager, AI Solutions Analyst, AI Operations Specialist,
            and AI Product Associate.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Porto, Portugal", "EU Work Auth", "Immediate Start", "Hybrid / Remote"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border"
                style={{ borderColor: "var(--border)", color: "var(--accent-2)", background: "rgba(99,102,241,0.06)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Info cards */}
        <div className="flex flex-col gap-4">
          {[
            {
              icon: "🎓",
              title: "Education",
              items: [
                "M.Sc. Computer Science",
                "MBA — Business Administration",
                "B.Tech — Computer Engineering",
              ],
            },
            {
              icon: "🏅",
              title: "Certifications",
              items: [
                "PMP® — Project Management Professional (PMI)",
                "MNSE — Member, Nigerian Society of Engineers",
                "AI Bootcamp (2026) — 9 modules: Claude AI, Prompt Engineering, MCP, Agentic Workflows, Claude Code",
                "Codecademy Professional Certifications (2026): AI for Product Managers · Data Science with AI · Beyond Vibe Coding · Build an AI Voice Agent · AI at Work",              ],
            },
            {
              icon: "🌐",
              title: "Languages",
              items: ["English — Native / Full Professional", "Portuguese — A2 (certified, continuing to study)", "Yoruba — Native"],
            },
          ].map((card) => (
            <div key={card.title} className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{card.icon}</span>
                <span className="font-semibold text-sm">{card.title}</span>
              </div>
              <ul className="space-y-1">
                {card.items.map((item) => (
                  <li key={item} className="text-sm opacity-60 flex items-start gap-2">
                    <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
