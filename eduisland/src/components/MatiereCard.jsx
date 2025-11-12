import React from "react";

export default function MatiereCard({ matiere, onClick }) {
  return (
    <div
      onClick={() => onClick?.(matiere)}
      className="bg-white/80 backdrop-blur-md border border-emerald-200 rounded-2xl shadow-lg p-6 
                 hover:scale-105 hover:shadow-emerald-300 transition-all cursor-pointer"
    >
      <h2 className="text-2xl text-emerald-700 font-semibold mb-2">
        📘 {matiere.name}
      </h2>
      <p className="text-sm text-gray-600">
        Clique pour commencer la matière !
      </p>
    </div>
  );
}
