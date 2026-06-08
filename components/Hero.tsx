import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <div className="shrink-0 flex flex-col items-center gap-4">
            <div
              className="relative w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden"
              style={{
                border: "2px solid var(--border)",
                boxShadow: "0 0 40px rgba(99,102,241,0.2)",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Olaiya Adebayo"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Available badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border"
              style={{ borderColor: "var(--border)", color: "var(--accent-2)", background: "rgba(99,102,241,0.08)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available Now
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left flex-1">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{ borderColor: "var(--border)", color: "var(--accent-2)", background: "rgba(99,102,241,0.08)" }}
            >
              📍 Porto, Portugal · EU Work Authorised
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-4">
              <span style={{ color: "var(--foreground)" }}>Olaiya </span>
              <span className="gradient-text">Adebayo</span>
            </h1>

            <p className="text-lg md:text-xl font-light mb-3" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              PMP® · AI-Enabled Project Manager
            </p>

            <p className="max-w-xl text-sm md:text-base leading-relaxed mb-8" style={{ color: "var(--foreground)", opacity: 0.5 }}>
              15+ years delivering telecom, IT &amp; digital transformation projects — now augmented
              with Claude AI, prompt engineering, and intelligent automation to ship smarter, faster.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 text-center"
                style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)" }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 border text-center"
                style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
              >
                Get in Touch
              </a>
              <a
                href="/cv-olaiya-adebayo.pdf"
                download="Olaiya-Adebayo-CV.pdf"
                className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 border text-center flex items-center justify-center gap-2"
                style={{ borderColor: "rgba(99,102,241,0.5)", color: "var(--accent-2)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "PMP®", label: "Certified PM" },
            { value: "$2M+", label: "Budgets Managed" },
            { value: "95%", label: "On-Time Delivery" },
          ].map((s) => (
            <div key={s.label} className="card p-4 text-center glow">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs mt-1 opacity-50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
