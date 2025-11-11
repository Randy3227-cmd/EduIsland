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
    { top: "40%", left: "35%" },
    { top: "55%", left: "45%" },
    { top: "35%", left: "70%" },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-sky-300 to-blue-300 overflow-hidden">
      {/* Fond avec des éléments enfantins */}
      <div className="absolute inset-0 w-full h-full">
        {/* Océan */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-500">
          {/* Vagues décoratives */}
          <div className="absolute bottom-0 w-full h-8 bg-blue-500 rounded-t-full"></div>
          <div className="absolute bottom-4 w-full h-6 bg-blue-400 rounded-t-full opacity-70"></div>
        </div>
        
        {/* Île principale - forme libre et organique */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-3/5">
          {/* Forme principale de l'île */}
          <div className="relative w-full h-full">
            {/* Corps principal de l'île */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-green-400 rounded-[60%_40%_70%_30%_/_50%_60%_40%_50%] shadow-lg border-4 border-yellow-200"></div>
            
            {/* Presqu'île / péninsule */}
            <div className="absolute bottom-5 -right-5 w-1/4 h-1/3 bg-gradient-to-r from-green-400 to-emerald-300 rounded-[70%_30%_60%_40%_/_60%_50%_50%_40%] border-4 border-yellow-200 border-l-0"></div>
            
            {/* Baie */}
            <div className="absolute bottom-10 left-5 w-1/5 h-1/4 bg-blue-400 rounded-[40%_60%_30%_70%_/_60%_40%_60%_40%]"></div>
          </div>

          {/* Détails de l'île */}
          {/* Lac au centre */}
          <div className="absolute top-1/3 left-1/3 w-16 h-12 bg-blue-300 rounded-[50%_40%_60%_50%_/_60%_50%_50%_40%] shadow-inner"></div>
          
          {/* Collines */}
          <div className="absolute top-1/4 right-1/4 w-20 h-16 bg-green-500 rounded-[60%_40%_50%_50%_/_50%_60%_40%_50%] shadow-md"></div>
          {/* <div className="absolute top-2/3 left-1/5 w-14 h-12 bg-green-400 rounded-[40%_60%_50%_50%_/_50%_50%_50%_50%] shadow-md"></div> */}
          
          {/* Plages de sable */}
          <div className="absolute bottom-5 left-1/4 w-1/4 h-8 bg-yellow-200 rounded-[50%_50%_40%_60%_/_60%_70%_30%_40%]"></div>
          <div className="absolute bottom-8 right-1/3 w-1/5 h-6 bg-yellow-200 rounded-[60%_40%_50%_50%_/_50%_60%_40%_50%]"></div>
          
          {/* Rochers */}
        </div>
        
               <div className="absolute top-20 left-32 text-white text-xl animate-float">↗</div>
        <div className="absolute top-24 left-28 text-white text-xl animate-float delay-300">↗</div>
        <div className="absolute top-16 right-40 text-white text-xl animate-float delay-700">↗</div>
        
        {/* Soleil */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg">
          <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full"></div>
          {/* Rayons de soleil */}
          <div className="absolute -inset-4 bg-yellow-200/20 rounded-full animate-pulse"></div>
        </div>
              
              {/* zavatra tsis dikany */}
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-red-400 rounded-full animate-pulse shadow-md">
          <div className="absolute inset-1 bg-red-300 rounded-full"></div>
        </div>
        <div className="absolute top-2/3 left-1/4 w-10 h-10 bg-purple-400 rounded-full animate-bounce shadow-md delay-1000">
          <div className="absolute inset-1 bg-purple-300 rounded-full"></div>
        </div>
        
        {/* Nuages */}
        <div className="absolute top-10 left-20 w-16 h-8 bg-white rounded-full opacity-80 animate-float">
          <div className="absolute -left-2 top-1 w-6 h-6 bg-white rounded-full"></div>
          <div className="absolute -right-2 top-1 w-6 h-6 bg-white rounded-full"></div>
        </div>
        <div className="absolute top-20 right-32 w-20 h-10 bg-white rounded-full opacity-80 animate-float delay-1000">
          <div className="absolute -left-3 top-2 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute -right-3 top-2 w-8 h-8 bg-white rounded-full"></div>
        </div>
        <div className="absolute top-5 right-80 w-20 h-10 bg-white rounded-full opacity-80 animate-float delay-1000">
          <div className="absolute -left-3 top-2 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute -right-3 top-2 w-8 h-8 bg-white rounded-full"></div>
        </div>
      </div>

        
      {villes.map((ville, index) => (
        <CityMarker
          key={ville.id}
          name={ville.name}
          xp={ville.xp_required}
          position={positions[index % positions.length]}
          onClick={() => alert(`Tu entres dans ${ville.name} !`)}
        />
      ))}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-lg font-semibold bg-black/30 px-6 py-2 rounded-xl z-10">
        🌴 Bienvenue sur l'île du savoir !
      </div>
    </div>
  );
}