import { Code, Database, Smartphone, Globe, Palette, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive and interactive web applications using modern frameworks like React, Next.js, and Vue.'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Creating robust server-side solutions with Node.js, Express, and database integration for scalable applications.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Crafting mobile-first, responsive interfaces that work seamlessly across all devices and screen sizes.'
  },
  {
    icon: Globe,
    title: 'API Integration',
    description: 'Integrating third-party APIs and building RESTful services to connect and enhance application functionality.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces with attention to accessibility, usability, and modern design principles.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing application speed, reducing load times, and implementing best practices for better user experience.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#CE9635] to-[#C04D30] bg-clip-text text-transparent">
          What I Offer
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Skills and services I can bring to your next project
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#CE9635]/20 hover:border-[#CE9635]/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#CE9635] to-[#C04D30] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
