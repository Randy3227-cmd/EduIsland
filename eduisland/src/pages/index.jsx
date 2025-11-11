// src/components/IslandMap.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import CityMarker from "../components/CityMarker";

export default function IslandMap() {
  const [villes, setVilles] = useState([]);

  useEffect(() => {
    const fetchVilles = async () => {
      const { data, error } = await supabase.from("villes").select("*");
      if (error) console.error(error);
      else setVilles(data);
    };
    fetchVilles();
  }, []);

  // positions fictives (tu pourras plus tard les stocker en base)
  const positions = [
    { top: "30%", left: "20%" },
    { top: "60%", left: "50%" },
    { top: "40%", left: "75%" },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-sky-300 to-emerald-600 overflow-hidden">
      <img
        src="/images/island-bg.png"
        alt="Grande Île"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {villes.map((ville, index) => (
        <CityMarker
          key={ville.id}
          name={ville.name}
          xp={ville.xp_required}
          position={positions[index % positions.length]}
          onClick={() => alert(`Tu entres dans ${ville.name} !`)}
        />
      ))}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-lg font-semibold bg-black/30 px-6 py-2 rounded-xl">
        🌴 Bienvenue sur l’île du savoir !
      </div>
    </div>
  );
}
