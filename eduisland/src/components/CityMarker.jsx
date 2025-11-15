import React from "react";
import { motion } from "framer-motion";

export default function CityMarker({ name, xp, position, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="absolute flex flex-col items-center cursor-pointer group z-20 font-['Fredoka']"
      style={{ top: position.top, left: position.left }}
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      whileHover={{ scale: 1.15, y: -10, transition: { type: "spring", stiffness: 300 } }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">

        {/* Glow Ring */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 blur-md"
        />

        {/* Middle Ring */}
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
          className="relative w-10 h-10 rounded-full p-0.5
                     bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 shadow-xl"
        >
          {/* Inner Circle */}
          <div className="w-full h-full rounded-full
                         bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500
                         border-2 border-white/80
                         shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.3)]
                         flex items-center justify-center
                         group-hover:shadow-[inset_0_-3px_6px_rgba(0,0,0,0.3),inset_0_3px_6px_rgba(255,255,255,0.4)]
                         transition-all duration-300">
            
            <motion.span
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-2xl drop-shadow-lg"
            >
              🏛️
            </motion.span>
          </div>
        </motion.div>

        {/* Floating Stars */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4], rotate: [0, 360] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
            className="absolute text-yellow-300 text-xs"
            style={{
              top: `${-8 + i * 4}px`,
              left: `${20 + Math.cos(i * Math.PI / 2) * 20}px`,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Name Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-2 px-2 py-1 rounded-xl
                   bg-white/90 backdrop-blur-md
                   border-2 border-cyan-300 shadow-lg
                   transition-all duration-300"
      >
        <p className="text-center font-bold text-sm text-transparent bg-clip-text
                      bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
          {name}
        </p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="mt-1 px-2 py-0.5 rounded-full
                     bg-gradient-to-r from-yellow-400 to-orange-500
                     border-2 border-yellow-300 shadow-md flex items-center justify-center gap-1"
        >
          <span className="text-[10px]">🔥</span>
          <span className="text-[10px] font-bold text-white drop-shadow">
            {xp} XP
          </span>
        </motion.div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute -bottom-5 text-xl opacity-80 group-hover:opacity-100 drop-shadow-lg"
      >
        👆
      </motion.div>
    </motion.div>
  );
}
