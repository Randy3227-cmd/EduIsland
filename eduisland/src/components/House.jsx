// 🏠 Modern Futuristic House Component
// Features: 3D isometric design, vibrant gradients, hover effects, floating animation
// Preserves all original props and onClick logic
import React from "react";
import { motion } from "framer-motion";

export default function House({ matiere, position, onClick }) {
  // Generate a consistent color scheme based on matiere name
  const colors = [
    { roof: "from-pink-500 to-rose-600", body: "from-yellow-300 to-orange-400", accent: "bg-cyan-400" },
    { roof: "from-purple-500 to-indigo-600", body: "from-lime-300 to-green-400", accent: "bg-pink-400" },
    { roof: "from-blue-500 to-cyan-600", body: "from-amber-300 to-yellow-400", accent: "bg-purple-400" },
    { roof: "from-red-500 to-orange-600", body: "from-teal-300 to-emerald-400", accent: "bg-blue-400" },
    { roof: "from-emerald-500 to-teal-600", body: "from-rose-300 to-pink-400", accent: "bg-yellow-400" },
  ];
  
  const colorIndex = matiere.name.length % colors.length;
  const colorScheme = colors[colorIndex];

  return (
    <motion.div
      className="absolute cursor-pointer flex flex-col items-center group z-20 font-['Fredoka']"
      style={{
        ...position,
        transform: "translate(-50%, 0)",
      }}
      onClick={onClick}
      initial={{ scale: 0, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 180,
        damping: 12,
        delay: 0.1
      }}
      whileHover={{ 
        scale: 1.12, 
        y: -15,
        transition: { type: "spring", stiffness: 400 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 🌟 Floating animation wrapper */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* ✨ Glow effect behind house */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 blur-xl rounded-full bg-gradient-to-br from-yellow-300 to-pink-400 -z-10"
        />

        {/* 🏠 Main house structure */}
        <div className="relative w-32 h-32">
          {/* 🔺 Roof with 3D effect */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`absolute bottom-20 left-1/2 -translate-x-1/2 
                       w-0 h-0 
                       border-l-[70px] border-r-[70px] border-b-[50px]
                       border-l-transparent border-r-transparent 
                       bg-gradient-to-b ${colorScheme.roof}
                       filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)]`}
            style={{
              borderBottomColor: "transparent",
              background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              width: "140px",
              height: "50px",
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${colorScheme.roof}`}
                 style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
          </motion.div>

          {/* 🏛️ House body with gradient and depth */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`absolute bottom-0 w-full h-24 
                       bg-gradient-to-br ${colorScheme.body}
                       border-4 border-white/80 rounded-2xl
                       shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_0_-4px_8px_rgba(0,0,0,0.1)]
                       group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.3),inset_0_-6px_12px_rgba(0,0,0,0.15)]
                       transition-all duration-300`}
          >
            {/* 🚪 Door with shine effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-16 
                           bg-gradient-to-br from-amber-800 to-amber-900
                           rounded-t-xl border-3 border-amber-700
                           shadow-inner">
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-xl"
              />
              <div className="absolute top-8 right-2 w-2 h-2 rounded-full bg-yellow-400 shadow-lg" />
            </div>

            {/* 🪟 Windows with glass effect */}
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(255,255,255,0.3)",
                    "0 0 20px rgba(255,255,255,0.6)",
                    "0 0 10px rgba(255,255,255,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className={`absolute top-6 w-8 h-8 
                           bg-gradient-to-br from-cyan-200 to-blue-300
                           border-3 border-white rounded-lg
                           shadow-[inset_0_2px_4px_rgba(255,255,255,0.5)]`}
                style={{ left: i === 0 ? "12px" : "auto", right: i === 1 ? "12px" : "auto" }}
              >
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-0.5 bg-white/60" />
                  <div className="absolute w-0.5 h-full bg-white/60" />
                </div>
              </motion.div>
            ))}

            {/* 🌸 Decorative flowers */}
            <div className="absolute -bottom-2 left-2 text-lg">🌺</div>
            <div className="absolute -bottom-2 right-2 text-lg">🌸</div>
          </motion.div>

          {/* 💨 Chimney smoke animation */}
          <motion.div
            animate={{
              y: [-10, -40],
              opacity: [0.7, 0],
              scale: [1, 1.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 right-4 text-2xl"
          >
            ☁️
          </motion.div>
        </div>

        {/* ⭐ Floating stars around house */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute text-yellow-300 text-sm"
            style={{
              top: `${10 + i * 15}px`,
              left: `${-10 + i * 10}px`,
            }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>

      {/* 📚 Subject name badge with glass morphism */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        className="mt-4 px-6 py-2 rounded-2xl
                   bg-white/90 backdrop-blur-md
                   border-3 border-purple-300
                   shadow-xl group-hover:shadow-2xl
                   transition-all duration-300"
      >
        <p className="text-center font-bold text-base text-transparent bg-clip-text
                      bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
          📚 {matiere.name}
        </p>
      </motion.div>

      {/* 🎯 Click indicator */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute -bottom-6 text-xl opacity-0 group-hover:opacity-100 transition-opacity"
      >
        👆
      </motion.div>
    </motion.div>
  );
}
