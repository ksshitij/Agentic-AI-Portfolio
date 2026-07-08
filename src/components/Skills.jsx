import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'C++']
  },
  {
    title: 'Generative AI',
    skills: ['LLMs', 'RAG', 'Agentic AI', 'Multi-Agent Systems', 'Prompt Engineering', 'Vector Database']
  },
  {
    title: 'Frameworks',
    skills: ['LangChain', 'LangGraph', 'HuggingFace Transformers', 'Streamlit', 'FastAPI']
  },
  {
    title: 'Tools',
    skills: ['Git/GitHub', 'Google Colab', 'VS Code', 'Streamlit Cloud', 'HuggingFace Spaces', 'Claude Code', 'N8N']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-neon-indigo">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-neon-indigo rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 border-t-4 border-t-transparent hover:border-t-cyber-cyan transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:text-white hover:border-cyber-cyan/50 transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
