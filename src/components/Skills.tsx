import { resumeData } from "../data/data";

export default function Skills() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl font-black tracking-tight italic bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="h-px flex-grow bg-gradient-to-r from-purple-500/50 to-transparent" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="
              group relative
              p-6 rounded-2xl 
              border border-white/10 
              bg-white/5 backdrop-blur-md

              transition-all duration-300 ease-out

              hover:scale-[1.03]
              hover:-translate-y-2
              hover:border-purple-500/40
              hover:bg-white/10
              hover:shadow-[0_15px_50px_rgba(139,92,246,0.25)]
            "
          >
            {/* Category Title */}
            <h3 className="text-purple-400 font-semibold text-lg mb-4 tracking-wide group-hover:text-purple-300 transition-colors">
              {skillGroup.category}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3 py-1.5 
                    text-sm rounded-full 
                    bg-white/5 text-gray-300

                    transition-all duration-300

                    group-hover:bg-purple-500/20
                    group-hover:text-white
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Subtle Glow Layer */}
            <div
              className="
                absolute inset-0 rounded-2xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-gradient-to-br from-purple-500/10 via-transparent to-transparent
                pointer-events-none
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
