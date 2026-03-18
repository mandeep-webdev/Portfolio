import { motion } from "framer-motion";
import { resumeData } from "../data/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-black tracking-tight italic bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="h-px flex-grow bg-gradient-to-r from-purple-500/50 to-transparent" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="
              group relative
              p-8 rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-md

              transition-all duration-300

              hover:scale-[1.02]
              hover:border-purple-500/30
              hover:bg-white/10
              hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)]
            "
          >
            {/* Icon */}
            <div className="mb-6 w-fit p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <GraduationCap size={24} />
            </div>

            {/* Degree */}
            <p className="text-purple-400 font-mono text-xs uppercase mb-2 tracking-wider">
              {edu.degree}
            </p>

            {/* School */}
            <h3 className="text-xl font-semibold text-white mb-1">
              {edu.school}
            </h3>

            {/* Location */}
            <p className="text-gray-400 text-sm">{edu.loc}</p>

            {/* Hover Glow */}
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
