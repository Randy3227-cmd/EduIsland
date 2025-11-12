import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";

function Ville() {
  const { id } = useParams();
  const [ville, setVille] = useState(null);

  useEffect(() => {
    const fetchVille = async () => {
      const { data, error } = await supabase.from("villes").select("*").eq("id", id).single();
      if (!error) setVille(data);
    };
    fetchVille();
  }, [id]);

  if (!ville) return <p>Chargement...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-sky-700">{ville.name}</h1>
      <p className="mt-2 text-gray-600">XP requise : {ville.xp_required}</p>
    </div>
  );
}
export default Ville;
