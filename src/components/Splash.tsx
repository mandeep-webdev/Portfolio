import { motion } from "framer-motion";

export default function Splash() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-6xl font-black text-white tracking-tighter mb-8"
      >
        MK<span className="text-purple-500">.</span>
      </motion.div>
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-full bg-purple-500"
        />
      </div>
    </motion.div>
  );
}
