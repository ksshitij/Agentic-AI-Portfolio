import { motion } from 'framer-motion';
import { Terminal, Code2, BrainCircuit } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-neon-indigo/20 rounded-full blur-[100px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-neon-emerald">Me</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-neon-indigo rounded-full mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-cyber-cyan border border-white/10">
                    <BrainCircuit size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Agentic AI</h4>
                    <p className="text-sm text-slate-400">Building autonomous systems</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-neon-indigo border border-white/10">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LLM Engineer</h4>
                    <p className="text-sm text-slate-400">RAG & Prompt Engineering</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-neon-emerald border border-white/10">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Developer</h4>
                    <p className="text-sm text-slate-400">Python, C++, React</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Passionate about building autonomous AI agents that <span className="text-cyber-cyan">reason, plan, and act.</span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                I am a Computer Science graduate (2025) from Vellore Institute of Technology, Bhopal, specializing in Generative AI and Agentic AI systems. With a strong academic background (CGPA 8.93), I have developed a deep expertise in designing RAG pipelines, multi-agent orchestration with LangGraph, and deploying end-to-end LLM-powered applications.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My journey involves not just writing code, but architecting intelligence. From autonomous research systems to real-time mood-based applications, I strive to push the boundaries of what AI can achieve in real-world scenarios.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
