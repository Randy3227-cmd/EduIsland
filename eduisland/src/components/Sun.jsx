import React from "react";
import { motion } from "framer-motion";

/* ☀️ Modern Futuristic Sun Component
 * Features: Enhanced glow, dynamic rays, pulsing animation, tropical vibes
 * Pure visual enhancement - no logic changes needed
 */
export default function Sun() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        rotate: 0,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 100,
        damping: 15,
        duration: 1 
      }}
      className="absolute top-8 left-12 z-10"
    >
      {/* 🌟 Outer glow layers for enhanced radiance */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 w-40 h-40 -m-6 rounded-full
                   bg-gradient-radial from-yellow-200 via-orange-200 to-transparent
                   blur-3xl"
      />

      {/* 🎨 Main sun body with tropical gradient */}
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-32 h-32 rounded-full
                   bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500
                   shadow-[0_0_60px_15px_rgba(255,200,80,0.6),0_0_100px_30px_rgba(255,150,50,0.3)]"
      >
        {/* ✨ Inner glow pulse */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-4 bg-gradient-to-br from-yellow-200 to-orange-200 
                     rounded-full blur-lg"
        />

        {/* 💫 Highlight shine effect */}
        <motion.div
          animate={{
            opacity: [0.5, 0.9, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-4 left-4 w-12 h-12 rounded-full
                     bg-gradient-to-br from-white to-yellow-100
                     blur-md opacity-80"
        />

        {/* 😊 Happy sun face */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-5xl filter drop-shadow-lg"
          >
            😊
          </motion.div>
        </div>
      </motion.div>
      {/* 🌈 Rainbow shimmer effect */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-32 h-32"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.25,
            }}
            className="absolute w-3 h-3 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 45}deg) translateY(-80px)`,
              backgroundColor: [
                "#FFD93D", "#FFB6D9", "#C4FF61", "#00D4FF",
                "#FF6B9D", "#A855F7", "#FFA500", "#7CFF6B"
              ][i],
              boxShadow: `0 0 10px ${[
                "#FFD93D", "#FFB6D9", "#C4FF61", "#00D4FF",
                "#FF6B9D", "#A855F7", "#FFA500", "#7CFF6B"
              ][i]}`,
            }}
          />
        ))}
      </motion.div>

      {/* ✨ Sparkle particles floating around */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          animate={{
            x: [0, Math.cos(i * 60) * 20, 0],
            y: [0, Math.sin(i * 60) * 20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 text-xl"
        >
          ✨
        </motion.div>
      ))}

      {/* 🌤️ Wispy clouds passing by */}
      <motion.div
        animate={{
          x: [-150, 200],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatDelay: 5,
        }}
        className="absolute top-1/2 left-0 text-4xl opacity-40"
      >
        ☁️
      </motion.div>
    </motion.div>
  );
}
