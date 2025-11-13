import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../services/supabaseClient";

/* 🎨 Modern Futuristic User Profile Component
 * Features: Tropical gradient, 3D depth, floating animation, glow effects
 * Preserves all original logic and data fetching
 */
export default function UserProfile({ userId }) {
  // ✅ Original state logic preserved
  const [user, setUser] = useState(null);

  // ✅ Original data fetching logic preserved
  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) console.error("Erreur fetch user:", error);
      else setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed top-6 right-6 z-50 font-['Fredoka']"
    >
      {/* 🌟 Main profile card with tropical gradient and glass effect */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex items-center gap-4 px-6 py-4 rounded-3xl
                   bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500
                   shadow-2xl border-4 border-white/40 overflow-hidden cursor-pointer"
      >
        {/* ✨ Animated background glow effect */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 via-pink-300/30 to-purple-300/30 blur-xl"
        />

        {/* 🎭 Avatar with glowing border and pulse animation */}
        <div className="relative z-10">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 215, 0, 0.6)",
                "0 0 40px rgba(255, 107, 157, 0.8)",
                "0 0 20px rgba(255, 215, 0, 0.6)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-400"
          >
            <img
              src={user.image || "/default-avatar.png"}
              alt={user.name}
              className="w-full h-full rounded-full object-cover border-3 border-white shadow-lg"
            />
          </motion.div>
          
          {/* 💫 Sparkle effect on avatar */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1 -right-1 text-xl"
          >
            ✨
          </motion.div>
        </div>

        {/* 📊 User info with gradient text */}
        <div className="relative z-10 flex flex-col gap-1">
          <motion.span
            className="font-bold text-xl text-white drop-shadow-lg"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            {user.name}
          </motion.span>
          
          {/* 🏆 XP display with animated shine effect */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full
                       bg-gradient-to-r from-yellow-400 to-orange-400
                       border-2 border-white/60 shadow-lg"
          >
            <span className="text-lg">⭐</span>
            <span className="font-bold text-white text-sm drop-shadow">
              {user.xp_total} XP
            </span>
          </motion.div>
        </div>

        {/* 🎪 Floating particles decoration */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute text-xs"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 10}%`,
            }}
          >
            {["✨", "⭐", "💫"][i]}
          </motion.div>
        ))}
      </motion.div>

      {/* 🎈 Floating trophy icon for achievements (decorative) */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-4 -left-4 text-3xl drop-shadow-xl"
      >
        🏆
      </motion.div>
    </motion.div>
  );
}
