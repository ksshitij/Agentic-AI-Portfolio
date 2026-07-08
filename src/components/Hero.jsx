import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import ParticleNebula from './ParticleNebula';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <ParticleNebula count={3000} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-cyber-cyan font-mono tracking-widest uppercase mb-4 text-sm sm:text-base">
            Hello, World! I am
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6"
        >
          Kshitij <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-indigo via-purple-500 to-cyber-cyan text-glow">Patidar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-xl sm:text-2xl text-slate-300 max-w-3xl mb-10"
        >
          Generative AI · Agentic AI · LLM Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/resume.pdf"
            download="Kshitij_Patidar_Resume.pdf"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]"
          >
            <span className="mr-2">Download CV</span>
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-obsidian-900 transition-all duration-300 bg-cyber-cyan rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.7)]"
          >
            <span className="mr-2">View Work</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-cyber-cyan rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
