import { experience } from '../data/portfolio';

export default function Resume() {
  const work = experience.filter(e => e.type === 'work');
  const education = experience.filter(e => e.type === 'education');

  return (
    <section id="resume" className="section">
      <div className="page">
        <div className="text-center mb-12">
          <div className="section-label mb-3">Resume</div>
          <h2 className="display-lg text-3xl md:text-5xl">
            The <span className="gradient-text">trajectory.</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mt-4">
            Five years compounding. Each role tightened the focus on shipping
            systems that hold up under real load.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Work */}
          <div>
            <div className="flex items-center gap-3 pb-4 border-b border-[var(--color-border)] mb-6">
              <span className="font-mono text-xs text-[var(--color-primary-light)]">A.</span>
              <h3 className="label">Experience</h3>
            </div>
            <div className="space-y-6">
              {work.map((item, i) => (
                <div key={i} className="glass-card-hover p-5 group">
                  <div className="font-mono text-xs text-[var(--color-text-dim)] mb-2">{item.period}</div>
                  <h4 className="font-display text-xl font-bold mb-1 group-hover:text-[var(--color-primary-light)] transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-sm text-[var(--color-primary-light)] mb-1 font-medium">{item.organization}</div>
                  <div className="font-mono text-xs text-[var(--color-text-dim)] mb-3">{item.location}</div>
                  {item.description && (
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 pb-4 border-b border-[var(--color-border)] mb-6">
              <span className="font-mono text-xs text-[var(--color-primary-light)]">B.</span>
              <h3 className="label">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, i) => (
                <div key={i} className="glass-card-hover p-5 group">
                  <div className="font-mono text-xs text-[var(--color-text-dim)] mb-2">{item.period}</div>
                  <h4 className="font-display text-xl font-bold mb-1 group-hover:text-[var(--color-primary-light)] transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-sm text-[var(--color-primary-light)] mb-1 font-medium">{item.organization}</div>
                  <div className="font-mono text-xs text-[var(--color-text-dim)]">{item.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
