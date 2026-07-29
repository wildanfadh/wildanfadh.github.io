import { useState, useEffect, useRef } from 'react';
import { skills } from '../data/portfolio';

function SkillRow({ name, level, years, delay }: { name: string; level: number; years: string; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div
      ref={ref}
      className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[var(--color-surface)] transition-colors group"
    >
      <div className="font-mono text-xs text-[var(--color-text-dim)] w-8 shrink-0">
        {String(level).padStart(3, '0')}
      </div>
      <div className="font-mono text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary-light)] transition-colors w-28 md:w-36 shrink-0">
        {name}
      </div>
      <div className="flex-1 relative h-1.5 rounded-full bg-[var(--color-surface)] overflow-hidden">
        <div
          className="skill-fill absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
          }}
        />
      </div>
      <div className="font-mono text-xs text-[var(--color-text-dim)] w-8 text-right shrink-0">
        {years}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="stack" className="section">
      <div className="page">
        <div className="text-center mb-12">
          <div className="section-label mb-3">Stack</div>
          <h2 className="display-lg text-3xl md:text-5xl">
            The <span className="gradient-text">toolbox.</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mt-4">
            Built over five years across web, mobile, desktop, and AI agent projects.
            The numbers reflect how often I actually reach for each one — not a wishlist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {skills.map((category, catIdx) => (
            <div key={category.category} className="glass-card p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--color-border)]">
                <span className="font-mono text-xs text-[var(--color-primary-light)]">
                  {String(catIdx + 1).padStart(2, '0')}.
                </span>
                <span className="label text-[var(--color-text)]">{category.category}</span>
              </div>
              <div className="space-y-0.5">
                {category.items.map((skill, skillIdx) => {
                  const years = (() => {
                    if (skill.level >= 90) return '4+';
                    if (skill.level >= 80) return '3+';
                    if (skill.level >= 70) return '2+';
                    return '<1';
                  })();
                  return (
                    <SkillRow
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      years={years}
                      delay={catIdx * 80 + skillIdx * 40}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
