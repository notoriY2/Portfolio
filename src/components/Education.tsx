import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Diploma in Information & Communication Technology (Application Development)',
    institution: 'Sol Plaatje University',
    year: '2022 - 2025',
    description: 'NQF Level 6 ICT graduate with practical experience in web development, database management, and IT support. Completed multiple hands-on projects including e-commerce systems, student management platforms, and campus healthcare booking systems.'
  },
  {
    degree: 'National Senior Certificate (Bachelor Pass)',
    institution: 'Umso High School',
    year: '2016 - 2020',
    description: 'Completed secondary education with a Bachelor pass, preparing for further studies in Information and Communication Technology.'
  }
];

const coursework = [
  'Data Structures & Algorithms',
  'Web Development',
  'Database Management Systems',
  'Software Engineering',
  'Cloud Computing',
  'Mobile Application Development'
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#CE9635] to-[#C04D30] bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-[#CE9635]" size={32} />
              <h3 className="text-2xl font-semibold text-slate-900">Diploma</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#CE9635] pl-6 py-4 bg-white rounded-r-xl hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-[#CE9635] font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-500 mb-2">{edu.year}</p>
                  <p className="text-slate-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-[#C04D30]" size={32} />
              <h3 className="text-2xl font-semibold text-slate-900">Relevant Coursework</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {coursework.map((course, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#CE9635]/10 rounded-lg border-l-4 border-[#C04D30] hover:shadow-md transition-all duration-300"
                >
                  <p className="text-slate-800 font-medium">{course}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
