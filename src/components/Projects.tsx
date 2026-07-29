import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const featured = projects.filter(p => p.highlight);
  const others = projects.filter(p => !p.highlight);

  return (
    <section id="work" className="section">
      <div className="page">
        <div className="text-center mb-12">
          <div className="section-label mb-3">Work</div>
          <h2 className="display-lg text-3xl md:text-5xl">
            The <span className="gradient-text">archive.</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mt-4">
            A selection from GitHub and the day job. Featured are open-source tools
            I built in public — the rest are production systems, some private.
          </p>
        </div>

        {/* Featured — glass card grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {featured.map((project, i) => (
            <article
              key={project.title}
              className="glass-card-hover p-6 md:p-8 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="font-mono text-xs text-[var(--color-primary-light)]">
                  {String(i + 1).padStart(2, '0')} / featured
                </div>
                <div className="font-mono text-xs text-[var(--color-text-dim)]">
                  {project.tech[0]}
                </div>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-[var(--color-primary-light)] transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 min-h-[3rem]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-primary-light)] hover:text-[var(--color-accent)] transition-colors"
                >
                  view code <ArrowUpRight size={12} />
                </a>
              )}
            </article>
          ))}
        </div>

        {/* Others — individual glass-card-hover rows */}
        <div className="space-y-2 max-w-4xl mx-auto">
          <div className="label text-[var(--color-text-dim)] mb-3 px-1">More work</div>
          {others.map((project, i) => (
            <div
              key={project.title}
              className="glass-card-hover p-4 group flex items-center gap-4"
            >
              <div className="font-mono text-xs text-[var(--color-text-dim)] w-6 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary-light)] transition-colors mb-0.5">
                  {project.title}
                </div>
                <div className="text-xs text-[var(--color-text-muted)] truncate hidden md:block">
                  {project.description}
                </div>
              </div>
              <div className="hidden lg:flex gap-1.5 shrink-0">
                {project.tech.slice(0, 2).map(t => (
                  <span key={t} className="tag text-[10px]">{t}</span>
                ))}
              </div>
              <div className="flex gap-1 shrink-0">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-dim)] hover:text-[var(--color-primary-light)] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label={`${project.title} code`}>
                    <Github size={14} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-dim)] hover:text-[var(--color-primary-light)] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label={`${project.title} live`}>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
