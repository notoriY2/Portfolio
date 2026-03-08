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
        // when there's no about section on-page, map scroll to 0..1 using viewport only
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

    // run once to set initial state
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

  // use scrollProgress to subtly fade the background image and accents
  const bgOpacity = Math.max(0, 0.35 - scrollProgress * 0.35); // from 0.35 -> 0
  const accentOpacity = Math.max(0.06, 0.18 - scrollProgress * 0.18); // subtle accent layer

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* decorative soft accent blobs (use sparingly to respect 30% / 10% distribution) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${primary} ${Math.round(accentOpacity * 100)}%, transparent 30%)`
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-32 w-72 h-72 rounded-full blur-2xl"
        style={{
          background: `radial-gradient(circle at 80% 80%, ${accent} ${Math.round(accentOpacity * 60)}%, transparent 35%)`
        }}
      />

      {/* subtle decorative background image (muted and blurred so it doesn't dominate) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('${bgImage}')`,
          opacity: bgOpacity,
          filter: 'grayscale(80%) contrast(0.9) blur(3px) saturate(0.6)',
          transform: `scale(${1 + scrollProgress * 0.02})`,
          transition: 'opacity 300ms linear, transform 400ms linear, filter 300ms linear'
        }}
      />

      {/* main glass panel — keeps the majority white visual and improves readability */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        <div
          className="mx-auto rounded-2xl p-8 md:p-12 shadow-lg border"
          style={{
            background: 'rgba(255,255,255,0.88)',
            backdropFilter: 'saturate(120%) blur(6px)',
            borderColor: 'rgba(14, 20, 26, 0.04)'
          }}
        >
          <div className="flex flex-col items-center text-center">
            {/* compact logo badge — smaller & less saturated */}
            <div
              className="w-20 h-20 md:w-24 md:h-24 mb-6 rounded-full flex items-center justify-center font-bold text-lg md:text-2xl"
              style={{
                background: `linear-gradient(135deg, ${primary}22 0%, ${accent}18 100%)`,
                color: '#fff',
                boxShadow: '0 6px 18px rgba(12,18,26,0.06)',
                border: '1px solid rgba(0,0,0,0.04)'
              }}
            >
              MP
            </div>

            {/* Headline and subtitle use dark text — white is used for background majority */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              Software Developer
            </h1>
            <p className="max-w-2xl text-slate-700 text-base md:text-lg mb-6">
              Software developer focused on building modern, scalable web applications with clean interfaces, strong performance, and intuitive user experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <a
  href={resume}
  download="Potsane-Resume.pdf"
  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg font-semibold text-sm"
  style={{
    background: 'transparent',
    color: primary,
    border: `2px solid ${primary}`,
    transition: 'all 160ms ease'
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.background = primary)
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.background = 'transparent')
  }
>
  Download Resume
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: '#fff' }}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
</a>

              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: primary,
                  color: '#fff',
                  border: `1px solid ${primary}`,
                  transition: 'transform 150ms ease, box-shadow 150ms ease'
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'translateY(-2px)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'translateY(0px)')
                }
              >
                View Projects
              </button>
            </div>

            {/* social icons — muted by default, highlight on hover */}
            <div className="flex items-center gap-5 mb-4">
              <a
                href="https://github.com/notoriY2"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="p-2 rounded-md"
                style={{ color: 'rgba(17,24,39,0.75)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = primary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(17,24,39,0.75)')
                }
              >
                <Github size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/mosa-potsane-b029b7214/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="p-2 rounded-md"
                style={{ color: 'rgba(17,24,39,0.75)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = primary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(17,24,39,0.75)')
                }
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:mosapotsane700@gmail.com"
                aria-label="Email"
                title="Email"
                className="p-2 rounded-md"
                style={{ color: 'rgba(17,24,39,0.75)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = primary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(17,24,39,0.75)')
                }
              >
                <Mail size={22} />
              </a>
            </div>

            {/* down arrow — subtle, fades as you scroll */}
            <div
              className="mt-2"
              style={{
                opacity: Math.max(0, 1 - scrollProgress * 1.2),
                transition: 'opacity 200ms linear'
              }}
            >
              <button
                onClick={() => scrollToSection('about')}
                aria-label="Scroll to about section"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm"
                style={{ border: '1px solid rgba(12,18,26,0.06)' }}
                title="Scroll to About"
              >
                <ArrowDown size={18} color="rgba(17,24,39,0.75)" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
