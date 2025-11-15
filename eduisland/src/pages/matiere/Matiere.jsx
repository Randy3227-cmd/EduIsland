import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../../services/supabaseClient";
import NiveauCard from "../../components/NiveauCard";

export default function Matiere({ userId }) {
  const { id } = useParams();
  const [niveaux, setNiveaux] = useState([]);
  const [userScores, setUserScores] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // Récupérer les niveaux
      const { data: niveauxData, error: niveauxError } = await supabase
        .from("niveaux")
        .select("*")
        .eq("matiere_id", id)
        .order("level_number", { ascending: true });

      if (!niveauxError && niveauxData) {
        setNiveaux(niveauxData);

        // Récupérer les scores de l'utilisateur
        if (userId && niveauxData.length > 0) {
          const niveauIds = niveauxData.map(n => n.id);
          const { data: scoresData, error: scoresError } = await supabase
            .from("scores")
            .select("niveau_id, score, max_score")
            .eq("user_id", userId)
            .in("niveau_id", niveauIds);

          if (!scoresError && scoresData) {
            const scoresMap = {};
            scoresData.forEach(scoreEntry => {
              const niveauId = scoreEntry.niveau_id;
              if (!scoresMap[niveauId] || scoreEntry.score > scoresMap[niveauId].score) {
                scoresMap[niveauId] = {
                  score: scoreEntry.score,
                  maxScore: scoreEntry.max_score,
                  percentage: Math.round((scoreEntry.score / scoreEntry.max_score) * 100)
                };
              }
            });
            setUserScores(scoresMap);
          }
        }
      }
    };
    fetchData();
  }, [id, userId]);

  const handleSelect = (niv) => {
    navigate(`/niveau/${niv.id}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-['Fredoka']">
      {/* 🌈 Animated gradient background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600 bg-[length:200%_200%]"
      />

      {/* ✨ Floating background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: i * 0.2 }}
          className="absolute w-2 h-2 rounded-full bg-white"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        />
      ))}

      {/* 🎨 Decorative elements in corners */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-10 left-10 text-6xl opacity-20">🎯</motion.div>
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute top-10 right-10 text-6xl opacity-20">📚</motion.div>

      {/* 🎓 Page title */}
      <motion.div initial={{ y: -100, opacity: 0, scale: 0.8 }} animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }} className="relative pt-20 pb-10 z-20">
        <motion.div whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                    className="relative mx-auto w-fit px-12 py-6 rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 border-4 border-white/80 shadow-2xl overflow-hidden">
          <motion.div animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/40 bg-[length:200%_200%]" />
          <h1 className="relative z-10 text-5xl font-black text-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)] flex items-center gap-4">
            <motion.span animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎓</motion.span>
            Choisis ton niveau
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>🚀</motion.span>
          </h1>
        </motion.div>

        {/* Sparkles */}
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5], rotate: [0, 180, 360] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      className="absolute text-white text-xl"
                      style={{ top: `${20 + i * 15}%`, left: `${10 + i * 20}%` }}>
            ✨
          </motion.div>
        ))}
      </motion.div>

      {/* 🎯 Level selection path */}
      <div className="relative flex flex-col items-center justify-center min-h-[60vh] px-10 py-10 z-10">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }} className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-full bg-gradient-to-b from-yellow-300 via-pink-400 to-purple-500 opacity-20 rounded-full blur-sm" />
        </motion.div>

        <div className="relative flex flex-col items-center gap-16">
          {niveaux.map((niveau, index) => (
            <motion.div key={niveau.id} initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100, delay: index * 0.15 }}>
              <NiveauCard
                niveau={niveau}
                index={index}
                total={niveaux.length}
                onClick={handleSelect}
                userScore={userScores[niveau.id]}
              />
            </motion.div>
          ))}
        </div>

        {/* 🏆 Achievement banner */}
        {niveaux.length > 0 && (
          <motion.div initial={{ scale: 0, opacity: 0, rotate: -180 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ type: "spring", delay: niveaux.length * 0.15 + 0.5 }}
                      className="mt-16 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-600 border-4 border-white/80 shadow-2xl">
            <motion.p animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}
                      className="font-bold text-2xl text-white drop-shadow-lg flex items-center gap-3">
              <span className="text-3xl">🏆</span> Complète tous les niveaux ! <span className="text-3xl">🏆</span>
            </motion.p>
          </motion.div>
        )}
      </div>

      {/* 🔙 Back button */}
      <motion.button onClick={() => navigate("/island")}
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                     whileHover={{ scale: 1.1, y: -5 }}
                     whileTap={{ scale: 0.95 }}
                     className="fixed bottom-8 left-8 z-30 px-8 py-4 rounded-2xl font-bold text-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-4 border-white/60 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300">
        <span className="flex items-center gap-3">⬅️ Retour à l'île</span>
      </motion.button>

      {/* Floating emojis */}
      {['🌟','💫','⭐','🎯','🚀','💎'].map((emoji,i)=>(
        <motion.div key={`float-${i}`} animate={{ y: [0,-30,0], rotate:[0,360], opacity:[0.4,0.8,0.4] }}
                    transition={{ duration:5+i*0.5, repeat:Infinity, delay:i*0.5 }}
                    className="fixed text-3xl z-5 pointer-events-none"
                    style={{ top: `${20 + i*12}%`, right: `${5 + (i%3)*10}%` }}>
          {emoji}
        </motion.div>
      ))}
    </div>
  );
}
