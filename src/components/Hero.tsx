import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { profile, metrics } from '../data/portfolio';

const techBadges = ['React', 'TypeScript', 'Rust', 'Go', 'Tauri', 'React Native'];

export default function Hero() {
  const now = new Date();
  const localTime = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' });

  return (
    <section id="index" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Aurora background */}
      <div className="aurora-bg" />
      <div className="blob blob-blue animate-float" style={{ top: '15%', left: '10%', width: '256px', height: '256px' }} />
      <div className="blob blob-orange animate-float-delayed" style={{ bottom: '15%', right: '10%', width: '208px', height: '208px' }} />

      <div className="page relative z-10 w-full">
        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8 opacity-0 animate-fade-in delay-0">
          {techBadges.map((tech) => (
            <span key={tech} className="glass-badge">{tech}</span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="display-xl text-[clamp(2.5rem,9vw,5.5rem)] mb-6 opacity-0 animate-fade-up delay-1">
          Building systems
          <br />
          that <span className="gradient-text">ship.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-8 opacity-0 animate-fade-up delay-2">
          I'm <span className="text-[var(--color-text)] font-medium">{profile.name.split(' ')[0]}</span> — a full-stack engineer
          based in Mojokerto. I build enterprise platforms, mobile apps, desktop tools,
          and AI agents. Five years in, still shipping.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-12 opacity-0 animate-fade-up delay-3">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Get in touch <ArrowUpRight size={16} />
          </a>
          <a href="#work" className="btn">
            Selected work <ArrowDown size={16} />
          </a>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-6 mb-12 opacity-0 animate-fade-in delay-4">
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-fern)] animate-pulse" />
            <span className="font-mono">{localTime} WIB</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <MapPin size={14} className="text-[var(--color-primary-light)]" />
            <span className="font-mono">{profile.location.split(',')[0]}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--color-fern)]">
            <span className="font-mono">● Open to work</span>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fade-up delay-4">
          {metrics.map((m, i) => (
            <div key={i} className="glass-card-hover p-5 text-center">
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                {m.value}
              </div>
              <div className="font-mono text-xs text-[var(--color-text-muted)]">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex flex-wrap items-center gap-4 mt-12 opacity-0 animate-fade-in delay-5">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="link font-mono text-sm">github</a>
          <span className="text-[var(--color-text-dim)]">/</span>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="link font-mono text-sm">linkedin</a>
          <span className="text-[var(--color-text-dim)]">/</span>
          <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="link font-mono text-sm">twitter</a>
        </div>
      </div>
    </section>
  );
}
