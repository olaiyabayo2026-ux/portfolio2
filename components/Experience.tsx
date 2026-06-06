const jobs = [
  {
    title: "Senior Project Coordinator / AI Workflow Lead",
    company: "Oduak Projects Limited",
    period: "2016 – Present",
    type: "Telecom & IT Infrastructure",
    highlights: [
      "Planned, executed, and closed telecoms infrastructure projects (tower builds, fibre rollout, BTS upgrades) using PMI and Agile frameworks, managing budgets up to $2M.",
      "Introduced AI-powered workflow automation (Claude AI, prompt-driven reporting, automated stakeholder updates) improving team productivity by 30%.",
      "Designed and deployed intelligent project dashboards using AI-assisted data visualisation, reducing reporting time by 40%.",
      "Managed schedules, risk registers, vendor contracts, and multi-stakeholder communications across government, telecoms, and enterprise clients.",
      "Improved project delivery efficiency by 20% and reduced delivery risk exposure by 25% through structured risk management processes.",
      "Led cross-functional teams of up to 25 professionals; maintained CSAT scores above 90% with client stakeholders.",
    ],
    metrics: ["$2M Budget", "30% Productivity ↑", "40% Reporting Time ↓", "CSAT >90%"],
  },
  {
    title: "Programme Manager",
    company: "Adimae Glory Global Services Ltd",
    period: "2013 – 2016",
    type: "Telecom Infrastructure Rollout",
    highlights: [
      "Managed a portfolio of concurrent telecom infrastructure projects across multiple regions, achieving 95% on-time delivery rate.",
      "Oversaw programme budgets, multi-vendor coordination, and regulatory compliance for telecoms rollout programmes.",
      "Developed programme governance frameworks, risk dashboards, and executive-level reporting packs aligned with PMI standards.",
      "Mentored and supervised a team of 12 project coordinators, embedding best-practice project delivery methodology.",
    ],
    metrics: ["95% On-Time Delivery", "Multi-region Portfolio", "Team of 12"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
          Professional <span className="gradient-text">Journey</span>
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
          style={{ background: "var(--border)" }}
        />

        <div className="space-y-12">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute left-1/2 top-6 w-3 h-3 rounded-full -translate-x-1.5 border-2 z-10"
                style={{ borderColor: "var(--accent)", background: "var(--background)" }}
              />

              {/* Card */}
              <div className={`card p-6 md:p-8 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                  <div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full mb-2 inline-block"
                      style={{ background: "rgba(99,102,241,0.12)", color: "var(--accent-2)" }}
                    >
                      {job.type}
                    </span>
                    <h3 className="font-bold text-lg leading-tight">{job.title}</h3>
                    <p className="text-sm opacity-60 mt-0.5">
                      {job.company} · {job.period}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 my-4">
                  {job.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: "rgba(99,102,241,0.1)", color: "var(--accent-2)" }}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-sm opacity-60 flex items-start gap-2 leading-relaxed">
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-indigo-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spacer for timeline alternation */}
              <div />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
