import { motion } from "framer-motion";
import { resumeData } from "../data/data";
import { ExternalLink, Github, Trophy } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4">
      {/* Achievement Strip */}
      <div
        className="
        mb-24 p-10 md:p-12 rounded-2xl
        bg-gradient-to-r from-purple-600/90 to-purple-500/80
        border border-purple-400/20
        flex flex-col md:flex-row items-center justify-between gap-8
        text-white
        shadow-[0_20px_60px_rgba(139,92,246,0.3)]
      "
      >
        <div className="flex items-center gap-5">
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md">
            <Trophy size={36} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Top Performance
            </h3>
            <p className="opacity-80 max-w-md text-sm">
              {resumeData.achievements[0]}
            </p>
          </div>
        </div>

        <div className="text-center md:text-right">
          <span className="text-5xl md:text-6xl font-black">200+</span>
          <p className="uppercase tracking-widest text-xs opacity-80">
            Problems Solved
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {resumeData.projects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="
              group
              p-8 rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-md

              flex flex-col h-full

              transition-all duration-300

              hover:scale-[1.02]
              hover:border-purple-500/30
              hover:bg-white/10
              hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)]
            "
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-5">
              <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                {proj.title}
              </h3>

              <div className="flex gap-3 text-gray-400">
                <Github
                  size={20}
                  className="cursor-pointer hover:text-purple-400 transition-colors"
                />
                <ExternalLink
                  size={20}
                  className="cursor-pointer hover:text-purple-400 transition-colors"
                />
              </div>
            </div>

            {/* Highlight Badge */}
            {proj.highlight && (
              <span
                className="
                mb-4 inline-block px-3 py-1.5
                bg-green-500/20 text-green-400
                text-xs font-semibold rounded-full
              "
              >
                {proj.highlight}
              </span>
            )}

            {/* Bullets */}
            <ul className="space-y-3 flex-grow mb-6">
              {proj.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-gray-300 text-sm flex gap-2 leading-relaxed"
                >
                  <span className="text-purple-500 mt-[2px]">•</span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tech.split(", ").map((t) => (
                <span
                  key={t}
                  className="
                    px-3 py-1.5 rounded-full
                    text-xs
                    bg-white/5 text-gray-400
                    border border-white/10

                    transition-all duration-300

                    hover:bg-purple-500/20
                    hover:text-white
                    hover:border-purple-500/30
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Glow Overlay */}
            <div
              className="
                absolute inset-0 rounded-2xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-br from-purple-500/10 via-transparent to-transparent
                pointer-events-none
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
