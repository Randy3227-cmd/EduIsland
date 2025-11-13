import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";

// Import des composants (tu ne m'as pas demandé de les créer)
import QCM from "../../components/QCM";
import Carte from "../../components/Carte";
import Texte from "../../components/Texte";

export default function Niveau({ userId }) {
  const { id } = useParams(); // niveauId
  const [niveau, setNiveau] = useState(null);
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
      {niveau.type === "QCM" && <QCM niveauId={niveau.id} userId={userId} />}
      {niveau.type === "carte" && <Carte niveauId={niveau.id} userId={userId} />}
      {niveau.type === "texte" && <Texte niveauId={niveau.id} userId={userId} />}

      <button
        onClick={() => navigate(-1)}
        className="mt-10 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-emerald-700 transition-all"
      >
        ⬅️ Retour
      </button>
    </div>
  );
}
