import React from "react";
import { motion } from "framer-motion";

export default function CityMarker({ name, xp, position, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="absolute flex flex-col items-center cursor-pointer group"
      style={{ top: position.top, left: position.left }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="w-10 h-10 bg-yellow-400 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition" />
      <p className="text-xs mt-1 font-semibold text-white drop-shadow">
        {name} <br />
        <span className="text-[10px] text-gray-200">{xp} XP</span>
      </p>
    </motion.div>
  );
}
