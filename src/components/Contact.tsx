import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Contact() {
  return (
    <footer id="contact" className="section relative overflow-hidden">
      <div className="aurora-bg" style={{ opacity: 0.5 }} />
      <div className="blob blob-blue animate-float" style={{ bottom: '10%', left: '5%', width: '256px', height: '256px' }} />
      <div className="blob blob-orange animate-float-delayed" style={{ top: '10%', right: '5%', width: '208px', height: '208px' }} />

      <div className="page relative z-10 text-center">
        <div className="section-label mb-3">Contact</div>

        <h2 className="display-xl text-[clamp(2.5rem,8vw,6rem)] mb-8">
          Let's <span className="gradient-text">connect.</span>
        </h2>

        <p className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto mb-12">
          Open to work, collaborations, and interesting problems. Reach out — I respond fast.
        </p>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          <a href={`mailto:${profile.email}`} className="glass-card-hover p-6 group">
            <div className="label text-[var(--color-text-dim)] mb-3 group-hover:text-[var(--color-primary-light)] transition-colors">Email</div>
            <div className="font-mono text-sm text-[var(--color-text)] break-all group-hover:text-[var(--color-primary-light)] transition-colors flex items-center justify-center gap-2">
              {profile.email}
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="glass-card-hover p-6 group">
            <div className="label text-[var(--color-text-dim)] mb-3 group-hover:text-[var(--color-primary-light)] transition-colors">Phone</div>
            <div className="font-mono text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary-light)] transition-colors">
              {profile.phone}
            </div>
          </a>
          <div className="glass-card p-6">
            <div className="label text-[var(--color-text-dim)] mb-3">Location</div>
            <div className="font-mono text-sm text-[var(--color-text)]">
              {profile.location}
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="link font-mono text-sm">github.com/wildanfadh</a>
          <span className="text-[var(--color-text-dim)]">/</span>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="link font-mono text-sm">linkedin</a>
          <span className="text-[var(--color-text-dim)]">/</span>
          <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="link font-mono text-sm">twitter</a>
        </div>

        {/* Footer meta */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-8 border-t border-[var(--color-border)]">
          <div className="font-mono text-xs text-[var(--color-text-dim)]">
            © {new Date().getFullYear()} {profile.name.toLowerCase().replace(/ /g, '_')}
          </div>
          <span className="text-[var(--color-text-dim)]">·</span>
          <div className="font-mono text-xs text-[var(--color-text-dim)]">
            built with react, typescript, tailwind
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur-md hover:border-[var(--color-primary-light)] hover:text-[var(--color-primary-light)] text-[var(--color-text-muted)] flex items-center justify-center transition-colors z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
