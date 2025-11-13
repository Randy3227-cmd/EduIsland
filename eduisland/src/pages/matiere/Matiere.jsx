import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import NiveauCard from "../../components/NiveauCard";

export default function Matiere() {
  const { id } = useParams();
  const [niveaux, setNiveaux] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNiveaux = async () => {
      const { data, error } = await supabase
        .from("niveaux")
        .select("*")
        .eq("matiere_id", id)
        .order("level_number", { ascending: true });
      if (!error) setNiveaux(data);
    };
    fetchNiveaux();
  }, [id]);

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
