import React from "react";
import { motion } from "framer-motion";

/* 🏙️ Modern Futuristic City Marker Component
 * Features: 3D layered design, pulsing glow, hover animations, vibrant gradients
 * Preserves all original props and onClick logic
 */
export default function CityMarker({ name, xp, position, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="absolute flex flex-col items-center cursor-pointer group z-20 font-['Fredoka']"
      style={{ top: position.top, left: position.left }}
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay: 0.2 
      }}
      whileHover={{ 
        scale: 1.15, 
        y: -10,
        transition: { type: "spring", stiffness: 300 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      {/* 🎯 Main city marker with 3D effect */}
      <div className="relative">
        {/* ✨ Outer glow ring - animated pulse */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 blur-lg"
        />

        {/* 🌟 Middle ring with gradient */}
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
          className="relative w-20 h-20 rounded-full p-1
                     bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500
                     shadow-2xl"
        >
          {/* 💎 Inner city circle with 3D depth */}
          <div className="w-full h-full rounded-full
                         bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500
                         border-4 border-white/80
                         shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2),inset_0_4px_8px_rgba(255,255,255,0.3)]
                         flex items-center justify-center
                         group-hover:shadow-[inset_0_-6px_12px_rgba(0,0,0,0.3),inset_0_6px_12px_rgba(255,255,255,0.4)]
                         transition-all duration-300">
            
            {/* 🏛️ City icon with scale animation */}
            <motion.span
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl drop-shadow-lg"
            >
              🏛️
            </motion.span>
          </div>
        </motion.div>

        {/* ⭐ Floating stars decoration */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 1, 0.4],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute text-yellow-300 text-sm"
            style={{
              top: `${-10 + i * 5}px`,
              left: `${40 + Math.cos(i * Math.PI / 2) * 35}px`,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* 📛 City name tag with glass morphism */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 px-4 py-2 rounded-2xl
                   bg-white/90 backdrop-blur-md
                   border-3 border-cyan-300
                   shadow-xl group-hover:shadow-2xl
                   transition-all duration-300"
      >
        <p className="text-center font-bold text-base text-transparent bg-clip-text
                      bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600
                      drop-shadow-sm">
          {name}
        </p>
        
        {/* 🏆 XP requirement badge */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="mt-1 px-3 py-1 rounded-full
                     bg-gradient-to-r from-yellow-400 to-orange-500
                     border-2 border-yellow-300
                     shadow-lg flex items-center justify-center gap-1"
        >
          <span className="text-xs">🔥</span>
          <span className="text-xs font-bold text-white drop-shadow">
            {xp} XP
          </span>
        </motion.div>
      </motion.div>

      {/* 🎪 Unlock indicator - animated arrow */}
      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute -bottom-8 text-2xl opacity-80 group-hover:opacity-100
                   filter drop-shadow-lg"
      >
        👆
      </motion.div>
    </motion.div>
  );
}
