import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../services/supabaseClient";
import CityMarker from "../components/CityMarker";
import UserProfile from "../components/UserProfil";
import { useNavigate } from "react-router-dom";
import Sun from "../components/Sun";
import Clouds from "../components/Clouds";

export default function IslandMap() {
  const [villes, setVilles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVilles = async () => {
      const { data, error } = await supabase.from("villes").select("*");
      if (error) console.error(error);
      else setVilles(data);
    };
    fetchVilles();
  }, []);

  const positions = [
    { top: "40%", left: "35%" },
    { top: "55%", left: "45%" },
    { top: "35%", left: "70%" },
    { top: "50%", left: "60%" },
    { top: "80%", left: "30%" }
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-sky-200 via-sky-300 to-sky-400 overflow-hidden font-[Poppins]">
      <UserProfile userId={"a1e6874a-bebe-46d6-949c-c0ce5df3b9ae"} />
      <Sun />

      <Clouds />

      {/* 🌴 Grande île */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[70%]">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-400 rounded-[60%_40%_70%_30%_/_50%_60%_40%_50%] shadow-2xl border-4 border-yellow-100"></div>

        {/* 🌾 Plages */}
        <div className="absolute bottom-8 left-1/4 w-1/3 h-12 bg-yellow-200 rounded-[50%_50%_40%_60%_/_60%_70%_30%_40%] shadow-inner"></div>
        <div className="absolute bottom-10 right-1/3 w-1/4 h-10 bg-yellow-200 rounded-[60%_40%_50%_50%_/_50%_60%_40%_50%] shadow-inner"></div>

        {/* 🌋 Colline volcanique */}
       

        {/* 💧 Lac */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 left-1/3 w-24 h-16 bg-blue-300 rounded-[50%_40%_60%_50%_/_60%_50%_50%_40%] shadow-inner border border-blue-200"
        ></motion.div>
      </div>

      {/* ⛵ Bateau */}
      <motion.div
        className="absolute bottom-20 left-10 text-3xl"
        animate={{ x: [0, 60, 0], y: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        ⛵
      </motion.div>

      {/* 🐠 Poissons */}
      <motion.div
        className="absolute bottom-32 right-8 text-2xl"
        animate={{ x: [0, -60, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        🐠
      </motion.div>
      <motion.div
        className="absolute bottom-28 right-32 text-xl"
        animate={{ x: [0, -80, 0], y: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        🐟
      </motion.div>

      {/* 🦋 Papillons */}
      <motion.div
        className="absolute top-60 right-1/3 text-pink-400 text-xl"
        animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🦋
      </motion.div>

            {/* 🌸 Fleurs tropicales dynamiques */}
      {Array.from({ length: 10 }).map((_, i) => {
        // Position et propriétés aléatoires
        const randomLeft = Math.random() * 80 + 10; // entre 10% et 90%
        const randomBottom = Math.random() * 40 + 10; // entre 10% et 50%
        const emojis = ["🌸", "🌺", "🌼", "🌻", "🌷", "💮"];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const randomSize = Math.random() * 1.5 + 0.8; // taille 0.8x à 2.3x
        const randomDelay = Math.random() * 2;
        const randomRotation = Math.random() * 10;

        return (
          <motion.div
            key={`flower-${i}`}
            className="absolute text-2xl"
            style={{
              left: `${randomLeft}%`,
              bottom: `${randomBottom}%`,
              transform: `scale(${randomSize}) rotate(${randomRotation}deg)`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 5, -5, 0],
              opacity: [0.8, 1, 0.9],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: randomDelay,
            }}
          >
            {emoji}
          </motion.div>
        );
      })}


      {/* 🐢 Animaux mignons sur l'île */}
      <motion.div
        className="absolute bottom-36 left-1/4 text-2xl"
        animate={{ x: [0, 30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      >
        🐢
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-1/3 text-xl"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🦜
      </motion.div>
      <motion.div
        className="absolute bottom-44 left-1/2 text-xl"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        🐿️
      </motion.div>


      {/* ⭐ Étoiles scintillantes */}
      {[
        { top: "8%", left: "30%", delay: 0 },
        { top: "12%", right: "15%", delay: 0.5 },
        { top: "6%", left: "60%", delay: 1 },
      ].map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-yellow-300 text-xl"
          style={{ top: star.top, left: star.left, right: star.right }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
        >
          ⭐
        </motion.div>
      ))}

      {/* 🦩 Flamants roses */}
      <motion.div
        className="absolute bottom-24 left-1/3 text-2xl"
        animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🦩
      </motion.div>

      {/* 🐚 Coquillages sur la plage */}
      {[
        { bottom: "16%", left: "28%" },
        { bottom: "18%", left: "35%" },
        { bottom: "17%", right: "30%" },
      ].map((shell, i) => (
        <motion.div
          key={`shell-${i}`}
          className="absolute text-pink-300 text-lg"
          style={shell}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
        >
          🐚
        </motion.div>
      ))}
{/* 🌴 Forêt de palmiers dynamiques */}
{Array.from({ length: 20 }).map((_, i) => {
  const randomLeft = Math.random() * 80 + 10; // entre 10% et 90%
  const randomBottom = Math.random() * 40 + 10; // entre 10% et 50%
  const randomSize = Math.random() * 2 + 1; // entre 1x et 3x
  const randomDelay = Math.random() * 4; // pour décaler les animations
  return (
    <motion.div
      key={`palm-${i}`}
      className="absolute"
      style={{
        left: `${randomLeft}%`,
        bottom: `${randomBottom}%`,
        transform: `scale(${randomSize})`,
      }}
      animate={{ rotate: [0, 3, -3, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay: randomDelay }}
    >
      <div className="text-5xl drop-shadow-[0_3px_2px_rgba(0,0,0,0.3)]">
        🌴
      </div>
    </motion.div>
  );
})}


      {/* 🦀 Crabe qui se promène */}
      <motion.div
        className="absolute bottom-20 right-20 text-2xl"
        animate={{ x: [0, -40, -80, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        🦀
      </motion.div>

      {/* 🌊 Vagues animées */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute bottom-12 w-full h-8 bg-blue-300/30 rounded-full"
          style={{ left: `${i * 10}%` }}
          animate={{ x: [0, 100, 0], scaleX: [1, 1.1, 1] }}
          transition={{ duration: 8 + i, repeat: Infinity, delay: i * 0.5 }}
        ></motion.div>
      ))}

      {/* ☀️ Rayons de soleil */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute top-16 left-20 w-1 h-12 bg-yellow-200/60 origin-bottom"
          style={{ transform: `rotate(${angle}deg)` }}
          animate={{ opacity: [0.3, 0.8, 0.3], scaleY: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
        ></motion.div>
      ))}

      {/* 🏙️ Villes interactives */}
      {villes.map((ville, index) => (
        <motion.div
          key={ville.id}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.3, type: "spring", stiffness: 120 }}
        >
          <CityMarker
            name={ville.name}
            xp={ville.xp_required}
            position={positions[index % positions.length]}
            onClick={() => navigate(`/ville/${ville.id}`)}
          />
        </motion.div>
      ))}

      {/* 🎉 Message d’accueil */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl font-bold bg-sky-700/40 px-8 py-3 rounded-2xl backdrop-blur-md shadow-lg border border-white/20"
      >
        🌴 Bienvenue sur <span className="text-yellow-200">Education Island</span> !
      </motion.div>
    </div>
  );
}
