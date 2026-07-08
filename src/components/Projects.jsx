import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Github = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const projects = [
  {
    title: 'AutoResearch Agent',
    subtitle: 'Autonomous Multi-Agent Research System',
    description: 'Architected a multi-agent pipeline using LangGraph with specialized agents for planning, web search, synthesis, and citation. Implemented a ReAct-style reasoning loop giving agents the ability to self-correct. Deployed on Streamlit with real-time agent thought streaming mimicking production agentic AI UX.',
    tags: ['LangGraph', 'Gemini API', 'Tavily', 'Streamlit'],
    github: 'https://github.com/ksshitij'
  },
  {
    title: 'AskDoc',
    subtitle: 'Conversational RAG Agent over Documents',
    description: 'Built an end-to-end RAG pipeline with multi-format document ingestion, semantic chunking, and hybrid retrieval over ChromaDB with source citation in every response. Integrated re-ranking and context compression to reduce hallucination.',
    tags: ['Python', 'LangChain', 'Gemini API', 'ChromaDB', 'Streamlit'],
    github: 'https://github.com/ksshitij'
  },
  {
    title: 'Gemini Curriculum Generator',
    subtitle: 'Learning Path Builder',
    description: 'Integrated NLP techniques to generate structured learning paths, enhancing personalized content delivery. Applied prompt engineering to structure outputs and reference research papers, EdTech platforms, and educational websites.',
    tags: ['Python', 'LangChain', 'Gemini API', 'Streamlit'],
    github: 'https://github.com/ksshitij'
  },
  {
    title: 'SoundSoothe',
    subtitle: 'Real-Time Emotion Music Recommendation',
    description: 'Built a real-time mood-based music app using CNN and OpenCV for emotion detection, achieving 85% accuracy across 4 emotion classes. Mapped detected emotions to personalized music via Last.fm and YouTube API’s.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'YouTube API'],
    github: 'https://github.com/ksshitij'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-emerald to-cyber-cyan">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-emerald to-cyber-cyan rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group relative overflow-hidden flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-neon-emerald/20 group-hover:border-neon-emerald/50 transition-colors">
                    <Code className="w-6 h-6 text-neon-emerald" />
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-cyber-cyan transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-emerald transition-colors">
                  {project.title}
                </h3>
                <h4 className="text-sm font-medium text-cyber-cyan mb-4">
                  {project.subtitle}
                </h4>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-emerald/5 to-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
