import React from "react";
import { motion } from "framer-motion";

export default function Clouds() {
  const cloudPositions = [
    { top: "10%", left: "10%" },
    { top: "15%", right: "20%" },
  ];

  return (
    <>
      {cloudPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-12 bg-white rounded-full opacity-90 shadow"
          style={pos}
          animate={{ x: [0, i % 2 === 0 ? 40 : -40, 0] }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute -left-3 top-2 w-10 h-10 bg-white rounded-full"></div>
          <div className="absolute -right-3 top-2 w-10 h-10 bg-white rounded-full"></div>
        </motion.div>
      ))}
    </>
  );
}
