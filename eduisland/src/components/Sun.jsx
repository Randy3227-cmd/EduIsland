import React from "react";
import { motion } from "framer-motion";

export default function Sun() {
  return (
    <motion.div
      animate={{
        rotate: [0, 10, -10, 0],
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 20px 5px rgba(255, 230, 150, 0.6)",
          "0 0 40px 15px rgba(255, 200, 80, 0.8)",
          "0 0 25px 10px rgba(255, 230, 150, 0.6)",
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-6 left-10 w-28 h-28 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-full shadow-2xl"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.9, 1, 0.8],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-4 bg-yellow-100 rounded-full blur-md"
      ></motion.div>

      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-8 bg-yellow-300 rounded-full opacity-70 origin-bottom"
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${i * 30}deg) translateY(-60%)`,
          }}
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        ></motion.div>
      ))}
    </motion.div>
  );
}
