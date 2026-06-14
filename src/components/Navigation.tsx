import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger a bit earlier to give immediate visual feedback on scroll
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ];

  // Theme colors matching your core system color palette
  const primary = '#CE9635';
  const accent = '#C04D30';

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300 rounded-2xl border ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-slate-200/50 shadow-md py-3.5'
          : 'bg-white/40 backdrop-blur-sm border-slate-200/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Interactive Dynamic Branding Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-black tracking-tight text-slate-900 relative group transition-colors"
          >
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-800 group-hover:from-primary group-hover:to-accent transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(to right, #0f172a, #1e293b)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = `linear-gradient(to right, ${primary}, ${accent})`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = `linear-gradient(to right, #0f172a, #1e293b)`;
              }}
            >
              Mosa Potsane
            </span>
          </button>

          {/* Premium Pill-shaped Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-slate-950 font-semibold text-sm px-4 py-2 rounded-xl transition-all duration-200 relative group"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Micro-interaction background slide */}
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 z-0"
                  style={{ backgroundColor: `${primary}0d` }} // Hex + 0d for 5% opacity
                />
                {/* Active/Hover dot indicator */}
                <span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
                  style={{ backgroundColor: primary }}
                />
              </button>
            ))}
          </div>

          {/* Minimalist Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-xl bg-slate-950/[0.03] hover:bg-slate-950/[0.06] text-slate-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Floating Dropdown Mobile Architecture */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-2 bg-white/95 backdrop-blur-lg rounded-xl border border-slate-200/60 shadow-xl animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-slate-700 font-semibold text-sm hover:text-slate-950 rounded-lg transition-colors relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <span 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0"
                  style={{ backgroundColor: `${primary}12` }} // Hex + 12 for 7% opacity
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
