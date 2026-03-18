import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Splash from "./components/Splash";
import AnimatedBackground from "./components/AnimatedBackground";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { resumeData } from "./data/data";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-10 bg-[#020617] text-white">
      <AnimatePresence>{loading && <Splash />}</AnimatePresence>

      {!loading && (
        <>
          <AnimatedBackground />
          <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-black/5">
            <span className="font-black text-xl tracking-tighter">MK.</span>
            <div className="flex gap-8 text-sm font-mono text-gray-400 uppercase tracking-widest">
              <a
                href="#experience"
                className="hover:text-purple-400 transition-colors"
              >
                Exp
              </a>
              <a
                href="#projects"
                className="hover:text-purple-400 transition-colors"
              >
                Work
              </a>
              <a
                href="mailto:mandeep.fullstack.dev@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>

          <main className="container mx-auto px-6 relative z-10">
            <Hero />

            {/* Skills Bento */}
            <Skills />

            <Experience />
            <Projects id="projects" />
            <Education />

            <footer
              className="
    mt-24 pt-10 pb-16
    border-t border-white/5
    text-gray-400
  "
            >
              <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left - Name */}
                <p className="text-sm tracking-wide">
                  © {new Date().getFullYear()}{" "}
                  <span className="text-white font-medium">Mandeep Kaur</span>
                </p>

                {/* Center - Tagline */}
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 text-center">
                  Frontend Developer
                </p>

                {/* Right - Links */}
                <div className="flex gap-5 text-sm">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    className="hover:text-purple-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    className="hover:text-purple-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:your@email.com"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </footer>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
