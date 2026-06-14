import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import bgImage from '../../images/11.png';
import resume from '../../images/Potsane Resume.pdf';

export default function Hero(): JSX.Element {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(1, window.scrollY / docHeight) : 0;
        setScrollProgress(progress);
        return;
      }

      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = aboutSection.offsetHeight;

      let progress = 0;
      if (rect.top < windowHeight) {
        progress = Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight));
      }
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Theme colors: primary (#CE9635) and accent (#C04D30)
  const primary = '#CE9635';
  const accent = '#C04D30';

  const bgOpacity = Math.max(0, 0.35 - scrollProgress * 0.35);
  const accentOpacity = Math.max(0.06, 0.18 - scrollProgress * 0.18);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50/50 pt-24 md:pt-32 pb-12">
      {/* Dynamic Background Reveal Layer */}
      <div 
        className="absolute inset-0 z-0 animate-reveal-bg pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 20%, rgba(206, 150, 53, 0.03) 0%, transparent 70%)`
        }}
      />

      {/* Decorative soft accent blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 w-96 h-96 rounded-full blur-3xl opacity-70 transition-transform duration-500"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${primary} ${Math.round(accentOpacity * 100)}%, transparent 40%)`,
          transform: `translate(${scrollProgress * -20}px, ${scrollProgress * -10}px)`
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-32 w-80 h-80 rounded-full blur-3xl opacity-70 transition-transform duration-500"
        style={{
          background: `radial-gradient(circle at 80% 80%, ${accent} ${Math.round(accentOpacity * 60)}%, transparent 45%)`,
          transform: `translate(${scrollProgress * 20}px, ${scrollProgress * 15}px)`
        }}
      />

      {/* Muted background image layout */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: `url('${bgImage}')`,
          opacity: bgOpacity,
          filter: 'grayscale(75%) contrast(0.95) blur(2px) saturate(0.5)',
          transform: `scale(${1 + scrollProgress * 0.03})`,
          transition: 'opacity 300ms linear, transform 400ms linear, filter 300ms linear'
        }}
      />

      {/* Main Glass Panel */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full animate-fade-in">
        <div
          className="mx-auto rounded-3xl p-8 md:p-16 shadow-2xl border transition-all duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.82)',
            backdropFilter: 'saturate(140%) blur(12px)',
            borderColor: 'rgba(206, 150, 53, 0.08)'
          }}
        >
          <div className="flex flex-col items-center text-center">
            
            {/* Status Badge */}
            <div className="mb-6 animate-fade-in flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/[0.03] border border-slate-900/[0.05] text-[11px] font-bold tracking-wider text-slate-600 uppercase">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: primary }} />
              Available for Projects
            </div>

            {/* Profile Initials Badge */}
            <div
              className="w-20 h-20 md:w-24 md:h-24 mb-8 rounded-2xl flex items-center justify-center font-extrabold text-xl md:text-2xl transition-all duration-500 hover:scale-105 hover:rotate-3 shadow-md"
              style={{
                background: `linear-gradient(135deg, ${primary} 0%, ${accent} 100%)`,
                color: '#ffffff',
                boxShadow: '0 12px 24px rgba(206, 150, 53, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
              }}
            >
              MP
            </div>

            {/* Dynamic Typography Header */}
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.15] mb-6 tracking-tight animate-slide-up">
              Crafting Scalable <br className="hidden md:inline" />
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r"
                style={{ backgroundImage: `linear-gradient(to right, ${primary}, ${accent})` }}
              >
                Software Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-slate-600 text-base md:text-lg mb-10 font-normal leading-relaxed animate-slide-up-delay">
              Full-stack developer specializing in clean architectures, high-performance web applications, and intuitive user experiences.
            </p>

            {/* Action Buttons Container */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto animate-fade-in-delay">
              
              {/* Secondary CTA: Download Resume */}
              <a
                href={resume}
                download="Potsane-Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm w-full sm:w-auto transition-all duration-200"
                style={{
                  background: 'transparent',
                  color: primary,
                  border: `2px solid ${primary}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = primary;
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = primary;
                }}
              >
                Download Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>

              {/* Primary CTA: View Projects */}
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold w-full sm:w-auto shadow-sm transition-all duration-200 hover:shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${primary} 0%, #bd852a 100%)`,
                  color: '#fff',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
              >
                Explore My Work
              </button>
            </div>

            {/* Social Icons Link Array */}
            <div className="flex items-center gap-4 mb-4 animate-fade-in-delay">
              {[
                { icon: <Github size={20} />, href: "https://github.com/notoriY2", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mosa-potsane-b029b7214/", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:mosapotsane700@gmail.com", label: "Email" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="p-3 rounded-xl bg-slate-100/50 hover:bg-white border border-slate-200/40 hover:border-slate-200 shadow-sm transition-all duration-200"
                  style={{ color: 'rgba(15, 23, 42, 0.7)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = primary;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(15, 23, 42, 0.7)';
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Bottom Scroll indicator indicator */}
            <div
              className="mt-4 animate-bounce-slow"
              style={{
                opacity: Math.max(0, 1 - scrollProgress * 1.5),
                transition: 'opacity 200ms ease-out'
              }}
            >
              <button
                onClick={() => scrollToSection('about')}
                aria-label="Scroll to about section"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 hover:border-slate-200 transition-colors duration-200"
                title="Scroll to About"
              >
                <ArrowDown size={16} className="text-slate-500" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
