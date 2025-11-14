import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
        
        // Récupérer les scores de l'utilisateur pour ces niveaux
        if (userId && niveauxData.length > 0) {
          const niveauIds = niveauxData.map(n => n.id);
          const { data: scoresData, error: scoresError } = await supabase
            .from("scores")
            .select("niveau_id, score, max_score")
            .eq("user_id", userId)
            .in("niveau_id", niveauIds);
          
          if (!scoresError && scoresData) {
            // Créer un objet avec les meilleurs scores par niveau
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-100 via-green-100 to-emerald-200 p-10 font-[Poppins]">
      <h1 className="text-4xl font-bold text-emerald-700 mb-10 drop-shadow-md">
        🎓 Choisis ton niveau
      </h1>

      {/* Liste verticale des niveaux */}
      <div className="flex flex-col items-center gap-10 relative">
        {niveaux.map((niveau, index) => (
          <NiveauCard
            key={niveau.id}
            niveau={niveau}
            index={index}
            total={niveaux.length}
            onClick={handleSelect}
            userScore={userScores[niveau.id]}
          />
        ))}
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-12 z-10 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-emerald-700 transition-all"
      >
        ⬅️ Retour à l'île
      </button>
    </div>
  );
}
