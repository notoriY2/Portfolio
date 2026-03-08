import { Code2, Database, Palette, Server, Smartphone, Cloud } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PHP', 'REST APIs', 'GraphQL', 'Express']
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma']
  },
  {
    icon: Cloud,
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux']
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    skills: ['React Native', 'Progressive Web Apps', 'Responsive Design']
  },
  {
    icon: Palette,
    title: 'Design',
    skills: ['UI/UX', 'Figma', 'Accessibility', 'Animation', 'Prototyping']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#CE9635] to-[#C04D30] bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#CE9635]/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-[#CE9635] to-[#C04D30] rounded-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-[#CE9635]/10 text-slate-700 rounded-full text-sm border border-[#CE9635]/20 hover:border-[#CE9635]/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}