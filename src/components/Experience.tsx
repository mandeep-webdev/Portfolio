import { motion } from "framer-motion";
import { resumeData } from "../data/data";
import { ShieldCheck } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-black tracking-tight italic bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="h-px flex-grow bg-gradient-to-r from-purple-500/50 to-transparent" />
      </div>

      <div className="space-y-12">
        {resumeData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
              group relative overflow-hidden
              p-8 rounded-2xl

              border border-white/10 
              bg-white/5 backdrop-blur-md

              transition-all duration-300 ease-out

              hover:scale-[1.02]
              hover:-translate-y-1
              hover:border-purple-500/30
              hover:bg-white/10
              hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)]
            "
          >
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-purple-400 font-medium">{exp.company}</p>
              </div>

              <span
                className="
                  mt-4 md:mt-0
                  px-4 py-1.5 rounded-full
                  border border-purple-500/20 
                  bg-purple-500/10 
                  text-purple-300 
                  text-xs md:text-sm 
                  font-mono
                "
              >
                {exp.period}
              </span>
            </div>

            {/* Bullets */}
            <div className="space-y-5">
              {exp.bullets.map((bullet, i) => (
                <div key={i} className="flex gap-3 items-start group/item">
                  <ShieldCheck className="w-5 h-5 text-purple-500 mt-1 shrink-0 group-hover/item:text-purple-400 transition-colors" />
                  <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
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

            {/* Subtle Glow Overlay */}
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
