import { User, MapPin, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#CE9635] to-[#C04D30] bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">About Me</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I build practical web solutions that solve real problems — from e-commerce to student management systems. As an NQF6 ICT Applications Development graduate, I enjoy debugging, learning new tools, and contributing to open-source projects. Available for internships and junior roles.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-[#CE9635]/20 hover:border-[#CE9635]/50">
              <User className="text-[#CE9635] flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Name</h3>
                <p className="text-slate-600">Mosa Potsane</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-[#CE9635]/20 hover:border-[#CE9635]/50">
              <MapPin className="text-[#CE9635] flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
                <p className="text-slate-600">Colesberg, NC</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-[#CE9635]/20 hover:border-[#CE9635]/50">
              <GraduationCap className="text-[#CE9635] flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Status</h3>
                <p className="text-slate-600">Recent Graduate - Open to Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
