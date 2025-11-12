// src/components/House.jsx
import React from "react";
import { motion } from "framer-motion";

export default function House({ matiere, position, onClick }) {
  return (
    <motion.div
      className="absolute cursor-pointer flex flex-col items-center group"
      style={{
        ...position,
        transform: "translate(-50%, 0)", // centre la maison horizontalement
      }}
      onClick={onClick}
    >
      {/* Maison */}
      <div className="relative w-24 h-24">
        <div className="absolute bottom-0 w-full h-16 bg-yellow-200 border-4 border-yellow-700 rounded-md shadow-md group-hover:bg-yellow-300 transition-all"></div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[48px] border-r-[48px] border-b-[32px] border-l-transparent border-r-transparent border-b-red-600"></div>
      </div>

      {/* Nom de la matière */}
      <p className="mt-2 text-sm font-semibold text-emerald-800 drop-shadow-sm bg-white/70 px-2 py-1 rounded">
        {matiere.name}
      </p>
    </motion.div>
  );
}
