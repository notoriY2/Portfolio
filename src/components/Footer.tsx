import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#CE9635] to-[#C04D30] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Mosa Potsane</h3>
            <p className="text-white/80">Software Developer & Creative Thinker</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/notoriY2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-all duration-300 hover:scale-110 transform"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mosa-potsane-b029b7214/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-all duration-300 hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mosapotsane700@gmail.com"
              className="hover:text-white/70 transition-all duration-300 hover:scale-110 transform"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red" fill="currentColor" /> by Mosa Potsane
            <span className="mx-2">•</span>
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
