import React from "react";
import { motion } from "framer-motion";

/* 🎯 Modern Futuristic Level Card Component
 * Features: Glowing orbs, progress path, unlock animations, 3D depth
 * Preserves all original props and onClick logic
 */
export default function NiveauCard({ niveau, index, total, onClick }) {
  // ✅ Original logic preserved
  const isLast = index === total - 1;

  // Dynamic color schemes for variety
  const levelColors = [
    { main: "from-cyan-400 via-blue-500 to-purple-600", glow: "rgba(6, 182, 212, 0.6)" },
    { main: "from-pink-400 via-rose-500 to-red-600", glow: "rgba(244, 114, 182, 0.6)" },
    { main: "from-yellow-400 via-orange-500 to-red-600", glow: "rgba(251, 191, 36, 0.6)" },
    { main: "from-green-400 via-emerald-500 to-teal-600", glow: "rgba(52, 211, 153, 0.6)" },
    { main: "from-purple-400 via-violet-500 to-indigo-600", glow: "rgba(167, 139, 250, 0.6)" },
  ];

  const colorScheme = levelColors[index % levelColors.length];

  return (
    <div className="relative flex flex-col items-center font-['Fredoka']">
      {/* 🎪 Main level orb with 3D effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotateY: 180 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200,
          delay: index * 0.15 
        }}
        whileHover={{ 
          scale: 1.2, 
          rotate: [0, -5, 5, 0],
          transition: { type: "spring", stiffness: 300 }
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onClick?.(niveau)}
        className="relative cursor-pointer z-10 group"
      >
        {/* ✨ Outer glow effect - animated pulse */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 w-28 h-28 rounded-full blur-2xl"
          style={{ backgroundColor: colorScheme.glow }}
        />

        {/* 🌟 Rotating ring decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-28 h-28"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 45}deg) translateY(-60px)`,
              }}
            />
          ))}
        </motion.div>

        {/* 💎 Main orb with gradient and 3D depth */}
        <div className={`relative w-28 h-28 rounded-full p-1
                        bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400
                        shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                        transition-all duration-300`}>
          
          {/* Inner orb with gradient */}
          <div className={`w-full h-full rounded-full
                          bg-gradient-to-br ${colorScheme.main}
                          border-4 border-white/80
                          shadow-[inset_0_-8px_16px_rgba(0,0,0,0.3),inset_0_8px_16px_rgba(255,255,255,0.3)]
                          flex flex-col items-center justify-center
                          group-hover:shadow-[inset_0_-10px_20px_rgba(0,0,0,0.4),inset_0_10px_20px_rgba(255,255,255,0.4)]
                          transition-all duration-300 relative overflow-hidden`}>
            
            {/* Shine effect animation */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute inset-0 w-full h-full
                         bg-gradient-to-r from-transparent via-white/40 to-transparent
                         transform rotate-45"
            />

            {/* 🔢 Level number */}
            <motion.span
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative text-white font-black text-3xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
            >
              {niveau.level_number}
            </motion.span>

            {/* 🏆 Crown icon for first level */}
            {index === 0 && (
              <motion.div
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 text-2xl filter drop-shadow-lg"
              >
                👑
              </motion.div>
            )}
          </div>
        </div>

        {/* ⭐ Floating stars decoration */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute text-yellow-300 text-sm pointer-events-none"
            style={{
              top: `${10 + i * 10}px`,
              left: `${-20 + i * 10}px`,
            }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>

      {/* 🏅 XP reward badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 + 0.2 }}
        whileHover={{ scale: 1.15 }}
        className="mt-3 px-4 py-2 rounded-full
                   bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500
                   border-3 border-white shadow-xl
                   flex items-center gap-2 cursor-pointer
                   hover:shadow-2xl transition-all"
      >
        <span className="text-lg">🔥</span>
        <span className="font-bold text-white text-sm drop-shadow">
          +{niveau.xp_reward} XP
        </span>
      </motion.div>

      {/* 🛤️ Connection path to next level */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ 
            delay: index * 0.15 + 0.3,
            duration: 0.5,
            ease: "easeOut"
          }}
          className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-20 z-0"
          style={{ marginTop: "16px" }}
        >
          {/* Gradient path with glow */}
          <div className="relative w-full h-full">
            <div className={`absolute inset-0 rounded-full
                            bg-gradient-to-b ${colorScheme.main}
                            shadow-[0_0_20px_${colorScheme.glow}]`} />
            
            {/* Animated dots along the path */}
            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 
                         bg-white rounded-full shadow-lg"
            />
          </div>
        </motion.div>
      )}

      {/* 🎯 Level completion indicator (for future use) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.15 + 0.4 }}
        className="absolute -top-2 -right-2 z-20"
      >
        {/* Can be conditionally shown based on completion status */}
        {/* <div className="w-8 h-8 rounded-full bg-green-500 border-3 border-white
                        flex items-center justify-center text-white font-bold shadow-lg">
          ✓
        </div> */}
      </motion.div>
    </div>
  );
}
