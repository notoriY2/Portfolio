import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import bgImage from '../../images/11.png';

export default function Hero(): JSX.Element {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = aboutSection.offsetHeight;

      let progress = 0;
      if (rect.top < windowHeight) {
        progress = Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight));
      }

      setScrollProgress(progress);
    };

    // run once to set initial state in case user opens mid-page
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #CE9635 0%, #CE9635 ${100 - scrollProgress * 100}%, #FFFFFF ${100 - scrollProgress * 100 + 0.5}%, #FFFFFF 100%)`
      }}
    >
      {/* Background image layer (local asset) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: 'center',
          opacity: 1 - scrollProgress,
          transition: 'opacity 300ms linear'
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 animate-reveal-bg"
        style={{
          opacity: 1 - scrollProgress,
          background: 'linear-gradient(135deg, #CE9635 0%, #C04D30 100%)',
          transition: 'opacity 300ms linear'
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#CE9635] to-[#C04D30] flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            MP
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-white drop-shadow-lg">
          Software Developer
        </h1>

        <p className="text-xl md:text-2xl text-slate-100 mb-8 animate-slide-up-delay drop-shadow-md">
          Recent graduate passionate about building modern web applications
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in-delay">
          <a
            href="https://github.com/notoriY2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#CE9635] transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <Github size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/mosa-potsane-b029b7214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#CE9635] transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="mailto:mosapotsane700@gmail.com"
            className="text-white hover:text-[#CE9635] transition-colors duration-300 hover:scale-110 transform"
            aria-label="Email Contact"
            title="Email"
          >
            <Mail size={28} />
          </a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#CE9635] to-[#C04D30] text-white rounded-lg font-semibold hover:from-[#B88527] hover:to-[#A93F25] transition-all duration-300 shadow-lg hover:shadow-xl mb-12 animate-fade-in-delay"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </a>
      </div>

      {/* ArrowDown — clickable, accessible, and fades as you scroll */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-8 z-20"
        style={{
          opacity: Math.max(0, 1 - scrollProgress * 1.2),
          pointerEvents: scrollProgress > 0.95 ? 'none' : 'auto',
          transition: 'opacity 200ms linear'
        }}
      >
        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to about section"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-black/25 backdrop-blur-sm text-white hover:bg-black/30 transition transform hover:scale-110 shadow-lg focus:outline-none"
          title="Scroll to About"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}