import { Trophy } from "lucide-react";

type AchievementProps = {
  title: string;
  description: string;
  highlightNumber: string | number;
  highlightLabel: string;
};

export default function AchievementStrip({
  title,
  description,
  highlightNumber,
  highlightLabel,
}: AchievementProps) {
  return (
    <div className="py-24 max-w-6xl mx-auto px-4">
      <div
        className="
          p-10 md:p-12 rounded-2xl
          bg-gradient-to-r from-purple-600/90 to-purple-500/80
          border border-purple-400/20
          flex flex-col md:flex-row items-center justify-between gap-8
          text-white
          shadow-[0_20px_60px_rgba(139,92,246,0.3)]
        "
      >
        {/* Left section */}
        <div className="flex items-center gap-5">
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md">
            <Trophy size={36} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="opacity-80 max-w-md text-sm">{description}</p>
          </div>
        </div>

        {/* Right section */}
        <div className="text-center md:text-right">
          <span className="text-5xl md:text-6xl font-black">
            {highlightNumber}
          </span>
          <p className="uppercase tracking-widest text-xs opacity-80">
            {highlightLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
