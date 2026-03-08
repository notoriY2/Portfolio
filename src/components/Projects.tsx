import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Import local images so the bundler includes them in the production build
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.png';
import img8 from '../../images/8.png';
import img9 from '../../images/9.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';

type Project = {
  title: string;
  description: string;
  tech: string[];
  images: string[]; // imported image URLs
  github: string;
  live: string;
  type: string;
};

const projects: Project[] = [
  {
    title: 'Notorious Store [Static Website]',
    description:
      'Notorious Store is a modern e-commerce web application inspired by Y2 streetwear culture, designed to showcase and sell trend-driven fashion items.',
    tech: ['TypeScript', 'CSS', 'Other'],
    images: [img9, img10],
    github: 'https://github.com/notoriY2/Notorious-Store',
    live: 'https://notorious-store.netlify.app/',
    type: 'Personal'
  },
  {
    title: 'Trackademy [Supabase backend]',
    description:
      'A comprehensive student academic performance and course management system designed for tertiary institutions. Track assessments, manage attendance, and automate exam eligibility with ease.',
    tech: ['TypeScript', 'PLpgSQL', 'Supabase', 'Other'],
    images: [img8, img7],
    github: 'https://github.com/notoriY2/Trackademy',
    live: 'https://trackademy-omega.vercel.app/',
    type: 'Academic'
  },
  {
    title: 'Buddy [mySQL backend]',
    description: 'Buddy is a social media and student management system for university students.',
    tech: ['PHP', 'JavaScript', 'CSS', 'HTML'],
    images: [img6, img5],
    github: 'https://github.com/notoriY2/Buddy',
    live: 'https://buddysocials.page.gd/',
    type: 'Academic'
  },
  {
    title: 'CampusCare [mySQL database]',
    description:
      'Campus Care is your comprehensive solution for managing healthcare services on campus. Schedule appointments, track medical history, access health resources, and stay connected with healthcare providers — all in one place for students and staff.',
    tech: ['PHP', 'CSS', 'Other'],
    images: [img4, img3],
    github: 'https://github.com/notoriY2/Campus-Care',
    live: 'https://campus-care.page.gd/',
    type: 'Academic'
  },
  {
    title: 'SPU United [Static Website]',
    description:
      'SPU United is a website I did for the football club in my university — here you can see my work on HTML5 and CSS.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    images: [img2, img1],
    github: 'https://github.com/notoriY2/SPU-United',
    live: 'https://spu-united.netlify.app/',
    type: 'Academic'
  }
];

export default function Projects(): JSX.Element {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Preload second images to avoid any flicker on first hover
  useEffect(() => {
    projects.forEach((p) => {
      if (p.images[1]) {
        const preload = new Image();
        preload.src = p.images[1];
      }
    });
  }, []);

  const getProjectTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      Professional: 'bg-[#CE9635]/20 text-[#C04D30] border-[#CE9635]/40',
      Academic: 'bg-[#CE9635]/20 text-[#C04D30] border-[#CE9635]/40',
      Personal: 'bg-[#CE9635]/20 text-[#C04D30] border-[#CE9635]/40',
      Course: 'bg-[#CE9635]/20 text-[#C04D30] border-[#CE9635]/40'
    };
    return colors[type] || colors.Personal;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#CE9635] to-[#C04D30] bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-slate-600 text-center mb-4 max-w-2xl mx-auto">
          A collection of professional, academic, and personal projects showcasing my skills in modern web development
        </p>
        <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto text-sm">
          View source code and live demos to see how each project was built
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-150 border border-[#CE9635]/20 hover:border-[#CE9635]/50"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-56 overflow-hidden bg-[#CE9635]/20">
                {/* Instant swap: no transition classes on the image */}
                <img
                  src={hoveredIndex === index ? project.images[1] : project.images[0]}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* Overlay opacity change is instant (no transition) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-none"></div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  {/* Title color change instantly (no transition) */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#CE9635] transition-none flex-1">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full border flex-shrink-0 ${getProjectTypeBadge(
                      project.type
                    )}`}
                  >
                    {project.type}
                  </span>
                </div>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#CE9635]/10 text-xs rounded-full text-slate-700 border border-[#CE9635]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-[#CE9635]/20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#CE9635] transition-colors duration-150 font-medium"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#CE9635] transition-colors duration-150 font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
