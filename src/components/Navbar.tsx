import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#index', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#work', label: 'Work' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('wf-theme');
    const isDark = stored ? stored === 'dark' : true;
    setDark(isDark);
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.body.classList.toggle('dark', next);
    document.body.classList.toggle('light', !next);
    localStorage.setItem('wf-theme', next ? 'dark' : 'light');
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="page flex items-center justify-between h-16">
          <a href="#index" className="flex items-center gap-2 group">
            <span className="font-display text-lg font-bold gradient-text">
              wf/
            </span>
            <span className="font-mono text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors hidden sm:inline">
              portfolio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors rounded-lg hover:bg-[var(--color-surface)]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary-light)] hover:text-[var(--color-primary-light)] text-[var(--color-text-muted)] transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`drawer-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <nav className={`drawer ${menuOpen ? 'open' : ''} md:hidden`}>
        <div className="px-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-lg font-medium text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary-light)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
