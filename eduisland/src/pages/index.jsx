import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../services/supabaseClient";
import CityMarker from "../components/CityMarker";
import UserProfile from "../components/UserProfil";
import { useNavigate } from "react-router-dom";
import Sun from "../components/Sun";
import Clouds from "../components/Clouds";

/* 🏝️ Modern Futuristic Island Map - Main Page
 * Features: Vibrant gradients, 3D island, tropical decorations, smooth animations
 * Preserves all original data fetching and navigation logic
 */
export default function IslandMap() {
  // ✅ Original state and navigation logic preserved
  const [villes, setVilles] = useState([]);
  const navigate = useNavigate();

  // ✅ Original data fetching logic preserved
  useEffect(() => {
    const fetchVilles = async () => {
      const { data, error } = await supabase.from("villes").select("*");
      if (error) console.error(error);
      else setVilles(data);
    };
    fetchVilles();
  }, []);

  // ✅ Original city positions preserved
  const positions = [
    { top: "40%", left: "50%" },
    { top: "55%", left: "85%" },
    { top: "35%", left: "70%" },
    { top: "50%", left: "60%" },
    { top: "80%", left: "90%" }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-['Fredoka']">
      {/* 🌅 Enhanced animated gradient background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500
                   bg-[length:200%_200%]"
      />

      {/* 🌊 Animated ocean waves overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "1000px 0px"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(255, 255, 255, 0.1) 50px,
            rgba(255, 255, 255, 0.1) 100px
          )`,
        }}
      />

      {/* ☀️ Sun component */}
      <Sun />

      {/* ☁️ Clouds component */}
      <Clouds />

      {/* 👤 User profile */}
      <UserProfile userId={"a1e6874a-bebe-46d6-949c-c0ce5df3b9ae"} />

      {/* �️ Enhanced Main Island with 3D depth and vibrant colors */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[70%]"
      >
        {/* Main island body with tropical gradient and organic shape */}
        <motion.div
          animate={{
            boxShadow: [
              "0 25px 50px rgba(0,0,0,0.2)",
              "0 35px 70px rgba(0,0,0,0.3)",
              "0 25px 50px rgba(0,0,0,0.2)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 
                     bg-gradient-to-br from-lime-300 via-emerald-400 to-green-600
                     rounded-[60%_40%_70%_30%_/_50%_60%_40%_50%]
                     border-8 border-yellow-200/50
                     shadow-[inset_0_-20px_40px_rgba(0,0,0,0.1)]"
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 
                         bg-gradient-to-t from-transparent via-white/10 to-white/20
                         rounded-[60%_40%_70%_30%_/_50%_60%_40%_50%]" />
        </motion.div>

        {/* �️ Enhanced beaches with gradient sand */}
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-12 left-1/4 w-1/3 h-16 
                     bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-300
                     rounded-[50%_50%_40%_60%_/_60%_70%_30%_40%]
                     shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]
                     border-4 border-yellow-300/50"
        />
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-16 right-1/3 w-1/4 h-14 
                     bg-gradient-to-br from-yellow-100 via-yellow-200 to-amber-200
                     rounded-[60%_40%_50%_50%_/_50%_60%_40%_50%]
                     shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]
                     border-4 border-yellow-200/50"
        />

        {/* � Crystal clear lagoon with shimmer */}
        <motion.div
          animate={{ 
            scale: [1, 1.08, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 left-1/3 w-32 h-24 
                     bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-500
                     rounded-[50%_40%_60%_50%_/_60%_50%_50%_40%]
                     shadow-[inset_0_8px_16px_rgba(0,0,0,0.2),0_0_30px_rgba(0,212,255,0.4)]
                     border-4 border-cyan-200"
        >
          {/* Water sparkles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${15 + i * 18}%`,
              }}
            />
          ))}
        </motion.div>

        {/* 🗻 Volcanic mountain with glow */}
        <motion.div
          animate={{
            y: [0, -3, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 right-1/3 w-32 h-32"
        >
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                           w-0 h-0 
                           border-l-[80px] border-r-[80px] border-b-[120px]
                           border-l-transparent border-r-transparent
                           border-b-gradient-to-t from-orange-800 via-red-600 to-yellow-500
                           filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
              style={{
                borderBottomColor: 'transparent',
                background: 'linear-gradient(to top, #92400e, #dc2626, #eab308)',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                width: '160px',
                height: '120px',
              }}
            />
            {/* Lava glow at peak */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8
                         bg-gradient-to-br from-yellow-400 to-orange-500
                         rounded-full blur-md"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ⛵ Enhanced sailing boat with wake effect */}
      <motion.div
        className="absolute bottom-24 left-12 z-10"
        animate={{ x: [0, 80, 0], y: [0, -8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <span className="text-4xl filter drop-shadow-lg">⛵</span>
          {/* Water wake trail */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-2 -left-4 w-12 h-2 bg-blue-200/50 rounded-full blur-sm"
          />
        </div>
      </motion.div>

      {/* 🐠 Enhanced tropical fish school */}
      <motion.div
        className="absolute bottom-36 left-24 text-3xl z-10"
        animate={{ 
          x: [0, 80, 0],
          y: [0, 10, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="filter drop-shadow-lg"
        >
          🐠
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute bottom-64 left-24 text-2xl z-10"
        animate={{ 
          x: [0, -100, 0],
          y: [0, -8, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="filter drop-shadow-lg">🐟</span>
      </motion.div>

      {/* 🦋 Colorful butterflies with flight paths */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`butterfly-${i}`}
          className="absolute text-2xl z-10"
          style={{
            top: `${35 + i * 10}%`,
            right: `${20 + i * 15}%`,
          }}
          animate={{
            x: [0, 40 * (i + 1), 0],
            y: [0, -20 - i * 5, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="filter drop-shadow-lg"
            style={{
              color: ['#FF69B4', '#FFD93D', '#A855F7'][i % 3],
            }}
          >
            🦋
          </motion.span>
        </motion.div>
      ))}

      

      <motion.div
        className="absolute bottom-44 right-1/3 text-2xl z-10 filter drop-shadow-lg"
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        🦜
      </motion.div>

      <motion.div
        className="absolute bottom-52 right-1/4 text-2xl z-10 filter drop-shadow-lg"
        animate={{ 
          y: [0, -10, 0],
          x: [0, 15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        🦎
      </motion.div>


      {/* ⭐ Enhanced twinkling stars */}
      {[
        { top: "8%", left: "30%", delay: 0, size: "text-2xl" },
        { top: "12%", right: "15%", delay: 0.5, size: "text-xl" },
        { top: "6%", left: "60%", delay: 1, size: "text-2xl" },
        { top: "10%", left: "50%", delay: 1.5, size: "text-lg" },
      ].map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className={`absolute ${star.size} z-10`}
          style={{ top: star.top, left: star.left, right: star.right }}
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: star.delay }}
        >
          <span className="filter drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
                style={{ color: '#FFD93D' }}>
            ⭐
          </span>
        </motion.div>
      ))}

      
      {/* 🦀 Enhanced walking crab */}
      <motion.div
        className="absolute bottom-24 right-24 text-3xl z-10 filter drop-shadow-lg"
        animate={{ 
          x: [0, -50, -100, -50, 0],
          rotate: [0, -5, 0, 5, 0],
          scale: [1, 1.1, 1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        🦀
      </motion.div>

      {/* 🌊 Enhanced animated ocean waves */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute bottom-0 w-full h-12 z-0"
          style={{ 
            left: `${i * 20}%`,
            background: `linear-gradient(to top, rgba(56, 189, 248, ${0.2 - i * 0.04}), transparent)`,
            borderRadius: '50% 50% 0 0'
          }}
          animate={{ 
            x: [-50, 100, -50],
            scaleX: [1, 1.15, 1],
            scaleY: [1, 1.08, 1]
          }}
          transition={{ 
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 🌟 Enhanced sunrays (handled by Sun component, keeping minimal here) */}
      {/* Removed redundant sun rays as they're now part of the Sun component */}

      {/* 🏙️ Interactive city markers - ✅ Original logic preserved */}
      {villes.map((ville, index) => (
        <motion.div
          key={ville.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 1 + index * 0.2,
            type: "spring",
            stiffness: 150,
            damping: 15
          }}
        >
          <CityMarker
            name={ville.name}
            xp={ville.xp_required}
            position={positions[index % positions.length]}
            onClick={() => navigate(`/ville/${ville.id}`)}
          />
        </motion.div>
      ))}

      {/* 🎉 Enhanced welcome message with premium styling */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.5
        }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative px-10 py-4 rounded-3xl
                     bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
                     border-4 border-white/60 shadow-2xl overflow-hidden"
        >
          {/* Animated background shimmer */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/20
                       bg-[length:200%_200%]"
          />

          {/* Text content */}
          <div className="relative z-10 flex items-center gap-3">
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl filter drop-shadow-lg"
            >
              🌴
            </motion.span>
            
            <p className="font-bold text-2xl text-white drop-shadow-lg">
              Bienvenue sur{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400
                             drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Education Island
              </span>
              {" "}!
            </p>

            <motion.span
              animate={{ rotate: [0, -20, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl filter drop-shadow-lg"
            >
              🏝️
            </motion.span>
          </div>

          {/* Floating sparkles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute text-yellow-300 text-sm"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 25}%`,
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* 🌈 Decorative rainbow arc */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-20 right-10 w-40 h-20 z-5"
        style={{
          background: 'linear-gradient(to right, #FF6B9D, #FFD93D, #C4FF61, #00D4FF, #A855F7)',
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
          opacity: 0.5,
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
}
