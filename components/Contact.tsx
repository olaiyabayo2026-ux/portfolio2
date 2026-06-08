export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
          Let&apos;s <span className="gradient-text">Work Together</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-sm opacity-50 leading-relaxed">
          I&apos;m actively seeking AI-forward roles in Portugal and across Europe. If you&apos;re
          looking for an AI-enabled project manager who can bridge technical and business domains,
          I&apos;d love to connect.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: "✉️",
              label: "Email",
              value: "bayoolaiya2001@gmail.com",
              href: "mailto:bayoolaiya2001@gmail.com",
            },
            {
              icon: "📞",
              label: "Phone",
              value: "+351 931 122 984",
              href: "tel:+351931122984",
            },
            {
              icon: "🔗",
              label: "LinkedIn",
              value: "adebayo-olaiya-b19170341",
              href: "https://linkedin.com/in/adebayo-olaiya-b19170341",
            },
            {
              icon: "📍",
              label: "Location",
              value: "Porto, Portugal",
              href: null,
            },
          ].map((c) => (
            <div key={c.label} className="card p-5 flex items-center gap-4">
              <span className="text-2xl">{c.icon}</span>
              <div className="min-w-0">
                <p className="text-xs opacity-40 mb-0.5">{c.label}</p>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm font-medium truncate block hover:opacity-100 transition-opacity"
                    style={{ color: "var(--accent-2)" }}
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium opacity-80">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="card p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(129,140,248,0.06))" }}
        >
          <p className="font-semibold mb-2">Ready to hire an AI-enabled PM?</p>
          <p className="text-sm opacity-50 mb-6">
            Authorised to work in Portugal / EU · Available immediately
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:bayoolaiya2001@gmail.com"
              className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)" }}
            >
              Send Me a Message
            </a>
            <a
              href="/adebayo-olaiya-portfolio2/cv-olaiya-adebayo.pdf"
              download="Olaiya-Adebayo-CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 border"
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
    </section>
  );
}
