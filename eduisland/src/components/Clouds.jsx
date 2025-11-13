import React from "react";
import { motion } from "framer-motion";

/* ☁️ Modern Futuristic Clouds Component
 * Features: Varied sizes, layered depth, smooth floating, gradient colors
 * Pure visual enhancement - no logic changes needed
 */
export default function Clouds() {
  // Enhanced cloud configurations with varied sizes and positions
  const cloudConfigs = [
    { 
      top: "8%", 
      left: "5%", 
      size: "large", 
      speed: 12,
      color: "from-white to-blue-50",
      delay: 0
    },
    { 
      top: "18%", 
      right: "15%", 
      size: "medium", 
      speed: 15,
      color: "from-white to-pink-50",
      delay: 2
    },
    { 
      top: "25%", 
      left: "60%", 
      size: "small", 
      speed: 10,
      color: "from-white to-purple-50",
      delay: 4
    },
    { 
      top: "12%", 
      right: "45%", 
      size: "large", 
      speed: 18,
      color: "from-white to-cyan-50",
      delay: 1
    },
    { 
      top: "30%", 
      left: "25%", 
      size: "medium", 
      speed: 14,
      color: "from-white to-yellow-50",
      delay: 3
    },
  ];

  // Size mappings for clouds
  const sizeMap = {
    small: { width: "w-20", height: "h-10", bubbleSize: "w-8 h-8" },
    medium: { width: "w-32", height: "h-16", bubbleSize: "w-12 h-12" },
    large: { width: "w-40", height: "h-20", bubbleSize: "w-14 h-14" },
  };

  return (
    <>
      {cloudConfigs.map((cloud, i) => {
        const sizes = sizeMap[cloud.size];
        
        return (
          <motion.div
            key={i}
            className="absolute z-5"
            style={{ 
              top: cloud.top, 
              left: cloud.left, 
              right: cloud.right 
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: [0.7, 1, 0.8, 1, 0.7],
              x: [0, i % 2 === 0 ? 60 : -60, 0],
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: cloud.speed, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: cloud.delay 
            }}
          >
            {/* 🌤️ Main cloud body with gradient and soft shadow */}
            <div className={`relative ${sizes.width} ${sizes.height} 
                           bg-gradient-to-br ${cloud.color}
                           rounded-full opacity-90 
                           shadow-[0_8px_20px_rgba(255,255,255,0.3)]
                           backdrop-blur-sm`}>
              
              {/* Cloud bubbles for fluffy effect */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className={`absolute -left-2 top-1 ${sizes.bubbleSize}
                           bg-gradient-to-br ${cloud.color}
                           rounded-full shadow-lg`}
              />
              
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.5 + 0.5 }}
                className={`absolute -right-2 top-1 ${sizes.bubbleSize}
                           bg-gradient-to-br ${cloud.color}
                           rounded-full shadow-lg`}
              />

              {/* Top bubble for extra volume */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 + 1 }}
                className={`absolute top-[-30%] left-1/2 -translate-x-1/2
                           ${cloud.size === 'large' ? 'w-10 h-10' : cloud.size === 'medium' ? 'w-8 h-8' : 'w-6 h-6'}
                           bg-gradient-to-br ${cloud.color}
                           rounded-full shadow-lg`}
              />

              {/* ✨ Sparkle effect on clouds */}
              {cloud.size === 'large' && (
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 2,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                             text-yellow-200 text-xl"
                >
                  ✨
                </motion.div>
              )}
            </div>

            {/* 🌈 Rainbow shimmer effect for some clouds */}
            {i % 3 === 0 && (
              <motion.div
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: cloud.delay + 1,
                }}
                className={`absolute inset-0 ${sizes.width} ${sizes.height}
                           bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200
                           rounded-full blur-xl opacity-30`}
              />
            )}
          </motion.div>
        );
      })}

      {/* 🦋 Butterfly flying through clouds */}
      <motion.div
        animate={{
          x: [-100, window.innerWidth + 100],
          y: [
            Math.random() * 100 + 50,
            Math.random() * 150 + 50,
            Math.random() * 100 + 50,
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatDelay: 10,
          ease: "linear",
        }}
        className="absolute top-[15%] text-3xl z-20"
      >
        <motion.span
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          🦋
        </motion.span>
      </motion.div>

      {/* 🕊️ Bird flying across the sky */}
      <motion.div
        animate={{
          x: [window.innerWidth + 100, -100],
          y: [
            Math.random() * 80 + 40,
            Math.random() * 120 + 40,
            Math.random() * 80 + 40,
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatDelay: 15,
          ease: "linear",
        }}
        className="absolute top-[20%] text-2xl z-20"
      >
        <motion.span
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          🕊️
        </motion.span>
      </motion.div>
    </>
  );
}
