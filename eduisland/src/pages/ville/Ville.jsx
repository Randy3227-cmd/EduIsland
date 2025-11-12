import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import UserProfile from "../../components/UserProfil";
import House from "../../components/House";
import Sun from "../../components/Sun";
import Clouds from "../../components/Clouds";

export default function Ville() {
  const { id } = useParams();
  const [ville, setVille] = useState(null);
  const [matieres, setMatieres] = useState([]);
  const navigate = useNavigate();

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

  if (!ville) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Chargement de la ville...
      </div>
    );
  }

  const positions = [
    { bottom: "25%", left: "15%" },
    { bottom: "25%", left: "35%" },
    { bottom: "25%", left: "55%" },
    { bottom: "25%", left: "70%" },
    { bottom: "25%", left: "85%" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-100 via-green-100 to-emerald-200 flex flex-col items-center p-10 font-[Poppins]">
      <UserProfile userId={"a1e6874a-bebe-46d6-949c-c0ce5df3b9ae"} />
      <Sun />

      <Clouds />
      <h1 className="text-4xl font-bold text-emerald-700 mb-6 drop-shadow-md z-10">
        🌆 {ville.name}
      </h1>

      <p className="text-lg text-gray-700 mb-8 z-10">
        Niveau requis : <span className="font-semibold">{ville.xp_required} XP</span>
      </p>

      {/* 🌳 Arrière-plan (ville) */}
      <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-green-600 to-green-300 rounded-t-[100px] shadow-inner"></div>

      {/* 🏠 Affichage des maisons */}
      {matieres.map((matiere, index) => (
        <House
          key={matiere.id}
          matiere={matiere}
          position={positions[index % positions.length]}
          onClick={() => navigate(`/matiere/${matiere.id}`)}
        />
      ))}

      <button
        onClick={() => navigate("/")}
        className="mt-12 z-10 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-emerald-700 transition-all"
      >
        ⬅️ Retour à l'île
      </button>
    </div>
  );
}
