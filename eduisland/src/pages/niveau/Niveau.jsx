import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";

// Import des composants (tu ne m'as pas demandé de les créer)
import QCM from "../../components/QCMNiveau";
// import Carte from "../../components/Carte";
import Texte from "../../components/TexteACompleter";
import NiveauComplete from "../../components/NiveauComplete";

export default function Niveau({ userId }) {
  const { id } = useParams(); // niveauId
  const [niveau, setNiveau] = useState(null);
  const [showCompletion, setShowCompletion] = useState(false);
  const [completionData, setCompletionData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNiveau = async () => {
      const { data, error } = await supabase
        .from("niveaux")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        // Traduire type_id en string
        const typeMap = { 1: "QCM", 2: "carte", 3: "texte" };
        data.type = typeMap[data.type_id] || "inconnu";

        setNiveau(data);
      } else if (error) {
        console.error("Erreur fetchNiveau:", error);
      }
    };

    fetchNiveau();
  }, [id]);

  const handleNiveauComplete = async (score, maxScore, xpEarned) => {
    console.log('Niveau terminé!', { score, maxScore, xpEarned, userId });
    setCompletionData({ score, maxScore, xpEarned });
    setShowCompletion(true);
  };

  const handleRetry = () => {
    setShowCompletion(false);
    setCompletionData(null);
    window.location.reload();
  };

  const handleNext = async () => {
    const { data: nextNiveau } = await supabase
      .from("niveaux")
      .select("id")
      .eq("matiere_id", niveau.matiere_id)
      .eq("level_number", niveau.level_number + 1)
      .single();

    if (nextNiveau) {
      navigate(`/niveau/${nextNiveau.id}`);
      setShowCompletion(false);
      setCompletionData(null);
    } else {
      handleReturnToMatiere();
    }
  };

  const handleReturnToMatiere = () => {
    if (niveau?.matiere_id) {
      navigate(`/matiere/${niveau.matiere_id}`);
    } else {
      navigate(-1);
    }
  };

  if (!niveau) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-emerald-50">
        <p className="text-emerald-700 text-lg">Chargement du niveau...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-100 to-sky-100 flex flex-col items-center p-8 font-[Poppins]">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Niveau {niveau.level_number} — {niveau.type}
      </h1>

      {/* Appel des composants selon le type */}
      {niveau.type === "QCM" && (
        <QCM 
          niveauId={niveau.id} 
          userId={userId} 
          onComplete={handleNiveauComplete}
        />
      )}
      {/* {niveau.type === "carte" && <Carte niveauId={niveau.id} userId={userId} />} */}
      {niveau.type === "texte" && (
        <Texte 
          niveauId={niveau.id} 
          userId={userId} 
          onComplete={handleNiveauComplete}
        />
      )}

      {!showCompletion && (
        <button
          onClick={() => navigate(-1)}
          className="mt-10 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-emerald-700 transition-all"
        >
          ⬅️ Retour
        </button>
      )}

      {/* Modal de complétion */}
      {showCompletion && completionData && (
        <NiveauComplete
          score={completionData.score}
          maxScore={completionData.maxScore}
          xpEarned={completionData.xpEarned}
          niveauNumber={niveau.level_number}
          onRetry={handleRetry}
          onNext={handleNext}
          onReturnToMatiere={handleReturnToMatiere}
        />
      )}
    </div>
  );
}
