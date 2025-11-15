import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../../services/supabaseClient";
import UserProfile from "../../components/UserProfil";
import House from "../../components/House";
import Sun from "../../components/Sun";
import Clouds from "../../components/Clouds";

/* 🏙️ Modern Futuristic City View Page
 * Features: Vibrant gradients, enhanced cityscape, animated houses, premium UI
 * Preserves all original data fetching and navigation logic
 */
export default function Ville() {
  // ✅ Original state and hooks preserved
  const { id } = useParams();
  const [ville, setVille] = useState(null);
  const [matieres, setMatieres] = useState([]);
  const navigate = useNavigate();

  // ✅ Original data fetching logic preserved
  useEffect(() => {
    const fetchData = async () => {
      const { data: villeData, error: villeError } = await supabase
        .from("villes")
        .select("*")
        .eq("id", id)
        .single();

      if (villeError) console.error("Erreur ville :", villeError);
      else setVille(villeData);

      const { data: matieresData, error: matError } = await supabase
        .from("matieres")
        .select("*")
        .eq("ville_id", id);

      if (matError) console.error("Erreur matières :", matError);
      else setMatieres(matieresData);
    };

    fetchData();
  }, [id]);

  // ✅ Original loading state preserved
  if (!ville) {
    return (
      <div className="flex flex-col justify-center items-center h-screen 
                      bg-gradient-to-br from-cyan-300 via-purple-400 to-pink-500 font-['Fredoka']">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-6xl mb-6"
        >
          🎪
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-2xl font-bold text-white drop-shadow-lg"
        >
          Chargement de la ville...
        </motion.p>
      </div>
    );
  }

  // ✅ Original house positions preserved
  const positions = [
    { bottom: "30%", left: "15%" },
    { bottom: "30%", left: "35%" },
    { bottom: "30%", left: "55%" },
    { bottom: "30%", left: "75%" },
    { bottom: "45%", left: "25%" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden font-['Fredoka']">
      {/* 🎨 Enhanced animated gradient background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-sky-300 via-purple-300 to-pink-400
                   bg-[length:200%_200%]"
      />

      {/* ☀️ Sun component */}
      <Sun />

      {/* ☁️ Clouds component */}
      <Clouds />

      {/* 👤 User profile */}
      <UserProfile userId={"a1e6874a-bebe-46d6-949c-c0ce5df3b9ae"} />

      {/* 🏙️ City title banner with premium styling */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="relative mt-24 mx-auto max-w-4xl z-20"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative px-12 py-6 rounded-3xl
                     bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
                     border-4 border-white/60 shadow-2xl overflow-hidden mx-auto w-fit"
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/30
                       bg-[length:200%_200%]"
          />

          <div className="relative z-10 flex flex-col items-center gap-3">
            <h1 className="text-5xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
              🌆 {ville.name}
            </h1>

            {/* XP requirement badge */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 rounded-full
                         bg-gradient-to-r from-yellow-400 to-orange-500
                         border-3 border-white shadow-lg"
            >
              <p className="font-bold text-white text-lg drop-shadow flex items-center gap-2">
                <span>🔥</span>
                Niveau requis : {ville.xp_required} XP
              </p>
            </motion.div>
          </div>

          {/* Floating stars */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 0],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="absolute text-yellow-200 text-xl"
              style={{
                top: `${20 + i * 20}%`,
                left: `${10 + i * 30}%`,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* 🏘️ Enhanced city landscape */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        className="absolute bottom-0 w-full h-[50%]"
      >
        {/* City ground with gradient and depth */}
        <div className="absolute inset-0 
                       bg-gradient-to-t from-emerald-600 via-green-500 to-lime-400
                       rounded-t-[100px]
                       shadow-[inset_0_-20px_40px_rgba(0,0,0,0.2)]
                       border-t-8 border-yellow-200/50">
          {/* Inner glow */}
          <div className="absolute inset-0
                         bg-gradient-to-b from-white/20 to-transparent
                         rounded-t-[100px]" />
        </div>

        {/* Decorative city elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`tree-${i}`}
            animate={{
              y: [0, -5, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute text-4xl z-10 filter drop-shadow-lg"
            style={{
              bottom: `${15 + Math.random() * 10}%`,
              left: `${5 + i * 12}%`,
            }}
          >
            🌳
          </motion.div>
        ))}
      </motion.div>

      {/* 🏠 Subject houses - ✅ Original logic preserved */}
      {matieres.map((matiere, index) => (
        <House
          key={matiere.id}
          matiere={matiere}
          position={positions[index % positions.length]}
          onClick={() => navigate(`/matiere/${matiere.id}`)}
        />
      ))}

      {/* 🔙 Enhanced back button */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-8 z-30
                   px-8 py-4 rounded-2xl font-bold text-xl
                   bg-gradient-to-r from-cyan-500 to-blue-600
                   text-white border-4 border-white/60
                   shadow-2xl hover:shadow-cyan-500/50
                   transition-all duration-300"
      >
        <span className="flex items-center gap-3">
          ⬅️ Retour à l'île
        </span>
      </motion.button>

      {/* 🎪 Decorative elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`deco-${i}`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute text-2xl z-5"
          style={{
            top: `${30 + i * 10}%`,
            right: `${10 + i * 8}%`,
          }}
        >
          {['🎈', '🎪', '🎨', '📚', '🎯', '⭐'][i]}
        </motion.div>
      ))}
    </div>
  );
}
