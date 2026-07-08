import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'leadership',
      role: 'AI Team Lead',
      organization: 'AI Club, Vellore Institute of Technology, Bhopal',
      period: '2022 – 2023',
      icon: <Briefcase className="w-6 h-6 text-neon-indigo" />,
      highlights: [
        'Spearheaded AI Crypt (100+ participants, ₹30K sponsorships).',
        'Mentored 15-member team in ML prototyping and deployment.',
        'Grew club participation by 40%.',
      ]
    },
    {
      type: 'education',
      role: 'B.Tech — Computer Science & Engineering',
      organization: 'Vellore Institute of Technology, Bhopal',
      period: 'Sept 2021 – Sept 2025',
      icon: <GraduationCap className="w-6 h-6 text-cyber-cyan" />,
      highlights: [
        'CGPA: 8.93/10',
        'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management System',
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-indigo to-purple-500">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-indigo to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                {/* Timeline line for mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-cyber-cyan md:hidden shadow-[0_0_10px_#00f0ff]"></div>

                {/* Left side: Period and Organization (Desktop) */}
                <div className="hidden md:block col-span-2 text-right pt-1 pr-8 border-r border-white/10 relative">
                  {/* Timeline dot desktop */}
                  <div className="absolute right-[-6px] top-4 w-3 h-3 rounded-full bg-cyber-cyan shadow-[0_0_10px_#00f0ff]"></div>
                  
                  <div className="flex items-center justify-end text-cyber-cyan mb-2">
                    <span className="font-mono text-sm">{exp.period}</span>
                    <Calendar size={16} className="ml-2" />
                  </div>
                  <h4 className="text-lg font-medium text-slate-300">{exp.organization}</h4>
                </div>

                {/* Right side: Role and details */}
                <div className="md:col-span-3 md:pl-8">
                  <div className="glass-card p-6 border-l-4 border-l-neon-indigo">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        {/* Mobile period & organization */}
                        <div className="md:hidden mt-1">
                          <p className="text-sm text-cyber-cyan font-mono mb-1">{exp.period}</p>
                          <p className="text-sm text-slate-400">{exp.organization}</p>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-slate-300">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyber-cyan mr-2 mt-1">▹</span>
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
