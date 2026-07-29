import { profile, focusAreas } from '../data/portfolio';

const stats = [
  { label: 'github / repos', value: '29' },
  { label: 'github / stars', value: '665' },
  { label: 'github / followers', value: '15' },
  { label: 'years shipping', value: '5+' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="page">
        <div className="text-center mb-12">
          <div className="section-label mb-3">About</div>
          <h2 className="display-lg text-3xl md:text-5xl">
            The <span className="gradient-text">operator.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl md:text-2xl text-[var(--color-text)] leading-snug font-light">
            I build <span className="gradient-text font-medium">robust information systems</span> — balancing
            maintainable architecture, practical UI, and delivery speed. Five years shipping
            for government, enterprise, and teams that need things done.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div className="glass-card p-6">
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              Currently at <span className="text-[var(--color-text)] font-medium">CV. Prima Group</span>,
              delivering platforms that run real workloads — Mojokerto's legal documentation
              system, spatial planning tools, and budget data platforms for city government.
            </p>
          </div>
          <div className="glass-card p-6">
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              Beyond the day job, I'm pulled toward
              <span className="text-[var(--color-text)] font-medium"> philosophy &amp; computer science</span>,
              Rust-based desktop tools (Tauri), and LLM-powered agent workflows
              that actually do things.
            </p>
          </div>
        </div>

        {/* Focus tags */}
        <div className="text-center mb-8">
          <div className="label text-[var(--color-text-dim)] mb-4">What I focus on</div>
          <div className="flex flex-wrap justify-center gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="glass-badge">{area}</span>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card-hover p-5 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold mb-2 group-hover:text-[var(--color-primary-light)] transition-colors">
                {stat.value.includes('+') ? (
                  <>{stat.value.replace('+', '')}<span className="gradient-text">+</span></>
                ) : (
                  <span className="gradient-text">{stat.value}</span>
                )}
              </div>
              <div className="font-mono text-xs text-[var(--color-text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
