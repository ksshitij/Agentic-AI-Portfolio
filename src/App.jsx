import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-obsidian-900 min-h-screen text-slate-200 font-sans selection:bg-neon-indigo/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Kshitij Patidar. Designed & Built with Agentic AI.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
