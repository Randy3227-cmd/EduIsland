import React from "react";
import { motion } from "framer-motion";

export default function NiveauCard({ niveau, index, total, onClick }) {
  const isLast = index === total - 1;

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onClick?.(niveau)}
        className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-green-400 to-lime-400 shadow-xl cursor-pointer border-4 border-white hover:shadow-emerald-400 transition-all z-10"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20 blur-sm"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-white font-bold text-xl drop-shadow-md">
          {niveau.level_number}
        </span>
        <span className="absolute -bottom-6 text-xs text-emerald-700 font-semibold">
          +{niveau.xp_reward} XP
        </span>
      </motion.div>

      {!isLast && (
        <motion.div
          className="absolute top-full left-1/2 w-1 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full"
          style={{ height: "100%", marginTop: "0px" }}
          animate={{ scaleY: [0, 1] }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}
