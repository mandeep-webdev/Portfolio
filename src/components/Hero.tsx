import { motion } from "framer-motion";
import { resumeData } from "../data/data";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Name */}
        <h1
          className="
            text-5xl sm:text-6xl md:text-8xl lg:text-9xl
            font-black tracking-tight
            mb-6
            bg-gradient-to-b from-white to-gray-500
            text-transparent bg-clip-text
          "
        >
          {resumeData.basics.name}
        </h1>

        {/* Role */}
        <h2
          className="
            text-sm md:text-lg
            font-mono
            text-purple-400
            mb-8
            tracking-[0.3em]
            uppercase
          "
        >
          {resumeData.basics.label}
        </h2>

        {/* Summary */}
        <p
          className="
            max-w-2xl mx-auto
            text-gray-400
            text-base md:text-lg
            leading-relaxed
            mb-12
          "
        >
          {resumeData.basics.summary}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {/* Primary CTA */}
          <button
            onClick={() =>
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              group relative
              px-8 py-3 rounded-full
              bg-white text-black font-semibold
              flex items-center justify-center gap-2

              transition-all duration-300

              hover:bg-purple-500 hover:text-white
              hover:shadow-[0_10px_40px_rgba(139,92,246,0.4)]
            "
          >
            View Experience
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          {/* Secondary CTA */}
          <button
            className="
              group
              px-8 py-3 rounded-full
              border border-white/20
              text-gray-300 font-medium
              flex items-center justify-center gap-2

              transition-all duration-300

              hover:border-purple-400
              hover:text-white
              hover:bg-white/5
            "
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center text-gray-500 text-xs tracking-widest"
      >
        SCROLL
        <ArrowDown className="w-4 h-4 mt-1 animate-bounce" />
      </motion.div>
    </section>
  );
}
